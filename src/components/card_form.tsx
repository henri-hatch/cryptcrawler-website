import React, { useState } from 'react';
import './card_form.css';

interface ManeuverField {
  id: string;
  keyword: string;
  value: string;
}

interface CardFormProps {
  cardType?: 'maneuver' | 'origin' | 'mastery';
  onSubmit: (values: {
    title: string;
    usageType: string;
    tags: string;
    maneuverText?: string;
    flavor: string;
    economy: string;
    special?: string;
    isPermanent?: boolean;
    tier?: string;
    maneuverFields?: ManeuverField[];
    attributeType?: string;
    skillName?: string;
    skill1Title?: string;
    skill1Description?: string;
    skill2Title?: string;
    skill2Description?: string;
    skill3Title?: string;
    skill3Description?: string;
    masteryImage?: string;
    // Origin/Title-specific fields
    titleType?: string;
    titleText?: string;
    originImage?: string;
    }) => void;
}

const CardForm: React.FC<CardFormProps> = ({ onSubmit, cardType = 'maneuver' }) => {
  const [title, setTitle] = useState('');
  const [usageType, setUsageType] = useState('At Will');
  const [tags, setTags] = useState('');
  const [flavor, setFlavor] = useState('');
  const [economy, setEconomy] = useState('Action');
  const [isPermanent, setIsPermanent] = useState(false);
  const [tier, setTier] = useState('Tier 1');
  const [maneuverFields, setManeuverFields] = useState<ManeuverField[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  
  // Mastery fields
  const [attributeType, setAttributeType] = useState('');
  const [skillName, setSkillName] = useState('');
  const [skill1Title, setSkill1Title] = useState('');
  const [skill1Description, setSkill1Description] = useState('');
  const [skill2Title, setSkill2Title] = useState('');
  const [skill2Description, setSkill2Description] = useState('');
  const [skill3Title, setSkill3Title] = useState('');
  const [skill3Description, setSkill3Description] = useState('');
  const [masteryImage, setMasteryImage] = useState('');

  // Origin / Title fields
  const [titleType, setTitleType] = useState('');
  const [titleText, setTitleText] = useState('');
  const [originImage, setOriginImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ 
        title,
        usageType,
        tags,
        flavor,
        economy,
        isPermanent,
        tier,
        maneuverFields,
        attributeType,
        skillName,
        skill1Title,
        skill1Description,
        skill2Title,
        skill2Description,
        skill3Title,
        skill3Description,
        masteryImage,
        titleType,
        titleText,
        originImage
    });
  };

  // Helper functions for maneuver fields
  const addManeuverField = () => {
    const newField: ManeuverField = {
      id: Date.now().toString(),
      keyword: 'Trigger',
      value: ''
    };
    setManeuverFields([...maneuverFields, newField]);
  };

  const removeManeuverField = (id: string) => {
    setManeuverFields(maneuverFields.filter(field => field.id !== id));
  };

  const updateManeuverField = (id: string, key: 'keyword' | 'value', newValue: string) => {
    setManeuverFields(maneuverFields.map(field => 
      field.id === id ? { ...field, [key]: newValue } : field
    ));
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    if (draggedIndex === null) return;
    
    const newFields = [...maneuverFields];
    const draggedField = newFields[draggedIndex];
    newFields.splice(draggedIndex, 1);
    newFields.splice(dropIndex, 0, draggedField);
    
    setManeuverFields(newFields);
    setDraggedIndex(null);
  };

  // Define the ability score options
  // ability score options removed — maneuver text field used instead

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      {cardType === 'maneuver' && (
        <label>
          Usage Type:
          <select
            value={usageType}
            onChange={(e) => setUsageType(e.target.value)}
          >          <option value="Feature">Feature</option>
            <option value="At Will">At Will</option>
            <option value="1/turn">1/turn</option>
            <option value="1/encounter">1/encounter</option>
            <option value="2/encounter">2/encounter</option>
            <option value="1/day">1/day</option>
            <option value="1/week">1/week</option>
          </select>
        </label>
      )}

      <label>
        Flavor Text:
        <textarea
          value={flavor}
          onChange={(e) => setFlavor(e.target.value)}
          placeholder="Optional flavor text..."
        />
      </label>

      {/* Title Creator Fields (replaces Origin Creator inputs) */}
      {cardType === 'origin' && (
        <>
          <label>
            Title Type:
            <input
              type="text"
              value={titleType}
              onChange={(e) => setTitleType(e.target.value)}
              placeholder="e.g. Heritage, Origin, Background"
            />
          </label>

          <label>
            Title Text (HTML allowed):
            <textarea
              value={titleText}
              onChange={(e) => setTitleText(e.target.value)}
              placeholder="You can include HTML tags here, e.g. <strong>Benefit:</strong>"
            />
          </label>

          <label>
            Origin Image:
            <input type="file" onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => setOriginImage(reader.result as string);
                reader.readAsDataURL(file);
              }
            }} />
          </label>
        </>
      )}

      {/* Maneuver Creator Fields */}
      {cardType === 'maneuver' && (
        <>
          <label>
            Tier:
            <select
              value={tier}
              onChange={(e) => setTier(e.target.value)}
            >
              <option value="Tier 1">Tier 1</option>
              <option value="Tier 2">Tier 2</option>
              <option value="Tier 3">Tier 3</option>
            </select>
          </label>

          <label>
            Action Type:
            <select
              value={economy}
              onChange={(e) => setEconomy(e.target.value)}
            >
              <option value="Action">Action</option>
              <option value="Bonus Action">Bonus Action</option>
              <option value="Reaction">Reaction</option>
              <option value="Free Action">Free Action</option>
              <option value="Passive">Passive</option>
              <option value="Ritual">Ritual</option>
              <option value="Long Rest">Long Rest</option>
            </select>
          </label>

          <label>
            Tags:
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g. Martial, Weapon, Melee (comma separated)"
            />
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Permanent?
            <input
              type="checkbox"
              checked={isPermanent}
              onChange={(e) => setIsPermanent(e.target.checked)}
            />
            </span>
          </label>

          {/* Dynamic Fields */}
          <div style={{ marginTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h4 style={{ margin: 0 }}>Fields</h4>
              <button 
                type="button" 
                onClick={addManeuverField}
                style={{
                  backgroundColor: '#007acc',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Add Field
              </button>
            </div>
            
            {maneuverFields.map((field, index) => (
              <div 
                key={field.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  padding: '0.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  backgroundColor: field.keyword === 'Damage' ? '#fdf2f2' : '#fff'
                }}
              >
                {/* Drag Handle */}
                <div 
                  style={{ 
                    cursor: 'grab',
                    padding: '0.25rem',
                    color: '#666'
                  }}
                  title="Drag to reorder"
                >
                  ☰
                </div>
                
                {/* Keyword Dropdown */}
                <select
                  value={field.keyword}
                  onChange={(e) => updateManeuverField(field.id, 'keyword', e.target.value)}
                  style={{
                    flex: '0 0 120px',
                    fontWeight: 'bold',
                    color: field.keyword === 'Damage' ? '#720a02' : 'inherit'
                  }}
                >
                  <option value="Trigger">Trigger</option>
                  <option value="Range">Range</option>
                  <option value="Effect">Effect</option>
                  <option value="Duration">Duration</option>
                  <option value="Special">Special</option>
                  <option value="Damage">Damage</option>
                </select>
                
                {/* Value Input */}
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => updateManeuverField(field.id, 'value', e.target.value)}
                  placeholder="Enter value (HTML allowed)"
                  style={{
                    flex: 1,
                    color: field.keyword === 'Damage' ? '#720a02' : 'inherit'
                  }}
                />
                
                {/* Remove Button */}
                <button
                  type="button"
                  onClick={() => removeManeuverField(field.id)}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                  title="Remove field"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Mastery Creator Fields */}
      {cardType === 'mastery' && (
        <>
          <label>
            Attribute Type:
            <select value={attributeType} onChange={(e) => setAttributeType(e.target.value)}>
              <option value="">Select Attribute</option>
              <option value="Might">Might</option>
              <option value="Finesse">Finesse</option>
              <option value="Fortitude">Fortitude</option>
              <option value="Reason">Reason</option>
              <option value="Intuition">Intuition</option>
              <option value="Presence">Presence</option>
            </select>
          </label>

          <label>
            Skill Name:
            <input 
              type="text" 
              value={skillName} 
              onChange={(e) => setSkillName(e.target.value)}
              placeholder="e.g. Heavy Weapons, Stealth, Persuasion"
            />
          </label>

          <label>
            Skill 1 Title:
            <input type="text" value={skill1Title} onChange={(e) => setSkill1Title(e.target.value)} />
          </label>
          <label>
            Skill 1 Description:
            <textarea value={skill1Description} onChange={(e) => setSkill1Description(e.target.value)} />
          </label>

          <label>
            Skill 2 Title:
            <input type="text" value={skill2Title} onChange={(e) => setSkill2Title(e.target.value)} />
          </label>
          <label>
            Skill 2 Description:
            <textarea value={skill2Description} onChange={(e) => setSkill2Description(e.target.value)} />
          </label>

          <label>
            Skill 3 Title:
            <input type="text" value={skill3Title} onChange={(e) => setSkill3Title(e.target.value)} />
          </label>
          <label>
            Skill 3 Description:
            <textarea value={skill3Description} onChange={(e) => setSkill3Description(e.target.value)} />
          </label>

          <label>
            Mastery Image:
            <input type="file" onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => setMasteryImage(reader.result as string);
                reader.readAsDataURL(file);
              }
            }} />
          </label>
        </>
      )}

      <button type="submit">Generate Card</button>
    </form>
  );
};

export default CardForm;
