import React, { useEffect, useState } from 'react';

interface AbilityCardProps {
  title: string;
  usageType: string;
  tags: string;
  target: string;
  trigger?: string;
  savingThrowActive?: string;
  savingThrowDC?: string;
  abilityCheckActive?: string;
  abilityCheckAgainst?: string;
  damage: string;
  hitEffect: string;
  success?: string;
  fail?: string;
  flavor?: string;
  economy?: string;
  actionCost?: string;
  special?: string;
}

const AbilityCard: React.FC<AbilityCardProps> = ({
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
  special,
}) => {
  const [cardWidth, setCardWidth] = useState('700px');
  const [fontSize, setFontSize] = useState('2.0rem');
  
  // Add responsive sizing based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardWidth('100%');
        setFontSize('1.5rem');
      } else {
        setCardWidth('700px');
        setFontSize('2.0rem');
      }
    };
    
    handleResize(); // Run once on mount
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Get color based on usage type
  const getHeaderColor = () => {
    switch (usageType) {
      case 'At Will':
        return '#307f00'; // Forest Green
      case '1/turn':
        return '#720a02'; // Dark Red
      case '1/encounter':
        return '#720a02'; // Dark Red
      case 'Feature':
        return '#324692'; // Dark Blue
      case '2/encounter':
        return '#720a02'; // Dark Red
      case '1/day':
        return '#4d4d4d'; // Dark Gray
      case '1/week':
        return '#000000'; // Black
    }
  };

  return (
    <div
      style={{
        width: cardWidth, 
        border: '2px solid #444',
        borderRadius: '0',
        overflow: 'hidden',
        backgroundColor: '#fff',
        fontFamily: 'sans-serif', // Explicitly keep sans-serif for maneuver cards
        maxWidth: '100%',
        margin: '0 auto',
      }}
    >
      {/* Title / Usage Row with flex layout */}
      <div 
        style={{ 
          backgroundColor: getHeaderColor(), 
          color: '#fff', 
          padding: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <h2 style={{ 
          margin: '0', 
          fontSize: fontSize,
          fontWeight: 'normal'
        }}>{title}</h2>
        <p style={{ 
          margin: '0',
          fontSize: fontSize,
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
        {/* Tags Row */}
        <div style={{ marginBottom: '8px' }}>
          <strong>{usageType} ✦ {tags || 'None'}</strong>
        </div>

        {/* Economy (if provided) */}
        {economy && (
          <div style={{ marginBottom: '8px' }}>
            <strong>{economy}{actionCost ? ` [${actionCost}]` : ''}</strong>
          </div>
        )}

        {/* Target (only if provided) */}
        {target && (
          <div style={{ marginBottom: (trigger || damage || hitEffect || special) ? '8px' : '0' }}>
            <strong>Target:</strong> {target}
          </div>
        )}

        {/* Trigger (only if provided and economy is Reaction) */}
        {economy === 'Reaction' && trigger && (
          <div style={{ marginBottom: (damage || hitEffect || special) ? '8px' : '0' }}>
            <strong>Trigger:</strong> {trigger}
          </div>
        )}

        {/* Saving Throw (only if both active and DC are provided) */}
        {savingThrowActive && savingThrowDC && (
          <div style={{ 
            color: '#720a02', 
            marginBottom: (success || fail) ? '8px' : (damage || hitEffect || special) ? '8px' : '0'
          }}>
            <strong>Saving Throw:</strong> {savingThrowActive} vs DC {savingThrowDC}
          </div>
        )}
        
        {/* Ability Check (only if both active and against are provided) */}
        {abilityCheckActive && abilityCheckAgainst && (
          <div style={{ 
            color: '#720a02', 
            marginBottom: (success || fail) ? '8px' : (damage || hitEffect || special) ? '8px' : '0'
          }}>
            <strong>Ability Check:</strong> {abilityCheckActive} vs {abilityCheckAgainst}
          </div>
        )}
        
        {/* Success (only if provided) - indented under Saving Throw or Ability Check */}
        {success && (
          <div style={{ 
            marginBottom: fail ? '8px' : (damage || hitEffect || special) ? '8px' : '0',
            paddingLeft: '20px' // Indentation
          }}>
            <strong>Success:</strong> {success}
          </div>
        )}

        {/* Fail (only if provided) - indented under Saving Throw */}
        {fail && (
          <div style={{ 
            marginBottom: (damage || hitEffect || special) ? '8px' : '0',
            paddingLeft: '20px' // Indentation
          }}>
            <strong>Fail:</strong> {fail}
          </div>
        )}

        {/* Damage (only if provided) */}
        {damage && (
          <div style={{ 
            color: '#720a02', 
            marginBottom: hitEffect || special ? '8px' : '0' 
          }}>
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
