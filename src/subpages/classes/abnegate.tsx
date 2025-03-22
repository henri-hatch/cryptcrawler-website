const Abnegate = () => {
    return (
        <>
            <h2>Abnegate</h2>

            <div>
            <h3>Prerequisites</h3>
            <p>An Abnegate is an anti-magical anomaly. When twins are born into a sorcerous family, one inherits the magical powers of a Talent while the other is totally immune to magic. To be a walking Godblind, you must meet the following prerequisites.</p>
            <ul>
                <li>You must have a INT score of 2 or higher.</li>
                <li>You must have a DEX score of 2 or higher.</li>
                <li>You must have the <em>acrobatics</em>, <em>light armor</em>, or <em>stealth</em> skill.</li>
                <li>You must be a twin born with sorcerous blood in your family, with your sibling being a <u><a href="https://cryptcrawler-5e.pages.dev/classes/talent">Talent</a></u>.</li>
                <li>You must be known by at least three different names in three different regions of the world.</li>
            </ul>
            </div>

            <div>
            <h3><u>Health</u></h3>
            <p>At 1st level, your DHP and your SHP is 7 + your WIL. Each time you level-up, your SHP increases by 4 + your WIL.</p>
            </div>

            <div>
            <h3><u>1st Level: Instinct</u></h3>
            <p>As the opposite of your magical twin, the magic you would have inherited has instead bolstered your physical abilities. You have a heroic resource called instinct, which you can spend to activate your powerful abilities. Outside of combat, you have instinct equal to your INT score. If you lose some or all of your instinct outside of combat, it takes 10 minutes to regain it. At the start of your turn, you gain 2 instinct. Whenever dodge or perfect block an attack, you gain 1 instinct. All unspent instinct disappears at the end of an encounter.</p>
            </div>

            <div>
            <h3><u>1st Level: Anti-Magic Inheritance</u></h3>
            <p>As a anti-magical anomaly, your presence negates magic around you. You gain the following benefits, even while you are <u>unconscious</u>.</p>
            <ul>
                <li>You automatically succeed all saving throws from magical effects/manuevers.</li>
                <li>You are truly immune to all damage from magical effects/manuevers.</li>
                <li>You cannot be targeted by magical effects/manuevers.</li>
                <li>You are not affected by magical effects/manuevers.</li>
                <li>You cannot attune to magical items.</li>
                <li>All magical items lose their magical effect while in your inventory.</li>
            </ul>
            <p>This anti-magical effect also expands to include any physical space you occupy. There are incredibly rare exceptions to your anomalous nature, they are currently only theoretical and the topic of much debate amongst academic circles.</p>
            </div>

            <div>
            <h3><u>1st Level: Ghost in the Machine</u></h3>
            <p>Your magical inheritance instead manifests as incredible physical power. You do not roll for initative. Instead you may interject amidst combat, and choose to take any of your actions, movement, or reactions at the start or end of any character's turn. Your actions, movement, and reactions are restored at the start of the round.</p>
            </div>
        </>
    )
}

export default Abnegate;