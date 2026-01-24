import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useManeuverModal } from './maneuver_modal';
import maneuverData from '../data/maneuver_data';
import masteryData from '../data/mastery_data';
import originData from '../data/origin_data';
import './codex_tree.css';

export type EdgeType = 'straight' | 'curved';
export type CurveSide = 'left' | 'right' | 'auto';

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
  side: CurveSide;
  strength: number;
  seed?: string;
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
}

export interface SkillTreeDefinition {
  gridSize: number;
  nodes: NodeDef[];
  edges: EdgeDef[];
}

interface EdgeDetails {
  type?: EdgeType;
  curve?: CurveDef;
  side?: CurveSide;
  strength?: number;
  seed?: string;
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

const buildEdgeKey = (a: string, b: string) => (a < b ? `${a}|${b}` : `${b}|${a}`);

class SkillTreeBuilder implements SkillTree {
  private config: Required<SkillTreeConfig>;
  private nodes: NodeDef[] = [];
  private manualEdges: EdgeDef[] = [];

  constructor(config: SkillTreeConfig) {
    const gridSize = Math.max(1, Math.floor(config.gridSize));
    this.config = {
      gridSize,
      useAdjacency: config.useAdjacency ?? true,
      defaultEdgeType: config.defaultEdgeType ?? 'straight',
      defaultCurve: config.defaultCurve ?? DEFAULT_CURVE,
    };
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
    };
  }

  private normalizeEdge(from: string, to: string, details?: EdgeDetails): EdgeDef {
    const type = details?.type ?? this.config.defaultEdgeType ?? 'straight';
    if (type === 'curved') {
      let curve: CurveDef = { ...this.config.defaultCurve };
      if (details?.curve) {
        curve = { ...curve, ...details.curve };
      }
      if (details?.side) {
        curve.side = details.side;
      }
      if (details?.strength !== undefined) {
        curve.strength = details.strength;
      }
      if (details?.seed !== undefined) {
        curve.seed = details.seed;
      }
      return { from, to, type, curve: { ...curve, strength: clamp(curve.strength, 0, 1) } };
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

const CodexTree: React.FC<CodexTreeProps> = ({ tree }) => {
  const { openModal } = useManeuverModal();
  const stageRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [paths, setPaths] = useState<Array<{ key: string; d: string }>>([]);

  const resolvedTree = useMemo(() => resolveTree(tree), [tree]);
  const { gridSize, nodes, edges } = resolvedTree;

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

      const trimDx = end.x - start.x;
      const trimDy = end.y - start.y;
      const trimDist = Math.hypot(trimDx, trimDy);
      if (trimDist === 0) {
        return;
      }

      if (edge.type === 'curved') {
        const curve = edge.curve ?? DEFAULT_CURVE;
        const strength = clamp(curve.strength, 0, 1);
        const side = resolveCurveSide(curve.side, curve.seed ?? `${edge.from}|${edge.to}`);
        const uxTrim = trimDx / trimDist;
        const uyTrim = trimDy / trimDist;
        let px = -uyTrim;
        let py = uxTrim;
        if (side === 'right') {
          px *= -1;
          py *= -1;
        }
        const k = strength * trimDist * 0.35;
        const c1 = { x: start.x + trimDx * 0.25 + px * k, y: start.y + trimDy * 0.25 + py * k };
        const c2 = { x: start.x + trimDx * 0.75 + px * k, y: start.y + trimDy * 0.75 + py * k };
        nextPaths.push({
          key: buildEdgeKey(edge.from, edge.to),
          d: `M ${start.x} ${start.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${end.x} ${end.y}`,
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
  }, [computePaths, edges, nodes]);

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

  return (
    <div className="codex-tree">
      <div className="codex-tree-stage" ref={stageRef} style={{ '--grid-size': gridSize } as React.CSSProperties}>
        <svg className="codex-tree-lines" aria-hidden="true">
          {paths.map((path) => (
            <path key={path.key} d={path.d} />
          ))}
        </svg>

        <div className="codex-tree-grid">
          {nodes.map((node) => {
            const nodeClickable = hasModalTarget(node.card.maneuverId);
            return (
              <button
                key={node.id}
                type="button"
                className={`codex-node ${nodeClickable ? 'is-clickable' : 'is-placeholder'}`}
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
  );
};

export default CodexTree;
