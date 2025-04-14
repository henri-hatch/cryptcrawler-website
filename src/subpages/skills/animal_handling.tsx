import { createManeuverSkillSlot, createTextSkillSlot } from '../../utils/skill_utils';
import SkillTemplate from '../../components/skill_template';

const Animal_Handling = () => {
    const row1 = [
        createManeuverSkillSlot("summon animal companion"),
    ]

    return (
        <SkillTemplate 
            skillName="Animal Handling" 
            row1 = {row1}
        />
    );
};

export default Animal_Handling;