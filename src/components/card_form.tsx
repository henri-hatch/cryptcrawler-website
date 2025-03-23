import React, { useState } from 'react';
import './card_form.css';

interface CardFormProps {
  onSubmit: (values: {
    title: string;
    usageType: string;
    requirements: string; // Changed from string[] to string
    target: string;
    trigger: string;
    damage: string;
    hitEffect: string;
    flavor: string;
    economy: string;
    actionCost: string;
    special: string;
  }) => void;
}

const CardForm: React.FC<CardFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [usageType, setUsageType] = useState('At Will');
  const [requirements, setRequirements] = useState(''); // Changed from string[] to string
  const [target, setTarget] = useState('');
  const [trigger, setTrigger] = useState('');
  const [damage, setDamage] = useState('');
  const [hitEffect, setHitEffect] = useState('');
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
      damage, 
      hitEffect,
      flavor,
      economy,
      actionCost,
      special
    });
  };

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
