import React from 'react';

interface AbilityCardProps {
  title: string;
  usageType: string;
  requirements: string[];
  target: string;
  damage: string;
  hitEffect: string;
  flavor?: string;
  economy?: string;
  special?: string;
}

const AbilityCard: React.FC<AbilityCardProps> = ({
  title,
  usageType,
  requirements,
  target,
  damage,
  hitEffect,
  flavor,
  economy,
  special,
}) => {
  // Get color based on usage type
  const getHeaderColor = () => {
    switch (usageType) {
      case 'At Will':
        return '#307f00'; // Forest Green
      case '1/encounter':
        return '#720a02'; // Dark Red
      case 'Feature':
        return '#324692'; // Dark Blue
      default:
        return '#4d4d4d';
    }
  };

  return (
    <div
      style={{
        width: '700px', // Changed from 300px to 700px
        border: '2px solid #444',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Title / Usage Row with flex layout */}
      <div 
        style={{ 
          backgroundColor: getHeaderColor(), 
          color: '#fff', 
          padding: '8px',
          display: 'flex',
          justifyContent: 'space-between', // Space between title and usage
          alignItems: 'center'
        }}
      >
        <h2 style={{ 
          margin: '0', 
          fontSize: '1.5rem', // Increased font size
          fontWeight: 'normal' // Unbold the title
        }}>{title}</h2>
        <p style={{ 
          margin: '0',
          fontSize: '1.5rem', // Matched to title size
          fontWeight: 'normal'
        }}>{usageType}</p>
      </div>

      {/* Flavor text (if provided) */}
      {flavor && (
        <div style={{ backgroundColor: '#cfc4a7', padding: '8px', fontStyle: 'italic' }}>
          {flavor}
        </div>
      )}

      {/* Content area with padding */}
      <div style={{ padding: '8px' }}>
        {/* Requirements Row */}
        <div style={{ marginBottom: '8px' }}>
          <strong>{usageType} ✦ {requirements.length > 0 ? requirements.join(', ') : 'None'}</strong>
        </div>

        {/* Economy (if provided) */}
        {economy && (
          <div style={{ marginBottom: '8px' }}>
            <strong>{economy}</strong>
          </div>
        )}

        {/* Target (only if provided) */}
        {target && (
          <div style={{ marginBottom: (damage || hitEffect || special) ? '8px' : '0' }}>
            <strong>Target:</strong> {target}
          </div>
        )}

        {/* Damage (only if provided) */}
        {damage && (
          <div style={{ marginBottom: (hitEffect || special) ? '8px' : '0' }}>
            <strong>Damage:</strong> {damage}
          </div>
        )}

        {/* Hit Effect (only if provided) */}
        {hitEffect && (
          <div style={{ marginBottom: special ? '8px' : '0' }}>
            <strong>On Hit:</strong> {hitEffect}
          </div>
        )}
        
        {/* Special (only if provided) */}
        {special && (
          <div>
            <strong>Special:</strong> {special}
          </div>
        )}
      </div>
    </div>
  );
};

export default AbilityCard;
