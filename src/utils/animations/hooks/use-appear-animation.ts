
import * as React from 'react';

interface AppearAnimationOptions {
  delay?: number;
  duration?: number;
  threshold?: number;
}

/**
 * @description Hook for managing element appearance animations
 */
export const useAppearAnimation = (options?: AppearAnimationOptions) => {
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
