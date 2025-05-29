import SkillTemplate from '../../components/skill_template';
import { createMasterySkillSlot, createManeuverSkillSlot, createTextSkillSlot } from '../../utils/skill_utils';

const Persuasion = () => {
    const row1 = [
        createManeuverSkillSlot("bargainer"),
        createManeuverSkillSlot("disarming-smile"),
        createManeuverSkillSlot("he-called-you-ugly-too"),
        createManeuverSkillSlot("inspiration"),
        createManeuverSkillSlot("look-over-there"),
    ]

    const row2 = [
       createManeuverSkillSlot("counterpoint"),
       createManeuverSkillSlot("gift-of-gab"),
       createManeuverSkillSlot("i-know-a-guy"),
       createManeuverSkillSlot("storming-shout"),
       createManeuverSkillSlot("to-me!"),
    ]

    const row3 = [
        createManeuverSkillSlot("at-your-expense"), 
        createManeuverSkillSlot("dramatic-intercession"),
        createManeuverSkillSlot("laugh-it-off"),       
        createManeuverSkillSlot("suggestion"),
        createTextSkillSlot("+1 presence score")
    ]

    const row4 = [
        createMasterySkillSlot("charge-daffaires", "/mastery-images/mastery-logos/ChargedAffairesMastery.png", "Charge d'Affaires"),
        createMasterySkillSlot("devils-advocate", "/mastery-images/mastery-logos/DevilsAdvocateMastery.png", "Devil's Advocate"),
        createMasterySkillSlot("midas-touch", "/mastery-images/mastery-logos/MerchantMastery.png", "Midas Touch"),
    ]
    return (
        <SkillTemplate 
            skillName="Persuasion"
            row1={row1}
            row2={row2}
            row3={row3}
            row4={row4}
        />
    );
};

export default Persuasion;