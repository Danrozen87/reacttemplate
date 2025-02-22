
/**
 * @description Animation classes for loading states
 */

export const loadingAnimations = {
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
