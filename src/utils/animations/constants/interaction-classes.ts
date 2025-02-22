
/**
 * @description Animation classes for interactive elements
 */

export const interactionAnimations = {
  interaction: {
    hover: {
      scale: "hover:scale-105 active:scale-95 transition-transform",
      glow: "hover:shadow-lg hover:shadow-primary/25 transition-shadow",
      lift: "hover:-translate-y-1 transition-transform",
      highlight: "hover:bg-accent/10 transition-colors"
    },
    focus: {
      ring: "focus:ring-2 focus:ring-primary/50 focus:outline-none transition-shadow",
      scale: "focus:scale-[1.02] transition-transform",
      glow: "focus:shadow-lg focus:shadow-primary/25 transition-shadow"
    }
  },
  state: {
    loading: "motion-safe:animate-pulse opacity-50",
    success: "motion-safe:animate-success",
    error: "motion-safe:animate-shake",
    active: "motion-safe:animate-pop"
  },
  combined: {
    buttonPress: "active:scale-95 hover:scale-105 transition-transform",
    cardHover: "hover:-translate-y-1 hover:shadow-lg transition-all",
    menuItem: "hover:bg-accent/10 active:bg-accent/20 transition-colors",
    linkHover: "hover:underline hover:text-primary transition-all"
  }
} as const;
