const Dwarf = () => {
    return (
        <>
            <h2>Dwarf</h2>
            <p><em>"Notoriously sturdy and stubborn, Dwarves once dominated the land with their brilliant architecture. However, with the rise of their arch-nemesis in Orckind, their numbers have dwindled significantly. The once proud race has since retreated deep into their underground cities, a shadow of their former glory."</em></p>
            <p>Dwarves are <span style={{ color: '#407c51' }}>common</span>, and are considered <span style={{ color: '#575757' }}>ordinary</span> by most societies.</p>
            <hr />

            <div>
            <h3><u>Darkvision</u></h3>
            <p>Due to your strong magical nature, your sight is stronger than many others. You gain <u>darkvision</u> up to 60-ft.</p>
            </div>

            <div>
            <h3><u>Despite the Odds</u></h3>
            <p>A dwarf's greatest wish is to die gloriously in battle, making you desire danger not fear it. You are immune to the <u>frightened</u> condition.</p>
            </div>

            <div>
            <h3><u>Stampede of Steel</u></h3>
            <p>Created by the god Marvos as warriors from birth, you constantly itch for battle. You gain the <em>Stampede of Steel</em> manuever.</p>
            </div>

            <div>
            <img src="/manuever-images/Stampede of Steel.png" alt="Stampede of Steel" style={{ width: '75%', height: 'auto'}} />
            </div>

            <div>
            <h3><u>Redundant Anatomy</u></h3>
            <p>Born with two hearts, three lungs, four stomachs, and five livers: you can take more damage than most. Increase your maximum HP by an additional +2 whenever you level up.</p>
            </div>
        </>
    )
};

export default Dwarf;