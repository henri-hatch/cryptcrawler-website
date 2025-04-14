import React from 'react';
import maneuverData from '../data/maneuver_data.tsx';
import { ManeuverLink } from '../components/maneuver_modal';
import { Link } from 'react-router-dom';

// Interface for skill slot used in the SkillTemplate
export interface SkillSlot {
  title: string;
  content: React.ReactNode;
}

// Interface for circle skill slots in row4 of the SkillTemplate
export interface CircleSkillSlot {
  image?: string;
  link?: string;
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
 * Creates a circle skill slot with an image and link to a subpage
 * @param imageUrl The URL of the image to display in the circle (usually from public/skills-images)
 * @param linkUrl The URL route to the subpage
 * @param altText Optional alt text for the image
 * @returns A CircleSkillSlot object
 */
export const createCircleSkillSlot = (
  imageUrl: string,
  linkUrl: string,
  altText?: string
): CircleSkillSlot => {
  return {
    image: imageUrl,
    link: linkUrl,
    alt: altText
  };
};

/**
 * Creates a row of circle skill slots
 * @param circleSlotsData Array of objects with image, link, and optional alt text
 * @returns An array of CircleSkillSlot objects
 */
export const createCircleRow = (
  circleSlotsData: { imageUrl: string; linkUrl: string; altText?: string }[]
): CircleSkillSlot[] => {
  return circleSlotsData.map(({ imageUrl, linkUrl, altText }) => 
    createCircleSkillSlot(imageUrl, linkUrl, altText)
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