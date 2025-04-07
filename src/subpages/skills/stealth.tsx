import SkillTemplate from '../../components/skill_template';
import { createManeuverSkillSlot, createTextSkillSlot } from '../../utils/skill_utils';

const Stealth = () => {
    // Create row1 with the 5 existing maneuvers using our utility function
    const row1 = [

        createManeuverSkillSlot("improvised-cover"),
        createManeuverSkillSlot("silent-takedown"),
        createManeuverSkillSlot("sneak-attack"),
        createManeuverSkillSlot("steady-shot"),
        createTextSkillSlot ("", "+10ft movement"),
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