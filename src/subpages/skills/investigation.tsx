import { createManeuverSkillSlot, createTextSkillSlot } from '../../utils/skill_utils';
import SkillTemplate from '../../components/skill_template';

const Investigation = () => {
    const row1 = [
        createManeuverSkillSlot("loot-goblin"),

    ]
    const row3 = [
        createManeuverSkillSlot("premeditation"),

    ]
    return (
        <SkillTemplate 
            skillName="Investigation" 
            row1={row1}
            row3={row3} 

        />
    );
};

export default Investigation;