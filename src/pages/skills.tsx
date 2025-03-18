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

      <h2>Intelligence</h2>

      <div className="cards-container">
        <ContentCard 
          title="Bartering" 
          imagePath="/skills-images/bartering_logo.png" 
          linkTo="/skills/bartering"
        />
      </div>
    </>
  );
};

export default SkillsPage;