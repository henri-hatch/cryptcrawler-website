import { createManeuverSkillSlot, createTextSkillSlot } from '../../utils/skill_utils';
import SkillTemplate from '../../components/skill_template';

const Medicine = () => {
    const row1 = [
        createManeuverSkillSlot("improvised-bandage"),
        createTextSkillSlot("+10 max HP")
    ]

    return (
        <SkillTemplate 
            skillName="Medicine" 
            row1 = {row1}
        />
    );
};

export default Medicine;