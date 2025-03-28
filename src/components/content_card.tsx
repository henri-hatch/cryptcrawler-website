import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ContentCardProps {
  title: string;
  imagePath: string;
  linkTo: string;
  description?: string;
  className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, imagePath, linkTo, description, className }) => {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  
  // Check if description is overflowing (needs arrow button)
  useEffect(() => {
    if (descriptionRef.current) {
      const isTextOverflowing = 
        descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
      setIsOverflowing(isTextOverflowing);
    }
  }, [description]);

  // Handle the arrow button click
  const handleExpandClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the Link from navigating
    e.stopPropagation(); // Stop event bubbling
    setExpanded(!expanded);
  };

  return (
    <Link to={linkTo} className={`content-card ${className || ''} ${expanded ? 'expanded' : ''}`}>
      <div className="card-image-container">
        <img src={imagePath} alt={title} />
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
                {expanded ? '⮝' : '⮟'}
              </button>
            )}
          </>
        )}
      </div>
    </Link>
  );
};

export default ContentCard;