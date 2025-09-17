import React, { useEffect, useState } from 'react';

interface ManeuverField {
  id: string;
  keyword: string;
  value: string;
}

interface AbilityCardProps {
  title: string;
  usageType: string;
  tags: string;
  maneuverText?: string;
  flavor?: string;
  economy?: string;
  actionCost?: string;
  special?: string;
  isPermanent?: boolean;
  tier?: string;
  maneuverFields?: ManeuverField[];
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
  isPermanent,
  tier,
  maneuverFields,
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
  const [cardWidth, setCardWidth] = useState('550px');
  
  // Add responsive sizing based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardWidth('100%');
      } else {
        setCardWidth('550px');
      }
    };
    
    handleResize(); // Run once on mount
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Helper function to get display title with tier symbols and star if needed
  const getDisplayTitle = () => {
    let tierSymbol = '';
    if (cardType === 'maneuver' && tier) {
      switch (tier) {
        case 'Tier 1':
          tierSymbol = '•󠁏 ';
          break;
        case 'Tier 2':
          tierSymbol = '•• ';
          break;
        case 'Tier 3':
          tierSymbol = '∴ ';
          break;
      }
    }
    
    // No star for origin or mastery cards
    return `${tierSymbol}${title}`;
  };

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
        'Abjuration': '#0b5394ff',
        'Animal Handling': '#38761dff',
        'Insight': '#38761dff',
        'Medicine': '#38761dff',
        'Perception': '#38761dff',
        'Survival': '#38761dff',
        'Endurance': '#bf8a00ff',
        'Athletics': '#990000ff',
        'Unarmed': '#990000ff',
        'Heavy Weapons': '#990000ff',
      };
      return skillColors[skillType ?? ''] || '#444';
    }
    switch (usageType) {
      case 'At Will':
        return '#38761d'; // Updated Green
      case '1/turn':
        return '#720a02'; // Dark Red
      case '1/encounter':
        return '#990000'; // Updated Red
      case 'Feature':
        return '#0b5394'; // Updated Blue
      case '2/encounter':
        return '#720a02'; // Dark Red
      case '1/day':
        return '#4a4a4a'; // Updated Gray
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
            padding: '4px 8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <h4
            style={{ 
              margin: '0', 
              fontSize: '1.2rem', 
              fontWeight: 'normal',
              flex: '1',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              hyphens: 'auto'
            }}
            dangerouslySetInnerHTML={{ __html: getDisplayTitle() }}
          />
          {originImage && (
            <img src={originImage} alt="Origin" style={{ height: '40px', width: '40px', objectFit: 'contain' }} />
          )}
        </div>

        {flavor && (
          <div style={{ backgroundColor: '#fce5cd', padding: '8px', fontStyle: 'italic' }}>
            {flavor}
          </div>
        )}

        <div style={{ padding: '8px' }}>
          <div style={{ marginBottom: '8px' }}>
              <strong dangerouslySetInnerHTML={{ __html: `Title ✧ ${titleType || ''}` }} />
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
            padding: '4px 8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <h4
            style={{ 
              margin: '0', 
              fontSize: '1.2rem', 
              fontWeight: 'normal',
              flex: '1',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              hyphens: 'auto'
            }}
            dangerouslySetInnerHTML={{ __html: getDisplayTitle() }}
          />
          {masteryImage && (
            <img src={masteryImage} alt="Mastery" style={{ height: '40px', width: '40px', objectFit: 'contain' }} />
          )}
        </div>

        {flavor && (
          <div style={{ backgroundColor: '#fce5cd', padding: '8px', fontStyle: 'italic' }}>
            {flavor}
          </div>
        )}

        <div style={{ padding: '8px' }}>
          <div style={{ marginBottom: '8px' }}>
            <strong>Title ✧ {skillType}</strong>
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
          padding: '4px 8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <h4
          style={{
            margin: '0',
            fontSize: '1.2rem',
            fontWeight: 'normal',
            flex: '1',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            hyphens: 'auto'
          }}
          dangerouslySetInnerHTML={{ __html: getDisplayTitle() }}
        />
        <p style={{ 
          margin: '0',
          fontSize: '1.2rem',
          fontWeight: 'normal',
          flexShrink: 0,
          whiteSpace: 'nowrap'
        }}>{usageType}</p>
      </div>

      {/* Flavor text (if provided) */}
      {flavor && (
        <div
          style={{ backgroundColor: '#fce5cd', padding: '8px', fontStyle: 'italic' }}
          dangerouslySetInnerHTML={{ __html: flavor }}
        />
      )}

      {/* Content area with padding */}
      <div style={{ padding: '8px' }}>
        {/* Tags Row */}
        <div style={{ marginBottom: '8px' }}>
          <strong dangerouslySetInnerHTML={{ __html: `${usageType} ${isPermanent ? '✧' : '✦'} ${tags || 'None'}` }} />
        </div>

        {/* Economy (if provided) */}
        {economy && (
          <div style={{ marginBottom: '8px' }}>
            <strong dangerouslySetInnerHTML={{ __html: `${economy}${actionCost ? ` [${actionCost}]` : ''}` }} />
          </div>
        )}

        {/* Dynamic Maneuver Fields */}
        {maneuverFields && maneuverFields.length > 0 ? (
          maneuverFields.map((field, index) => (
            <div 
              key={field.id} 
              style={{ 
                marginBottom: index === maneuverFields.length - 1 ? '0' : '8px',
                color: field.keyword === 'Damage' ? '#720a02' : 'inherit'
              }}
            >
              <strong style={{ color: field.keyword === 'Damage' ? '#720a02' : 'inherit' }}>
                {field.keyword}:
              </strong>{' '}
              <span 
                dangerouslySetInnerHTML={{ __html: field.value }} 
                style={{ color: field.keyword === 'Damage' ? '#720a02' : 'inherit' }}
              />
            </div>
          ))
        ) : (
          /* Fallback: if no dynamic fields and maneuverText provided */
          maneuverText ? (
            <div style={{ marginBottom: '8px' }} dangerouslySetInnerHTML={{ __html: maneuverText }} />
          ) : (
            /* Final fallback: if no maneuverText or fields provided, optionally show Special */
            special ? (
              <div>
                <strong>Special:</strong>{' '}
                <span dangerouslySetInnerHTML={{ __html: special }} />
              </div>
            ) : null
          )
        )}
      </div>
    </div>
  );
};

export default AbilityCard;
