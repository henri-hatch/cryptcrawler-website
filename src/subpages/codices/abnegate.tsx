import CodexTree, { defineSkillTree } from '../../components/codex_tree';
import './codex_detail.css';

const demoManeuverId = 'flurry-of-blows';

const abnegateTree = defineSkillTree({ gridSize: 7, useAdjacency: true, defaultEdgeType: 'straight' });

abnegateTree.createNode('mastery', 4, 1, { label: 'Abnegate Mastery' });
abnegateTree.createNode('tier5-1', 3, 2, { label: 'Total Denial' });
abnegateTree.createNode('tier5-2', 4, 2, { label: 'End of Spell' });
abnegateTree.createNode('tier5-3', 5, 2, { label: 'Still Horizon' });
abnegateTree.createNode('tier4-1', 3, 3, { label: 'Shatterglyph' });
abnegateTree.createNode('tier4-2', 4, 3, { label: 'Absence Tide' });
abnegateTree.createNode('tier4-3', 5, 3, { label: 'Crack the Sigil' });
abnegateTree.createNode('tier3-1', 3, 4, { label: 'Voidproof' });
abnegateTree.createNode('tier3-2', 4, 4, { label: 'Mirror Null' });
abnegateTree.createNode('tier3-3', 5, 4, { label: 'Stubborn Core' });
abnegateTree.createNode('tier2-1', 3, 5, { label: 'Silence Field' });
abnegateTree.createNode('tier2-2', 4, 5, { label: 'Disruptive Palm' });
abnegateTree.createNode('tier2-3', 5, 5, { label: 'Severing Grasp' });
abnegateTree.createNode('tier1-1', 3, 6, { label: 'Nullwalk', maneuverId: demoManeuverId });
abnegateTree.createNode('tier1-2', 4, 6, { label: 'Echo Break' });
abnegateTree.createNode('tier1-3', 5, 6, { label: 'Hardened Frame' });

const Abnegate = () => {
  return (
    <div className="codex-detail">
      <div className="codex-intro">
        <h2>Abnegate</h2>
        <p>
          Born as a twin, an Abnegate is an anti-magical anomaly, blessed with supernatural physical power rather than
          magical gifts.
        </p>
        <p className="codex-lore">
          Abnegates bend null-force to break magic, standing as the world's quiet counterspell.
        </p>
      </div>

      <CodexTree tree={abnegateTree} />
    </div>
  );
};

export default Abnegate;
