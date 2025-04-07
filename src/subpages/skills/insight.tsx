import SkillTemplate from '../../components/skill_template';
import { createManeuverSkillSlot } from '../../utils/skill_utils';

const Insight = () => {
    const row1 = [
        createManeuverSkillSlot("lie-detector")
    ]

    return (
        <SkillTemplate 
            skillName="Insight"
            row1={row1} 
        />
    );
};

export default Insight;