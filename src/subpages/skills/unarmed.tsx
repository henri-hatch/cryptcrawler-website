import { createManeuverSkillSlot } from '../../utils/skill_utils';
import SkillTemplate from '../../components/skill_template';

const Unarmed = () => {
    const row1 = [
        createManeuverSkillSlot("flurry-of-blows"),
    ]
    return (
        <SkillTemplate 
            skillName="Unarmed" 
            row1 = {row1}
        />
    );
};

export default Unarmed;