import React, { useState } from 'react';
import './card_form.css';

interface CardFormProps {
  onSubmit: (values: {
    title: string;
    usageType: string;
    tags: string;
    target: string;
    trigger: string;
    savingThrowActive: string;
    savingThrowDC: string;
    abilityCheckActive: string;
    abilityCheckAgainst: string;
    damage: string;
    hitEffect: string;
    success: string;
    fail: string;
    flavor: string;
    economy: string;
    actionCost: string;
    special: string;
  }) => void;
}

const CardForm: React.FC<CardFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [usageType, setUsageType] = useState('At Will');
  const [tags, setTags] = useState('');
  const [target, setTarget] = useState('');
  const [trigger, setTrigger] = useState('');
  const [savingThrowActive, setSavingThrowActive] = useState('');
  const [savingThrowDC, setSavingThrowDC] = useState('');
  const [abilityCheckActive, setAbilityCheckActive] = useState('');
  const [abilityCheckAgainst, setAbilityCheckAgainst] = useState('');
  const [damage, setDamage] = useState('');
  const [hitEffect, setHitEffect] = useState('');
  const [success, setSuccess] = useState('');
  const [fail, setFail] = useState('');
  const [flavor, setFlavor] = useState('');
  const [economy, setEconomy] = useState('Action');
  const [actionCost, setActionCost] = useState('');
  const [special, setSpecial] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ 
      title, 
      usageType, 
      tags, 
      target, 
      trigger,
      savingThrowActive,
      savingThrowDC,
      abilityCheckActive,
      abilityCheckAgainst,
      damage, 
      hitEffect,
      success,
      fail,
      flavor,
      economy,
      actionCost,
      special
    });
  };

  // Define the ability score options
  const abilityScores = ['', 'MIG', 'FIN', 'REA', 'FOR', 'INT', 'PRE'];

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

      <label>
        Usage Type:
        <select
          value={usageType}
          onChange={(e) => setUsageType(e.target.value)}
        >
          <option value="Feature">Feature</option>
          <option value="At Will">At Will</option>
          <option value="1/turn">1/turn</option>
          <option value="1/encounter">1/encounter</option>
          <option value="2/encounter">2/encounter</option>
          <option value="1/day">1/day</option>
          <option value="1/week">1/week</option>
        </select>
      </label>

      <label>
        Flavor Text:
        <textarea
          value={flavor}
          onChange={(e) => setFlavor(e.target.value)}
          placeholder="Optional flavor text..."
        />
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
          <option value="Short Rest">Short Rest</option>
          <option value="Long Rest">Long Rest</option>
        </select>
      </label>

      <label>
        Action Cost:
        <input
          type="text"
          value={actionCost}
          onChange={(e) => setActionCost(e.target.value)}
          placeholder="e.g. 2 opportunity, 3 drama (optional)"
        />
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
        Target:
        <input
          type="text"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="e.g. Melee, Ranged 30ft, etc. (optional)"
        />
      </label>

      {/* Add the new Saving Throw fields after the Target field */}
      <label>
        Saving Throw:
        <div className="saving-throw-container">
          <select
            value={savingThrowActive}
            onChange={(e) => setSavingThrowActive(e.target.value)}
          >
            {abilityScores.map(score => (
              <option key={`active-${score}`} value={score}>{score}</option>
            ))}
          </select>
          <span className="vs-text">vs DC</span>
          <input
            type="text"
            value={savingThrowDC}
            onChange={(e) => setSavingThrowDC(e.target.value)}
            placeholder="17 or 'Spell Save'"
          />
        </div>
      </label>

      {/* Add the new Ability Check fields after the Saving Throw fields */}
      <label>
        Ability Check:
        <div className="ability-check-container">
          <select
            value={abilityCheckActive}
            onChange={(e) => setAbilityCheckActive(e.target.value)}
          >
            {abilityScores.map(score => (
              <option key={`active-${score}`} value={score}>{score}</option>
            ))}
          </select>
          <span className="vs-text">vs</span>
          <select
            value={abilityCheckAgainst}
            onChange={(e) => setAbilityCheckAgainst(e.target.value)}
          >
            {abilityScores.map(score => (
              <option key={`against-${score}`} value={score}>{score}</option>
            ))}
          </select>
        </div>
      </label>

      {/* Conditionally render trigger field only when Reaction is selected */}
      {economy === 'Reaction' && (
        <label>
          Trigger:
          <textarea
            value={trigger}
            onChange={(e) => setTrigger(e.target.value)}
            placeholder="What triggers this reaction?"
          />
        </label>
      )}

      <label>
        Damage:
        <input
          type="text"
          value={damage}
          onChange={(e) => setDamage(e.target.value)}
          placeholder="e.g. 2d6 + STR (optional)"
        />
      </label>

      <label>
        Hit:
        <textarea
          value={hitEffect}
          onChange={(e) => setHitEffect(e.target.value)}
          placeholder="What effect happens on a hit? (optional)"
        />
      </label>

      {/* Add the new Success and Fail fields right after Hit */}
      <label>
        Success:
        <textarea
          value={success}
          onChange={(e) => setSuccess(e.target.value)}
          placeholder="What happens on a successful save? (optional)"
        />
      </label>

      <label>
        Fail:
        <textarea
          value={fail}
          onChange={(e) => setFail(e.target.value)}
          placeholder="What happens on a failed save? (optional)"
        />
      </label>

      <label>
        Special:
        <textarea
          value={special}
          onChange={(e) => setSpecial(e.target.value)}
          placeholder="Any special effects or additional information"
        />
      </label>

      <button type="submit">Generate Card</button>
    </form>
  );
};

export default CardForm;
