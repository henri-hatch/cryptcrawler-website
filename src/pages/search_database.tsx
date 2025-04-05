import { useState, useEffect, useMemo } from 'react';
import ContentCard from '../components/content_card';
import ancestryData from '../data/ancestry_data';
import classData from '../data/class_data';
import skillData from '../data/skill_data';
import itemData from '../data/item_data';
import maneuverData from '../data/maneuver_data';
import '../components/content_card.css';
import './search_database.css';

interface SearchableItem {
  id: string;
  name: string;
  description: string;
  dataSource: string;
  category?: string[];
  imagePath?: string;
  pageRoute?: string;
  maneuverImage?: string;
  gpCost?: number;
  weight?: number;
}

// Combine all searchable data
const SearchDatabasePage = () => {
  // States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [visibleResults, setVisibleResults] = useState(20);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  
  // Update the allData useMemo to use type assertions
  const allData = useMemo<SearchableItem[]>(() => {
    return [
      ...ancestryData.map(item => ({ ...item, dataSource: 'ancestry' })),
      ...classData.map(item => ({ ...item, dataSource: 'class' })),
      ...skillData.map(item => ({ ...item, dataSource: 'skill' })),
      ...itemData.map(item => ({ ...item, dataSource: 'item' })),
      ...maneuverData.map(item => ({ ...item, dataSource: 'maneuver' }))
    ] as SearchableItem[];
  }, []);
  
  // Get unique categories across all items
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    
    allData.forEach(item => {
      if (Array.isArray(item.category)) {
        item.category.forEach((cat: string) => categories.add(cat));
      }
    });
    
    return Array.from(categories).sort();
  }, [allData]);

  // Filter results based on search term and selected categories
  const filteredResults = useMemo(() => {
    return allData.filter(item => {
      // Search term filter
      const matchesSearch = searchTerm === '' || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // Category filter
      const matchesCategory = selectedCategories.length === 0 || 
        (item.category && item.category.some(cat => selectedCategories.includes(cat)));
      
      return matchesSearch && matchesCategory;
    });
  }, [allData, searchTerm, selectedCategories]);

  // Randomize and limit visible results
  const displayResults = useMemo(() => {
    let results = [...filteredResults];
    
    // If no search term and no categories selected, randomize the initial results
    if (searchTerm === '' && selectedCategories.length === 0) {
      results = [...results].sort(() => Math.random() - 0.5);
    }
    
    return results.slice(0, visibleResults);
  }, [filteredResults, visibleResults, searchTerm, selectedCategories]);

  // Reset visible results when search changes
  useEffect(() => {
    setVisibleResults(20);
  }, [searchTerm, selectedCategories]);

  // Handle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  // Handle showing more results
  const showMore = () => {
    setVisibleResults(prev => prev + 20);
  };

  // Handle card click for items and maneuvers
  const handleCardClick = (item: any) => {
    if ((item.dataSource === 'item' && !item.pageRoute) || item.dataSource === 'maneuver') {
      setSelectedItem(item);
      setShowModal(true);
    }
  };

  // Function to copy maneuver image to clipboard
  const copyManeuverToClipboard = async (imageUrl: string) => {
    try {
      // Create a canvas element
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      // Wait for the image to load
      await new Promise<void>((resolve) => {
        img.onload = () => {
          // Set canvas dimensions to match the image
          canvas.width = img.width;
          canvas.height = img.height;
          
          // Draw the image on the canvas
          ctx?.drawImage(img, 0, 0);
          resolve();
        };
        img.crossOrigin = "anonymous"; // This is important for CORS issues
        img.src = imageUrl;
      });
      
      // Convert canvas to blob and copy to clipboard
      canvas.toBlob(async (blob) => {
        if (blob) {
          try {
            // Modern clipboard API
            await navigator.clipboard.write([
              new ClipboardItem({
                [blob.type]: blob
              })
            ]);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
          } catch (err) {
            console.error('Failed to copy image: ', err);
          }
        }
      });
    } catch (err) {
      console.error('Error copying to clipboard: ', err);
    }
  };

  return (
    <div className="search-database-container">
      <h2>Search CryptCrawler Database</h2>
      <p>Explore ancestries, classes, skills, items, and more in the CryptCrawler database.</p>
      
      <div className="search-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="category-filters">
          <h3>Filter by Category:</h3>
          <div className="category-buttons">
            {allCategories.map(category => (
              <button
                key={category}
                className={`category-button ${selectedCategories.includes(category) ? 'selected' : ''}`}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="search-results-stats">
        <p>
          {filteredResults.length} {filteredResults.length === 1 ? 'result' : 'results'} 
          {searchTerm && ` for "${searchTerm}"`}
          {selectedCategories.length > 0 && ` in categories: ${selectedCategories.join(', ')}`}
        </p>
      </div>
      
      <div className="search-results">
        {displayResults.length > 0 ? (
          <div className="cards-container">
            {displayResults.map((item, index) => {
              // Get the appropriate image path
              const imageSource = item.imagePath || item.maneuverImage || `/category-icons/${item.dataSource}.png`;

              return (
                <ContentCard 
                  key={`${item.dataSource}-${item.id}-${index}`}
                  id={item.id}
                  title={item.name}
                  imagePath={imageSource}
                  linkTo={item.pageRoute}
                  description={item.description}
                  isSelectable={(item.dataSource === 'item' && !item.pageRoute) || item.dataSource === 'maneuver'}
                  onSelect={() => handleCardClick(item)}
                  className={`search-card ${item.dataSource}-card`}
                />
              );
            })}
          </div>
        ) : (
          <div className="no-results">
            <p>No results found. Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
      
      {filteredResults.length > visibleResults && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={showMore}>
            Show More Results
          </button>
        </div>
      )}
      
      {/* Modal for displaying item details */}
      {showModal && selectedItem && (
        <div className="item-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="item-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="item-modal-header">
              <h2>{selectedItem.name}</h2>
              <button className="modal-close-button" onClick={() => setShowModal(false)}>×</button>
            </div>
            
            <div className="item-modal-body">
              {selectedItem.dataSource === 'maneuver' ? (
                /* Maneuver Modal - Just show the image for easy copying */
                <div className="maneuver-modal-image">
                  <img 
                    src={selectedItem.maneuverImage} 
                    alt={selectedItem.name} 
                    style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                    title="Click to copy to clipboard"
                    onClick={() => copyManeuverToClipboard(selectedItem.maneuverImage)}
                  />
                  {copySuccess && <p className="copy-success">Copied to clipboard!</p>}
                </div>
              ) : (
                /* Item Modal - Show details formatted as requested */
                <>
                  {selectedItem.imagePath && (
                    <div className="item-modal-image">
                      <img src={selectedItem.imagePath} alt={selectedItem.name} />
                    </div>
                  )}
                  
                  <div className="item-details">
                    {selectedItem.gpCost !== undefined && selectedItem.weight !== undefined && (
                      <p className="item-stats"><strong>Cost:</strong> {selectedItem.gpCost} gp | <strong>Weight:</strong> {selectedItem.weight} lbs</p>
                    )}
                    
                    <p className="item-description">{selectedItem.description}</p>
                    
                    {selectedItem.category && (
                      <p className="item-categories"><strong>Categories:</strong> {Array.isArray(selectedItem.category) 
                        ? selectedItem.category.join(', ') 
                        : selectedItem.category}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchDatabasePage;