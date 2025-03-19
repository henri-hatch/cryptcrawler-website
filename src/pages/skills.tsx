import ContentCard from '../components/content_card';
import '../components/content_card.css';

const SkillsPage = () => {
  return (
    <>
      <h2>Charisma</h2>

      <div className="cards-container">
        <ContentCard 
          title="Persuasion" 
          imagePath="/skills-images/persuasion_logo.png" 
          linkTo="/skills/persuasion"
        />
      </div>

      <br />

      <h2>Dexterity</h2>

      <div className="cards-container">
        <ContentCard 
        title="Stealth" 
        imagePath="/skills-images/stealth_logo.png" 
        linkTo="/skills/stealth"
      />
    </div>

      <br />

      <h2>Intelligence</h2>

      <div className="cards-container">
        <ContentCard 
          title="Appraisal" 
          imagePath="/skills-images/bartering_logo.png" 
          linkTo="/skills/bartering"
        />
      </div>

      <br />

      <h2>Wisdom</h2>

      <div className="cards-container">
        <ContentCard 
          title="Medicine" 
          imagePath="/skills-images/medicine_logo.png" 
          linkTo="/skills/medicine"
        />
      </div>
    </>
  );
};

export default SkillsPage;