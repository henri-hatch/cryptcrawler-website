import maneuverData from '../../data/maneuver_data';

const Stealth = () => {
    const cunningDodgeManeuver = maneuverData.find(maneuver => maneuver.id === 'cunning-dodge');
    const evasionManeuver = maneuverData.find(maneuver => maneuver.id === 'evasion');
    const improvisedCoverManeuver = maneuverData.find(maneuver => maneuver.id === 'improvised-cover');
    const sneakAttackManeuver = maneuverData.find(maneuver => maneuver.id === 'sneak-attack');
    const steadyShotManeuver = maneuverData.find(maneuver => maneuver.id === 'steady-shot');
    return (
        <>
            <h2>Stealth</h2>
            
            <br />

            <div>
            <h3>Cunning Dodge</h3>
            </div>
            <div>
                {cunningDodgeManeuver && (
                    <img
                        src={cunningDodgeManeuver.maneuverImage}
                        alt={cunningDodgeManeuver.name}
                        style={{ width: '75%', height: 'auto' }}
                    />
                )}
            </div>

            <hr style={{ opacity: 0.2 }} />

            <div>
            <h3>Evasion</h3>
            </div>
            <div>
                {evasionManeuver && (
                    <img
                        src={evasionManeuver.maneuverImage}
                        alt={evasionManeuver.name}
                        style={{ width: '75%', height: 'auto' }}
                    />
                )}
            </div>

            <hr style={{ opacity: 0.2 }} />

            <div>
            <h3>Improvised Cover</h3>
            </div>
            <div>
                {improvisedCoverManeuver && (
                    <img
                        src={improvisedCoverManeuver.maneuverImage}
                        alt={improvisedCoverManeuver.name}
                        style={{ width: '75%', height: 'auto' }}
                    />
                )}
            </div>

            <hr style={{ opacity: 0.2 }} />

            <div>
            <h3>Sneak Attack</h3>
            </div>
            <div>
                {sneakAttackManeuver && (
                    <img
                        src={sneakAttackManeuver.maneuverImage}
                        alt={sneakAttackManeuver.name}
                        style={{ width: '75%', height: 'auto' }}
                    />
                )}
            </div>

            <hr style={{ opacity: 0.2 }} />

            <div>
            <h3>Steady Shot</h3>
            </div>
            <div>
                {steadyShotManeuver && (
                    <img
                        src={steadyShotManeuver.maneuverImage}
                        alt={steadyShotManeuver.name}
                        style={{ width: '75%', height: 'auto' }}
                    />
                )}
            </div>
        </>
    )
};

export default Stealth;