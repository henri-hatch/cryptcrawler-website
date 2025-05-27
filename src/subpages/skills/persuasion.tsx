import SkillTemplate from '../../components/skill_template';
import { createMasterySkillSlot, createManeuverSkillSlot } from '../../utils/skill_utils';

const Persuasion = () => {
    const row1 = [
        createManeuverSkillSlot("bargainer"),
        createManeuverSkillSlot("he-called-you-ugly-too")
    ]

    const row2 = [
        createManeuverSkillSlot("i-know-a-guy")
    ]

    const row4 = [
        createMasterySkillSlot("charge-daffaires", "/mastery-images/mastery-logos/ChargedAffairesMastery.png", "Charge d'Affaires"),
    ]
    return (
        <SkillTemplate 
            skillName="Persuasion"
            row1={row1}
            row2={row2}
            row4={row4}
        />
    );
};

export default Persuasion;