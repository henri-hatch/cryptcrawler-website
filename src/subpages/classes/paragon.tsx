const Paragon = () => {
    return (
        <>
            <h2>Paragon</h2>

            <div>
            <h3>Prerequisites</h3>
            <p>A paragon is a warrior of deep conviction, bound by and powered by a magical oath. To be an oathkeeper, you must meet the following prerequisites.</p>
            <ul>
                <li>You must have a CHA score of 2 or higher.</li>
                <li>You must have a STR score of 2 or higher.</li>
                <li>You must have the <em>heavy armor</em>, <em>insight</em>, <em>persuasion</em>, or <em>religion</em> skill.</li>
                <li>You must have an oath, which you made at the lowest moment in your life. This oath is the source of your power, and your conviction to keep it fuels your magical abilities and supernatural feats. Breaking your oath can cause you to lose your abilities.</li>
                <li>You must have an personal ideal for your oath: either something you believe perfectly embodies your oath, or something which is the total opposite of it.</li>
            </ul>
            </div>

            <div>
            <h3><u>Health</u></h3>
            <p>At 1st level, your DHP and your SHP is 10 + your WIL. Each time you level-up, your SHP increases by 5 + your WIL.</p>
            </div>

            <div>
            <h3><u>1st Level: Conviction</u></h3>
            <p>As you are tested, your belief and conviction in your oath only grows. You have a heroic resource called conviction, which you can spend to activate your powerful abilities. Outside of combat, you have conviction equal to your CHA score. If you lose some or all of your conviction outside of combat, it takes 10 minutes to regain it. At the start of your turn, you gain 2 convicition. If you are <u>bloodied</u>, you gain 3 conviction at the start of your turn. All unspent conviction disappears at the end of an encounter.</p>
            </div>

            <div>
            <h3><u>1st Level: Righteous Smite</u></h3>
            <p>Fueled by your conviction you reign down righteous judgement on your foes. You gain the <em>Righteous Smite</em> maneuver.</p>
            </div>

            <div>
            <h3><u>1st Level: Sense Intent</u></h3>
            <p>With your dedication to your pledge, you can sense the intent of others. You gain the <em>Sense Intent</em> maneuver.</p>
            </div>
        </>
    )
}

export default Paragon;