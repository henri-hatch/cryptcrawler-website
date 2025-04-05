import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './content_card.css';

interface ContentCardProps {
  title: string;
  imagePath: string;
  linkTo?: string; // Make optional
  description?: string;
  className?: string;
  id?: string; // Add id for data tracking
  isSelectable?: boolean; // Add selectable mode
  isSelected?: boolean; // Track selection state
  onSelect?: () => void; // Handle selection
}

const ContentCard: React.FC<ContentCardProps> = ({ 
  title, 
  imagePath, 
  linkTo, 
  description, 
  className,
  id,
  isSelectable = false,
  isSelected = false,
  onSelect
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  
  // Check if description is overflowing
  useEffect(() => {
    if (descriptionRef.current) {
      const isTextOverflowing = 
        descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
      setIsOverflowing(isTextOverflowing);
    }
  }, [description]);

  // Handle expand button click
  const handleExpandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded(!expanded);
  };

  // Card content
  const cardContent = (
    <>
      <div className="card-image-container">
        <img src={imagePath} alt={title} />
        {isSelected && <div className="selection-indicator">✓</div>}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        {description && (
          <>
            <p 
              ref={descriptionRef} 
              className={expanded ? 'expanded-description' : 'truncated-description'}
            >
              {description}
            </p>
            {isOverflowing && (
              <button 
                className="read-more-btn" 
                onClick={handleExpandClick}
                aria-label={expanded ? "Show less" : "Show more"}
              >
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {expanded ? (
                    <path 
                      d="M7 14L12 9L17 14" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  ) : (
                    <path 
                      d="M7 10L12 15L17 10" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  )}
                </svg>
              </button>
            )}
          </>
        )}
      </div>
    </>
  );

  // Render as clickable div or link
  if (isSelectable) {
    return (
      <div 
        id={id}
        className={`content-card selectable ${className || ''} ${expanded ? 'expanded' : ''} ${isSelected ? 'selected' : ''}`}
        onClick={onSelect}
        data-testid={`ancestry-card-${id}`} // Optional: helpful for testing
      >
        {cardContent}
      </div>
    );
  } else {
    return (
      <Link 
        id={id}
        to={linkTo || '#'} 
        className={`content-card ${className || ''} ${expanded ? 'expanded' : ''}`}
        data-testid={`ancestry-link-${id}`} // Optional: helpful for testing
      >
        {cardContent}
      </Link>
    );
  }
};

export default ContentCard;