import maneuverData from '../../data/maneuver_data';
import { ManeuverLink } from '../../components/maneuver_modal';

const Human = () => {
    const humanDetermination = maneuverData.find(m => m.id === "human-determination");
    const senseUndead = maneuverData.find(maneuver => maneuver.id === 'sense-undead');

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
            <p>Humans are the only species capable of having offspring with other species. You may choose one non-<u>darkvision</u> feature from another ancestry, or <em>permanently</em> gain the <em>Human Determination</em> manuever.</p>
            </div>

            <div>
                {humanDetermination && (
                    <p><ManeuverLink maneuver={humanDetermination} /></p>
                )}
            </div>

            <div>
            <h3><u>Sense Undead</u></h3>
            <p>Humans, unlike other ancestries in Keldon, know when an undead creature enters their proximity. You <em>permanently</em> gain the <u>Sense Undead</u> manuever.</p>
            </div>
            <div>
                {senseUndead && (
                    <p><ManeuverLink maneuver={senseUndead} /></p>
                )}
            </div>

        </>
    )
};

export default Human;