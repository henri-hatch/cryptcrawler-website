import React, { useEffect, useState } from 'react';

interface AbilityCardProps {
  title: string;
  usageType: string;
  requirements: string;
  target: string;
  trigger?: string;
  savingThrowActive?: string; // New prop
  savingThrowDC?: string; // Changed from savingThrowPassive
  damage: string;
  hitEffect: string;
  success?: string; // New prop for successful saving throw
  fail?: string; // New prop for failed saving throw
  flavor?: string;
  economy?: string;
  actionCost?: string;
  special?: string;
}

const AbilityCard: React.FC<AbilityCardProps> = ({
  title,
  usageType,
  requirements,
  target,
  trigger,
  savingThrowActive,
  savingThrowDC, // Changed from savingThrowPassive
  damage,
  hitEffect,
  success, // Add new prop
  fail, // Add new prop
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
        width: cardWidth, // Now dynamic
        border: '2px solid #444',
        borderRadius: '0',
        overflow: 'hidden',
        backgroundColor: '#fff',
        fontFamily: 'sans-serif',
        maxWidth: '100%', // Ensure it doesn't overflow container
        margin: '0 auto', // Center on mobile
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
          flexWrap: 'wrap', // Allow wrapping on very small screens
        }}
      >
        <h2 style={{ 
          margin: '0', 
          fontSize: fontSize, // Now dynamic
          fontWeight: 'normal'
        }}>{title}</h2>
        <p style={{ 
          margin: '0',
          fontSize: fontSize, // Now dynamic
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
          <strong>{usageType} ✦ {requirements || 'None'}</strong>
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
        
        {/* Success (only if provided) - indented under Saving Throw */}
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
