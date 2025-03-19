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
          description="Gentlemen I know it looks bad, but have you considered... dying??"
        />
      </div>

      <br />

      <h2>Dexterity</h2>

      <div className="cards-container">
        <ContentCard 
        title="Stealth" 
        imagePath="/skills-images/stealth_logo.png" 
        linkTo="/skills/stealth"
        description="What was that? Probably just the wind. Enter fortresses totally undetected with the Stealth skill."
      />
    </div>

      <br />

      <h2>Intelligence</h2>

      <div className="cards-container">
        <ContentCard 
          title="Appraisal" 
          imagePath="/skills-images/bartering_logo.png" 
          linkTo="/skills/bartering"
          description="Some see trash, but you see treasure. Increase your purchasing power with the Appraisal skill."
        />
        <ContentCard 
          title="Crafting" 
          imagePath="/skills-images/crafting_logo.png" 
          linkTo="/skills/crafting"
          description="Bombs are less of a science and more of an art. Increase your utility with the Crafting skill."
        />
      </div>

      <br />

      <h2>Wisdom</h2>

      <div className="cards-container">
        <ContentCard 
          title="Medicine" 
          imagePath="/skills-images/medicine_logo.png" 
          linkTo="/skills/medicine"
          description="Adventuring is never safe. Everyone needs a doctor, and you are better than nothing."
        />
      </div>
    </>
  );
};

export default SkillsPage;