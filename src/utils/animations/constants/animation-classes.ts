
/**
 * @description Centralized animation utility classes
 */

export const animations = {
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
    portal: {
      wrapper: "relative z-50",
      background: "fixed inset-0 transition-all bg-background/80 backdrop-blur-md",
      container: "fixed inset-0 overflow-y-auto",
      positioning: "flex min-h-full items-center justify-center p-4 text-center",
    }
  },
  navigation: {
    topBar: {
      base: "sticky top-0 z-40 w-full transition-all duration-200",
      scrolled: "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      notScrolled: "bg-background/0"
    },
    profileMenu: {
      overlay: "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden",
      content: "absolute right-0 z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
    }
  },
  page: {
    enter: "motion-safe:animate-fade-in",
    exit: "motion-safe:animate-fade-out"
  },
  element: {
    fadeIn: "motion-safe:animate-fade-in",
    fadeOut: "motion-safe:animate-fade-out",
    scaleIn: "motion-safe:animate-scale-in",
    scaleOut: "motion-safe:animate-scale-out",
    slideIn: "motion-safe:animate-slide-in",
    slideOut: "motion-safe:animate-slide-out",
    bounce: "motion-safe:animate-bounce",
    pulse: "motion-safe:animate-pulse",
    slideUp: "motion-safe:animate-slide-up",
    slideDown: "motion-safe:animate-slide-down",
    rotate: "motion-safe:animate-rotate",
    pop: "motion-safe:animate-pop"
  },
  blur: {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
    "2xl": "backdrop-blur-2xl",
    "3xl": "backdrop-blur-3xl"
  },
  loading: {
    shimmer: "animate-shimmer bg-gradient-to-r from-transparent via-muted/5 to-transparent",
    pulse: "animate-pulse",
    spinner: "animate-spinner",
    progress: "animate-progress",
    skeleton: "animate-pulse bg-muted/60"
  },
  loadingStates: {
    button: {
      base: "relative overflow-hidden transition-all duration-200",
      loading: "animate-pulse cursor-wait opacity-70"
    },
    card: {
      base: "relative overflow-hidden transition-all duration-200",
      loading: "animate-shimmer pointer-events-none"
    },
    image: {
      base: "relative overflow-hidden bg-muted/40",
      loading: "animate-pulse"
    }
  }
} as const;
