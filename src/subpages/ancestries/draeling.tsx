import maneuverData from '../../data/maneuver_data';
import { ManeuverLink } from '../../components/maneuver_modal';

const Draeling = () => {
    const command = maneuverData.find(m => m.id === "command");

    return (
        <>
            <h2>Draeling</h2>
            <p><em>"With their demonic heritage painted across their face, Draelings draw attention wherever they travel. Every society has myth and legends of Demonkind and their attempts to invade or corrupt this world. Although they never asked for it, Draelings are often the scapegoats for society prejudice and discrimination."</em></p>
            <p>Draelings are <span style={{ color: '#0057e1' }}>rare</span>, and are considered <span style={{ color: '#ed5c2f' }}>strange</span> by most societies.</p>
            <hr />

            <div>
            <h3><u>Darkvision</u></h3>
            <p>Due to your strong magical nature, your sight is stronger than many others. You gain <u>darkvision</u> up to 60-ft.</p>
            </div>

            <div>
            <h3><u>Black Birthright</u></h3>
            <p>With your strong infernal ancestry, you can enforce your will on others. You gain the <em>Command</em> manuever.</p>
            </div>

            <div>
                {command && (
                    <p><ManeuverLink maneuver={command} /></p>
                )}
            </div>

            <div>
            <h3><u>Infernal Resistances</u></h3>
            <p>By your continual proximity with the Nine Hells, your body has evolved to resist it's hellish environment. You gain resistance against fire damage, and immunity to the <u>charmed</u> condition.</p>
            </div>

        </>
    )
};

export default Draeling;