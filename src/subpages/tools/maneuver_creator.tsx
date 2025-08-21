import React, { useState, useRef, useEffect } from 'react';
import domtoimage from 'dom-to-image';

import CardForm from '../../components/card_form';
import AbilityCard from '../../components/ability_card';

interface CardData {
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
  // Mastery-specific fields
  skillType?: string;
  skill1Title?: string;
  skill1Description?: string;
  skill2Title?: string;
  skill2Description?: string;
  skill3Title?: string;
  skill3Description?: string;
  masteryImage?: string | null;
  // Origin/Title-specific fields
  titleType?: string;
  titleText?: string;
  originImage?: string | null;
}

const CardCreator: React.FC = () => {
  const [cardData, setCardData] = useState<CardData | null>(null);
  const [activeTab, setActiveTab] = useState<'maneuver' | 'origin' | 'mastery'>('maneuver');
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Add this effect to change the content container class
  useEffect(() => {
    // Find the content div and replace its class
    const contentDiv = document.querySelector('.content');
    if (contentDiv) {
      contentDiv.className = 'content-wide';
    }
    
    // Cleanup function to restore the original class when component unmounts
    return () => {
      if (contentDiv) {
        contentDiv.className = 'content';
      }
    };
  }, []);

  const handleFormSubmit = (values: CardData) => {
    setCardData(values);
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      const dataUrl = await domtoimage.toPng(cardRef.current);
      const link = document.createElement('a');
      link.download = `${cardData?.title || 'card'}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Failed to generate image:', error);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Card Creator</h2>
      
      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '2rem',
        borderBottom: '1px solid #ddd'
      }}>
  <button 
          style={{
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderLeft: activeTab === 'maneuver' ? '2px solid #800000' : '2px solid #ddd',
            borderRight: activeTab === 'maneuver' ? '2px solid #800000' : '2px solid #ddd',
            borderBottom: activeTab === 'maneuver' ? '3px solid #800000' : 'none',
            borderTop: 'none',
            backgroundColor: activeTab === 'maneuver' ? '#fff' : '#f8f9fa',
            color: activeTab === 'maneuver' ? '#800000' : '#333',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: activeTab === 'maneuver' ? 'bold' : 'normal',
            marginBottom: activeTab === 'maneuver' ? '-1px' : '0',
            position: 'relative',
            zIndex: activeTab === 'maneuver' ? '1' : '0',
            borderRadius: '0'
          }}
          onClick={() => setActiveTab('maneuver')}
        >
          Maneuver Creator
        </button>
        <button 
          style={{
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderLeft: activeTab === 'origin' ? '2px solid #800000' : '2px solid #ddd',
            borderRight: activeTab === 'origin' ? '2px solid #800000' : '2px solid #ddd',
            borderBottom: activeTab === 'origin' ? '3px solid #800000' : 'none',
            borderTop: 'none',
            backgroundColor: activeTab === 'origin' ? '#fff' : '#f8f9fa',
            color: activeTab === 'origin' ? '#800000' : '#333',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: activeTab === 'origin' ? 'bold' : 'normal',
            marginBottom: activeTab === 'origin' ? '-1px' : '0',
            position: 'relative',
            zIndex: activeTab === 'origin' ? '1' : '0',
            borderRadius: '0'
          }}
          onClick={() => setActiveTab('origin')}
        >
          Title Creator
        </button>
        <button 
          style={{
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderLeft: activeTab === 'mastery' ? '2px solid #800000' : '2px solid #ddd',
            borderRight: activeTab === 'mastery' ? '2px solid #800000' : '2px solid #ddd',
            borderBottom: activeTab === 'mastery' ? '3px solid #800000' : 'none',
            borderTop: 'none',
            backgroundColor: activeTab === 'mastery' ? '#fff' : '#f8f9fa',
            color: activeTab === 'mastery' ? '#800000' : '#333',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: activeTab === 'mastery' ? 'bold' : 'normal',
            marginBottom: activeTab === 'mastery' ? '-1px' : '0',
            position: 'relative',
            zIndex: activeTab === 'mastery' ? '1' : '0',
            borderRadius: '0'
          }}
          onClick={() => setActiveTab('mastery')}
        >
          Mastery Creator
        </button>
      </div>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '2rem', 
        justifyContent: 'center' 
      }}>
        <div style={{ flex: '0 0 auto', minWidth: '350px' }}>
          <CardForm onSubmit={handleFormSubmit} cardType={activeTab} />
        </div>

        <div style={{ flex: '0 0 auto' }}>
          {cardData && (
            <>
              <div ref={cardRef}>
                <AbilityCard
                  title={cardData.title}
                  usageType={cardData.usageType}
                  tags={cardData.tags}
                  target={cardData.target}
                  trigger={cardData.trigger}
                  savingThrowActive={cardData.savingThrowActive}
                  savingThrowDC={cardData.savingThrowDC} // Changed from savingThrowPassive
                  abilityCheckActive={cardData.abilityCheckActive}
                  abilityCheckAgainst={cardData.abilityCheckAgainst}
                  damage={cardData.damage}
                  hitEffect={cardData.hitEffect}
                  success={cardData.success}
                  fail={cardData.fail}
                  flavor={cardData.flavor}
                  economy={cardData.economy}
                  actionCost={cardData.actionCost}
                  special={cardData.special}
                  skillType={cardData.skillType}
                  skill1Title={cardData.skill1Title}
                  skill1Description={cardData.skill1Description}
                  skill2Title={cardData.skill2Title}
                  skill2Description={cardData.skill2Description}
                  skill3Title={cardData.skill3Title}
                  skill3Description={cardData.skill3Description}
                  masteryImage={cardData.masteryImage}
                  cardType={activeTab}
                  titleType={cardData.titleType}
                  titleText={cardData.titleText}
                  originImage={cardData.originImage}
                />
              </div>
              <button onClick={handleDownload} style={{ marginTop: '1rem' }}>
                Download as PNG
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardCreator;
