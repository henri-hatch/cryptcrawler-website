import maneuverData from '../../data/maneuver_data';

const Shadow = () => {
    // Find the maneuver data
    const hesitationManeuver = maneuverData.find(maneuver => maneuver.id === 'hesitation-is-weakness');
    const shadowStepManeuver = maneuverData.find(maneuver => maneuver.id === 'shadow-step');
    
    return (
        <>
            <div>
            <h2>Shadow</h2>
           
            <h3>Prerequisites</h3>
            <p>A shadow is the big bump in the night, an urban legend whispered about in small circles. To be a creature of the night, you must meet the following prerequisites.</p>
            <ul>
                <li>Break a local law or custom intentionally.</li>
                <li>Have a clear disregard for authority outside your own.</li>
                <li>Have the ire of an important person, group, or organization.</li>
            </ul>
            </div>

            <div>
            <h3>Breakthrough</h3>
            <p>As a Shadow, <em>breakthrough</em> opportunities often involve:</p>
            <ul>
                <li>Being betrayed.</li>
                <li>Being forced to improvise.</li>
                <li>Consquences you thought you circumnavigated coming back to bite you.</li>
                <li>Revealing a close-kept secret.</li>
            </ul>
            </div>

            <div>
            <h3><u>1st Level: Insight</u></h3>
            <p>As you lurk on the perimeter, you gather information which you can exploit. You have a heroic resource called insight, which you can spend to activate your powerful abilities. Outside of combat, you have insight equal to your DEX score. If you lose some or all of your insight outside of combat, it takes 10 minutes to regain it. In combat, at the start of your turn, you gain 2 insight. Whenever you dodge an attack, you gain 1 insight. All unspent insight disappears at the end of an encounter.</p>
            </div>

            <div>
            <h3><u>1st Level: Hesitation Is Weakness</u></h3>
            <p>Patience is power, you strike when you want to. You gain the <em>Hesitation Is Weakness</em> maneuver.</p>
            </div>
            <div>
            {hesitationManeuver && (
                <img 
                    src={hesitationManeuver.maneuverImage} 
                    alt={hesitationManeuver.name} 
                    style={{ width: '75%', height: 'auto'}} 
                />
            )}
            </div>

            <div>
            <h3><u>1st Level: Shadow Step</u></h3>
            <p>Mustering the dark power within, you are consumed by black smoke, teleporting you away. You gain the <em>Shadow Step</em> maneuver.</p>
            </div>

            <div>
            {shadowStepManeuver && (
                <img 
                    src={shadowStepManeuver.maneuverImage} 
                    alt={shadowStepManeuver.name} 
                    style={{ width: '75%', height: 'auto'}} 
                />
            )}
            </div>
        </>
    )
};

export default Shadow;