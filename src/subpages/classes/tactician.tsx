import maneuverData from '../../data/maneuver_data';
import { ManeuverLink } from '../../components/maneuver_modal';

const Tactician = () => {
    const attackOfOpportunityManeuver = maneuverData.find(m => m.id === "attack-of-opportunity");
    const parryManeuver = maneuverData.find(m => m.id === "parry");
    const tacticalInvitationManeuver = maneuverData.find(m => m.id === "tactical-invitation");

    return (
        <>
            <h2>Tactician</h2>
            
            <div>
            <h3>Prerequisites</h3>
            <p>A Tactician is a master of battle, constantly seeking for holes in the battlefield. To be a strategic mastermind, you must meet the following prerequisites.</p>
            <ul>
                <li>Win a battle.</li>
                <li>Earn the respect or support of your comrades in arms.</li>
                <li>Earn the respect or fear from one of your enemies.</li>
            </ul>
            </div>

            
            <div>
            <h3>Breakthrough</h3>
            <p>As a Tactician, <em>breakthrough</em> opportunities often involve:</p>
            <ul>
                <li>Beat otherwise impossible odds.</li>
                <li>Executing your plan perfectly.</li>
                <li>Risk your life for the sake of one of your comrades.</li>
                <li>Revealing to your opponent that you were one step ahead all along.</li>

            </ul>
            </div>

            <div>
            <h3><u>1st Level: Opportunity</u></h3>
            <p>It is too easy to become distracted in battle, and you seem to be the only one to notice this. You have a heroic resource called opportunity, which you can spend to activate your powerful abilities. Outside of combat, you have opportunity equal to your INT score. If you lose some or all of your opportunity outside of combat, it takes 10 minutes to regain it. At the start of your turn, you gain 2 opportunity. Whenever you use the <em>Parry</em>, you gain 1 opportunity. All unspent opportunity disappears at the end of an encounter.</p>
            </div>
            
            <div>
                <h3>1st Level: Attack of Opportunity</h3>
                {attackOfOpportunityManeuver && (
                    <p>You gently stop your decent, allowing you to reach the ground unharmed. You gain the <ManeuverLink maneuver={attackOfOpportunityManeuver} /> maneuver.</p>
                )}
            </div>

            <div>
                <h3>1st Level: Parry</h3>
                {parryManeuver && (
                    <p>You know how to protect yourself and nearby allies. You gain the <ManeuverLink maneuver={parryManeuver} /> maneuver.</p>
                )}
            </div>

            <div>
                <h3>2nd Level: Tactical Invitation</h3>
                {tacticalInvitationManeuver && (
                    <p>Distraction is the greatest poison against organization. You gain the <ManeuverLink maneuver={tacticalInvitationManeuver} /> maneuver.</p>
                )}
            </div>
        </>
    )
};

export default Tactician;