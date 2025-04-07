import SkillTemplate from '../../components/skill_template';
import { createManeuverSkillSlot } from '../../utils/skill_utils';

const History = () => {
    const row1 = [
        createManeuverSkillSlot("book-worm")
    ]

    return (
        <SkillTemplate 
            skillName="History"
            row1={row1}
        />
    );
};

export default History;