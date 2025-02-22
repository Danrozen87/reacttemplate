
import { AnimationObject } from '../types/animation-types';

/**
 * @description Utility functions for handling animations
 */

// Get nested value from animation object
export const getNestedValue = (obj: AnimationObject, path: string[]): string => {
  let current: any = obj;
  
  for (const key of path) {
    if (current === undefined) return '';
    current = current[key];
  }
  
  return typeof current === 'string' ? current : '';
};

// Combine multiple animation classes
export const combineAnimations = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};
