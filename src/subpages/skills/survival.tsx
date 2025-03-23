const Survival = () => {
    return (
        <>
            <h2>Survival</h2>
            
            <br />

            <div>
            <h3>Favored Terrain</h3>
            <p dir="auto"><em>You have studied a specific kind of terrain to overcome its challenges.</em></p>
            <p dir="auto">Choose a type of terrain to specialize in.</p>
            <ul>
                <li><b>Aquatic.</b> You gain a swim speed equal to your movement speed. If you already have a swim speed, you gain a +10ft bonus to your swim speed.</li>
                <li><b>Arctic.</b> You aren't affected by severe or extreme cold, and you gain resistance against cold damage.</li>
                <li><b>Desert.</b> You aren't affected by severe or extreme cold, and you gain resistance against fire damage.</li>
                <li><b>Forest</b>, <b>Mountain</b>, or <b>Underground.</b> You gain a climb speed equal to your movement speed. If you already have a climb speed, you gain a +10ft bonus to your climb speed.</li>
                <li><b>Plains.</b> You gain a +10ft bonus to your movement speed.</li>
                <li><b>Swamp.</b> You aren't affected by disease, and you gain resistance against poison damage.</li>
            </ul>
            </div>

            <div>
            <h3>Natural Explorer</h3>
            <p dir="auto"><em>You are a master of navigating the natural world.</em></p>
            <p dir="auto">You gain the following benefits.</p>
            <ul>
                <li>You ignore difficult terrain.</li>
                <li>You have advantage on initative rolls.</li>
                <li>Whenever you forage, you find twice as much food as you normally would.</li>
            </ul>
            </div>

            <div>
            <h3>Snare Specialist</h3>
            <p dir="auto"><em>As a veteran ranger, you are able to construct clever rope traps to entangle and restrain your foes.</em></p>
            <p dir="auto">You can spend 1 minutes and 10gp worth of materials to create a ensnaring trap on a flat surface. When a creature steps on the trap, they must make a DEX saving throw, DC 8 + your WIS score + your skill modifier. If they fail, they become restrained until the succeed the saving throw. at the start of their turn. You can conceal a trap by covering with nearby foliage or debris. A creature have a passive perception of, or roll higher than 10 + your crafting skill score to detect the trap.</p>
            </div>

            <div>
            <h3>Talented Swimmer</h3>
            <p dir="auto"><em>You glide through water as if it were air.</em></p>
            <p dir="auto">You gain a swim speed equal to your walking speed.</p>
            </div>

        </>
    )
};

export default Survival;