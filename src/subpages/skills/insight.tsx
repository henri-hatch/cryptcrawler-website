import maneuverData from '../../data/maneuver_data';

const Insight = () => {
    const lieDetectorManeuver = maneuverData.find(maneuver => maneuver.id === 'lie-detector');
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
                    <img
                        src={lieDetectorManeuver.maneuverImage}
                        alt={lieDetectorManeuver.name}
                        style={{ width: '75%', height: 'auto' }}
                    />
                )}
            </div>

        </>
    )
};

export default Insight;