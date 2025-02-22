
import * as React from 'react';

/**
 * @description Hook for managing sequential animations
 */
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
