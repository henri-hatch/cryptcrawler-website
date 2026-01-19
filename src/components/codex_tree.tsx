import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useManeuverModal } from './maneuver_modal';
import maneuverData from '../data/maneuver_data';
import masteryData from '../data/mastery_data';
import originData from '../data/origin_data';
import './codex_tree.css';

export interface CodexNode {
  label?: string;
  maneuverId?: string;
  iconPath?: string;
}

export interface CodexTier {
  tier: 1 | 2 | 3 | 4 | 5;
  nodes: CodexNode[];
}

interface CodexTreeProps {
  tiers: CodexTier[];
  mastery: CodexNode;
}

interface LineSegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const tierOrder: CodexTier['tier'][] = [5, 4, 3, 2, 1];

const CodexTree: React.FC<CodexTreeProps> = ({ tiers, mastery }) => {
  const { openModal } = useManeuverModal();
  const containerRef = useRef<HTMLDivElement>(null);
  const masteryRef = useRef<HTMLButtonElement>(null);
  const tierRefs = useRef<Record<number, Array<HTMLButtonElement | null>>>({});
  const [lines, setLines] = useState<LineSegment[]>([]);

  const tiersByNumber = useMemo(() => {
    const map = new Map<number, CodexTier['nodes']>();
    tiers.forEach((tier) => {
      map.set(tier.tier, tier.nodes);
    });
    return map;
  }, [tiers]);

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

  const getCenter = (element: HTMLElement, containerRect: DOMRect) => {
    const rect = element.getBoundingClientRect();
    return {
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top + rect.height / 2,
    };
  };

  const computeLines = useCallback(() => {
    if (!containerRef.current) {
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const newLines: LineSegment[] = [];
    const tierAnchors = new Map<number, { x: number; y: number }>();
    const tierCenters = new Map<number, Array<{ x: number; y: number }>>();

    tierOrder.forEach((tier) => {
      const nodes = (tierRefs.current[tier] || []).filter(Boolean) as HTMLButtonElement[];
      const centers = nodes.map((node) => getCenter(node, containerRect));
      tierCenters.set(tier, centers);

      for (let i = 0; i < centers.length - 1; i += 1) {
        newLines.push({
          x1: centers[i].x,
          y1: centers[i].y,
          x2: centers[i + 1].x,
          y2: centers[i + 1].y,
        });
      }

      if (centers.length > 0) {
        const middleIndex = Math.floor(centers.length / 2);
        if (centers.length % 2 === 1) {
          tierAnchors.set(tier, centers[middleIndex]);
        } else {
          const left = centers[middleIndex - 1];
          const right = centers[middleIndex];
          tierAnchors.set(tier, {
            x: (left.x + right.x) / 2,
            y: (left.y + right.y) / 2,
          });
        }
      }
    });

    for (let i = 0; i < tierOrder.length - 1; i += 1) {
      const currentTier = tierOrder[i];
      const nextTier = tierOrder[i + 1];
      const currentAnchor = tierAnchors.get(currentTier);
      const nextAnchor = tierAnchors.get(nextTier);

      if (currentAnchor && nextAnchor) {
        newLines.push({
          x1: currentAnchor.x,
          y1: currentAnchor.y,
          x2: nextAnchor.x,
          y2: nextAnchor.y,
        });
      }
    }

    if (masteryRef.current) {
      const masteryCenter = getCenter(masteryRef.current, containerRect);
      const tierFiveCenters = tierCenters.get(5) || [];
      tierFiveCenters.forEach((center) => {
        newLines.push({
          x1: center.x,
          y1: center.y,
          x2: masteryCenter.x,
          y2: masteryCenter.y,
        });
      });
    }

    setLines(newLines);
  }, []);

  useLayoutEffect(() => {
    computeLines();
  }, [computeLines, tiers, mastery]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const handleResize = () => computeLines();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(containerRef.current);
    window.addEventListener('resize', handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [computeLines]);

  const orderedTiers = tierOrder.map((tier) => ({
    tier,
    nodes: tiersByNumber.get(tier) || [],
  }));

  const masteryClickable = hasModalTarget(mastery.maneuverId);

  return (
    <div className="codex-tree" ref={containerRef}>
      <svg className="codex-tree-lines" aria-hidden="true">
        {lines.map((line, index) => (
          <line
            key={`line-${index}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
          />
        ))}
      </svg>

      <div className="codex-tree-content">
        <button
          type="button"
          className={`codex-mastery-node ${masteryClickable ? 'is-clickable' : 'is-placeholder'}`}
          onClick={() => handleNodeClick(mastery.maneuverId)}
          ref={masteryRef}
          disabled={!masteryClickable}
        > 
          {mastery.iconPath ? (
            <img
              src={mastery.iconPath}
              alt={mastery.label || 'Codex mastery'}
              className="codex-mastery-image"
            />
          ) : null}
          {mastery.label && <span className="codex-mastery-label">{mastery.label}</span>}
        </button>

        {orderedTiers.map((tier) => (
          <div key={`tier-${tier.tier}`} className="codex-tier-row">
            {tier.nodes.map((node, index) => {
              const nodeClickable = hasModalTarget(node.maneuverId);
              const nodeLabel = node.label || '';
              return (
                <button
                  key={`tier-${tier.tier}-node-${index}`}
                  type="button"
                  className={`codex-node ${nodeClickable ? 'is-clickable' : 'is-placeholder'}`}
                  onClick={() => handleNodeClick(node.maneuverId)}
                  ref={(element) => {
                    if (!tierRefs.current[tier.tier]) {
                      tierRefs.current[tier.tier] = [];
                    }
                    tierRefs.current[tier.tier][index] = element;
                  }}
                  disabled={!nodeClickable}
                >
                  <span className="codex-node-label">{nodeLabel}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodexTree;
