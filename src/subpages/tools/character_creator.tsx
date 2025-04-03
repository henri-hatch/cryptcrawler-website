import React, { useState, useEffect } from 'react';
import './character_creator.css';
import ContentCard from '../../components/content_card';
import ancestryData from '../../data/ancestry_data';
import skillData from '../../data/skill_data';
import originData, { getEquipmentDetails } from '../../data/origin_data';

// Core data types
interface CharacterStats {
  might: number;
  finesse: number;
  fortitude: number;
  reason: number;
  intuition: number;
  presence: number;
}

interface Skill {
  skill_id: string;
  skill_name: string;
}

interface Character {
  name: string;
  ancestry: string;
  alignment: string;
  stats: CharacterStats;
  skills: Skill[];
  dodge: string;
  block: string;
  max_hitpoints: number;
  current_hitpoints: number;
  class: string;
  level: number;
  initiative: number;
  movement: number;
  wounds: number;
  library: any[];
  inventory: any[];
  inventory_capacity: number;
  current_inventory_weight: number;
  origin: string[];
}

// Alignment data definition
const ALIGNMENTS = [
  { id: 'Lawful Good', name: 'Lawful Good', abbreviation: 'LG', description: 'Honor and compassion' },
  { id: 'Neutral Good', name: 'Neutral Good', abbreviation: 'NG', description: 'Goodness above all' },
  { id: 'Chaotic Good', name: 'Chaotic Good', abbreviation: 'CG', description: 'Freedom and kindness' },
  { id: 'Lawful Neutral', name: 'Lawful Neutral', abbreviation: 'LN', description: 'Order above all else' },
  { id: 'True Neutral', name: 'True Neutral', abbreviation: 'N', description: 'Balance in all things' },
  { id: 'Chaotic Neutral', name: 'Chaotic Neutral', abbreviation: 'CN', description: 'Freedom above all' },
  { id: 'Lawful Evil', name: 'Lawful Evil', abbreviation: 'LE', description: 'Methodical domination' },
  { id: 'Neutral Evil', name: 'Neutral Evil', abbreviation: 'NE', description: 'Selfish ambition' },
  { id: 'Chaotic Evil', name: 'Chaotic Evil', abbreviation: 'CE', description: 'Destructive freedom' }
];

// Skill categories
const SKILL_CATEGORIES = ["presence", "finesse", "reason", "intuition"];

// Default character values
const DEFAULT_CHARACTER: Character = {
  name: '',
  ancestry: '',
  alignment: 'True Neutral',
  stats: {
    might: 0,
    finesse: 0,
    fortitude: 0,
    reason: 0,
    intuition: 0,
    presence: 0
  },
  skills: [{skill_id: '', skill_name: ''}],
  dodge: '1d12',
  block: '1d4',
  max_hitpoints: 25,
  current_hitpoints: 25,
  class: 'hero',
  level: 1,
  initiative: 0,
  movement: 30,
  wounds: 0,
  library: [],
  inventory: [],
  inventory_capacity: 50,
  current_inventory_weight: 0,
  origin: []
};

const DEFAULT_ALLOCATED_STATS = {
  might: null,
  finesse: null,
  fortitude: null,
  reason: null,
  intuition: null,
  presence: null
};

