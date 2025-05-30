import { createManeuverSkillSlot, createMasterySkillSlot } from '../../utils/skill_utils';
import SkillTemplate from '../../components/skill_template';

const Unarmed = () => {
    const row1 = [
        createManeuverSkillSlot("fisticuffs"),
        createManeuverSkillSlot("counterstrike"),
        createManeuverSkillSlot("titan-kick"),
        createManeuverSkillSlot("return-to-sender"),
        createManeuverSkillSlot("not-surprised"),
    ]
    const row2 = [
        createManeuverSkillSlot("delayed-strike"),
        createManeuverSkillSlot("wind-step-palm"),
        createManeuverSkillSlot("sucker-punch"),
    ]
    const row4 = [
        createMasterySkillSlot("lucid-dreamer", "/mastery-images/mastery-logos/LucidDreamerMastery.png", "Lucid Dreamer"),
    ]
    return (
        <SkillTemplate 
            skillName="Acrobatics" 
            row1 = {row1}
            row2 = {row2}
            row4 = {row4}
        />
    );
};

export default Unarmed;