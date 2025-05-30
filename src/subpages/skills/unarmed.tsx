import SkillTemplate from '../../components/skill_template';
import { createManeuverSkillSlot, createMasterySkillSlot } from '../../utils/skill_utils';


const Unarmed = () => {
    const row1 = [
        createManeuverSkillSlot("not-surprised"),
    ]
    const row4 = [
        createMasterySkillSlot("lucid-dreamer", "/mastery-images/mastery-logos/LucidDreamerMastery.png", "Lucid Dreamer"),
    ]
    return (
        <SkillTemplate 
            skillName="Perception" 
            row1={row1}
            row4={row4}
        />
    );
};

export default Unarmed;