import SkillTemplate from '../../components/skill_template';
import { createManeuverSkillSlot } from '../../utils/skill_utils';

const Performance = () => {
        const row1 = [
            createManeuverSkillSlot("inspiration")
        ]
    
        return (
            <SkillTemplate 
                skillName="Performance"
                row1={row1} 
            />
        );
};

export default Performance;