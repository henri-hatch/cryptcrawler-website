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

      <h3>Character Creator & Manager</h3>
      <p>Create 5e CryptCrawler Characters and manage them digitally!</p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <button onClick={() => navigate('/tools/character-creator')}>
          Open Character Creator
        </button>
        <button onClick={() => navigate('/tools/character-manager')}>
          Open Character Manager
        </button>
      </div>
    </>
  );
};

export default ToolsPage;
