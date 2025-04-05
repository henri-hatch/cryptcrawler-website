import maneuverData from '../../data/maneuver_data';

const Performance = () => {
    // Find the maneuver data
    const inspirationManeuver = maneuverData.find(maneuver => maneuver.id === 'inspiration');
    
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
                    <img 
                        src={inspirationManeuver.maneuverImage} 
                        alt={inspirationManeuver.name} 
                        style={{ width: '75%', height: 'auto'}} 
                    />
                </div>
            )}
        </>
    )
};

export default Performance;