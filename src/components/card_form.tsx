import React, { useState } from 'react';
import './card_form.css';

interface CardFormProps {
  onSubmit: (values: {
    title: string;
    usageType: string;
    requirements: string;
    target: string;
    trigger: string;
    savingThrowActive: string;
    savingThrowDC: string; // Changed from savingThrowPassive
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
  const [requirements, setRequirements] = useState('');
  const [target, setTarget] = useState('');
  const [trigger, setTrigger] = useState('');
  const [savingThrowActive, setSavingThrowActive] = useState('');
  const [savingThrowDC, setSavingThrowDC] = useState(''); // Changed from savingThrowPassive
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
      requirements, 
      target, 
      trigger,
      savingThrowActive,
      savingThrowDC, // Changed from savingThrowPassive
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
  const abilityScores = ['', 'STR', 'DEX', 'INT', 'WIL', 'WIS', 'CHA'];

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
          <option value="Free">Free Action</option>
          <option value="Passive">Passive</option>
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
        Requirements:
        <input
          type="text"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
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
