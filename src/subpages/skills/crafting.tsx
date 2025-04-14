import { createManeuverSkillSlot, createTextSkillSlot } from '../../utils/skill_utils';
import SkillTemplate from '../../components/skill_template';

const Crafting = () => {
    const row1 = [
        createManeuverSkillSlot("create-mechanical-companion"),
        createManeuverSkillSlot("eureka!"),
        createManeuverSkillSlot("improvised-flash-bomb"),
        createManeuverSkillSlot("item-fusion"),
    ]
    const row2 = [
        createManeuverSkillSlot("gadget-specialist"),
        createManeuverSkillSlot("improvised-fire-bomb"),
    ]
    return (
        <SkillTemplate 
            skillName="Crafting" 
            row1 = {row1}
            row2 = {row2}
        />
    );
};

export default Crafting;