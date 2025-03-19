const Minstrel = () => {
    return (
        <>
            <h2>Minstrel</h2>

            <div>
            <h3>Prerequisites</h3>
            <p>A minstrel is a fantastical storyteller, interweaving different narratives into one cohesive tale. To be a master of myth and legend, you must meet the following prerequisites.</p>
            <ul>
                <li>You must have a CHA score of 3 or higher.</li>
                <li>You must have the <em>deception</em>, <em>performance</em>, or <em>persuasion</em> skill.</li>
                <li>You must know three or more languages.</li>
                <li>You must be known by at least three different names in three different regions of the world.</li>
            </ul>
            </div>

            <div>
            <h3><u>Health</u></h3>
            <p>At 1st level, your DHP and your SHP is 7 + your WIL. Each time you level-up, your SHP increases by 4 + your WIL.</p>
            </div>

            <div>
            <h3><u>1st Level: Drama</u></h3>
            <p>You control the narrative, coasting along the waves of tension and resolution. You have a heroic resource called drama, which you can spend to activate your powerful abilities. At the start of your turn, you gain 2 drama. Whenever a player rolls a critical failure or critical success, gain 1 drama. If a player dies, gain 10 drama. All unspent drama disappears at the end of an encounter.</p>
            </div>

            <div>
            <h3><u>1st Level: Captive Audience</u></h3>
            <p>The story you tell is so compelling, it can totally entrance your audience. You gain the <em>Captivation</em> maneuver.</p>
            </div>

            <div>
            <h3><u>1st Level: Plot Twist</u></h3>
            <p>In the midst of a story, you can alter the narrative by twisting the plot. You gain access to the <em>Plot Twist</em> maneuver.</p>
            </div>
        </>
    )
}

export default Minstrel;