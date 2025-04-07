import SkillTemplate from '../../components/skill_template';
import { createManeuverSkillSlot, createTextSkillSlot } from '../../utils/skill_utils';

const Pickpocketing = () => {
    const row1 = [
        createManeuverSkillSlot ("deep-pockets"),
        createManeuverSkillSlot ("sideswipe"),
        createManeuverSkillSlot ("midas-touch"),
        createTextSkillSlot ("", "+1d12 dodge rating"),
        createTextSkillSlot ("", "+1 finesse score")
    ]
    return (
        <SkillTemplate 
            skillName="Pickpocketing" 
            row1={row1}
        />
    );
};

export default Pickpocketing;