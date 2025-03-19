const Warden = () => {
    return (
        <>
            <h2>Warden</h2>

            <div>
            <h3>Prerequisites</h3>
            <p>A warden is a stern protector of the land, equipped with enough practical wisdom to roam the wilderness alone. To a vagabond in green, you must meet the following prerequisites.</p>
            <ul>
                <li>You must have a WIS score of 2 or higher.</li>
                <li>You must have a DEX score of 2 or higher.</li>
                <li>You must have the <em>nature</em>, <em>stealth</em>, or <em>survival</em> skill.</li>
                <li>You must have a sworn enemy (either singular or as a type), which you are tasked with fending against.</li>
                <li>You must have a tie to nature, either in the form of an animal companion, trinket, or personal experience.</li>
            </ul>
            </div>

            <div>
            <h3><u>Health</u></h3>
            <p>At 1st level, your DHP and your SHP is 10 + your WIL. Each time you level-up, your SHP increases by 5 + your WIL.</p>
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

export default Warden;