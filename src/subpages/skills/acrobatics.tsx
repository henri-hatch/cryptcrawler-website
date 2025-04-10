import { createManeuverSkillSlot, createTextSkillSlot } from '../../utils/skill_utils';
import SkillTemplate from '../../components/skill_template';

const Acrobatics = () => {
    const row1 = [
        createManeuverSkillSlot ("cunning-dodge"),
        createManeuverSkillSlot ("expeditious-retreat"),
        createManeuverSkillSlot ("spider-climb"),
        createManeuverSkillSlot ("trip-attack"),
        createTextSkillSlot ("+1d12 dodge rating"),
    ]
    const row3 = [
        createManeuverSkillSlot ("evasion")
    ]
    return (
        <SkillTemplate 
            skillName="Acrobatics" 
            row1 = {row1}
            row3 = {row3}
        />
    );
};

export default Acrobatics;