import SkillTemplate from '../../components/skill_template';
import { createManeuverSkillSlot } from '../../utils/skill_utils';

const Deception = () => {
    const row1 = [
        createManeuverSkillSlot("confounding-strike"),
        createManeuverSkillSlot("cutting-words"),
    ]

    return (
        <SkillTemplate 
            skillName="Deception"
            row1={row1} 
        />
    );
};

export default Deception;