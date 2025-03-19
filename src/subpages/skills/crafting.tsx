const Crafting = () => {
    return (
        <>
            <h2>Crafting</h2>
            
            <br />

            <div>
            <h3>Gadget Specialist</h3>
            <p dir="auto"><em>As great as you are you can't be everywhere at once.</em></p>
            <p dir="auto">During a long rest, you may choose a skill you are proficient in and create a gadget used to assist in that skill (for example a gadget assisting the investigation skill would be something like a magnifying glass, or search light). Creatures other than yourself can use a gadget to assist in the chosen skill, substituting their bonus with your own. The amount of active gadgets you can have are equal to your skill modifier.</p>
            </div>

            <div>
            <h3>Item Fusion</h3>
            <p dir="auto"><em>Through technical experimentation, you can fuse two items together.</em></p>
            <p dir="auto">During a long rest, you can take two magical items of the same type (light armor and light armor, or shortsword with shortword) and rarity, and fuse them together into a new item. To do so successfully, you must succeed on a crafting skill check, with a DC dependent on the rarity of the two items. For common items the DC is 10, and the DC increases by 5 for each level above that (uncommon DC 15, rare DC 20, very rare DC 25, legendary DC 30). If you fail your crafting check by a difference greater than five, then the items reject the fusion process and cannot be fused again. If you fail your crafting check by a difference of five, then the items fail to fuse but another attempt can be made during a different long rest. Fusing cursed items together can cause new curses to appear. You cannot fuse two artifact rarity items together.</p>
            </div>

            <div>
            <h3>Improvised Explosives</h3>
            <p dir="auto"><em>Tinkering can be dangerous when you know how to make explosives.</em></p>
            <p dir="auto">You gain the additional property avaliable for your magical tinkering feature: After a set trigger such as a command word, or physical contact with the item, the object explodes, forcing a DEX saving throw against your spell DC, for all creatures within a 10ft radius of the object. All who fail suffer Xd6 fire damage where X is your skill bonus. All who succeed, suffer half damage.</p>
            </div>

            <div>
            <h3>Magical Tinkering</h3>
            <p dir="auto"><em>You can imbue mundane objects with a magical spark.</em></p>
            <p dir="auto">Until you take a short or long rest, a small or medium non-magical item gains one of the following properties: Produces a magical colored light up to 10ft. Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long. The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away. A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.</p>
            </div>

            <div>
            <h3>Smoke Bomb</h3>
            <p dir="auto"><em>Tinkering can be dangerous when you know how to make smoke bombs.</em></p>
            <p dir="auto">You gain the additional property avaliable for your magical tinkering feature: After a set trigger such as a command word, or physical contact with the item, the object explodes into a thick smoke. A 10ft diameter smoke screen is created, centered around the object. The smoke screen breaks line of sight, conceals anything inside of it, and blinds any creatures inside of it. The smoke disappears naturally after 1 minute, or unless dispersed by a strong wind.</p>
            </div>
        </>
    )
};

export default Crafting;