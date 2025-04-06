import ContentCard from '../components/content_card';
import ancestryData from '../data/ancestry_data';
import '../components/content_card.css';

const AncestriesPage = () => {
  // Filter ancestries by category
  const commonAncestries = ancestryData.filter(ancestry => 
    ["human", "elf", "dwarf", "draeling", "hartkin", "dragonborn"].includes(ancestry.id)
  );
  
  const exoticAncestries = ancestryData.filter(ancestry => 
    ["tabaxi", "harengon", "warforged", "kobold", "githyanki", "kenku"].includes(ancestry.id)
  );
  
  const monstrousAncestries = ancestryData.filter(ancestry => 
    ["goblin", "hobgoblin", "orc", "lizardfolk", "changeling"].includes(ancestry.id)
  );
  
  return (
    <>
      <h2>Character Ancestries</h2>
      <p>The world of CryptCrawler features a diverse array of ancestries, each with their own history, culture, and abilities.</p>
      
      <h3>Common Ancestries</h3>
      <div className="cards-container">
        {commonAncestries.map(ancestry => (
          <ContentCard
            key={ancestry.id}
            id={ancestry.id}
            title={ancestry.name}
            imagePath={ancestry.imagePath}
            linkTo={ancestry.pageRoute}
            description={ancestry.description}
            className="race-card"
          />
        ))}
      </div>
      
      <hr />
      
      <h3>Exotic Ancestries</h3>
      <div className="cards-container">
        {exoticAncestries.map(ancestry => (
          <ContentCard
            key={ancestry.id}
            id={ancestry.id}
            title={ancestry.name}
            imagePath={ancestry.imagePath}
            linkTo={ancestry.pageRoute}
            description={ancestry.description}
            className="race-card"
          />
        ))}
      </div>
      
      <hr />
      
      <h3>Monstrous Ancestries</h3>
      <div className="cards-container">
        {monstrousAncestries.map(ancestry => (
          <ContentCard
            key={ancestry.id}
            id={ancestry.id}
            title={ancestry.name}
            imagePath={ancestry.imagePath}
            linkTo={ancestry.pageRoute}
            description={ancestry.description}
            className="race-card"
          />
        ))}
      </div>
    </>
  );
};

export default AncestriesPage;