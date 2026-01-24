import CodexTree, { defineSkillTree } from '../../components/codex_tree';
import './codex_detail.css';

const demoManeuverId = 'flurry-of-blows';

const minstrelTree = defineSkillTree({ gridSize: 7, useAdjacency: true, defaultEdgeType: 'straight' });

minstrelTree.createNode('mastery', 4, 1, { label: 'Minstrel Mastery' });
minstrelTree.createNode('tier5-1', 3, 2, { label: 'Legend\'s Crescendo' });
minstrelTree.createNode('tier5-2', 4, 2, { label: 'Finale of Dawn' });
minstrelTree.createNode('tier5-3', 5, 2, { label: 'Versebound Fate' });
minstrelTree.createNode('tier4-1', 3, 3, { label: 'Mythic Bridge' });
minstrelTree.createNode('tier4-2', 4, 3, { label: 'Harmonized Resolve' });
minstrelTree.createNode('tier4-3', 5, 3, { label: 'Lorekeeper\'s Call' });
minstrelTree.createNode('tier3-1', 3, 4, { label: 'Cadence of Courage' });
minstrelTree.createNode('tier3-2', 4, 4, { label: 'Dissonant Refrain' });
minstrelTree.createNode('tier3-3', 5, 4, { label: 'Storyteller\'s Spark' });
minstrelTree.createNode('tier2-1', 3, 5, { label: 'Ballad of Blades' });
minstrelTree.createNode('tier2-2', 4, 5, { label: 'Echoing Strain' });
minstrelTree.createNode('tier2-3', 5, 5, { label: 'Silver Tongue' });
minstrelTree.createNode('tier1-1', 3, 6, { label: 'Opening Verse', maneuverId: demoManeuverId });
minstrelTree.createNode('tier1-2', 4, 6, { label: 'Crowd Chorus' });
minstrelTree.createNode('tier1-3', 5, 6, { label: 'Lively Tempo' });

const Minstrel = () => {
  return (
    <div className="codex-detail">
      <div className="codex-intro">
        <h2>Minstrel</h2>
        <p>Minstrels are poets, the authors of myth, writing the very adventure the party is in.</p>
        <p className="codex-lore">
          Minstrels weave fate with lyric and rhythm, turning the tide through story and song.
        </p>
      </div>

      <CodexTree tree={minstrelTree} />
    </div>
  );
};

export default Minstrel;
