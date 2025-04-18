import maneuverData from '../../data/maneuver_data';
import { ManeuverLink } from '../../components/maneuver_modal';

const ArcanaSpells = () => {
    const magicMissileManeuver = maneuverData.find(m => m.id === "magic-missile");
    const leopoldsMagicCardManeuver = maneuverData.find(m => m.id === "leopolds-magic-card");
    const fireboltManeuver = maneuverData.find(m => m.id === "firebolt")
    const lamiasDuplicantManeuver = maneuverData.find(m => m.id === "lamias-duplicant")
    const detectMagicManeuver = maneuverData.find(m => m.id === "detect-magic")
    const identifyManeuver = maneuverData.find(m => m.id === "identify")
    const chromanticOrbManeuver = maneuverData.find(m => m.id === "chromantic-orb")
    const featherFallManeuver = maneuverData.find(m => m.id === "feather-fall")






    return (
        <>
            <h2>Tier I - Arcana Spells</h2>

            <div>
                <h3>Chromantic Orb</h3>
                {chromanticOrbManeuver && (
                    <p>An orb of arcane energy that shifts colors as it flies. You gain the <ManeuverLink maneuver={chromanticOrbManeuver} /> maneuver.</p>
                )}
            </div>

            <div>
                <h3>Detect Magic</h3>
                {detectMagicManeuver && (
                    <p>Enhancing your vision, you can see the faint glow to all magical items in your vicinity. You gain the <ManeuverLink maneuver={detectMagicManeuver} /> maneuver.</p>
                )}
            </div>

            <div>
                <h3>Feather Fall</h3>
                {featherFallManeuver && (
                    <p>You gently stop your decent, allowing you to reach the ground unharmed. You gain the <ManeuverLink maneuver={featherFallManeuver} /> maneuver.</p>
                )}
            </div>

            <div>
                <h3>Firebolt</h3>
                {fireboltManeuver && (
                    <p>Coalescing pure flame, you concentrate it into a dart of power to fire at your foe. You gain the <ManeuverLink maneuver={fireboltManeuver} /> maneuver.</p>
                )}
            </div>

            <div>
                <h3>Identify</h3>
                {identifyManeuver && (
                    <p>Delving into the history of a magical item, you learn its properties. You gain the <ManeuverLink maneuver={identifyManeuver} /> maneuver.</p>
                )}
            </div>

            <div>
            <h3>Lamia's Duplicant</h3>
                {lamiasDuplicantManeuver && (
                    <p>Creating a icy-duplicate, you wreath it with your own appearance. You gain the <ManeuverLink maneuver={lamiasDuplicantManeuver} /> maneuver.</p>
                )}
            </div>

            <div>
                <h3>Leopold's Magic Card</h3>
                {leopoldsMagicCardManeuver && (
                    <p>Imbuing a playing card with chaotic energy, you can throw it at a foe. You gain the <ManeuverLink maneuver={leopoldsMagicCardManeuver} /> maneuver.</p>
                )}
            </div>

            <div>
                <h3>Magic Missile</h3>
                {magicMissileManeuver && (
                    <p>Concentrating raw magical force into three darts, you launch them in rapid succession at your targets. You gain the <ManeuverLink maneuver={magicMissileManeuver} /> maneuver.</p>
                )}
            </div>
        </>
    )
};

export default ArcanaSpells;