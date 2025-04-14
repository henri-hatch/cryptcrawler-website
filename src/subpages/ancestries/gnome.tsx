import maneuverData from '../../data/maneuver_data';
import { ManeuverLink } from '../../components/maneuver_modal';

const Gnome = () => {
    return (
        <>
            <h2>Gnome</h2>
            <p><em>"Ostracized from the surface world, Gnomes are semi-aquatic creatures hiding in caves and coves under Keldon. For the vast majority of Gnomish history, they have been oppressed and enslaved by many surface-dwellers. Recently, many nations have made an active effort to include Gnomes in common society."</em></p>
            <p>Gnomes are <span style={{ color: '#0057e1' }}>rare</span>, and are considered <span style={{ color: '#ed5c2f' }}>ordinary</span> by most societies.</p>
            <hr />

            <div>
            <h3><u>Darkvision</u></h3>
            <p>Due to your strong magical nature, your sight is stronger than many others. You gain <u>darkvision</u> up to 60-ft.</p>
            </div>
        </>
    )
};

export default Gnome;