import React, { useState, useRef, useEffect } from 'react';
import domtoimage from 'dom-to-image';

import CardForm from '../../components/card_form';
import AbilityCard from '../../components/ability_card';

interface CardData {
  title: string;
  usageType: string;
  requirements: string;
  target: string;
  trigger: string;
  damage: string;
  hitEffect: string;
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
                  requirements={cardData.requirements}
                  target={cardData.target}
                  trigger={cardData.trigger}
                  damage={cardData.damage}
                  hitEffect={cardData.hitEffect}
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
