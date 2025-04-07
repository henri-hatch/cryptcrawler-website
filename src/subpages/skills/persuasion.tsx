import SkillTemplate from '../../components/skill_template';
import { createManeuverSkillSlot } from '../../utils/skill_utils';

const Persuasion = () => {
    const row2 = [
        createManeuverSkillSlot("i-know-a-guy")
    ]
    return (
        <SkillTemplate 
            skillName="Persuasion"
            row2={row2} 
        />
    );
};

export default Persuasion;