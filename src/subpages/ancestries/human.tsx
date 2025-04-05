const Human = () => {
    return (
        <>
            <h2>Human</h2>
            <p><em>"The most common species in the world of Keldon, Humans are a walking anomaly. Each race have a god who made them, humanity, however, has no divine progenitor. Notorious for their lawful nature, and adaptability, humans make up the majority of society."</em></p>
            <p>Humans are <span style={{ color: '#407c51' }}>common</span>, and are considered <span style={{ color: '#575757' }}>ordinary</span> by most societies.</p>
            <hr />

            <div>
            <h3><u>Ability Score Improvement</u></h3>
            <p>The human mind is like a sponge, constantly reaching beyond itself and trying to improve. You may increase one ability score of your choice by +1.</p>
            </div>

            <div>
            <h3><u>Human Inheritance</u></h3>
            <p>Humans are the only species capable of having offspring with other species. You may choose one non-<u>darkvision</u> feature from another ancestry, or gain the <em>Human Determination</em> manuever.</p>
            </div>

            <div>
            <img src="/manuever-images/Human Determination.png" alt="Human Determination" style={{ width: '75%', height: 'auto'}} />
            </div>

            <div>
            <h3><u>Sense Undead</u></h3>
            <p>Humans, unlike other ancestries in Keldon, know when an undead creature enters their proximity. You gain the <u>Sense Undead</u> title.</p>
            <ul>
                <li>You are gain a creeping, cold, or ominous sensation whenever there is an undead creature within a 60ft radius of you.</li>
            </ul>
            </div>

        </>
    )
};

export default Human;