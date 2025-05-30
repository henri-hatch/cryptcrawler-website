import { createManeuverSkillSlot, createTextSkillSlot } from '../../utils/skill_utils';
import SkillTemplate from '../../components/skill_template';

const Unarmed = () => {
    const row1 = [
        createManeuverSkillSlot("fisticuffs"),
        createManeuverSkillSlot("counterstrike"),
        createManeuverSkillSlot("titan-kick"),
        createManeuverSkillSlot("return-to-sender"),
        createTextSkillSlot("+1 might score")
    ]
    const row2 = [
        createManeuverSkillSlot("delayed-strike"),
        createManeuverSkillSlot("wind-step-palm"),
        createManeuverSkillSlot("sucker-punch"),
    ]
    return (
        <SkillTemplate 
            skillName="Acrobatics" 
            row1 = {row1}
            row2 = {row2}
        />
    );
};

export default Unarmed;