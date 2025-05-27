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
  skillType?: string;
  skill1Title?: string;
  skill1Description?: string;
  skill2Title?: string;
  skill2Description?: string;
  skill3Title?: string;
  skill3Description?: string;
  masteryImage?: string | null;
}

const ManeuverCreator: React.FC = () => {
  const [cardData, setCardData] = useState<CardData | null>(null);
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
      <h2 style={{ textAlign: 'center' }}>Maneuver Creator</h2>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '2rem', 
        justifyContent: 'center' 
      }}>
        <div style={{ flex: '0 0 auto', minWidth: '350px' }}>
          <CardForm onSubmit={handleFormSubmit} />
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

export default ManeuverCreator;
