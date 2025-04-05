import maneuverData from '../../data/maneuver_data';

const Dragonborn = () => {
    // Find the maneuver data
    const breathAcidManeuver = maneuverData.find(maneuver => maneuver.id === 'breath-weapon-acid');
    const breathFireManeuver = maneuverData.find(maneuver => maneuver.id === 'breath-weapon-fire');
    const breathIceManeuver = maneuverData.find(maneuver => maneuver.id === 'breath-weapon-ice');
    const breathLightningManeuver = maneuverData.find(maneuver => maneuver.id === 'breath-weapon-lightning');
    const sharpenedClawsManeuver = maneuverData.find(maneuver => maneuver.id === 'sharpened-claws');
    
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
                {breathAcidManeuver && (
                    <img 
                        src={breathAcidManeuver.maneuverImage} 
                        alt={breathAcidManeuver.name} 
                        style={{ width: '75%', height: 'auto'}}
                    />
                )}
                {breathFireManeuver && (
                    <img 
                        src={breathFireManeuver.maneuverImage} 
                        alt={breathFireManeuver.name} 
                        style={{ width: '75%', height: 'auto'}}
                    />
                )}
                {breathIceManeuver && (
                    <img 
                        src={breathIceManeuver.maneuverImage} 
                        alt={breathIceManeuver.name} 
                        style={{ width: '75%', height: 'auto'}}
                    />
                )}
                {breathLightningManeuver && (
                    <img 
                        src={breathLightningManeuver.maneuverImage} 
                        alt={breathLightningManeuver.name} 
                        style={{ width: '75%', height: 'auto'}}
                    />
                )}
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
            {sharpenedClawsManeuver && (
                <img 
                    src={sharpenedClawsManeuver.maneuverImage} 
                    alt={sharpenedClawsManeuver.name} 
                    style={{ width: '75%', height: 'auto'}} 
                />
            )}
            </div>

            </div>
        </>
    )
};

export default Dragonborn;