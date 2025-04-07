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
  savingThrowDC: string; // Changed from savingThrowPassive
  damage: string;
  hitEffect: string;
  success: string; // New field
  fail: string; // New field
  flavor: string;
  economy: string;
  actionCost: string;
  special: string;
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
                  damage={cardData.damage}
                  hitEffect={cardData.hitEffect}
                  success={cardData.success}
                  fail={cardData.fail}
                  flavor={cardData.flavor}
                  economy={cardData.economy}
                  actionCost={cardData.actionCost}
                  special={cardData.special}
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
