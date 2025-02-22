
/**
 * @description Main exports for the animation system
 */

// Types
export * from './types/animation-types';

// Constants
export { animations } from './constants/animation-classes';
export { interactionAnimations } from './constants/interaction-classes';
export { loadingAnimations } from './constants/loading-classes';

// Hooks
export { useScrollAnimation } from './hooks/use-scroll-animation';
export { useLoadingAnimation } from './hooks/use-loading-animation';
export { useAppearAnimation } from './hooks/use-appear-animation';
export { useHoverAnimation, useFocusAnimation } from './hooks/use-interaction-animation';
export { useSequentialAnimation } from './hooks/use-sequential-animation';

// Utilities
export { getNestedValue, combineAnimations } from './utils/animation-utils';
