const Tactician = () => {
    return (
        <>
            <h2>Tactician</h2>

            <div>
            <h3><u>Health</u></h3>
            <p>At 1st level, your DHP and your SHP is 10 + your WIL. Each time you level-up, your SHP increases by 5 + your WIL.</p>
            </div>

            <div>
            <h3><u>Skills</u></h3>
            <p>Stealth, then pick to skills from the following list: Acrobatics, Deception, Insight, Lockpicking, Pickpocketing, and Persuasion.</p>
            </div>

            <div>
            <h3><u>Kits</u></h3>
            <p>You can use martial kits.</p>
            </div>

            <div>
            <h3><u>1st Level: Opportunity</u></h3>
            <p>It is too easy to become distracted in battle, and you seem to be the only one to notice this. You have a heroic resource called opportunity, which you can spend to activate your powerful abilities. At the start of your turn, you gain 2 opportunity. Whenever you dodge an attack, you gain 1 opportunity. All unspent opportunity disappears at the end of an encounter.</p>
            </div>

            <div>
            <h3><u>1st Level: Parry</u></h3>
            <p>You know how to protect yourself and nearby allies. You gain the <em>parry</em> maneuver.</p>
            </div>

            <div>
            <h3><u>1st Level: Follow the Plan!</u></h3>
            <p>In the midst of combat, you can shout commands to your allies. You gain the <em>follow the plan!</em> maneuver.</p>
            </div>
        </>
    )
}

export default Tactician;