import ContentCard from '../components/content_card';
import classData from '../data/class_data';
import '../components/content_card.css';

const ClassesPage = () => {
  // Filter classes by category
  const commonClasses = classData.filter(classItem => classItem.category === "common");
  const rareClasses = classData.filter(classItem => classItem.category === "rare");
  
  return (
    <>
      <h2>Character Classes</h2>
      <p>Choose from these distinctive character classes, each with unique abilities and playstyles.</p>
      
      <h3>Common Classes</h3>
      <div className="cards-container">
        {commonClasses.map(classItem => (
          <ContentCard 
            key={classItem.id}
            id={classItem.id}
            title={classItem.name}
            imagePath={classItem.imagePath}
            linkTo={classItem.pageRoute}
            description={classItem.description}
          />
        ))}
      </div>

      <h3>Rare Classes</h3>
      <div className="cards-container">
        {rareClasses.map(classItem => (
          <ContentCard 
            key={classItem.id}
            id={classItem.id}
            title={classItem.name}
            imagePath={classItem.imagePath}
            linkTo={classItem.pageRoute}
            description={classItem.description}
          />
        ))}
      </div>
    </>
  );
};

export default ClassesPage;