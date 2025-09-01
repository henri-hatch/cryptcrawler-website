import React, { useState } from 'react';
import './card_form.css';

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
    skillType?: string;
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
  const [maneuverText, setManeuverText] = useState('');
  const [flavor, setFlavor] = useState('');  const [economy, setEconomy] = useState('Action');
  
  // Mastery fields
  const [skillType, setSkillType] = useState('');
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
      maneuverText,
      flavor,
      economy,
      skillType,
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
              <option value="Short Rest">Short Rest</option>
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
          <label>
            Maneuver Text (HTML allowed):
            <textarea
              value={maneuverText}
              onChange={(e) => setManeuverText(e.target.value)}
              placeholder="Enter the combined maneuver text (can include HTML tags)"
            />
          </label>
        </>
      )}

      {/* Mastery Creator Fields */}
      {cardType === 'mastery' && (
        <>
          <label>
            Skill Type:
            <select value={skillType} onChange={(e) => setSkillType(e.target.value)}>
              <option value="">Select Skill</option>
              {[
                'Acrobatics','Animal Handling','Athletics','Crafting','Deception',
                'Endurance','Heavy Armor','Heavy Weapons','History','Insight','Intimidation','Investigation',
                'Light Weapons','Lockpicking','Light Armor','Medicine','Perception','Persuasion',
                'Pickpocketing','Ranged Weapons','Stealth','Survival','Unarmed'
              ].sort().map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
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
