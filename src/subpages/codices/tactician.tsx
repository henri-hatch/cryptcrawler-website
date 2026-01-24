import CodexTree, { defineSkillTree } from '../../components/codex_tree';
import './codex_detail.css';

const demoManeuverId = 'flurry-of-blows';

const tacticianTree = defineSkillTree({ gridSize: 7, useAdjacency: true, defaultEdgeType: 'straight' });

tacticianTree.createNode('mastery', 4, 1, { label: 'Tactician Mastery' });
tacticianTree.createNode('tier5-1', 3, 2, { label: 'Grand Strategy' });
tacticianTree.createNode('tier5-2', 4, 2, { label: 'Final Formation' });
tacticianTree.createNode('tier5-3', 5, 2, { label: 'Victory Signal' });
tacticianTree.createNode('tier4-1', 3, 3, { label: 'War Table' });
tacticianTree.createNode('tier4-2', 4, 3, { label: 'Masterstroke' });
tacticianTree.createNode('tier4-3', 5, 3, { label: 'Iron Discipline' });
tacticianTree.createNode('tier3-1', 3, 4, { label: 'Command Pulse' });
tacticianTree.createNode('tier3-2', 4, 4, { label: 'Calculated Risk' });
tacticianTree.createNode('tier3-3', 5, 4, { label: 'Seizing Tempo' });
tacticianTree.createNode('tier2-1', 3, 5, { label: 'Strategic Sweep' });
tacticianTree.createNode('tier2-2', 4, 5, { label: 'Battlefield Read' });
tacticianTree.createNode('tier2-3', 5, 5, { label: 'Perfect Flank' });
tacticianTree.createNode('tier1-1', 3, 6, { label: 'First Orders', maneuverId: demoManeuverId });
tacticianTree.createNode('tier1-2', 4, 6, { label: 'Forward Line' });
tacticianTree.createNode('tier1-3', 5, 6, { label: 'Measured Advance' });

const Tactician = () => {
  return (
    <div className="codex-detail">
      <div className="codex-intro">
        <h2>Tactician</h2>
        <p>Tacticians are the masterminds of the battlefield, using strategy and cunning to outwit their foes.</p>
        <p className="codex-lore">
          Tacticians bend chaos into pattern, orchestrating every battlefield exchange.
        </p>
      </div>

      <CodexTree tree={tacticianTree} />
    </div>
  );
};

export default Tactician;
