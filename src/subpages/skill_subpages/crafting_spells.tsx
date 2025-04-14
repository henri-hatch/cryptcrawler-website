import maneuverData from '../../data/maneuver_data';
import { ManeuverLink } from '../../components/maneuver_modal';

const CraftingSpells = () => {
    const eurekaManeuver = maneuverData.find(m => m.id === "eureka!");

    return (
        <>
            <h2>Crafting Spells</h2>

            <div>
                {eurekaManeuver && (
                    <p>Your analytical mind allows you to draw connections to things normally unrelated. You gain the <ManeuverLink maneuver={eurekaManeuver} /> maneuver.</p>
                )}
            </div>
        </>
    )
};

export default CraftingSpells;