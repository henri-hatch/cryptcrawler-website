const Tactician = () => {
    return (
        <>
            <h2>Tactician</h2>

            <div>
            <h3>Prerequisites</h3>
            <p>A tactician is a master of battle, constantly seeking for holes in the battlefield. To be a strategic mastermind, you must meet the following prerequisites.</p>
            <ul>
                <li>You must have a INT score of 2 or higher.</li>
                <li>You must have a DEX or STR score of 2 or higher.</li>
                <li>You must have the <em>heavy armor</em>, <em>insight</em>, <em>light armor</em>, or <em>history</em> skill.</li>
                <li>You must have prior experience commanding or planning on a battlefield.</li>
            </ul>
            </div>

            <div>
            <h3><u>Health</u></h3>
            <p>At 1st level, your DHP and your SHP is 10 + your WIL. Each time you level-up, your SHP increases by 5 + your WIL.</p>
            </div>

            <div>
            <h3><u>1st Level: Opportunity</u></h3>
            <p>It is too easy to become distracted in battle, and you seem to be the only one to notice this. You have a heroic resource called opportunity, which you can spend to activate your powerful abilities. Outside of combat, you have opportunity equal to your INT score. If you lose some or all of your opportunity outside of combat, it takes 10 minutes to regain it. At the start of your turn, you gain 2 opportunity. Whenever you dodge or perfect block an attack, you gain 1 opportunity. All unspent opportunity disappears at the end of an encounter.</p>
            </div>

            <div>
            <h3><u>1st Level: Parry</u></h3>
            <p>You know how to protect yourself and nearby allies. You gain the <em>Parry</em> maneuver.</p>
            </div>

            <div>
            <h3><u>1st Level: Tactical Invitation</u></h3>
            <p>Distraction is the greatest poison against organization. You gain the <em>Tactical Invitation</em> maneuver.</p>
            </div>
        </>
    )
}

export default Tactician;