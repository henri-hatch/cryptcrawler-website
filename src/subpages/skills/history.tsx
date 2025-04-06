import maneuverData from '../../data/maneuver_data';

const History = () => {
    const bookWormManeuver = maneuverData.find(maneuver => maneuver.id === 'book-worm');
    return (
        <>
            <h2>History</h2>
            
            <br />

            <div>
            <h3>Book Worm</h3>
            <p dir="auto"><em>Like a rat in a maze, you can track down the exact source you need.</em></p>
            <p dir="auto">You gain the <em>Book Worm</em> manuever.</p>
            </div>

            <div>
                {bookWormManeuver && (
                    <img
                        src={bookWormManeuver.maneuverImage}
                        alt={bookWormManeuver.name}
                        style={{ width: '75%', height: 'auto' }}
                    />
                )}
            </div>
        </>
    )
};

export default History;