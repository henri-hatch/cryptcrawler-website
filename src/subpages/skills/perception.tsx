import SkillTemplate from '../../components/skill_template';
import { createManeuverSkillSlot } from '../../utils/skill_utils';


const Perception = () => {
    const row1 = [
        createManeuverSkillSlot("not-surprised"),
    ]
    return (
        <SkillTemplate 
            skillName="Perception" 
            row1={row1}
        />
    );
};

export default Perception;