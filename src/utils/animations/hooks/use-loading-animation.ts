
import * as React from 'react';

/**
 * @description Hook for managing loading state animations
 */
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
