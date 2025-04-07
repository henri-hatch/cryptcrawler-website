import SkillTemplate from '../../components/skill_template';

const Insight = () => {
    const lieDetectorManeuver = maneuverData.find(m => m.id === "lie-detector");

    return (
        <>
            <h2>Insight</h2>
            
            <br />

            <div>
            <h3>Lie Detector</h3>
            <p dir="auto"><em>As a master of the mind, you can recognize lies.</em></p>
            <p dir="auto">You gain the <em>Lie Detector</em> manuever.</p>
            </div>

            <div>
                {lieDetectorManeuver && (
                    <p><ManeuverLink maneuver={lieDetectorManeuver} /></p>
                )}
            </div>

        </>
    )
};

export default Insight;