import { useNavigate } from 'react-router-dom';

const ToolsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Tools & Resources</h2>
      <p>Helpful tools to enhance your CryptCrawler experience.</p>
      
      <h3>Spell & Skill Creator</h3>
      <p>Create new and custom spells and skills with ease.</p>
      <button onClick={() => navigate('/tools/spell-skill-creator')}>
        Launch Spell & Skill Creator
      </button>
    </>
  );
};

export default ToolsPage;
