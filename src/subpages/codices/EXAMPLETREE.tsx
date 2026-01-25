import CodexTree, { defineSkillTree } from '../../components/codex_tree';
import './codex_detail.css';

// This is an example skill tree. Below you will find examples on how to create maneuver nodes as well as connect cool lines to them
// This is all in an attempt to make cool looking skill trees for the codices

// The very first thing to do is import the functions (the first two lines of this file). All codices will have this.

// Next, we define the skill tree itself. Here we set the grid size, whether or not to use adjacency rules, the default edge type, and the background image for the tree.
// The grid size will always be a square. 7x7 is a good size for most trees, but you can go larger or smaller as needed.
// useAdjacency is either true or false. If true, nodes will automatically use the defaultEdgeType to connect to adjacent nodes. If false, all connections must be defined manually.
// defaultEdgeType is either 'straight' or 'curved'. This will be the default type of edge used when connecting nodes, unless otherwise specified.
// backgroundImage is the filename of the background image to use for the tree. This image should be placed in the public/codex-images/tree-backgrounds folder.
const exampleTree = defineSkillTree({ gridSize: 7, useAdjacency: true, defaultEdgeType: 'straight', backgroundImage: 'conduit_background.png' });

// Now we create the actual nodes for the tree. Each node must have a unique ID. This is what you'll reference when connecting nodes later.
// After the id, the next two parameters are digits referencing an x and a y position on the grid defined earlier. These start at 1 and go to the grid size.
// For instance a 7x7 grid will have positions from (1,1) in the top left to (7,7) in the bottom right.
// The final parameter is an object containing additional data for the node. At minimum, this should include a label property, which is the text that will appear on the node.
// If the node represents a maneuver, you should also include a maneuverId property, which should match the id of the maneuver in the maneuvers data file.
exampleTree.createNode('mastery', 4, 1, { label: 'Example Mastery' });
exampleTree.createNode('tier2-1', 3, 5, { label: 'Example Blast' });
exampleTree.createNode('tier2-2', 4, 5, { label: 'Veil of Examples' });
exampleTree.createNode('tier2-3', 5, 5, { label: 'Example Shield' });
exampleTree.createNode('tier1-1', 2, 6, { label: 'A Super Cool Maneuver', maneuverId: "a-super-cool-maneuver" });
exampleTree.createNode('tier1-2', 6, 6, { label: 'Blessed Example' });

// Finally, we connect the nodes together. If useAdjacency is set to true, adjacent nodes will automatically be connected using the defaultEdgeType.
// However, if you include a connection between two nodes, that connection will override the automatic one.
// The first two parameters are the IDs of the nodes to connect. The third is an object containing additional data for the connection.
// Please see the following examples:

// These first connections are the simplest and just connect two nodes with a straight line.
exampleTree.connect('tier1-1', 'tier2-1', { type: 'straight'})
exampleTree.connect('tier1-2', 'tier2-3', { type: 'straight'});

// This connection is a standard curved connection. You can tell because its type is 'curved'.
// The curve property defines how the curve looks. There are a variety of presets available: "S", "C", "HOOK", "ARC", and "ZIG"
// The side property defines which side the curve bends towards. It can be either 'left', 'right', or 'auto'. Auto is randomized for variety but will always be the same for a given connection.
// Finally, the strength property defines how strong the curve is. A strength of 0 is a straight line, while higher values create more pronounced curves.
exampleTree.connect('tier2-3', 'mastery', { type: 'curved', curve: { preset: 'S', side: 'right', strength: 0.4 }});

// This final connection is a custom curved connection. Instead of using a preset, we define the curve using an array of points.
// Each point has a t value, which is the position along the line from 0 (start) to 1 (end), and an n value, which is the normal offset at that point.
// The n value is in terms of a percentage of the distance between the two nodes. So an n value of 0.2 means the point is offset by 20% of the distance between the nodes in the normal direction.
// Basically, the higher the absolute value of n, the more pronounced the curve at that point.
// t is always a value between 0 and 1 and is essentially how far along the line you are creating a pivot point.
// For example: t: 0.5 and n: -0.2 means that at the halfway point between the two nodes, the curve will be offset by -20% towards the left.
exampleTree.connect('tier2-1', 'mastery', { type: 'curved', curve: { points: [
  { t: 0.5, n: -0.2 },
  { t: 0.1, n: 0.2 },
  { t: 0.2, n: 0.2}
] } });

// Finally, we create the React component for the codex page itself.
// This includes some introductory text as well as the CodexTree component, which takes the skill tree we defined earlier as a prop.
// The classNames are just there for styling purposes and can be adjusted as needed.
const Example = () => {
  return (
    <div className="codex-detail">
      <div className="codex-intro">
        <h2>Example</h2>
        <p>Super cool example maybe some lore requirements etc.</p>
        <p className="codex-lore">
          Some brief lore on this codex.
        </p>
      </div>

      <CodexTree tree={exampleTree} />
    </div>
  );
};

export default Example;
