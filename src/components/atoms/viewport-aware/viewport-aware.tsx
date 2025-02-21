
import React from 'react';
import { useViewport, Viewport } from '@/hooks/use-viewport';

interface ViewportAwareProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  renderOn?: Viewport[];
}

/**
 * @component ViewportAware
 * @description Conditionally renders content based on viewport
 */
export const ViewportAware: React.FC<ViewportAwareProps> = ({
  children,
  fallback,
  renderOn = ["xs", "sm", "md", "lg", "xl", "2xl"],
}) => {
  const { viewport } = useViewport();
  const shouldRender = renderOn.includes(viewport);

  return shouldRender ? <>{children}</> : <>{fallback}</>;
};