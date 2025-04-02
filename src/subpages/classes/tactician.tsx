const Tactician = () => {
    return (
        <>
            <h2>Tactician</h2>

            <div>
            <h3>Prerequisites</h3>
            <p>A Tactician is a master of battle, constantly seeking for holes in the battlefield. To be a strategic mastermind, you must meet the following prerequisites.</p>
            <ul>
                <li>Win a battle.</li>
                <li>Earn the respect or support of your comrades in arms.</li>
                <li>Earn the respect or fear from one of your enemies.</li>
            </ul>
            </div>


            <div>
            <h3>Breakthrough</h3>
            <p>As a Tactician, <em>breakthrough</em> opportunities often involve:</p>
            <ul>
                <li>Beat otherwise impossible odds.</li>
                <li>Executing your plan perfectly.</li>
                <li>Risk your life for the sake of one of your comrades.</li>
                <li>Revealing to your opponent that you were one step ahead all along.</li>

            </ul>
            </div>

            <div>
            <h3><u>1st Level: Opportunity</u></h3>
            <p>It is too easy to become distracted in battle, and you seem to be the only one to notice this. You have a heroic resource called opportunity, which you can spend to activate your powerful abilities. Outside of combat, you have opportunity equal to your INT score. If you lose some or all of your opportunity outside of combat, it takes 10 minutes to regain it. At the start of your turn, you gain 2 opportunity. Whenever you use the <em>Parry</em>, you gain 1 opportunity. All unspent opportunity disappears at the end of an encounter.</p>
            </div>

            <div>
            <h3><u>1st Level: Parry</u></h3>
            <p>You know how to protect yourself and nearby allies. You gain the <em>Parry</em> maneuver.</p>
            </div>
            <div>
            <img src="/manuever-images/Parry.png" alt="Parry" style={{ width: '75%', height: 'auto'}} />
            </div>

            <div>
            <h3><u>1st Level: Tactical Invitation</u></h3>
            <p>Distraction is the greatest poison against organization. You gain the <em>Tactical Invitation</em> maneuver.</p>
            </div>
            <div>
            <img src="/manuever-images/Tactical Invitation.png" alt="Tactical Invitation" style={{ width: '75%', height: 'auto'}} />
            </div>
        </>
    )
}

export default Tactician;