const CharacterCreator: React.FC = () => {
  // Core state
  const [currentStep, setCurrentStep] = useState(0);
  const [character, setCharacter] = useState<Character>(DEFAULT_CHARACTER);
  const [allocatedStats, setAllocatedStats] = useState<{[key: string]: number | null}>(DEFAULT_ALLOCATED_STATS);
  const [originPoints, setOriginPoints] = useState(5);
  
  // UI state
  const [animating, setAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('forward');
  
  // Stats configuration
  const availableStatValues = [3, 3, 2, 1, 1, 0];
  
  // Update derived values when stats change
  useEffect(() => {
    if (allocatedStats.finesse !== null && allocatedStats.might !== null) {
      setCharacter(prev => ({
        ...prev,
        initiative: allocatedStats.finesse ?? 0,
        inventory_capacity: 50 + (10 * (allocatedStats.might ?? 0))
      }));
    }
  }, [allocatedStats.finesse, allocatedStats.might]);
  
  // Set wide content layout
  useEffect(() => {
    const contentDiv = document.querySelector('.content');
    if (contentDiv) {
      contentDiv.className = 'content-wide';
    }
    return () => {
      if (contentDiv) contentDiv.className = 'content';
    };
  }, []);

  // Helper function to find origin item by ID
  const findOriginItem = (itemId: string) => {
    // First check if it's equipment
    if (originData.equipment.some(item => item.id === itemId)) {
      const equipmentDetails = getEquipmentDetails(itemId);
      return equipmentDetails ? { item: equipmentDetails, category: 'equipment' } : { item: null, category: null };
    }
    
    return { item: null, category: null };
  };

  // Step validation
  const validateCurrentStep = () => {
    switch (currentStep) {
      case 0: return character.name.trim() !== '';
      case 1: return character.ancestry !== '';
      case 2: return character.alignment !== '';
      case 3: return Object.values(allocatedStats).every(val => val !== null);
      case 4: return true;
      case 5: return character.skills[0].skill_id !== '';
      default: return true;
    }
  };

  // Navigation handlers
  const handleNext = () => {
    if (validateCurrentStep()) {
      setAnimationDirection('forward');
      setAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setAnimating(false);
      }, 300);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setAnimationDirection('backward');
      setAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev - 1);
        setAnimating(false);
      }, 300);
    }
  };
  
  // Input handlers
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter(prev => ({ ...prev, name: e.target.value }));
  };
  
  const handleAncestrySelection = (ancestryId: string) => {
    setCharacter(prev => ({ ...prev, ancestry: ancestryId }));
  };
  
  const handleAlignmentSelection = (alignmentId: string) => {
    setCharacter(prev => ({ ...prev, alignment: alignmentId }));
  };
  
  const handleSkillSelection = (skillId: string) => {
    const selectedSkill = skillData.find(skill => skill.id === skillId);
    setCharacter(prev => ({
      ...prev,
      skills: [{ 
        skill_id: skillId,
        skill_name: selectedSkill?.name || ''
      }]
    }));
  };
  
  const handleStatAllocation = (statName: keyof CharacterStats, value: number | null) => {
    setAllocatedStats(prev => ({ ...prev, [statName]: value }));
    setCharacter(prev => ({
      ...prev,
      stats: { ...prev.stats, [statName]: value !== null ? value : 0 }
    }));
  };
  
  const handleOriginItemSelect = (itemId: string, itemCost: number) => {
    if (character.origin.includes(itemId)) {
      // Deselect item
      setCharacter(prev => ({
        ...prev,
        origin: prev.origin.filter(id => id !== itemId)
      }));
      setOriginPoints(prev => prev + itemCost);
    } else if (originPoints >= itemCost) {
      // Select item if enough points
      setCharacter(prev => ({
        ...prev,
        origin: [...prev.origin, itemId]
      }));
      setOriginPoints(prev => prev - itemCost);
    }
  };
  
  // Calculate available stat values
  const getAvailableStatValues = () => {
    const usedValues = Object.values(allocatedStats).filter(val => val !== null) as number[];
    
    // Count occurrences
    const valueCounts: Record<number, number> = {};
    usedValues.forEach(value => {
      valueCounts[value] = (valueCounts[value] || 0) + 1;
    });
    
    // Count total allowed
    const totalAllowedCounts: Record<number, number> = {};
    availableStatValues.forEach(value => {
      totalAllowedCounts[value] = (totalAllowedCounts[value] || 0) + 1;
    });
    
    // Calculate remaining available
    const availableCounts: Record<number, number> = {};
    availableStatValues.forEach(value => {
      const used = valueCounts[value] || 0;
      const total = totalAllowedCounts[value] || 0;
      availableCounts[value] = total - used;
    });
    
    return availableCounts;
  };
  
  // Export character data
  const exportCharacter = () => {
    const finalCharacter = {
      ...character,
      initiative: character.stats.finesse,
      inventory_capacity: 50 + (10 * character.stats.might)
    };
    
    const blob = new Blob([JSON.stringify(finalCharacter, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${character.name.trim() || 'character'}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  
  // Render step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Name
        return (
          <div className="form-step">
            <h2>What is your character's name?</h2>
            <input
              type="text"
              value={character.name}
              onChange={handleNameChange}
              placeholder="Enter character name"
              className="form-input"
            />
          </div>
        );
      
      case 1: // Ancestry
        return (
          <div className="form-step ancestry-selection-step">
            <h2>What is your character's ancestry?</h2>
            <div className="ancestry-cards-container">
              {ancestryData.map(ancestry => (
                <ContentCard
                  key={ancestry.id}
                  id={ancestry.id}
                  title={ancestry.name}
                  imagePath={ancestry.imagePath}
                  description={ancestry.description}
                  isSelectable={true}
                  isSelected={character.ancestry === ancestry.id}
                  onSelect={() => handleAncestrySelection(ancestry.id)}
                  className={`race-card ancestry-card ${character.ancestry === ancestry.id ? 'selected' : ''}`}
                />
              ))}
            </div>
          </div>
        );
      
      case 2: // Alignment
        return (
          <div className="form-step alignment-selection-step">
            <h2>What is your character's alignment?</h2>
            <div className="alignment-grid">
              {ALIGNMENTS.map(alignment => (
                <div 
                  key={alignment.id}
                  className={`alignment-card ${character.alignment === alignment.id ? 'selected' : ''}`}
                  onClick={() => handleAlignmentSelection(alignment.id)}
                >
                  {character.alignment === alignment.id && <div className="selection-indicator">✓</div>}
                  <h3>{alignment.name}</h3>
                  <p>{alignment.abbreviation}</p>
                  <p>{alignment.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 3: // Stats
        const availableCounts = getAvailableStatValues();
        const statKeys = Object.keys(character.stats) as Array<keyof CharacterStats>;
        
        return (
          <div className="form-step">
            <h2>What are your character's beginning stats?</h2>
            <p>Assign the following values to your attributes:</p>
            
            <div className="available-stats">
              <div className="stat-values">
                {[...new Set(availableStatValues)].map(value => (
                  <div key={value} className="stat-value">
                    +{value} <span className="count">
                      × {availableCounts[value] || 0}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="stat-allocation">
              {statKeys.map(statKey => {
                const currentValue = allocatedStats[statKey];
                return (
                  <div key={statKey} className="stat-row">
                    <label>{statKey.charAt(0).toUpperCase() + statKey.slice(1)}</label>
                    <div className="stat-buttons">
                      {[...new Set(availableStatValues)].map(value => {
                        const isDisabled = currentValue !== value && (availableCounts[value] || 0) <= 0;
                        return (
                          <button
                            key={value}
                            className={`stat-button ${currentValue === value ? 'selected' : ''}`}
                            onClick={() => handleStatAllocation(statKey, value)}
                            disabled={isDisabled}
                          >
                            +{value}
                          </button>
                        );
                      })}
                      {currentValue !== null && (
                        <button
                          className="stat-button clear"
                          onClick={() => handleStatAllocation(statKey, null)}
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      
      case 4: // Origin
        // Render origin selection lists
        const renderOriginItem = (item: any, category: string) => {
          // For equipment items, get full details from item_data
          if (category === 'equipment') {
            const equipmentDetails = getEquipmentDetails(item.id);
            if (!equipmentDetails) return null;
            
            return (
              <div 
                key={item.id} 
                className={`origin-item ${character.origin.includes(item.id) ? 'selected' : ''}`}
                onClick={() => handleOriginItemSelect(item.id, equipmentDetails.origin_cost)}
              >
                <div className="origin-item-content">
                  <span className="origin-item-name">{equipmentDetails.name}</span>
                  <span className="origin-item-cost">{equipmentDetails.origin_cost} point</span>
                </div>
                <div className="origin-item-tooltip">
                  {equipmentDetails.description}
                </div>
                {character.origin.includes(item.id) && <div className="selection-indicator">✓</div>}
              </div>
            );
          }
          
          return (
            <div 
              key={item.id} 
              className={`origin-item ${character.origin.includes(item.id) ? 'selected' : ''}`}
              onClick={() => handleOriginItemSelect(item.id, item.origin_cost)}
            >
              <div className="origin-item-content">
                <span className="origin-item-name">{item.name}</span>
                <span className="origin-item-cost">{item.origin_cost} {item.origin_cost === 1 ? 'point' : 'points'}</span>
              </div>
              <div className="origin-item-tooltip">
                {item.description}
              </div>
              {character.origin.includes(item.id) && <div className="selection-indicator">✓</div>}
            </div>
          );
        };

        return (
          <div className="form-step origin-selection-step">
            <h2>Create Your Origin</h2>
            <p className="points-display">
              Origin Points: <span className="points-value">{originPoints}</span>
            </p>
            
            <div className="origin-lists-container">
              {/* Equipment Column */}
              <div className="origin-list">
                <h3>Equipment</h3>
                <div className="origin-items-container">
                  {originData.equipment.map(item => renderOriginItem(item, 'equipment'))}
                </div>
              </div>
              
              {/* Quirks Column */}
              <div className="origin-list">
                <h3>Quirks</h3>
                <div className="origin-items-container">
                  {originData.quirks.map(item => renderOriginItem(item, 'quirks'))}
                </div>
              </div>
              
              {/* History Column */}
              <div className="origin-list">
                <h3>History</h3>
                <div className="origin-items-container">
                  {originData.histories.map(item => renderOriginItem(item, 'histories'))}
                </div>
              </div>
            </div>
      
            <div className="selected-origins">
              <h4>Selected Origins:</h4>
              <ul>
                {character.origin.length > 0 ? (
                  character.origin.map(itemId => {
                    const { item, category } = findOriginItem(itemId);
                    return item ? (
                      <li key={itemId}>
                        <strong>{item.name}</strong> ({category}) - {item.origin_cost} point
                      </li>
                    ) : null;
                  })
                ) : (
                  <li>No origins selected</li>
                )}
              </ul>
            </div>
          </div>
        );
      
      case 5: // Skills
        return (
          <div className="form-step skill-selection-step">
            <h2>What is your character's starting skill?</h2>
            <div className="skill-categories">
              {SKILL_CATEGORIES.map(category => (
                <div key={category} className="skill-category">
                  <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                  <div className="skill-cards-container">
                    {skillData
                      .filter(skill => skill.skill_category === category)
                      .map(skill => (
                        <ContentCard
                          key={skill.id}
                          id={skill.id}
                          title={skill.name}
                          imagePath={skill.imagePath}
                          description={skill.description}
                          isSelectable={true}
                          isSelected={character.skills[0].skill_id === skill.id}
                          onSelect={() => handleSkillSelection(skill.id)}
                          className={`skill-card ${character.skills[0].skill_id === skill.id ? 'selected' : ''}`}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 6: // Summary
        return (
          <div className="form-step summary-step">
            <h2>Character Summary</h2>
            <div className="summary-content">
              <p><strong>Name:</strong> {character.name}</p>
              <p><strong>Ancestry:</strong> {ancestryData.find(a => a.id === character.ancestry)?.name || character.ancestry}</p>
              <p><strong>Alignment:</strong> {character.alignment}</p>
              <h3>Stats:</h3>
              <ul>
                {Object.entries(character.stats).map(([stat, value]) => (
                  <li key={stat}><strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong> +{value}</li>
                ))}
              </ul>
              <p><strong>Starting Skill:</strong> {character.skills[0]?.skill_name}</p>
              <p><strong>Initiative:</strong> {character.initiative}</p>
              <p><strong>Inventory Capacity:</strong> {character.inventory_capacity}</p>
              
              <h3>Origin:</h3>
              <ul>
                {character.origin.length > 0 ? (
                  character.origin.map(itemId => {
                    const { item, category } = findOriginItem(itemId);
                    return item ? (
                      <li key={itemId}>
                        <strong>{item.name}</strong> ({category})
                      </li>
                    ) : null;
                  })
                ) : (
                  <li>No origins selected</li>
                )}
              </ul>
            </div>
          </div>
        );
      
      default:
        return <div>Unknown step</div>;
    }
  };
  
  return (
    <div className="character-creator">
      <h1>Character Creator</h1>
      
      {/* Progress bar */}
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${(currentStep / 6) * 100}%` }}
        ></div>
      </div>
      
      {/* Step indicators */}
      <div className="step-indicators">
        {[0, 1, 2, 3, 4, 5, 6].map(step => (
          <div 
            key={step} 
            className={`step-indicator ${currentStep >= step ? 'active' : ''}`}
            onClick={() => {
              if (step < currentStep) setCurrentStep(step);
            }}
          ></div>
        ))}
      </div>
      
      {/* Form content with animation */}
      <div className={`form-content ${animating ? `slide-${animationDirection}` : ''}`}>
        {renderStepContent()}
      </div>
      
      {/* Navigation buttons */}
      <div className="form-navigation">
        {currentStep > 0 && (
          <button 
            onClick={handlePrevious}
            className="button-previous"
            disabled={animating}
          >
            Previous
          </button>
        )}
        
        {currentStep < 6 ? (
          <button 
            onClick={handleNext}
            className="button-next"
            disabled={animating || !validateCurrentStep()}
          >
            Next
          </button>
        ) : (
          <button 
            onClick={exportCharacter}
            className="button-finish"
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default CharacterCreator;