import ContentCard from '../components/content_card';
import '../components/content_card.css';

const ClassesPage = () => {
  return (
    <>
      <h2>Character Classes</h2>
      <p>Choose from these distinctive character classes, each with unique abilities and playstyles.</p>
      
      <h3>Common Classes</h3>
      <div className="cards-container">
      <ContentCard 
          title="Conduit" 
          imagePath="/class-images/conduit_logo.png" 
          linkTo="/classes/conduit"
          description="Despite their promises, Gods and entities of beyond still interfere in the mortal world."
        /> 

      <ContentCard 
          title="Minstrel" 
          imagePath="/class-images/minstrel_logo.png" 
          linkTo="/classes/minstrel"
          description="Minstrels are poets, the authors of myth, writing the very adventure the party is in."
        /> 

      <ContentCard 
          title="Paragon" 
          imagePath="/class-images/paragon_logo.png" 
          linkTo="/classes/paragon"
          description="Bound by a powerful oath, Paragons seek to become the ideal they have sworn to."
        />

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

      <h3>Rare Classes</h3>
      <div className="cards-container">
      <ContentCard 
          title="Abnegate" 
          imagePath="/class-images/null_logo.png" 
          linkTo="/classes/abnegate"
          description="Born as a twin, an Abnegate is an anti-magical anomaly, blessed with supernatural physical power rather than magical gifts."
        /> 
      </div>
    </>
  );
};

export default ClassesPage;