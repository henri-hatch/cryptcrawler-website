import SkillTemplate from '../../components/skill_template';

const Performance = () => {
        const inspirationManeuver = maneuverData.find(m => m.id === "inspiration");
    
    return (
        <>
            <h2>Performance</h2>
            
            <br />

            <div>
            <h3>Inspirational</h3>
            <p dir="auto"><em>With a quick strum or word, you inspire those around you.</em></p>
            <p dir="auto">You gain the <em>Inspiration</em> maneuver.</p>
            </div>

            {inspirationManeuver && (
                <div>
                    <p><ManeuverLink maneuver={inspirationManeuver} /></p>
                </div>
            )}
        </>
    )
};

export default Performance;