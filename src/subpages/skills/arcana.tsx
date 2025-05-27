import { createMasterySkillSlot, createLinkSkillSlot } from '../../utils/skill_utils';
import SkillTemplate from '../../components/skill_template';

const Arcana = () => {
    const row1 = [
        createLinkSkillSlot("Tier I Arcane Spell", "/skills/crafting/arcana-spells"),
        createLinkSkillSlot("Tier I Arcane Spell", "/skills/crafting/arcana-spells"),
        createLinkSkillSlot("Tier I Arcane Spell", "/skills/crafting/arcana-spells"),
        createLinkSkillSlot("Tier I Arcane Spell", "/skills/crafting/arcana-spells"),
        createLinkSkillSlot("Tier I Arcane Spell", "/skills/crafting/arcana-spells"),


    ]
    const row2 = [
        createLinkSkillSlot("Tier II Arcane Spell", "/skills/crafting/arcana-spells-2"),
        createLinkSkillSlot("Tier II Arcane Spell", "/skills/crafting/arcana-spells-2"),
        createLinkSkillSlot("Tier II Arcane Spell", "/skills/crafting/arcana-spells-2"),
        createLinkSkillSlot("Tier II Arcane Spell", "/skills/crafting/arcana-spells-2"),
        createLinkSkillSlot("Tier II Arcane Spell", "/skills/crafting/arcana-spells-2"),

    ]
    const row3 = [
        createLinkSkillSlot("Tier III Arcane Spell", "/skills/crafting/arcana-spells-3"),    
        createLinkSkillSlot("Tier III Arcane Spell", "/skills/crafting/arcana-spells-3"),  
        createLinkSkillSlot("Tier III Arcane Spell", "/skills/crafting/arcana-spells-3"),  
        createLinkSkillSlot("Tier III Arcane Spell", "/skills/crafting/arcana-spells-3"),  
        createLinkSkillSlot("Tier III Arcane Spell", "/skills/crafting/arcana-spells-3"),  
    
    ]
    const row4 = [
            createMasterySkillSlot("/mastery-images/ArchmageMastery.png", "/skills/arcana/archmage-mastery", "Archmage"),
    ]
    return (
        <SkillTemplate 
            skillName="Arcana" 
            row1 = {row1}
            row2 = {row2}
            row3 = {row3}
            row4 = {row4}
        />
    );
};

export default Arcana;