import React from 'react';

interface AbilityCardProps {
  title: string;
  usageType: string;
  requirements: string[];
  target: string;
  damage: string;
  hitEffect: string;
}

const AbilityCard: React.FC<AbilityCardProps> = ({
  title,
  usageType,
  requirements,
  target,
  damage,
  hitEffect,
}) => {
  return (
    <div
      style={{
        width: '300px',
        border: '2px solid #444',
        borderRadius: '8px',
        padding: '8px',
        backgroundColor: '#fff',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Title / Usage Row */}
      <div style={{ backgroundColor: '#b00', color: '#fff', padding: '4px' }}>
        <h2 style={{ margin: '0', fontSize: '1.2rem' }}>{title}</h2>
        <p style={{ margin: '0' }}>{usageType}</p>
      </div>

      {/* Requirements Row */}
      <div style={{ marginTop: '8px' }}>
        <strong>Requirements:</strong>{' '}
        {requirements.length > 0 ? requirements.join(', ') : 'None'}
      </div>

      {/* Target & Damage */}
      <div style={{ marginTop: '4px' }}>
        <strong>Target:</strong> {target}
      </div>
      <div style={{ marginTop: '4px' }}>
        <strong>Damage:</strong> {damage}
      </div>

      {/* Hit Effect */}
      <div style={{ marginTop: '4px' }}>
        <strong>On Hit:</strong> {hitEffect}
      </div>
    </div>
  );
};

export default AbilityCard;
