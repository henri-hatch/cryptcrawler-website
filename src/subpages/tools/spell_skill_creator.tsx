import React, { useState, useRef } from 'react';
import domtoimage from 'dom-to-image';

import CardForm from '../../components/card_form';
import AbilityCard from '../../components/ability_card';

interface CardData {
  title: string;
  usageType: string;
  requirements: string[];
  target: string;
  damage: string;
  hitEffect: string;
  flavor: string;
  economy: string;
  special: string; // New field
}

const SpellSkillCreator: React.FC = () => {
  const [cardData, setCardData] = useState<CardData | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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
      <h2>Spell & Skill Creator</h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <CardForm onSubmit={handleFormSubmit} />
        </div>

        <div>
          {cardData && (
            <>
              <div ref={cardRef}>
                <AbilityCard
                  title={cardData.title}
                  usageType={cardData.usageType}
                  requirements={cardData.requirements}
                  target={cardData.target}
                  damage={cardData.damage}
                  hitEffect={cardData.hitEffect}
                  flavor={cardData.flavor}
                  economy={cardData.economy}
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

export default SpellSkillCreator;
