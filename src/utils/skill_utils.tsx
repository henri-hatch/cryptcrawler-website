import React from 'react';
import maneuverData from '../data/maneuver_data.tsx';
import masteryData from '../data/mastery_data.tsx';
import { ManeuverLink, useManeuverModal } from '../components/maneuver_modal';
import { Link } from 'react-router-dom';

// Interface for skill slot used in the SkillTemplate
export interface SkillSlot {
  title: string;
  content: React.ReactNode;
}

// Interface for mastery skill slots in row4 of the SkillTemplate
export interface MasterySkillSlot {
  image?: string;
  maneuver?: React.ReactNode;
  alt?: string;
}

/**
 * Creates a skill slot with a maneuver link if the maneuver exists
 * @param title The title for the skill slot (will not be displayed for maneuvers)
 * @param maneuverId The ID of the maneuver to link
 * @returns A SkillSlot object
 */
export const createManeuverSkillSlot = (maneuverId: string): SkillSlot => {
  const maneuver = maneuverData.find(m => m.id === maneuverId);
  
  return {
    // For maneuvers, we'll keep the title empty as the maneuver link itself contains the title
    title: '',
    content: maneuver ? (
      <ManeuverLink maneuver={maneuver} />
    ) : `Maneuver "${maneuverId}" not found`
  };
};

/**
 * Creates a skill slot with simple text content
 * @param title The title for the skill slot
 * @param content The text content for the skill slot
 * @returns A SkillSlot object
 */
export const createTextSkillSlot = (content: string): SkillSlot => {
  return {
    title: '',
    content
  };
};

/**
 * Gets all maneuvers for a specific category
 * @param category The category to filter maneuvers by
 * @returns An array of SkillSlot objects for the matching maneuvers
 */
export const getManeuversByCategory = (category: string): SkillSlot[] => {
  return maneuverData
    .filter(maneuver => maneuver.category?.includes(category))
    .map(maneuver => ({
      // For maneuvers, we'll keep the title empty as the maneuver link itself contains the title
      title: '',
      content: <ManeuverLink maneuver={maneuver} />
    }));
};

/**
 * Creates a row of skill slots filled with placeholder content
 * @param count The number of placeholder slots to create
 * @returns An array of placeholder SkillSlot objects
 */
export const createPlaceholderRow = (count: number = 5): SkillSlot[] => {
  return Array(count).fill(0).map((_, i) => ({
    title: `Placeholder ${i+1}`,
    content: "aa"
  }));
};

/**
 * Component to display mastery or maneuver image and open modal on click
 */
const MasteryImageLink: React.FC<{ data: any; imageUrl: string; alt?: string }> = ({ data, imageUrl, alt }) => {
  const { openModal } = useManeuverModal();
  return (
    <img
      src={imageUrl}
      alt={alt || data.name}
      className="mastery-image"
      onClick={() => openModal({
        id: data.id,
        name: data.name,
        description: data.description,
        maneuverImage: data.masteryImage || data.maneuverImage,
        category: data.category
      })}
    />
  );
};

/**
 * Creates a mastery skill slot with an image and maneuver modal
 * @param masteryId The ID of the mastery to display
 * @param imageUrl The URL of the image to display in the mastery (usually from public/skills-images)
 * @param altText Optional alt text for the image
 * @returns A MasterySkillSlot object
 */
export const createMasterySkillSlot = (
  masteryId: string,
  imageUrl?: string,
  altText?: string
): MasterySkillSlot => {
  // Search in mastery data first, then maneuvers
  const mastery = masteryData.find(m => m.id === masteryId);
  if (mastery) {
    return { maneuver: <MasteryImageLink data={mastery} imageUrl={imageUrl || mastery.masteryImage} alt={altText} /> };
  }
  const maneuver = maneuverData.find(m => m.id === masteryId);
  if (maneuver && imageUrl) {
    return { maneuver: <MasteryImageLink data={maneuver} imageUrl={imageUrl} alt={altText} /> };
  }
  // Placeholder circle if no mastery or maneuver found
  return {};
};

/**
 * Creates a row of mastery skill slots
 * @param masterySlotsData Array of objects with image, maneuver ID, and optional alt text
 * @returns An array of MasterySkillSlot objects
 */
export const createMasteryRow = (
  masterySlotsData: { imageUrl: string; maneuverId: string; altText?: string }[]
): MasterySkillSlot[] => {
  return masterySlotsData.map(({ imageUrl, maneuverId, altText }) => 
    createMasterySkillSlot(maneuverId, imageUrl, altText)
  );
};

/**
 * Creates a skill slot with a navigation link to a subpage
 * @param linkText The text to display for the link
 * @param linkUrl The URL route to navigate to
 * @param title Optional title for the skill slot
 * @returns A SkillSlot object
 */
export const createLinkSkillSlot = (
  linkText: string,
  linkUrl: string,
  title: string = ''
): SkillSlot => {
  return {
    title,
    content: (
      <Link to={linkUrl} className="skill-link">
        {linkText}
      </Link>
    )
  };
};