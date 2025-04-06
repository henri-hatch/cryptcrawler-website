import maneuverData from '../../data/maneuver_data';

const Acrobatics = () => {
    const evasionManeuver = maneuverData.find(maneuver => maneuver.id === 'evasion');
    return (
        <>
            <h2>Acrobatics</h2>
            
            <br />

            <div>
            <h3>Evasion</h3>
            <p dir="auto"><em>Your great agility allows you to nimbly dodge most area of effect abilities</em></p>
            <p dir="auto">You gain the <em>Evasion</em> manuever.</p>
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

        </>
    )
};

export default Acrobatics;