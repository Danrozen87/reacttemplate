
/**
 * @description Centralized animation and blur utility classes
 */

export const animations = {
  // Modal animations
  modal: {
    overlay: {
      base: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm motion-safe:transition-all",
      enter: "motion-safe:animate-overlay-in",
      exit: "motion-safe:animate-overlay-out",
    },
    content: {
      base: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg motion-safe:duration-200",
      enter: "motion-safe:animate-modal-in",
      exit: "motion-safe:animate-modal-out",
    },
  },
  // Menu animations
  menu: {
    overlay: {
      base: "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm motion-safe:transition-all",
      enter: "motion-safe:animate-overlay-in",
      exit: "motion-safe:animate-overlay-out",
    },
    content: {
      base: "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md motion-safe:transition-all",
      enter: "motion-safe:animate-modal-in",
      exit: "motion-safe:animate-modal-out",
    },
  },
  // Shared blur effects
  blur: {
    sm: "backdrop-blur-sm",
    DEFAULT: "backdrop-blur",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
    "2xl": "backdrop-blur-2xl",
    "3xl": "backdrop-blur-3xl",
  },
  // Page transitions
  page: {
    enter: "motion-safe:animate-fade-in motion-safe:duration-300",
    exit: "motion-safe:animate-fade-out motion-safe:duration-200",
  },
  // Element animations
  element: {
    fadeIn: "motion-safe:animate-fade-in",
    fadeOut: "motion-safe:animate-fade-out",
    scaleIn: "motion-safe:animate-scale-in",
    scaleOut: "motion-safe:animate-scale-out",
    slideIn: "motion-safe:animate-slide-in",
    slideOut: "motion-safe:animate-slide-out",
  }
} as const;

// Type for animation keys
export type AnimationKey = keyof typeof animations;
