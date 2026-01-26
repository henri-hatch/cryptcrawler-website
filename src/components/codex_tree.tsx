import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useManeuverModal } from './maneuver_modal';
import maneuverData from '../data/maneuver_data';
import masteryData from '../data/mastery_data';
import originData from '../data/origin_data';
import './codex_tree.css';

export type EdgeType = 'straight' | 'curved';
export type CurveSide = 'left' | 'right' | 'auto';
export type CurvePreset = 'C' | 'S' | 'HOOK' | 'ARC' | 'ZIG';

export interface ControlPoint {
  t: number;
  n: number;
}

export interface NodeCard {
  label?: string;
  maneuverId?: string;
  iconPath?: string;
}

export interface NodeDef {
  id: string;
  gx: number;
  gy: number;
  card: NodeCard;
}

export interface CurveDef {
  side?: CurveSide;
  strength?: number;
  seed?: string;
  preset?: CurvePreset;
  points?: ControlPoint[];
}

export interface EdgeDef {
  from: string;
  to: string;
  type: EdgeType;
  curve?: CurveDef;
}

export interface SkillTreeConfig {
  gridSize: number;
  useAdjacency?: boolean;
  defaultEdgeType?: EdgeType;
  defaultCurve?: CurveDef;
  backgroundImage?: string;
}

export interface SkillTreeDefinition {
  gridSize: number;
  nodes: NodeDef[];
  edges: EdgeDef[];
  backgroundImage?: string;
}

interface EdgeDetails {
  type?: EdgeType;
  curve?: CurveDef;
  style?: CurvePreset;
}

export interface SkillTree {
  createNode: (id: string, gx: number, gy: number, card: NodeCard) => SkillTree;
  connect: (from: string, to: string, details?: EdgeDetails) => SkillTree;
  build: () => SkillTreeDefinition;
}

interface CodexTreeProps {
  tree: SkillTreeDefinition | SkillTree;
}

const DEFAULT_CURVE: CurveDef = { side: 'auto', strength: 0.4 };
const DEFAULT_CURVE_PRESET: CurvePreset = 'C';
const MAX_CURVE_STRENGTH = 2;
const MAX_CURVE_OFFSET = 0.85;

type Vec2 = { x: number; y: number };
type BezierSegment = { c1: Vec2; c2: Vec2; end: Vec2 };
type NormalizedPoint = { t: number; n: number };
type NormalizedSegment = { c1: NormalizedPoint; c2: NormalizedPoint; end: NormalizedPoint };
type ResponsiveVars = { node: number; gap: number; stage?: number };

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const hashString = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
};

const resolveCurveSide = (side: CurveSide, seed: string) => {
  if (side !== 'auto') {
    return side;
  }
  return hashString(seed) % 2 === 0 ? 'left' : 'right';
};

const PRESET_REGISTRY: Record<CurvePreset, NormalizedSegment[]> = {
  C: [
    {
      c1: { t: 0.25, n: 0.35 },
      c2: { t: 0.75, n: 0.35 },
      end: { t: 1, n: 0 },
    },
  ],
  S: [
    {
      c1: { t: 0.2, n: 0.35 },
      c2: { t: 0.45, n: 0.35 },
      end: { t: 0.5, n: 0 },
    },
    {
      c1: { t: 0.55, n: -0.35 },
      c2: { t: 0.8, n: -0.35 },
      end: { t: 1, n: 0 },
    },
  ],
  HOOK: [
    {
      c1: { t: 0.2, n: 0.2 },
      c2: { t: 0.5, n: 0.25 },
      end: { t: 0.65, n: 0.25 },
    },
    {
      c1: { t: 0.72, n: 0.35 },
      c2: { t: 0.9, n: 0.5 },
      end: { t: 1, n: 0 },
    },
  ],
  ARC: [
    {
      c1: { t: 0.15, n: 0.55 },
      c2: { t: 0.85, n: 0.55 },
      end: { t: 1, n: 0 },
    },
  ],
  ZIG: [
    {
      c1: { t: 0.12, n: 0.3 },
      c2: { t: 0.25, n: 0.3 },
      end: { t: 0.33, n: 0.2 },
    },
    {
      c1: { t: 0.4, n: -0.3 },
      c2: { t: 0.55, n: -0.3 },
      end: { t: 0.66, n: -0.2 },
    },
    {
      c1: { t: 0.78, n: -0.2 },
      c2: { t: 0.9, n: -0.1 },
      end: { t: 1, n: 0 },
    },
  ],
};

