import { createManeuverSkillSlot, createTextSkillSlot, createMasterySkillSlot } from '../../utils/skill_utils';
import SkillTemplate from '../../components/skill_template';

const Medicine = () => {
    const row1 = [
        createManeuverSkillSlot("continual-recovery"),
        createManeuverSkillSlot("improvised-bandage"),
        createManeuverSkillSlot("scalpels-point"),
        createTextSkillSlot("+10 max HP"),
    ]
    const row2 = [
        createManeuverSkillSlot("blackjacket-sting"),
        createManeuverSkillSlot("resuscitation"),
    ]
    const row3 = [
        createManeuverSkillSlot("resuscitation"),
    ]
    const row4 = [
        createMasterySkillSlot("aesculapius", "/mastery-images/mastery-logos/AesculapiusMastery.png", "Aesculapius"),
        createMasterySkillSlot("flesh-sculptor", "/mastery-images/mastery-logos/FleshSculptorMastery.png", "Flesh Sculptor"),
        createMasterySkillSlot("toxicologist", "/mastery-images/mastery-logos/ToxicologistMastery.png", "Toxicologist"),
    ]

    return (
        <SkillTemplate 
            skillName="Medicine" 
            row1 = {row1}
            row2 = {row2}
            row3 = {row3}
            row4 = {row4}
        />
    );
};

export default Medicine;