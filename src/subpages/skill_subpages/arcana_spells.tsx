import maneuverData from '../../data/maneuver_data';
import { ManeuverLink } from '../../components/maneuver_modal';

const ArcanaSpells = () => {
    const magicMissileManeuver = maneuverData.find(m => m.id === "magic-missile");

    return (
        <>
            <h2>Tier 1 - Arcana Spells</h2>

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