const resolveSide = (curve: CurveDef, fromId: string, toId: string) => {
  const side = curve.side ?? DEFAULT_CURVE.side ?? 'auto';
  const seed = curve.seed ?? `${fromId}|${toId}`;
  return resolveCurveSide(side, seed);
};

const basis = (a: Vec2, b: Vec2) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.hypot(dx, dy);
  if (dist === 0) {
    return { u: { x: 1, y: 0 }, p: { x: 0, y: 1 }, dist: 0 };
  }
  const ux = dx / dist;
  const uy = dy / dist;
  return { u: { x: ux, y: uy }, p: { x: -uy, y: ux }, dist };
};

const pointOnEdge = (a: Vec2, u: Vec2, dist: number, t: number) => ({
  x: a.x + u.x * dist * t,
  y: a.y + u.y * dist * t,
});

const offsetPoint = (point: Vec2, perp: Vec2, dist: number, n: number, sideSign: number) => ({
  x: point.x + perp.x * dist * n * sideSign,
  y: point.y + perp.y * dist * n * sideSign,
});

const clampOffset = (value: number) => clamp(value, -MAX_CURVE_OFFSET, MAX_CURVE_OFFSET);

const normalizeControlPoints = (points: ControlPoint[]) =>
  points
    .filter((point) => Number.isFinite(point.t) && Number.isFinite(point.n))
    .map((point) => ({
      t: clamp(point.t, 0, 1),
      n: clampOffset(point.n),
    }))
    .sort((a, b) => a.t - b.t);

const catmullRomToBezier = (points: Vec2[]): BezierSegment[] => {
  if (points.length < 2) {
    return [];
  }
  const segments: BezierSegment[] = [];
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? points[i + 1];
    const c1 = {
      x: p1.x + (p2.x - p0.x) / 6,
      y: p1.y + (p2.y - p0.y) / 6,
    };
    const c2 = {
      x: p2.x - (p3.x - p1.x) / 6,
      y: p2.y - (p3.y - p1.y) / 6,
    };
    segments.push({ c1, c2, end: p2 });
  }
  return segments;
};

const buildEdgeKey = (a: string, b: string) => (a < b ? `${a}|${b}` : `${b}|${a}`);

class SkillTreeBuilder implements SkillTree {
  private config: Required<SkillTreeConfig>;
  private nodes: NodeDef[] = [];
  private manualEdges: EdgeDef[] = [];
  private backgroundImage?: string;

  constructor(config: SkillTreeConfig) {
    const gridSize = Math.max(1, Math.floor(config.gridSize));
    this.config = {
      gridSize,
      useAdjacency: config.useAdjacency ?? true,
      defaultEdgeType: config.defaultEdgeType ?? 'straight',
      defaultCurve: config.defaultCurve ?? DEFAULT_CURVE,
      backgroundImage: config.backgroundImage ?? '',
    };
    this.backgroundImage = config.backgroundImage;
  }

  createNode(id: string, gx: number, gy: number, card: NodeCard): this {
    if (gx < 1 || gy < 1 || gx > this.config.gridSize || gy > this.config.gridSize) {
      console.warn(`CodexTree: node "${id}" is out of bounds (${gx}, ${gy}).`);
      return this;
    }

    const nextNode: NodeDef = { id, gx, gy, card };
    const existingIndex = this.nodes.findIndex((node) => node.id === id);
    if (existingIndex >= 0) {
      this.nodes[existingIndex] = nextNode;
    } else {
      this.nodes.push(nextNode);
    }

    return this;
  }

  connect(from: string, to: string, details?: EdgeDetails): this {
    if (!this.nodes.some((node) => node.id === from) || !this.nodes.some((node) => node.id === to)) {
      console.warn(`CodexTree: manual edge "${from}" -> "${to}" references a missing node.`);
    }
    const edge = this.normalizeEdge(from, to, details);
    this.manualEdges.push(edge);
    return this;
  }

