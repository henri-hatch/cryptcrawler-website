import CodexTree, { defineSkillTree } from '../../components/codex_tree';
import './codex_detail.css';

const demoManeuverId = 'flurry-of-blows';

const shadowTree = defineSkillTree({ gridSize: 7, useAdjacency: true, defaultEdgeType: 'straight' });

shadowTree.createNode('mastery', 4, 1, { label: 'Shadow Mastery' });
shadowTree.createNode('tier5-1', 3, 2, { label: 'Midnight Reign' });
shadowTree.createNode('tier5-2', 4, 2, { label: 'Fading Legend' });
shadowTree.createNode('tier5-3', 5, 2, { label: 'Mask of Nothing' });
shadowTree.createNode('tier4-1', 3, 3, { label: 'Blackout Gambit' });
shadowTree.createNode('tier4-2', 4, 3, { label: 'Cloaked Strike' });
shadowTree.createNode('tier4-3', 5, 3, { label: 'Wraithmind' });
shadowTree.createNode('tier3-1', 3, 4, { label: 'Ebon Feint' });
shadowTree.createNode('tier3-2', 4, 4, { label: 'Shadow Feast' });
shadowTree.createNode('tier3-3', 5, 4, { label: 'Hidden Path' });
shadowTree.createNode('tier2-1', 3, 5, { label: 'Ghost Step' });
shadowTree.createNode('tier2-2', 4, 5, { label: 'Smoke and Steel' });
shadowTree.createNode('tier2-3', 5, 5, { label: 'Broken Watch' });
shadowTree.createNode('tier1-1', 3, 6, { label: 'Silent Entry', maneuverId: demoManeuverId });
shadowTree.createNode('tier1-2', 4, 6, { label: 'Night\'s Caress' });
shadowTree.createNode('tier1-3', 5, 6, { label: 'Veilwalker' });

const Shadow = () => {
  return (
    <div className="codex-detail">
      <div className="codex-intro">
        <h2>Shadow</h2>
        <p>Masters of thievery and sneak, Shadows excel from, well, the shadows.</p>
        <p className="codex-lore">
          Shadows carve out secrets, slipping between sightlines and striking from silence.
        </p>
      </div>

      <CodexTree tree={shadowTree} />
    </div>
  );
};

export default Shadow;
