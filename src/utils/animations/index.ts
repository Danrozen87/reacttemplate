
/**
 * @description Centralized animation and blur utility classes
 */

export const animations = {
  // Modal animations
  modal: {
    overlay: {
      base: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
      enter: "animate-overlay-in",
      exit: "animate-overlay-out",
    },
    content: {
      base: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200",
      enter: "animate-modal-in",
      exit: "animate-modal-out",
    },
  },
  // Menu animations
  menu: {
    overlay: {
      base: "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm",
      enter: "animate-overlay-in",
      exit: "animate-overlay-out",
    },
    content: {
      base: "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      enter: "animate-modal-in",
      exit: "animate-modal-out",
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
} as const;

// Type for animation keys
export type AnimationKey = keyof typeof animations;
