const Medicine = () => {
    return (
        <>
            <h2>Medicine</h2>
            
            <br />

            <div>
            <h3>Field Medic</h3>
            <p dir="auto"><em>On the battlefield a minute can be the difference between life and death.</em></p>
            <p dir="auto">As a reaction, you can move towards a friendly creature. If you end your movement adjacent to your target, you can heal 2d6 SHP from them.</p>
            </div>

            <div>
            <h3>Poisoner</h3>
            <p dir="auto"><em>In order to cure poisons, you incidentally learn how to apply them as well.</em></p>
            <p dir="auto">You can coat a weapon in poison as a bonus action, instead of an action. You gain proficiency with alchemy tools if you weren't already. By spending 10 minutes and 3gp worth of materials, you can craft a dangerous poison. Any weapon coated with this poison deals an additional 2d8 poison damage on it's next attack.</p>
            </div>

            <div>
            <h3>Potion Freak</h3>
            <p dir="auto"><em>Your addiction to potions has its benefits.</em></p>
            <p dir="auto">Whenever you gain a benefical effect from a potion, the effect lasts an additional 10 minutes.</p>
            </div>

            <div>
            <h3>Staff Surgeon</h3>
            <p dir="auto"><em>The surgeon of an adventuring party is a thankless job, but a necessary one.</em></p>
            <p dir="auto">Whenever your party takes a long rest, you can perform emergency surgery on up to eight willing creatures: healing them 1d4 DHP upon completion. </p>
            </div>

            <div>
            <h3>Swan Song</h3>
            <p dir="auto"><em>Surronded by death makes you incredibly familiar with it.</em></p>
            <p dir="auto">[1/week]: Whenever you would make a death saving throw, you can instead instantly revive yourself at 1 DHP. </p>
            </div>
        </>
    )
};

export default Medicine;