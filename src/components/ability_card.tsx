import React, { useEffect, useState } from 'react';

interface AbilityCardProps {
  title: string;
  usageType: string;
  tags: string;
  maneuverText?: string;
  flavor?: string;
  economy?: string;
  actionCost?: string;
  special?: string;
  skillType?: string;
  skill1Title?: string;
  skill1Description?: string;
  skill2Title?: string;
  skill2Description?: string;
  skill3Title?: string;
  skill3Description?: string;
  masteryImage?: string | null;
  cardType?: 'maneuver' | 'origin' | 'mastery';
  benefit?: string;
  titleType?: string;
  titleText?: string;
  originImage?: string | null;
}

const AbilityCard: React.FC<AbilityCardProps> = ({
  title,
  usageType,
  tags,
  maneuverText,
  flavor,
  economy,
  actionCost,
  special,
  skillType,
  skill1Title,
  skill1Description,
  skill2Title,
  skill2Description,
  skill3Title,
  skill3Description,
  masteryImage,
  cardType = 'maneuver',
  titleType,
  titleText,
  originImage,
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

  // Get color based on usage type or skill type for Mastery
  const getHeaderColor = () => {
    if (cardType === 'origin') {
      return '#7b6129'; // Origin card color
    }
    if (usageType === 'Mastery' || cardType === 'mastery') {
      const skillColors: Record<string, string> = {
        'Deception': '#741b47ff',
        'Intimidation': '#741b47ff',
        'Persuasion': '#741b47ff',
        'Acrobatics': '#666666ff',
        'Lockpicking': '#666666ff',
        'Pickpocketing': '#666666ff',
        'Stealth': '#666666ff',
        'Crafting': '#0b5394ff',
        'History': '#0b5394ff',
        'Investigation': '#0b5394ff',
        'Animal Handling': '#38761dff',
        'Insight': '#38761dff',
        'Medicine': '#38761dff',
        'Perception': '#38761dff',
        'Survival': '#38761dff',
        'Endurance': '#bf8a00ff',
        'Athletics': '#990000ff'
      };
      return skillColors[skillType ?? ''] || '#444';
    }
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

  // Origin Card Rendering
  if (cardType === 'origin') {
    return (
      <div
        style={{
          width: cardWidth,
          border: '2px solid #444',
          borderRadius: '0',
          overflow: 'hidden',
          backgroundColor: '#fff',
          fontFamily: 'sans-serif',
          maxWidth: '100%',
          margin: '0 auto',
        }}
      >
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
          <h2
            style={{ margin: '0', fontSize: fontSize, fontWeight: 'normal' }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {originImage && (
            <img src={originImage} alt="Origin" style={{ height: '58px', width: '58px', objectFit: 'contain' }} />
          )}
        </div>

        {flavor && (
          <div style={{ backgroundColor: '#cfc4a7', padding: '8px', fontStyle: 'italic' }}>
            {flavor}
          </div>
        )}

        <div style={{ padding: '8px' }}>
          <div style={{ marginBottom: '8px' }}>
              <strong dangerouslySetInnerHTML={{ __html: `Title ${'✦'} ${titleType || ''}` }} />
            </div>

            {titleText && (
              <div style={{ marginBottom: '0' }} dangerouslySetInnerHTML={{ __html: titleText }} />
            )}
        </div>
      </div>
    );
  }

  if (usageType === 'Mastery' || cardType === 'mastery') {
    return (
      <div
        style={{
          width: cardWidth,
          border: '2px solid #444',
          borderRadius: '0',
          overflow: 'hidden',
          backgroundColor: '#fff',
          fontFamily: 'sans-serif',
          maxWidth: '100%',
          margin: '0 auto',
        }}
      >
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
          <h2
            style={{ margin: '0', fontSize: fontSize, fontWeight: 'normal' }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {masteryImage && (
            <img src={masteryImage} alt="Mastery" style={{ height: '58px', width: '58px', objectFit: 'contain' }} />
          )}
        </div>

        {flavor && (
          <div style={{ backgroundColor: '#cfc4a7', padding: '8px', fontStyle: 'italic' }}>
            {flavor}
          </div>
        )}

        <div style={{ padding: '8px' }}>
          <div style={{ marginBottom: '8px' }}>
            <strong>{skillType} ✦ Mastery</strong>
          </div>

          {skill1Title && (
            <div style={{ marginBottom: skill2Title || skill3Title ? '8px' : '0' }}>
              <strong>{skill1Title}</strong>
              {skill1Description && (
                <span dangerouslySetInnerHTML={{ __html: ' ' + skill1Description }} />
              )}
            </div>
          )}

          {skill2Title && (
            <div style={{ marginBottom: skill3Title ? '8px' : '0' }}>
              <strong>{skill2Title}</strong>
              {skill2Description && (
                <span dangerouslySetInnerHTML={{ __html: ' ' + skill2Description }} />
              )}
            </div>
          )}

          {skill3Title && (
            <div>
              <strong>{skill3Title}</strong>
              {skill3Description && (
                <span dangerouslySetInnerHTML={{ __html: ' ' + skill3Description }} />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

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
        <h2
          style={{
            margin: '0',
            fontSize: fontSize,
            fontWeight: 'normal'
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p style={{ 
          margin: '0',
          fontSize: fontSize,
          fontWeight: 'normal'
        }}>{usageType}</p>
      </div>

      {/* Flavor text (if provided) */}
      {flavor && (
        <div
          style={{ backgroundColor: '#cfc4a7', padding: '8px', fontStyle: 'italic' }}
          dangerouslySetInnerHTML={{ __html: flavor }}
        />
      )}

      {/* Content area with padding */}
      <div style={{ padding: '8px' }}>
        {/* Tags Row */}
        <div style={{ marginBottom: '8px' }}>
          <strong dangerouslySetInnerHTML={{ __html: `${usageType} ✦ ${tags || 'None'}` }} />
        </div>

        {/* Economy (if provided) */}
        {economy && (
          <div style={{ marginBottom: '8px' }}>
            <strong dangerouslySetInnerHTML={{ __html: `${economy}${actionCost ? ` [${actionCost}]` : ''}` }} />
          </div>
        )}

        {/* Maneuver Text (single HTML-capable field replacing target/saving/damage/etc) */}
        {maneuverText ? (
          <div style={{ marginBottom: '8px' }} dangerouslySetInnerHTML={{ __html: maneuverText }} />
        ) : (
          /* Fallback: if no maneuverText provided, optionally show Special */
          special ? (
            <div>
              <strong>Special:</strong>{' '}
              <span dangerouslySetInnerHTML={{ __html: special }} />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default AbilityCard;
