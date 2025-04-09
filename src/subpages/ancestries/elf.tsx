import maneuverData from '../../data/maneuver_data';
import { ManeuverLink } from '../../components/maneuver_modal';

const Elf = () => {
    const mistyStepManeuver = maneuverData.find(m => m.id === "misty-step");
    const underdarkVenomManeuver = maneuverData.find(m => m.id === "underdark-venom");
    const frenziedChargeManeuver = maneuverData.find(m => m.id === "frenzied-charge");
    const detectMagicManeuver = maneuverData.find(m => m.id === "detect-magic");
    const bladeDanceManeuver = maneuverData.find(m => m.id === "blade-dance");
    const goadManeuver = maneuverData.find(m => m.id === "goad");
    const snowblindManeuver = maneuverData.find(m => m.id === "snowblind");
    const eurekaManeuver = maneuverData.find(m => m.id === "eureka!");
    const anticipatedDefenseManeuver = maneuverData.find(m => m.id === "anticipated-defense");




    return (
        <>
            <h2>Elf</h2>
            <p><em>"Incredibly naturalistic and free-spirited, the long lived elves are seen as agents of the nature around them. Created by the gods Corellon and Laera, each elf can track their lineage to the original ten children of Corellon. With the arrival of humanity, elves have been pushed back from their ancestral lands into the corners of the wilderness."</em></p>
            <p>Elves are <span style={{ color: '#407c51' }}>common</span>, and are considered <span style={{ color: '#575757' }}>ordinary</span> by most societies.</p>
            <hr />

            <div>
            <h3><u>Darkvision</u></h3>
            <p>Due to your strong magical nature, your sight is stronger than many others. You gain <u>darkvision</u> up to 60-ft.</p>
            </div>

            <div>
            <h3><u>Ageless Form</u></h3>
            <p>As a descendent of Corellon and Laera, you have been blessed with supernatural life. You are immune all diseases and are immune to the <u>poisoned</u> and <u>sleep</u> conditions.</p>
            </div>

            <div>
            <h3><u>Unique Lineage</u></h3>
            <p>Elfs fall one of ten unique lineages, each with their own unique magical blessings. Choose one of the following linages and gain its benefits:</p>
            <ul>
                {frenziedChargeManeuver && (<li><b>Blood elf</b>. You gain the <ManeuverLink maneuver={frenziedChargeManeuver}/> maneuver.</li>)}
                {bladeDanceManeuver && (<li><b>Dark elf</b>. You gain the <ManeuverLink maneuver={bladeDanceManeuver}/> maneuver.</li>)}
                {underdarkVenomManeuver && (<li><b>Drow</b>. You gain the <ManeuverLink maneuver={underdarkVenomManeuver}/> maneuver.</li>)}
                {detectMagicManeuver && (<li><b>Drow</b>. You gain the <ManeuverLink maneuver={detectMagicManeuver}/> maneuver.</li>)}
                {mistyStepManeuver && (<li><b>Moon elf</b>. You gain the <ManeuverLink maneuver={mistyStepManeuver}/> maneuver.</li>)}
                {goadManeuver && (<li><b>Red elf</b>. You gain the <ManeuverLink maneuver={goadManeuver}/> maneuver.</li>)}
                {snowblindManeuver && (<li><b>Snow elf</b>. You gain the <ManeuverLink maneuver={snowblindManeuver}/> maneuver.</li>)}
                {eurekaManeuver && (<li><b>Sun elf</b>. You gain the <ManeuverLink maneuver={eurekaManeuver}/> maneuver.</li>)}
                {anticipatedDefenseManeuver && (<li><b>Wood elf</b>. You gain the <ManeuverLink maneuver={anticipatedDefenseManeuver}/> maneuver.</li>)}
            </ul>
            </div>
        </>
    )
};

export default Elf;