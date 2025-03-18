import React from 'react';
import { Link } from 'react-router-dom';

interface ContentCardProps {
  title: string;
  imagePath: string;
  linkTo: string;
  description?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, imagePath, linkTo, description }) => {
  return (
    <Link to={linkTo} className="content-card">
      <div className="card-image-container">
        <img src={imagePath} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </Link>
  );
};

export default ContentCard;