import ContentCard from '../components/content_card';
import '../components/content_card.css';

const ClassesPage = () => {
  return (
    <>
      <h2>Character Classes</h2>
      <p>Choose from these distinctive character classes, each with unique abilities and playstyles.</p>
      
      <h3>Available Classes</h3>
      <div className="cards-container">
        <ContentCard 
          title="Shadow" 
          imagePath="/class-images/shadow_logo.png" 
          linkTo="/classes/shadow"
          description="Masters of thievery and sneak, Shadows excel from, well, the shadows."
        />
        
        <ContentCard
          title="Tactician"
          imagePath="/class-images/tactician_logo.png"
          linkTo="/classes/tactician"
          description="Tacticians are the masterminds of the battlefield, using strategy and cunning to outwit their foes."
        />
      </div>
    </>
  );
};

export default ClassesPage;