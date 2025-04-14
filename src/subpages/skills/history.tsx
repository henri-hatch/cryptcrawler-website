import SkillTemplate from '../../components/skill_template';
import { createManeuverSkillSlot, createTextSkillSlot } from '../../utils/skill_utils';

const History = () => {
    const row1 = [
        createManeuverSkillSlot("book-worm"),
        createManeuverSkillSlot("discovered-weakness"),
        createTextSkillSlot("+1 language")
    ]

    return (
        <SkillTemplate 
            skillName="History"
            row1={row1}
        />
    );
};

export default History;