const Persuasion = () => {
    return (
        <>
            <h2>Persuasion</h2>
            
            <br />

            <div>
            <h3>Bargainer</h3>
            <p dir="auto"><em>You know how to play the merchant's game.</em></p>
            <p dir="auto">You get an automatic 10% discount on all purchases from legal vendors.</p>
            </div>

            <div>
            <h3>Diplomatic Immunity</h3>
            <p dir="auto"><em>Your connections in high places allow you to travel unmolested.</em></p>
            <p dir="auto">You obtain diplomatic papers from the region you are originally from. These papers allow you to bypass toll roads, vistor taxes, and excuses you from most minor crimes. You only gain these benefits if your home nation is on good terms with the region you are in.</p>
            </div>

            <div>
            <h3>"I Know A Guy"</h3>
            <p dir="auto"><em>You have friends in every corner of the world.</em></p>
            <p dir="auto">[1/week]: You can proclaim that you 'know a guy' who may help with a particular circumstance. Include how you met this character and one of their quirks. Your DM will then invent a NPC connected to your past.</p>
            </div>

            <div>
            <h3>"He Called You Ugly Too!"</h3>
            <p dir="auto"><em>With enough antagonism, you can confuse your opponents into hitting each other.</em></p>
            <p dir="auto">[1/turn]: As an action, you can provoke a hostile creature within 60ft to attack one of it's friends. The target must make a WIS saving throw, DC 10 + your persuasion skill. On a failure, the target performs a melee attack against an adjacent creature it considers friendly. Additionally, the target becomes immune to this feature for the next day.</p>
            </div>
        </>
    )
};

export default Persuasion;