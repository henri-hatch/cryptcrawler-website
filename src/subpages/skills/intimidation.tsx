import { createManeuverSkillSlot, createTextSkillSlot } from '../../utils/skill_utils';
import SkillTemplate from '../../components/skill_template';

const Intimidation = () => {
    const row1 = [
        createManeuverSkillSlot ("goad"),
        createTextSkillSlot ("", "+1 presence score"),

    ]
    return (
        <SkillTemplate 
            skillName="Intimidation" 
            row1 = {row1}
        />
    );
};

export default Intimidation;