const Elf = () => {
    return (
        <>
            <h2>Elf</h2>
            <p><em>"Incredibly naturalistic and free-spirited, the long lived elves are seen as agents of the nature around them. Created by the gods Corellon and Laera, each elf can track their lineage to the original ten children of Corellon. With the arrival of humanity, elves have been pushed back from their ancestral lands into the corners of the wilderness."</em></p>
            <p>Elves are <span style={{ color: '#407c51' }}>common</span>, and are considered <span style={{ color: '#575757' }}>ordinary</span> by most societies.</p>
            <hr />

            <div>
            <h3><u>Darkvision</u></h3>
            <p>Due to your strong magical nature, your sight is stronger than many others. You gain <u>darkvision</u> up to 60-ft.</p>
            </div>

            <div>
            <h3><u>Ageless Form</u></h3>
            <p>As a descendent of Corellon and Laera, you have been blessed with supernatural life. You are immune all diseases and are immune to the <u>poisoned</u> and <u>sleep</u> conditions.</p>
            </div>

            <div>
            <h3><u>Unique Lineage</u></h3>
            <p>Elfs fall one of ten unique lineages, each with their own unique magical blessings. Choose one of the following linages and gain its benefits:</p>
            <ul>
                <li><b>Blood elf</b>. You gain the <em>Frenzied Charge</em> manuever.</li>
                <li><b>Dark elf</b>. You gain the <em>Blade Dance</em> manuever.</li>
                <li><b>Drow</b>. You gain the <em>Poisonous Blade</em> manuever.</li>
                <li><b>High elf</b>. You gain the <em>Detect Magic</em> manuever.</li>
                <li><b>Moon elf</b>. You gain the <em>Misty Step</em> manuever.</li>
                <li><b>Red elf</b>. You gain the <em>Boisterous Jeer</em> manuever.</li>
                <li><b>Snow elf</b>. You gain the <em>Snowblind</em> manuever.</li>
                <li><b>Sun elf</b>. You gain the <em>Eureka!</em> manuever.</li>
                <li><b>Wood elf</b>. You gain the <em>Without A Trace</em> manuever.</li>
            </ul>
            </div>
        </>
    )
};

export default Elf;