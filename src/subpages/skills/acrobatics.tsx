import { createManeuverSkillSlot, createTextSkillSlot, createMasterySkillSlot } from '../../utils/skill_utils';
import SkillTemplate from '../../components/skill_template';

const Acrobatics = () => {
    const row1 = [
        createManeuverSkillSlot ("cunning-dodge"),
        createManeuverSkillSlot ("expeditious-retreat"),
        createManeuverSkillSlot ("spider-climb"),
        createManeuverSkillSlot ("trip-attack"),
        createTextSkillSlot ("+1d12 dodge rating"),
    ]
    const row2 = [
        createManeuverSkillSlot ("hit-and-run")
    ]
    const row3 = [
        createManeuverSkillSlot ("evasion")
    ]
    const row4 = [
        createMasterySkillSlot("contortionist", "/mastery-images/mastery-logos/ContortionistMastery.png", "Contortionist"),
    ]
    return (
        <SkillTemplate 
            skillName="Acrobatics" 
            row1 = {row1}
            row2 = {row2}
            row3 = {row3}
            row4 = {row4}
        />
    );
};

export default Acrobatics;