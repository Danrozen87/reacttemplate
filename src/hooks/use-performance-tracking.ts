
import { useEffect, useRef } from 'react';
import { performanceTracker } from '@/utils/monitoring/performance-tracker';

export function usePerformanceTracking(componentName: string) {
  const renderStartTime = useRef<number>();

  useEffect(() => {
    renderStartTime.current = performance.now();

    return () => {
      if (renderStartTime.current) {
        const renderTime = performance.now() - renderStartTime.current;
        performanceTracker.trackRender(componentName, renderTime);
      }
    };
  }, [componentName]);
}
