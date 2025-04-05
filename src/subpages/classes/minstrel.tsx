import maneuverData from '../../data/maneuver_data';

const Minstrel = () => {
    // Find the maneuver data
    const captivationManeuver = maneuverData.find(maneuver => maneuver.id === 'captivation');
    const plotTwistManeuver = maneuverData.find(maneuver => maneuver.id === 'plot-twist');
    
    return (
        <>
            <h2>Minstrel</h2>

            <div>
            <h3>Prerequisites</h3>
            <p>A Minstrel is a fantastical storyteller, interweaving different narratives into one cohesive tale. To be a master of myth and legend, you must meet the following prerequisites.</p>
            <ul>
                <li>Have a story to tell.</li>
                <li>Have a well-established reputation that precedes you.</li>
                <li>You must be known by many different names.</li>
            </ul>
            </div>

            <div>
            <h3>Breakthrough</h3>
            <p>As a Minstrel, <em>breakthrough</em> opportunities often involve:</p>
            <ul>
                <li>Moving a crowd to action.</li>
                <li>Earn the love or ire of a group of people.</li>
                <li>Find a lesson to learn in tragedy.</li>
                <li>Experience something so fantastical that no one would believe you.</li>
            </ul>
            </div>

            <div>
            <h3><u>Health</u></h3>
            <p>At 1st level, your DHP and your SHP is 7 + your WIL. Each time you level-up, your SHP increases by 4 + your WIL.</p>
            </div>

            <div>
            <h3><u>1st Level: Drama</u></h3>
            <p>You control the narrative, coasting along the waves of tension and resolution. You have a heroic resource called drama, which you can spend to activate your powerful abilities. Outside of combat, you have drama equal to your CHA score. If you lose some or all of your drama outside of combat, it takes 10 minutes to regain it. At the start of your turn, you gain 2 drama. Whenever a player rolls a critical failure or critical success, gain 1 drama. If a player dies, gain 10 drama. All unspent drama disappears at the end of an encounter.</p>
            </div>

            <div>
            <h3><u>1st Level: Captive Audience</u></h3>
            <p>The story you tell is so compelling, it can totally entrance your audience. You gain the <em>Captivation</em> maneuver.</p>
            </div>

            <div>
            {captivationManeuver && (
                <img 
                    src={captivationManeuver.maneuverImage} 
                    alt={captivationManeuver.name} 
                    style={{ width: '75%', height: 'auto'}} 
                />
            )}
            </div>

            <div>
            <h3><u>1st Level: Plot Twist</u></h3>
            <p>In the midst of a story, you can alter the narrative by twisting the plot. You gain access to the <em>Plot Twist</em> maneuver.</p>
            </div>

            <div>
            {plotTwistManeuver && (
                <img 
                    src={plotTwistManeuver.maneuverImage} 
                    alt={plotTwistManeuver.name} 
                    style={{ width: '75%', height: 'auto'}} 
                />
            )}
            </div>
        </>
    )
}

export default Minstrel;