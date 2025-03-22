import ContentCard from '../components/content_card';
import '../components/content_card.css';

const SkillsPage = () => {
  return (
    <>
      <h2>Charisma</h2>

      <div className="cards-container">
      <ContentCard 
          title="Deception" 
          imagePath="/skills-images/deception_logo.png" 
          linkTo="/skills/deception"
          description="Spiders aren't the only creatures to weave webs. Create complex lies and get away with it with Deception."
        />
        <ContentCard 
          title="Performance" 
          imagePath="/skills-images/performance_logo.png" 
          linkTo="/skills/performance"
          description="Look at me! Have you seen some juggle so many knifes? Yes? How about now? Still? Geez tough crowd."
        />
        <ContentCard 
          title="Persuasion" 
          imagePath="/skills-images/persuasion_logo.png" 
          linkTo="/skills/persuasion"
          description="Gentlemen I know it looks bad, but have you considered not dying? Such an incredible speech is core to Persuasion."
        />
      </div>

      <br />

      <h2>Dexterity</h2>

      <div className="cards-container">
      <ContentCard 
        title="Lockpicking" 
        imagePath="/skills-images/lockpicking_logo.png" 
        linkTo="/skills/lockpicking"
        description="I'm in. All the best stuff is often found behind locked doors. You are able to crack open locked containers with ease."
      />
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
        <ContentCard 
          title="Investigation" 
          imagePath="/skills-images/investigation_logo.png" 
          linkTo="/skills/investigation"
          description="Something strange is afoot. Investigation allows you to comb through a crime scene or the pockets of your enemies."
        />
      </div>

      <br />

      <h2>Wisdom</h2>

      <div className="cards-container">
      <ContentCard 
          title="Animal Handling" 
          imagePath="/skills-images/animalhandling_logo.png" 
          linkTo="/skills/animal_handling"
          description="Everyone needs a friend, and you tend to find them outside. Animals flock to you and your charm."
        />
        <ContentCard 
          title="Medicine" 
          imagePath="/skills-images/medicine_logo.png" 
          linkTo="/skills/medicine"
          description="Adventuring is never safe. Everyone needs a doctor, and you are better than nothing."
        />
        <ContentCard 
          title="Survival" 
          imagePath="/skills-images/survival_logo.png" 
          linkTo="/skills/survival"
          description="There is no adventure if you get lost. As a expert in survival you know how to properly navigate, forage, and hunt in the wilderness."
        />
      </div>
    </>
  );
};

export default SkillsPage;