  build(): SkillTreeDefinition {
    const nodeMap = new Map<string, NodeDef>();
    const positionMap = new Map<string, string>();

    this.nodes.forEach((node) => {
      nodeMap.set(node.id, node);
      const positionKey = `${node.gx},${node.gy}`;
      const existingId = positionMap.get(positionKey);
      if (existingId) {
        console.warn(`CodexTree: nodes "${existingId}" and "${node.id}" share grid cell (${positionKey}).`);
      } else {
        positionMap.set(positionKey, node.id);
      }
    });

    const edgeMap = new Map<string, EdgeDef>();

    if (this.config.useAdjacency) {
      nodeMap.forEach((node) => {
        const rightId = positionMap.get(`${node.gx + 1},${node.gy}`);
        if (rightId) {
          const edge = this.normalizeEdge(node.id, rightId);
          edgeMap.set(buildEdgeKey(edge.from, edge.to), edge);
        }

        const downId = positionMap.get(`${node.gx},${node.gy + 1}`);
        if (downId) {
          const edge = this.normalizeEdge(node.id, downId);
          edgeMap.set(buildEdgeKey(edge.from, edge.to), edge);
        }
      });
    }

    this.manualEdges.forEach((edge) => {
      const fromExists = nodeMap.has(edge.from);
      const toExists = nodeMap.has(edge.to);
      if (!fromExists || !toExists) {
        console.warn(`CodexTree: manual edge "${edge.from}" -> "${edge.to}" references a missing node.`);
        return;
      }
      edgeMap.set(buildEdgeKey(edge.from, edge.to), edge);
    });

    return {
      gridSize: this.config.gridSize,
      nodes: Array.from(nodeMap.values()),
      edges: Array.from(edgeMap.values()),
      backgroundImage: this.backgroundImage,
    };
  }

  private normalizeEdge(from: string, to: string, details?: EdgeDetails): EdgeDef {
    const type = details?.type ?? this.config.defaultEdgeType ?? 'straight';
    if (type === 'curved') {
      const hasExplicitPreset = details?.curve?.preset !== undefined;
      let curve: CurveDef = { ...this.config.defaultCurve };
      if (details?.curve) {
        curve = { ...curve, ...details.curve };
      }
      if (details?.style && !hasExplicitPreset) {
        curve.preset = details.style;
      }
      if (curve.preset === undefined) {
        curve.preset = DEFAULT_CURVE_PRESET;
      }
      curve.side = curve.side ?? DEFAULT_CURVE.side;
      curve.strength = clamp(
        curve.strength ?? DEFAULT_CURVE.strength ?? 0,
        0,
        MAX_CURVE_STRENGTH,
      );
      return { from, to, type, curve };
    }

    return { from, to, type };
  }
}

export const defineSkillTree = (config: SkillTreeConfig): SkillTree => new SkillTreeBuilder(config);

const resolveTree = (tree: SkillTreeDefinition | SkillTree): SkillTreeDefinition => {
  if (typeof (tree as SkillTree).build === 'function') {
    return (tree as SkillTree).build();
  }
  return tree as SkillTreeDefinition;
};

const buildBezierSegments = (start: Vec2, end: Vec2, edge: EdgeDef): BezierSegment[] => {
  const curve: CurveDef = { ...DEFAULT_CURVE, ...(edge.curve ?? {}) };
  const strength = clamp(
    curve.strength ?? DEFAULT_CURVE.strength ?? 0,
    0,
    MAX_CURVE_STRENGTH,
  );
  const side = resolveSide(curve, edge.from, edge.to);
  const sideSign = side === 'left' ? 1 : -1;
  const { u, p, dist } = basis(start, end);
  if (dist === 0) {
    return [];
  }

  const toPoint = (point: NormalizedPoint): Vec2 => {
    const t = clamp(point.t, 0, 1);
    const n = clampOffset(point.n);
    const scaledN = clampOffset(n * strength);
    const base = pointOnEdge(start, u, dist, t);
    return offsetPoint(base, p, dist, scaledN, sideSign);
  };

  if (curve.points?.length) {
    const normalizedPoints = normalizeControlPoints(curve.points);
    if (normalizedPoints.length > 0) {
      const anchors = [start, ...normalizedPoints.map((point) => toPoint(point)), end];
      return catmullRomToBezier(anchors);
    }
  }

  const preset = curve.preset ?? DEFAULT_CURVE_PRESET;
  const presetSegments = PRESET_REGISTRY[preset] ?? PRESET_REGISTRY[DEFAULT_CURVE_PRESET];
  return presetSegments.map((segment) => ({
    c1: toPoint(segment.c1),
    c2: toPoint(segment.c2),
    end: toPoint(segment.end),
  }));
};

