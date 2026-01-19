import ContentCard from '../components/content_card';
import codexData from '../data/codex_data';
import '../components/content_card.css';

const CodicesPage = () => {
  // Filter codices by category
  const commonCodices = codexData.filter(codexItem => codexItem.codex_category === "common");
  const rareCodices = codexData.filter(codexItem => codexItem.codex_category === "rare");
  
  return (
    <>
      <h2>Character Codices</h2>
      <p>Choose from these distinctive codices, each with unique abilities and playstyles.</p>
      
      <h3>Common Codices</h3>
      <div className="cards-container">
        {commonCodices.map(codexItem => (
          <ContentCard 
            key={codexItem.id}
            id={codexItem.id}
            title={codexItem.name}
            imagePath={codexItem.imagePath}
            linkTo={codexItem.pageRoute}
            description={codexItem.description}
          />
        ))}
      </div>

      <h3>Rare Codices</h3>
      <div className="cards-container">
        {rareCodices.map(codexItem => (
          <ContentCard 
            key={codexItem.id}
            id={codexItem.id}
            title={codexItem.name}
            imagePath={codexItem.imagePath}
            linkTo={codexItem.pageRoute}
            description={codexItem.description}
          />
        ))}
      </div>
    </>
  );
};

export default CodicesPage;
