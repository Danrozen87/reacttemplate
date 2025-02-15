
import * as React from 'react';

/**
 * @description Centralized animation and blur utility classes with focus effects
 */

export const animations = {
  // Modal animations with root-level focus effects
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
    // Root portal wrapper for modals
    portal: {
      wrapper: "relative z-50",
      background: "fixed inset-0 transition-all bg-background/80 backdrop-blur-md",
      container: "fixed inset-0 overflow-y-auto",
      positioning: "flex min-h-full items-center justify-center p-4 text-center",
    }
  },
  // Menu and sidebar animations
  navigation: {
    topBar: {
      base: "sticky top-0 z-40 w-full transition-all duration-200",
      scrolled: "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      notScrolled: "bg-background/0"
    },
    profileMenu: {
      overlay: "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden",
      content: "absolute right-0 z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
    },
    sidebar: {
      overlay: {
        base: "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden",
        enter: "motion-safe:animate-overlay-in",
        exit: "motion-safe:animate-overlay-out",
      },
      content: {
        base: "fixed inset-y-0 left-0 z-40 w-full max-w-xs border-r bg-background p-6 shadow-lg motion-safe:transition-all sm:max-w-sm",
        enter: "motion-safe:animate-slide-in-left",
        exit: "motion-safe:animate-slide-out-left",
      }
    }
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

export type AnimationKey = keyof typeof animations;

// Hook for scroll-based animations
export const useScrollAnimation = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolled;
};
