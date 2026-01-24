import CodexTree, { defineSkillTree } from '../../components/codex_tree';
import './codex_detail.css';

const demoManeuverId = 'flurry-of-blows';

const paragonTree = defineSkillTree({ gridSize: 7, useAdjacency: true, defaultEdgeType: 'straight' });

paragonTree.createNode('mastery', 4, 1, { label: 'Paragon Mastery' });
paragonTree.createNode('tier5-1', 3, 2, { label: 'Pillar of Virtue' });
paragonTree.createNode('tier5-2', 4, 2, { label: 'Hero\'s Apex' });
paragonTree.createNode('tier5-3', 5, 2, { label: 'Eternal Standard' });
paragonTree.createNode('tier4-1', 3, 3, { label: 'Ideal Ascendant' });
paragonTree.createNode('tier4-2', 4, 3, { label: 'Crest of Glory' });
paragonTree.createNode('tier4-3', 5, 3, { label: 'Unyielding March' });
paragonTree.createNode('tier3-1', 3, 4, { label: 'Radiant Sentinel' });
paragonTree.createNode('tier3-2', 4, 4, { label: 'Valor Surge' });
paragonTree.createNode('tier3-3', 5, 4, { label: 'Judgment Path' });
paragonTree.createNode('tier2-1', 3, 5, { label: 'Honored Charge' });
paragonTree.createNode('tier2-2', 4, 5, { label: 'Shieldwall Stance' });
paragonTree.createNode('tier2-3', 5, 5, { label: 'Oathfire' });
paragonTree.createNode('tier1-1', 3, 6, { label: 'Oathbearer\'s Step', maneuverId: demoManeuverId });
paragonTree.createNode('tier1-2', 4, 6, { label: 'Steadfast Guard' });
paragonTree.createNode('tier1-3', 5, 6, { label: 'Resolute Strike' });

const Paragon = () => {
  return (
    <div className="codex-detail">
      <div className="codex-intro">
        <h2>Paragon</h2>
        <p>Bound by a powerful oath, Paragons seek to become the ideal they have sworn to.</p>
        <p className="codex-lore">
          Paragons are oathbound champions who refine discipline into unbreakable will.
        </p>
      </div>

      <CodexTree tree={paragonTree} />
    </div>
  );
};

export default Paragon;
