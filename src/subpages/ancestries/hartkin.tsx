import maneuverData from '../../data/maneuver_data';

const Hartkin = () => {
    const favorforaNeighbor = maneuverData.find(m => m.id === "favor-for-a-neighbor");
    return (
        <>
            <h2>Hartkin</h2>
            <p><em>"A quiet and content people with a streak of trickery, halflings are admired by their neighbors. Created by the trickster god Ados, Hartkin enjoy games of chance, riddles, and mysteries. They often form their own peaceful communities."</em></p>
            <p>Hartkin are <span style={{ color: '#407c51' }}>common</span>, and are considered <span style={{ color: '#575757' }}>ordinary</span> by most societies.</p>
            <hr />

            <div>
            <h3><u>Fleet Footwork</u></h3>
            <p>Although you are smaller than most folk, you can deftly slip through brush and swamps. You are are not affected by rough terrain.</p>
            </div>

            <div>
            <h3><u>Favor for a Neighbor</u></h3>
            <p>Whether its a cup of flour or shelter for the night, Harkin are happy to help. You gain the <em>Favor for a Neighbor</em> manuever.</p>
            </div>

            <div>
                {favorforaNeighbor && (
                    <img
                        src={favorforaNeighbor.maneuverImage}
                        alt={favorforaNeighbor.name}
                        style={{ width: '75%', height: 'auto' }}
                    />
                )}
            </div>

        </>
    )
};

export default Hartkin;