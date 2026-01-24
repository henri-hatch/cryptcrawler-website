import CodexTree, { defineSkillTree } from '../../components/codex_tree';
import './codex_detail.css';

const demoManeuverId = 'flurry-of-blows';

const conduitTree = defineSkillTree({ gridSize: 7, useAdjacency: true, defaultEdgeType: 'straight', backgroundImage: 'conduit_background.png' });

conduitTree.createNode('mastery', 4, 1, { label: 'Conduit Mastery' });
conduitTree.createNode('tier2-1', 3, 5, { label: 'Sanctified Pulse' });
conduitTree.createNode('tier2-2', 4, 5, { label: 'Veil of Mercy' });
conduitTree.createNode('tier2-3', 5, 5, { label: 'Covenant Ward' });
conduitTree.createNode('tier1-1', 2, 6, { label: 'Whispered Rite', maneuverId: demoManeuverId });
conduitTree.createNode('tier1-2', 6, 6, { label: 'Blessed Current' });

conduitTree.connect('tier1-1', 'tier2-1', { type: 'straight'})
conduitTree.connect('tier1-2', 'tier2-3', { type: 'straight'});
conduitTree.connect('tier2-1', 'mastery', { type: 'curved', curve: { points: [
  { t: 0.5, n: -0.2 },
  { t: 0.1, n: 0.2 },
  { t: 0.2, n: 0.2}
] } });
conduitTree.connect('tier2-3', 'mastery', { type: 'curved', curve: { preset: 'S', side: 'right', strength: 0.4 }});
conduitTree.connect('tier2-2', 'mastery', { type: 'straight'});

const Conduit = () => {
  return (
    <div className="codex-detail">
      <div className="codex-intro">
        <h2>Conduit</h2>
        <p>Despite their promises, Gods and entities of beyond still interfere in the mortal world.</p>
        <p className="codex-lore">
          Conduits channel voices from beyond, carrying vows and omens into the mortal world.
        </p>
      </div>

      <CodexTree tree={conduitTree} />
    </div>
  );
};

export default Conduit;
