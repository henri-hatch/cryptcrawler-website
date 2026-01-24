import CodexTree, { defineSkillTree } from '../../components/codex_tree';
import './codex_detail.css';

const demoManeuverId = 'flurry-of-blows';

const talentTree = defineSkillTree({ gridSize: 7, useAdjacency: true, defaultEdgeType: 'straight' });

talentTree.createNode('mastery', 4, 1, { label: 'Talent Mastery' });
talentTree.createNode('tier5-1', 3, 2, { label: 'Aether Crown' });
talentTree.createNode('tier5-2', 4, 2, { label: 'Ascendant Spark' });
talentTree.createNode('tier5-3', 5, 2, { label: 'Living Arcana' });
talentTree.createNode('tier4-1', 3, 3, { label: 'Empowered Will' });
talentTree.createNode('tier4-2', 4, 3, { label: 'Wellspring' });
talentTree.createNode('tier4-3', 5, 3, { label: 'Soulflare' });
talentTree.createNode('tier3-1', 3, 4, { label: 'Resonant Heart' });
talentTree.createNode('tier3-2', 4, 4, { label: 'Primal Burst' });
talentTree.createNode('tier3-3', 5, 4, { label: 'Mana Thread' });
talentTree.createNode('tier2-1', 3, 5, { label: 'Spellflow' });
talentTree.createNode('tier2-2', 4, 5, { label: 'Kindled Rage' });
talentTree.createNode('tier2-3', 5, 5, { label: 'Calm Channel' });
talentTree.createNode('tier1-1', 3, 6, { label: 'Arcane Pulse', maneuverId: demoManeuverId });
talentTree.createNode('tier1-2', 4, 6, { label: 'Focus Point' });
talentTree.createNode('tier1-3', 5, 6, { label: 'Surgecraft' });

const Talent = () => {
  return (
    <div className="codex-detail">
      <div className="codex-intro">
        <h2>Talent</h2>
        <p>
          Born with incredible untapped magical power, Talents are spellcasters who control their magic through their
          emotional state.
        </p>
        <p className="codex-lore">
          Talents ignite inner magic, shaping raw emotion into controlled power.
        </p>
      </div>

      <CodexTree tree={talentTree} />
    </div>
  );
};

export default Talent;
