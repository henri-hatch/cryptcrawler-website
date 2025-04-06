import maneuverData from '../../data/maneuver_data';
import { ManeuverLink } from '../../components/maneuver_modal';

const Stealth = () => {
    const cunningDodgeManeuver = maneuverData.find(m => m.id === "cunning-dodge");
    const evasionManeuver = maneuverData.find(m => m.id === "evasion");
    const improvisedCoverManeuver = maneuverData.find(m => m.id === "improvised-cover");
    const sneakAttackManeuver = maneuverData.find(m => m.id === "sneak-attack");
    const steadyShotManeuver = maneuverData.find(m => m.id === "steady-shot");

    return (
        <>
            <h2>Stealth</h2>
            
            <br />

            <div>
            <h3>Cunning Dodge</h3>
            </div>
            <div>
                {cunningDodgeManeuver && (
                    <p><ManeuverLink maneuver={cunningDodgeManeuver} /></p>
                )}
            </div>

            <hr style={{ opacity: 0.2 }} />

            <div>
            <h3>Evasion</h3>
            </div>
            <div>
                {evasionManeuver && (
                    <p><ManeuverLink maneuver={evasionManeuver} /></p>
                )}
            </div>

            <hr style={{ opacity: 0.2 }} />

            <div>
            <h3>Improvised Cover</h3>
            </div>
            <div>
                {improvisedCoverManeuver && (
                    <p><ManeuverLink maneuver={improvisedCoverManeuver} /></p>
                )}
            </div>

            <hr style={{ opacity: 0.2 }} />

            <div>
            <h3>Sneak Attack</h3>
            </div>
            <div>
                {sneakAttackManeuver && (
                    <p><ManeuverLink maneuver={sneakAttackManeuver} /></p>
                )}
            </div>

            <hr style={{ opacity: 0.2 }} />

            <div>
            <h3>Steady Shot</h3>
            </div>
            <div>
                {steadyShotManeuver && (
                    <p><ManeuverLink maneuver={steadyShotManeuver} /></p>
                )}
            </div>
        </>
    )
};

export default Stealth;