import React, { useState, useEffect } from 'react';
import './character_creator.css';
import ContentCard from '../../components/content_card';
import ancestryData from '../../data/ancestry_data';
import skillData from '../../data/skill_data';

// Define types for our character data
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
}

const CharacterCreator: React.FC = () => {
  // Track which step we're on
  const [currentStep, setCurrentStep] = useState(0);
  
  // Animation state
  const [animating, setAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('forward');
  
  // Available stat values to allocate
  const availableStatValues = [3, 3, 2, 1, 1, 0];
  
  // Initialize character data with defaults
  const [character, setCharacter] = useState<Character>({
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
    inventory_capacity: 50
  });
  
  // Track which stats have been allocated
  const [allocatedStats, setAllocatedStats] = useState<{[key: string]: number | null}>({
    might: null,
    finesse: null,
    fortitude: null,
    reason: null,
    intuition: null,
    presence: null
  });
  
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
  
  // Use wide content layout
  useEffect(() => {
    const contentDiv = document.querySelector('.content');
    if (contentDiv) {
      contentDiv.className = 'content-wide';
    }
    
    return () => {
      if (contentDiv) {
        contentDiv.className = 'content';
      }
    };
  }, []);

  // Validate current step before proceeding
  const validateCurrentStep = () => {
    switch (currentStep) {
      case 0: // Name
        return character.name.trim() !== '';
      case 1: // Ancestry
        return character.ancestry !== '';
      case 2: // Alignment
        return character.alignment !== '';
      case 3: // Stats
        return Object.values(allocatedStats).every(val => val !== null);
      case 4: // Skill
        return character.skills[0].skill_id !== '';
      default:
        return true;
    }
  };

  // Handle next button click
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
  
  // Handle previous button click
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
  
  // Handle name change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter(prev => ({
      ...prev,
      name: e.target.value
    }));
  };
  
  // Handle ancestry selection
  const handleAncestrySelection = (ancestryId: string) => {
    setCharacter(prev => ({
      ...prev,
      ancestry: ancestryId
    }));
  };
  
  // Handle alignment change
  const handleAlignmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCharacter(prev => ({
      ...prev,
      alignment: e.target.value
    }));
  };
  
  // Replace handleSkillChange with handleSkillSelection
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
  
  // Handle stat allocation
  const handleStatAllocation = (statName: keyof CharacterStats, value: number | null) => {
    setAllocatedStats(prev => ({
      ...prev,
      [statName]: value
    }));
    
    setCharacter(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        [statName]: value !== null ? value : 0
      }
    }));
  };
  
  // Calculate available stat values
  const getAvailableStatValues = () => {
    const usedValues = Object.values(allocatedStats).filter(val => val !== null) as number[];
    
    // Count occurrences of each stat value
    const valueCounts: Record<number, number> = {};
    usedValues.forEach(value => {
      valueCounts[value] = (valueCounts[value] || 0) + 1;
    });
    
    // Count total allowed for each value
    const totalAllowedCounts: Record<number, number> = {};
    availableStatValues.forEach(value => {
      totalAllowedCounts[value] = (totalAllowedCounts[value] || 0) + 1;
    });
    
    // Calculate remaining available values
    const availableCounts: Record<number, number> = {};
    availableStatValues.forEach(value => {
      const used = valueCounts[value] || 0;
      const total = totalAllowedCounts[value] || 0;
      availableCounts[value] = total - used;
    });
    
    return availableCounts;
  };
  
  // Export character as JSON
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
  
  // Render form content based on currentStep
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
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
      
      case 1:
        return (
          <div className="form-step ancestry-selection-step">
            <h2>What is your character's ancestry?</h2>
            <div className="ancestry-cards-container">
              {ancestryData.map(ancestry => (
                <ContentCard
                  key={ancestry.id}
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
      
      case 2:
        return (
          <div className="form-step">
            <h2>What is your character's alignment?</h2>
            <select
              value={character.alignment}
              onChange={handleAlignmentChange}
              className="form-select"
            >
              <option value="Lawful Good">Lawful Good (LG)</option>
              <option value="Neutral Good">Neutral Good (NG)</option>
              <option value="Chaotic Good">Chaotic Good (CG)</option>
              <option value="Lawful Neutral">Lawful Neutral (LN)</option>
              <option value="True Neutral">True Neutral (N)</option>
              <option value="Chaotic Neutral">Chaotic Neutral (CN)</option>
              <option value="Lawful Evil">Lawful Evil (LE)</option>
              <option value="Neutral Evil">Neutral Evil (NE)</option>
              <option value="Chaotic Evil">Chaotic Evil (CE)</option>
            </select>
          </div>
        );
      
      case 3:
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
      
      case 4:
        return (
          <div className="form-step skill-selection-step">
            <h2>What is your character's starting skill?</h2>
            
            <div className="skill-categories">
              {["presence", "finesse", "reason", "intuition"].map(category => (
                <div key={category} className="skill-category">
                  <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                  <div className="skill-cards-container">
                    {skillData
                      .filter(skill => skill.category === category)
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
      
      case 5:
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
          style={{ width: `${(currentStep / 5) * 100}%` }}
        ></div>
      </div>
      
      {/* Step indicators */}
      <div className="step-indicators">
        {[0, 1, 2, 3, 4, 5].map(step => (
          <div 
            key={step} 
            className={`step-indicator ${currentStep >= step ? 'active' : ''}`}
            onClick={() => {
              if (step < currentStep) {
                setCurrentStep(step);
              }
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
        
        {currentStep < 5 ? (
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