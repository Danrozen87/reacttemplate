import * as React from 'react';

/**
 * @description Animation variant types and utilities
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

/**
 * @description Centralized animation and blur utility classes with focus effects
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
  blur: {
    sm: "backdrop-blur-sm",
    DEFAULT: "backdrop-blur",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
    "2xl": "backdrop-blur-2xl",
    "3xl": "backdrop-blur-3xl",
  },
  page: {
    enter: "motion-safe:animate-fade-in motion-safe:duration-300",
    exit: "motion-safe:animate-fade-out motion-safe:duration-200",
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
  },
} as const;

export type AnimationKey = keyof typeof animations;
export type AnimationValue<T extends AnimationKey> = typeof animations[T];

// Hook for scroll-based animations with custom threshold
export const useScrollAnimation = (threshold = 25) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};

// Loading state hook with duration
export const useLoadingAnimation = (duration = 2000) => {
  const [isLoading, setIsLoading] = React.useState(false);
  
  React.useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isLoading, duration]);
  
  return [isLoading, setIsLoading] as const;
};

// Hook for managing element appearance animations
export const useAppearAnimation = (options?: {
  delay?: number;
  duration?: number;
  threshold?: number;
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: options?.threshold ?? 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [options?.threshold]);

  const animationStyle = React.useMemo(() => ({
    opacity: 0,
    transform: 'translateY(20px)',
    transition: `all ${options?.duration ?? 300}ms ease-out`,
    transitionDelay: `${options?.delay ?? 0}ms`,
    ...(isVisible && {
      opacity: 1,
      transform: 'translateY(0)',
    }),
  }), [isVisible, options?.duration, options?.delay]);

  return { elementRef, isVisible, animationStyle };
};

// Hook for managing hover animations
export const useHoverAnimation = (variant: keyof typeof animations.interaction.hover) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const hoverClass = React.useMemo(() => 
    animations.interaction.hover[variant],
    [variant]
  );

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    className: hoverClass,
  };

  return { isHovered, hoverProps };
};

// Hook for managing focus animations
export const useFocusAnimation = (variant: keyof typeof animations.interaction.focus) => {
  const [isFocused, setIsFocused] = React.useState(false);
  
  const focusClass = React.useMemo(() => 
    animations.interaction.focus[variant],
    [variant]
  );

  const focusProps = {
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    className: focusClass,
  };

  return { isFocused, focusProps };
};

// Hook for managing sequential animations
export const useSequentialAnimation = (items: string[], delay = 100) => {
  const [visibleItems, setVisibleItems] = React.useState<Set<string>>(new Set());

  React.useEffect(() => {
    items.forEach((item, index) => {
      const timer = setTimeout(() => {
        setVisibleItems(prev => new Set([...prev, item]));
      }, index * delay);

      return () => clearTimeout(timer);
    });
  }, [items, delay]);

  const isItemVisible = (item: string) => visibleItems.has(item);

  return { isItemVisible };
};

// Get nested value from animation object
const getNestedValue = (obj: AnimationObject, path: string[]): string => {
  let current: any = obj;
  
  for (const key of path) {
    if (current === undefined) return '';
    current = current[key];
  }
  
  return typeof current === 'string' ? current : '';
};

// Type-safe animation utility functions
export const getAnimationClass = (
  key: AnimationKey,
  ...path: string[]
): string => {
  const animation = animations[key];
  if (typeof animation === 'string') return animation;
  return getNestedValue(animation as AnimationObject, path);
};

export const combineAnimations = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};
