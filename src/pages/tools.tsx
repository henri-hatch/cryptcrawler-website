import { useNavigate } from 'react-router-dom';

const ToolsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Tools & Resources</h2>
      <p>Helpful tools to enhance your CryptCrawler experience.</p>
      
      <h3>Maneuver Creator</h3>
      <p>Create new and custom spells and skills with ease.</p>
      <button onClick={() => navigate('/tools/maneuver-creator')}>
        Launch Maneuver Creator
      </button>

      <h3>Dice Roller</h3>
      <p>Roll virtual dice for your game sessions.</p>
      <button onClick={() => navigate('/tools/dice-roller')}>
        Open Dice Roller
      </button>
    </>
  );
};

export default ToolsPage;
