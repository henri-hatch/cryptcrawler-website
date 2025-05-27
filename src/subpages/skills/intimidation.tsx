import { createManeuverSkillSlot, createTextSkillSlot } from '../../utils/skill_utils';
import SkillTemplate from '../../components/skill_template';

const Intimidation = () => {
    const row1 = [
        createManeuverSkillSlot ("goad"),
        createTextSkillSlot ("+1 presence score"),

    ]
    const row2 = [
        createManeuverSkillSlot ("terrifying-presence"),

    ]
    return (
        <SkillTemplate 
            skillName="Intimidation" 
            row1 = {row1}
            row2 = {row2}
        />
    );
};

export default Intimidation;