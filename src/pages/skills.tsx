import ContentCard from '../components/content_card';
import skillData from '../data/skill_data';
import '../components/content_card.css';

const SkillsPage = () => {
  // Filter skills by category
  const presenceSkills = skillData.filter(skill => skill.skill_category === "presence");
  const finesseSkills = skillData.filter(skill => skill.skill_category === "finesse");
  const reasonSkills = skillData.filter(skill => skill.skill_category === "reason");
  const intuitionSkills = skillData.filter(skill => skill.skill_category === "intuition");
  const mightSkills = skillData.filter(skill => skill.skill_category === "might"); 
  
  return (
    <>
      <h2>Presence</h2>
      <div className="cards-container">
        {presenceSkills.map(skill => (
          <ContentCard 
            key={skill.id}
            id={skill.id}
            title={skill.name}
            imagePath={skill.imagePath}
            linkTo={skill.pageRoute}
            description={skill.description}
          />
        ))}
      </div>

      <br />

      <h2>Finesse</h2>
      <div className="cards-container">
        {finesseSkills.map(skill => (
          <ContentCard 
            key={skill.id}
            id={skill.id}
            title={skill.name}
            imagePath={skill.imagePath}
            linkTo={skill.pageRoute}
            description={skill.description}
          />
        ))}
      </div>

      <h2>Might</h2>
      <div className="cards-container">
        {mightSkills.map(skill => (
          <ContentCard 
            key={skill.id}
            id={skill.id}
            title={skill.name}
            imagePath={skill.imagePath}
            linkTo={skill.pageRoute}
            description={skill.description}
          />
        ))}
      </div>

      <br />

      <h2>Reason</h2>
      <div className="cards-container">
        {reasonSkills.map(skill => (
          <ContentCard 
            key={skill.id}
            id={skill.id}
            title={skill.name}
            imagePath={skill.imagePath}
            linkTo={skill.pageRoute}
            description={skill.description}
          />
        ))}
      </div>

      <br />

      <h2>Intuition</h2>
      <div className="cards-container">
        {intuitionSkills.map(skill => (
          <ContentCard 
            key={skill.id}
            id={skill.id}
            title={skill.name}
            imagePath={skill.imagePath}
            linkTo={skill.pageRoute}
            description={skill.description}
          />
        ))}
      </div>
    </>
  );
};

export default SkillsPage;