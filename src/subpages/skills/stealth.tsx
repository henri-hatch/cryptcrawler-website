import SkillTemplate from '../../components/skill_template';
import { createManeuverSkillSlot } from '../../utils/skill_utils';

const Stealth = () => {
    // Create row1 with the 5 existing maneuvers using our utility function
    const row1 = [
        createManeuverSkillSlot("cunning-dodge"),
        createManeuverSkillSlot("evasion"),
        createManeuverSkillSlot("improvised-cover"),
        createManeuverSkillSlot("sneak-attack"),
        createManeuverSkillSlot("steady-shot")
    ];
    
    return (
        <SkillTemplate 
            skillName="Stealth" 
            row1={row1}
            // row2 and row3 will use the default "aa" placeholders
        />
    );
};

export default Stealth;