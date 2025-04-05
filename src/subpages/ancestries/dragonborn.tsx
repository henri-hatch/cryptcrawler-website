const Dragonborn = () => {
    return (
        <>
            <h2>Dragonborn</h2>
            <p><em>"Tall and proud, Dragonborn are rarely seen beyond their homeland of Draconia. Despite their dragonic appearance, the loyalty of Dragonborn have allowed them to go unmolested in most societies. Their booming voices demand the attention of the crowds around them. Torn between their two creator's lawful and chaotic natures, Dragonborn will defend their convictions to the end."</em></p>
            <p>Dragonborn are <span style={{ color: '#0057e1' }}>rare</span>, and are considered <span style={{ color: '#575757' }}>ordinary</span> by most societies.</p>
            <hr />

            <div>
            <h3><u>Breath Weapon</u></h3>
            <p>Gain one of the following <em>permanent</em> manuevers.</p>
            <ul>            
                <img src="/manuever-images/Breath Weapon (Acid).png" alt="Acid Breath Weapon" style={{ width: '75%', height: 'auto'}} />
                <img src="/manuever-images/Breath Weapon (Fire).png" alt="Fire Breath Weapon" style={{ width: '75%', height: 'auto'}} />
                <img src="/manuever-images/Breath Weapon (Ice).png" alt="Ice Breath Weapon" style={{ width: '75%', height: 'auto'}} />
                <img src="/manuever-images/Breath Weapon (Lightning).png" alt="Lightning Breath Weapon" style={{ width: '75%', height: 'auto'}} />

            </ul>
            </div>

            <div>
            <h3><u>Dragonic Resistance</u></h3>
            <p>Due to the elemental nature of your species, you naturally resistant against one type of elemental damage. You gain resistance against acid, cold, fire, or lightning damage.</p>
            </div>

            <div>
            <h3><u>Sharpened Claws</u></h3>
            <p>Due to your natural weapons, you always have weapons at your disposal. You <em>permanently</em> gain the <em>Sharpened Claws</em> manuever.</p>

            <div>
            <img src="/manuever-images/Sharpened Claws.png" alt="Sharpened Claws" style={{ width: '75%', height: 'auto'}} />
            </div>

            </div>
        </>
    )
};

export default Dragonborn;