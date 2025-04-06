import maneuverData from '../../data/maneuver_data';
import { ManeuverLink } from '../../components/maneuver_modal';

const Talent = () => {
    const sorceryManeuver = maneuverData.find(m => m.id === "sorcery");
    const metaMagicManeuver = maneuverData.find(m => m.id === "metamagic");

    return (
        <>
            <h2>Talent</h2>
            
            <div>
            <h3>Prerequisites</h3>
            <p>A Talent is a volatile spellcaster, barely restraining their magical power from destroying those around them. To be a sorcerer, you must meet the following prerequisites.</p>
            <ul>
                <li>Have a connection to a particular magical bloodline.</li>
                <li>Show hints at of a dormant magical power.</li>
                <li>Have a manifestation (either psychological or physical) of your magical heritage.</li>
            </ul>
            </div>

            
            <div>
            <h3>Breakthrough</h3>
            <p>As a Talent, <em>breakthrough</em> opportunities often involve:</p>
            <ul>
                <li>Moments of extreme emotion or peril.</li>
                <li>Encounters with strong sources of magic.</li>
                <li>New understanding relating to your heritage/bloodline.</li>
                <li>Realization regarding your own mental or emotional state.</li>

            </ul>
            </div>

            <div>
            <h3><u>1st Level: Strain</u></h3>
            <p>It is too easy to become distracted in battle, and you seem to be the only one to notice this. You have a heroic resource called strain, which you can spend to activate your powerful abilities. Outside of combat, you have strain equal to your Talent level. If you lose some or all of your strain outside of combat, it takes 10 minutes to regain it. At the start of your turn, you gain 1 strain. Whenever you use a manuever with the magic tag, you gain 1 strain. All unspent strain disappears at the end of an encounter.</p>
            </div>
            
            
            <div>
            <h3><u>1st Level: Metamagic </u></h3>
            {metaMagicManeuver && (<p>With your latent sorcerous powers unlocked, you can easily bend and shape spells. You <em>permanently</em> gain the  <ManeuverLink maneuver={metaMagicManeuver}/> maneuver.</p>)}

            </div>

            <div>
            <h3><u>1st Level: Sorcery </u></h3>
            {sorceryManeuver && (<p>As a magical creature, you use your charismatic presence to cast your spells. You <em>permanently</em> gain the  <ManeuverLink maneuver={sorceryManeuver}/> maneuver.</p>)}

            </div>
        </>
    )
};

export default Talent;