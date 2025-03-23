import React, { useState } from 'react';
import './card_form.css';

interface CardFormProps {
  onSubmit: (values: {
    title: string;
    usageType: string;
    requirements: string[];
    target: string;
    damage: string;
    hitEffect: string;
  }) => void;
}

const CardForm: React.FC<CardFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [usageType, setUsageType] = useState('At Will');
  const [requirements, setRequirements] = useState<string[]>([]);
  const [target, setTarget] = useState('Melee');
  const [damage, setDamage] = useState('2d6 + STR');
  const [hitEffect, setHitEffect] = useState('');

  const handleRequirementsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Could handle multi-select or a single requirement
    // For simplicity, this example uses a single selection
    setRequirements([e.target.value]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, usageType, requirements, target, damage, hitEffect });
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label>
        Usage Type:
        <select
          value={usageType}
          onChange={(e) => setUsageType(e.target.value)}
        >
          <option value="At Will">At Will</option>
          <option value="Action">Action</option>
          <option value="Reaction">Reaction</option>
          <option value="1/encounter">1/encounter</option>
          {/* etc. */}
        </select>
      </label>

      <label>
        Requirements:
        <select value={requirements[0] || ''} onChange={handleRequirementsChange}>
          <option value="">None</option>
          <option value="Martial">Martial</option>
          <option value="Weapon">Weapon</option>
          <option value="Spell">Spell</option>
          {/* etc. */}
        </select>
      </label>

      <label>
        Target:
        <input
          type="text"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="e.g. Melee, Ranged 30ft, etc."
        />
      </label>

      <label>
        Damage:
        <input
          type="text"
          value={damage}
          onChange={(e) => setDamage(e.target.value)}
          placeholder="e.g. 2d6 + STR"
        />
      </label>

      <label>
        On Hit:
        <textarea
          value={hitEffect}
          onChange={(e) => setHitEffect(e.target.value)}
          placeholder="What effect happens on a hit?"
        />
      </label>

      <button type="submit">Generate Card</button>
    </form>
  );
};

export default CardForm;