const CodexTree: React.FC<CodexTreeProps> = ({ tree }) => {
  const { openModal } = useManeuverModal();
  const treeRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [paths, setPaths] = useState<Array<{ key: string; d: string }>>([]);
  const [backgroundSrc, setBackgroundSrc] = useState<string>('');
  const [responsiveVars, setResponsiveVars] = useState<ResponsiveVars | null>(null);

  const resolvedTree = useMemo(() => resolveTree(tree), [tree]);
  const { gridSize, nodes, edges, backgroundImage } = resolvedTree;

  useEffect(() => {
    if (!backgroundImage) {
      setBackgroundSrc('');
      return;
    }
    setBackgroundSrc(`/codex-images/tree-background/${backgroundImage}`);
  }, [backgroundImage]);

  const hasModalTarget = useCallback((id?: string) => {
    if (!id) {
      return false;
    }
    return (
      maneuverData.some((maneuver) => maneuver.id === id)
      || masteryData.some((masteryItem) => masteryItem.id === id)
      || originData.some((origin) => origin.id === id)
    );
  }, []);

  const handleNodeClick = (id?: string) => {
    if (hasModalTarget(id)) {
      openModal(id as string);
    }
  };

  const computeMobileVars = useCallback(() => {
    if (!treeRef.current || !viewportRef.current) {
      return;
    }

    const treeStyle = window.getComputedStyle(treeRef.current);
    const baseNode = parseFloat(treeStyle.getPropertyValue('--node-size'));
    const baseGap = parseFloat(treeStyle.getPropertyValue('--grid-gap'));
    const minNode = parseFloat(treeStyle.getPropertyValue('--node-size-min')) || baseNode;
    const minGap = parseFloat(treeStyle.getPropertyValue('--grid-gap-min')) || baseGap;

    if (!Number.isFinite(baseNode) || !Number.isFinite(baseGap)) {
      return;
    }

    const viewportStyle = window.getComputedStyle(viewportRef.current);
    const hasMaxHeight = viewportStyle.maxHeight !== 'none';
    const viewportRect = viewportRef.current.getBoundingClientRect();
    const width = viewportRect.width;
    if (!width) {
      return;
    }

    const clientHeight = viewportRef.current.clientHeight;
    const stageSize =
      hasMaxHeight && clientHeight > 0 && clientHeight < width ? clientHeight : undefined;

    const padFactor = 0.96;
    const availablePx = (stageSize ?? width) * padFactor;
    const required = gridSize * (baseNode + baseGap);

    let gap = baseGap;
    let node = baseNode;

    if (required > availablePx) {
      const gapNeeded = availablePx / gridSize - baseNode;
      if (gapNeeded >= minGap) {
        gap = clamp(gapNeeded, minGap, baseGap);
      } else {
        gap = minGap;
        const nodeNeeded = availablePx / gridSize - gap;
        node = clamp(nodeNeeded, minNode, baseNode);
      }
    }

    const next = {
      node: Math.round(node * 100) / 100,
      gap: Math.round(gap * 100) / 100,
      stage: stageSize ? Math.round(stageSize * 100) / 100 : undefined,
    };

    setResponsiveVars((prev) => {
      if (prev && prev.node === next.node && prev.gap === next.gap && prev.stage === next.stage) {
        return prev;
      }
      return next;
    });
  }, [gridSize]);

  const stageStyle = useMemo(() => {
    const style = { '--grid-size': gridSize } as React.CSSProperties & Record<string, string | number>;
    if (responsiveVars) {
      style['--node-size'] = `${responsiveVars.node}px`;
      style['--grid-gap'] = `${responsiveVars.gap}px`;
      if (responsiveVars.stage !== undefined) {
        style['--stage-size'] = `${responsiveVars.stage}px`;
      }
    }
    return style;
  }, [gridSize, responsiveVars]);

  const computePaths = useCallback(() => {
    if (!stageRef.current) {
      return;
    }

    const stageRect = stageRef.current.getBoundingClientRect();
    const nodeCenters = new Map<string, { x: number; y: number; radius: number }>();

    nodes.forEach((node) => {
      const element = nodeRefs.current[node.id];
      if (!element) {
        return;
      }
      const rect = element.getBoundingClientRect();
      nodeCenters.set(node.id, {
        x: rect.left - stageRect.left + rect.width / 2,
        y: rect.top - stageRect.top + rect.height / 2,
        radius: Math.min(rect.width, rect.height) / 2,
      });
    });

    const nextPaths: Array<{ key: string; d: string }> = [];
    edges.forEach((edge) => {
      const from = nodeCenters.get(edge.from);
      const to = nodeCenters.get(edge.to);
      if (!from || !to) {
        return;
      }
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const dist = Math.hypot(dx, dy);
      if (dist === 0) {
        return;
      }

      const ux = dx / dist;
      const uy = dy / dist;
      const start = { x: from.x + ux * from.radius, y: from.y + uy * from.radius };
      const end = { x: to.x - ux * to.radius, y: to.y - uy * to.radius };

      const trimDist = Math.hypot(end.x - start.x, end.y - start.y);
      if (trimDist === 0) {
        return;
      }

      if (edge.type === 'curved') {
        const segments = buildBezierSegments(start, end, edge);
        if (segments.length === 0) {
          nextPaths.push({
            key: buildEdgeKey(edge.from, edge.to),
            d: `M ${start.x} ${start.y} L ${end.x} ${end.y}`,
          });
          return;
        }
        const d = segments.reduce((path, segment, index) => {
          const command = `C ${segment.c1.x} ${segment.c1.y}, ${segment.c2.x} ${segment.c2.y}, ${segment.end.x} ${segment.end.y}`;
          if (index === 0) {
            return `M ${start.x} ${start.y} ${command}`;
          }
          return `${path} ${command}`;
        }, '');
        nextPaths.push({
          key: buildEdgeKey(edge.from, edge.to),
          d,
        });
      } else {
        nextPaths.push({
          key: buildEdgeKey(edge.from, edge.to),
          d: `M ${start.x} ${start.y} L ${end.x} ${end.y}`,
        });
      }
    });

    setPaths(nextPaths);
  }, [edges, nodes]);

  useLayoutEffect(() => {
    computePaths();
  }, [computePaths, edges, nodes, responsiveVars]);

  useEffect(() => {
    if (!stageRef.current) {
      return;
    }

    const handleResize = () => computePaths();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(stageRef.current);
    window.addEventListener('resize', handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [computePaths]);

  useLayoutEffect(() => {
    computeMobileVars();
  }, [computeMobileVars]);

  useEffect(() => {
    if (!viewportRef.current) {
      return;
    }

    const handleResize = () => computeMobileVars();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(viewportRef.current);
    window.addEventListener('resize', handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [computeMobileVars]);

  return (
    <div className="codex-tree" ref={treeRef}>
      <div className="codex-tree-viewport" ref={viewportRef}>
        <div className="codex-tree-stage" ref={stageRef} style={stageStyle}>
          {backgroundSrc ? (
            <img
              className="codex-tree-background"
              src={backgroundSrc}
              alt=""
              aria-hidden="true"
              onError={() => {
                if (backgroundImage && backgroundSrc.includes('/tree-background/')) {
                  setBackgroundSrc(`/codex-images/tree-backgrounds/${backgroundImage}`);
                }
              }}
            />
          ) : null}
          <svg className="codex-tree-lines" aria-hidden="true">
            {paths.map((path) => (
              <path key={path.key} d={path.d} />
            ))}
          </svg>

          <div className="codex-tree-grid">
            {nodes.map((node) => {
              const nodeClickable = hasModalTarget(node.card.maneuverId);
              const isMasteryNode = node.id === 'mastery';
              return (
                <button
                  key={node.id}
                  type="button"
                  className={`codex-node ${nodeClickable ? 'is-clickable' : 'is-placeholder'}${isMasteryNode ? ' is-mastery' : ''}`}
                  onClick={() => handleNodeClick(node.card.maneuverId)}
                  ref={(element) => {
                    nodeRefs.current[node.id] = element;
                  }}
                  disabled={!nodeClickable}
                  style={{ gridColumn: `${node.gx}`, gridRow: `${node.gy}` }}
                >
                  {node.card.iconPath ? (
                    <img
                      src={node.card.iconPath}
                      alt={node.card.label || 'Codex node'}
                      className="codex-node-icon"
                    />
                  ) : null}
                  {node.card.label ? <span className="codex-node-label">{node.card.label}</span> : null}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodexTree;
