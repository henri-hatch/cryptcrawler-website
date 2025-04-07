import React from 'react';
import maneuverData from '../data/maneuver_data.tsx';
import { ManeuverLink } from '../components/maneuver_modal';

// Interface for skill slot used in the SkillTemplate
export interface SkillSlot {
  title: string;
  content: React.ReactNode;
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
export const createTextSkillSlot = (title: string, content: string): SkillSlot => {
  return {
    title,
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