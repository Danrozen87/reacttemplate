
/**
 * @description Core animation type definitions
 */

// Base animation types
export type FadeVariant = 'in' | 'out';
export type ScaleVariant = 'in' | 'out';
export type SlideVariant = 'in' | 'out' | 'in-left' | 'out-left';
export type OverlayVariant = 'in' | 'out';

// Motion animation types
export type MotionVariant = 'bounce' | 'pulse' | 'slide-up' | 'slide-down' | 'rotate' | 'pop';

// Loading animation types
export type LoadingVariant = 'shimmer' | 'progress' | 'spinner' | 'pulse' | 'skeleton';

// Interaction animation types
export type InteractionVariant = 'shake' | 'success' | 'bounce';

// Animation duration types
export type AnimationDuration = 'fast' | 'normal' | 'slow';

// Animation timing function types
export type AnimationTiming = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

// Type for animation class strings
export type AnimationClassString = string;

// Type for nested animation objects
export type AnimationObject = {
  [key: string]: AnimationClassString | AnimationObject;
};

export type AnimationKey = keyof typeof animations;
export type AnimationValue<T extends AnimationKey> = typeof animations[T];
