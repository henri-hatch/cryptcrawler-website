import maneuverData from '../../data/maneuver_data';
import { ManeuverLink } from '../../components/maneuver_modal';

const ArcanaSpells2 = () => {
    const chainfireManeuver = maneuverData.find(m => m.id === "chainfire");
    const sunburstManeuver = maneuverData.find(m => m.id === "sunburst");







    return (
        <>
            <h2>Tier II - Arcana Spells</h2>

            <div>
                <h3>Chainfire</h3>
                {chainfireManeuver && (
                    <p>You ignite a foe with righteous flame, which explodes out consuming those around them. You gain the <ManeuverLink maneuver={chainfireManeuver} /> maneuver.</p>
                )}
            </div>

            <div>
                <h3>Sunburst</h3>
                {sunburstManeuver && (
                    <p>Brilliant white sun flames shoot out around you, throwing your foes back. You gain the <ManeuverLink maneuver={sunburstManeuver} /> maneuver.</p>
                )}
            </div>

        </>
    )
};

export default ArcanaSpells2;