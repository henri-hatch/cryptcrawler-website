import React, { useState, useEffect } from 'react';
import './character_creator.css';
import ContentCard from '../../components/content_card';
import ancestryData from '../../data/ancestry_data';
import skillData from '../../data/skill_data';
import originData from '../../data/origin_data';
import { PDFDocument } from 'pdf-lib';

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
  level: number;
  initiative: number;
  movement: number;
  wounds: number;
  library: any[];
  inventory: any[];
  inventory_capacity: number;
  current_inventory_weight: number;
  origin: string;
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
const SKILL_CATEGORIES = ["might", "finesse", "fortitude", "reason", "intuition", "presence"];

// Default character values
const DEFAULT_CHARACTER: Character = {
  name: '',
  ancestry: '',
  alignment: 'TN',
  stats: {
    might: 0,
    finesse: 0,
    fortitude: 0,
    reason: 0,
    intuition: 0,
    presence: 0
  },
  skills: [{skill_id: '', skill_name: ''}],
  dodge: '--',
  block: '--',
  max_hitpoints: 25,
  current_hitpoints: 25,
  level: 1,
  initiative: 0,
  movement: 30,
  wounds: 0,
  library: [],
  inventory: [],
  inventory_capacity: 50,
  current_inventory_weight: 0,
  origin: ''
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
  
  // UI state
  const [animating, setAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('forward');
  
  // Stats configuration
  const availableStatValues = [3, 2, 1, 1, 0, -1];
  
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

  // Helper function to find origin by ID
  const findOriginById = (originId: string) => {
    return originData.find(origin => origin.id === originId);
  };

  // Format a stat modifier so negatives display as "-1" instead of "+-1"
  const formatModifier = (value: number | null | undefined) => {
    if (value === null || value === undefined) return '';
    return value >= 0 ? `+${value}` : `${value}`;
  };

  // Step validation
  const validateCurrentStep = () => {
    switch (currentStep) {
      case 0: return character.name.trim() !== '';
      case 1: return character.ancestry !== '';
      case 2: return character.alignment !== '';
      case 3: return Object.values(allocatedStats).every(val => val !== null);
      case 4: return character.origin !== '';
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
  
  const handleOriginSelection = (originId: string) => {
    setCharacter(prev => ({
      ...prev,
      origin: originId
    }));
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
  
  // Export character as PDF
  const exportCharacterAsPDF = async () => {
    try {
      // Load the blank PDF form
      const formUrl = '/CC_Character_Sheet.pdf';
      const existingPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
      
      // Load the PDF document
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const form = pdfDoc.getForm();
      
      // Get ancestry and origin names
      const selectedAncestry = ancestryData.find(a => a.id === character.ancestry);
      const selectedOrigin = findOriginById(character.origin);
      
      // Get the alignment abbreviation for the PDF
      const selectedAlignment = ALIGNMENTS.find(a => a.id === character.alignment);
      const alignmentAbbreviation = selectedAlignment?.abbreviation || character.alignment;
      
      // Fill out the form fields TODO: Fix the dang PDF .undefined stuff (get rid of children fields)
      const fields: Record<string, string | number> = {
        // Basic character info (some with .undefined suffixes)
        'CharacterName': character.name,
        'Origin': selectedOrigin?.name || '',
        'Ancestry': selectedAncestry?.name || '',
        'Codex': '',
        'Level': character.level.toString(),
        
        // Health and resources
        'HP': character.current_hitpoints.toString(),
        'MaxHP': character.max_hitpoints.toString(),
        'AP': '', // Empty for now - TODO: Implement based on chosen starting armor
        'MaxAP': '', // Empty for now - TODO: Implement based on chosen starting armor
        'Speed': `${character.movement}ft`,
        'Surges': '0',
        'Initiative': formatModifier(character.initiative),
        'Alignment': alignmentAbbreviation,
        
        // Status and effects
        'StatusEffects': '',
        'DmgResWeaknesses': '',
        
        // Combat stats
        'Block': character.block,
        'Dodge': character.dodge,
        
        // Ability scores
        'Might': formatModifier(character.stats.might),
        'Reason': formatModifier(character.stats.reason),
        'Finesse': formatModifier(character.stats.finesse),
        'Intuition': formatModifier(character.stats.intuition),
        'Fortitude': formatModifier(character.stats.fortitude),
        'Presence': formatModifier(character.stats.presence),
        
        // Inventory
        'Capacity': character.current_inventory_weight.toString(),
        'MaxCapacity': character.inventory_capacity.toString(),
        'Marcs': '0', // Default starting gold
        'Fame': '0', // Default starting fame
        
        // New inventory/equipment fields
        'Backpack1': '',
        'Backpack1.undefined': '',
        'Backpack2': '',
        
        // Skills - put starting skill in Skills1
        'Skills1': character.skills[0]?.skill_name ? `${character.skills[0].skill_name} +1` : '',
        'Skills1.undefined': character.skills[0]?.skill_name ? `${character.skills[0].skill_name} +1` : '',
        'Skills2': '',
        
        // Titles and background
        'Titles1': '',
        'Titles1.undefined': '',
        'Titles2': '',
        'Languages': '',
        'Virtues': '',
        'Virtues.undefined': '',
        'Faults': '',
        'Backstory': '',
        
        // Known maneuvers (empty for now - could be populated with starting skill maneuvers)
        'KnownManeuvers1': '',
        'KnownManeuvers1.undefined': '',
        'KnownManeuvers2': '',
        
        // Maneuver text fields (empty for now)
        'ManeuverText1': '',
        'ManeuverText2': '',
        'ManeuverText3': '',
        'ManeuverText4': '',
        'ManeuverText5': '',
        'ManeuverText6': '',
        'ManeuverText7': '',
        'ManeuverText8': '',
        'ManeuverText9': '',
        'ManeuverText10': '',
        'ManeuverText11': '',
        'ManeuverText12': '',
        'ManeuverText13': '',
        'ManeuverText14': ''
      };
      
      // Fill the text fields with flexible field name matching
      Object.entries(fields).forEach(([fieldName, value]) => {
        try {
          // Try exact field name first
          let field = null;
          try {
            field = form.getTextField(fieldName);
          } catch {
            // If exact name fails, try to find field containing the base name
            const baseName = fieldName.replace('.undefined', '');
            const allFields = form.getFields();
            const matchingField = allFields.find(f => 
              f.getName().includes(baseName) && f.constructor.name === 'PDFTextField'
            );
            if (matchingField) {
              field = matchingField as any;
            }
          }
          
          if (field) {
            field.setText(value.toString());
          }
        } catch (error) {
          console.warn(`Could not find or fill field: ${fieldName}`);
        }
      });
      
      // Generate the PDF bytes
      const pdfBytes = await pdfDoc.save();
      
      // Create download
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${character.name.trim() || 'character'}_sheet.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    }
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
                    {formatModifier(value)} <span className="count">
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
                            {formatModifier(value)}
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

        return (
          <div className="form-step origin-selection-step">
            <h2>Choose Your Origin</h2>
            <p>Select an origin that defines your character's background. Each origin provides both a benefit and a drawback.</p>
            
            <div className="origin-cards-container">
              {originData.map(origin => (
                <ContentCard
                  key={origin.id}
                  id={origin.id}
                  title={origin.name}
                  imagePath={origin.originImage}
                  description={origin.description}
                  isSelectable={true}
                  isSelected={character.origin === origin.id}
                  onSelect={() => handleOriginSelection(origin.id)}
                  className={`origin-card ${character.origin === origin.id ? 'selected' : ''}`}
                />
              ))}
            </div>
      
            {character.origin && (
              <div className="selected-origin-details">
                <h4>Selected Origin:</h4>
                {(() => {
                  const selectedOrigin = findOriginById(character.origin);
                  return selectedOrigin ? (
                    <div className="origin-details">
                      <h5>{selectedOrigin.name}</h5>
                      <div className="origin-benefit">
                        <strong>Benefit:</strong> {selectedOrigin.benefit}
                      </div>
                      <div className="origin-drawback">
                        <strong>Drawback:</strong> {selectedOrigin.drawback}
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
            )}
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
                  <li key={stat}><strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong> {formatModifier(value as number)}</li>
                ))}
              </ul>
              <p><strong>Starting Skill:</strong> {character.skills[0]?.skill_name}</p>
              <p><strong>Initiative:</strong> {character.initiative}</p>
              <p><strong>Inventory Capacity:</strong> {character.inventory_capacity}</p>
              
              <h3>Origin:</h3>
              {character.origin ? (
                (() => {
                  const selectedOrigin = findOriginById(character.origin);
                  return selectedOrigin ? (
                    <div className="origin-summary">
                      <p><strong>{selectedOrigin.name}</strong></p>
                      <p><em>Benefit:</em> {selectedOrigin.benefit}</p>
                      <p><em>Drawback:</em> {selectedOrigin.drawback}</p>
                    </div>
                  ) : <p>Unknown origin</p>;
                })()
              ) : (
                <p>No origin selected</p>
              )}
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
            onClick={exportCharacterAsPDF}
            className="button-finish"
          >
            Download PDF
          </button>
        )}
      </div>
    </div>
  );
};

export default CharacterCreator;