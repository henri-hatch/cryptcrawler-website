import maneuverData from '../../data/maneuver_data';
import { ManeuverLink } from '../../components/maneuver_modal';

const Deception = () => {
    const cuttingWordsManeuver = maneuverData.find(m => m.id === "cutting-words");

    return (
        <>
            <h2>Deception</h2>
            
            <br />

            <div>
            <h3>Actor</h3>
            <p dir="auto"><em>You are an expert in impersonations, costumes, and improvisation.</em></p>
            <p dir="auto">You have advantage on CHA checks made related to impersonating another creature.</p>
            </div>

            <div>
            <h3>Cutting Words</h3>
            <p dir="auto"><em>Your insults are incredibly dangerous.</em></p>
            <p dir="auto">You gain the <em>Cutting Words</em> manuever.</p>
            </div>

            <div>
                {cuttingWordsManeuver && (
                    <p><ManeuverLink maneuver={cuttingWordsManeuver} /></p>
                )}
            </div>

        </>
    )
};

export default Deception;