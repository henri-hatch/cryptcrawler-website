import maneuverData from '../../data/maneuver_data';
import { ManeuverLink } from '../../components/maneuver_modal';

const Acrobatics = () => {
    const evasionManeuver = maneuverData.find(m => m.id === "evasion");

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
                    <p><ManeuverLink maneuver={evasionManeuver} /></p>
                )}
            </div>

        </>
    )
};

export default Acrobatics;