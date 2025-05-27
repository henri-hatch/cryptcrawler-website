import React, { ReactNode } from 'react';
import './skill_template.css';

interface SkillSlot {
  title: string;
  content: ReactNode;
}

interface MasterySkillSlot {
  maneuver?: React.ReactNode;
  alt?: string;
}

interface SkillTemplateProps {
  skillName: string;
  row1?: SkillSlot[];
  row2?: SkillSlot[];
  row3?: SkillSlot[];
  row4?: MasterySkillSlot[];
}

const SkillTemplate: React.FC<SkillTemplateProps> = ({ 
  skillName, 
  row1 = Array(5).fill({ title: '', content: 'aa' }),
  row2 = Array(5).fill({ title: '', content: 'aa' }),
  row3 = Array(5).fill({ title: '', content: 'aa' }),
  row4 = Array(3).fill({})
}) => {
  // Ensure each row has exactly 5 items
  const ensureRowLength = (row: SkillSlot[]) => {
    if (row.length < 5) {
      return [...row, ...Array(5 - row.length).fill({ title: '', content: 'aa' })];
    }
    return row.slice(0, 5);
  };

  // Ensure bottom row has exactly 3 slots
  const ensureCircleRowLength = (row: MasterySkillSlot[]) => {
    if (row.length < 3) {
      return [...row, ...Array(3 - row.length).fill({})];
    }
    return row.slice(0, 3);
  };

  const normalizedRow1 = ensureRowLength(row1);
  const normalizedRow2 = ensureRowLength(row2);
  const normalizedRow3 = ensureRowLength(row3);
  const normalizedRow4 = ensureCircleRowLength(row4);

  return (
    <div className="skill-template">
      <h2 className="skill-title">{skillName}</h2>
      
      {/* Grid Layout for Skill Boxes */}
      <div className="skill-grid">
        {/* Row 1 */}
        <div className="skill-row">
          {normalizedRow1.map((slot, index) => (
            <div key={`row1-${index}`} className="skill-box">
              {slot.title && <h3 className="skill-box-title">{slot.title}</h3>}
              <div className="skill-box-content">{slot.content}</div>
            </div>
          ))}
        </div>
        
        {/* Horizontal Rule */}
        <hr className="hr-divider" />
        
        {/* Row 2 */}
        <div className="skill-row">
          {normalizedRow2.map((slot, index) => (
            <div key={`row2-${index}`} className="skill-box">
              {slot.title && <h3 className="skill-box-title">{slot.title}</h3>}
              <div className="skill-box-content">{slot.content}</div>
            </div>
          ))}
        </div>
        
        {/* Horizontal Rule */}
        <hr className="hr-divider" />
        
        {/* Row 3 */}
        <div className="skill-row">
          {normalizedRow3.map((slot, index) => (
            <div key={`row3-${index}`} className="skill-box">
              {slot.title && <h3 className="skill-box-title">{slot.title}</h3>}
              <div className="skill-box-content">{slot.content}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Mastery Row: only show image when maneuver exists, else placeholder circle */}
      <div className="skill-circles">
        {normalizedRow4.map((slot, index) => (
          slot.maneuver ? (
            <div key={`circle-${index}`} className="skill-circle-item">
              {slot.maneuver}
            </div>
          ) : (
            <div
              key={`circle-${index}`}
              className="skill-circle placeholder"
              aria-label={slot.alt || `Circle ${index + 1}`}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default SkillTemplate;