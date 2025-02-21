
import type { HTMLAttributes } from 'react';

export interface ResponsiveGridColumns {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  '2xl'?: number;
}

export interface ResponsiveGridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: ResponsiveGridColumns;
  gap?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  /**
   * Optional grid label for screen readers
   */
  gridLabel?: string;
  /**
   * Optional role override. Defaults to 'grid'
   */
  gridRole?: 'grid' | 'list' | 'region';
}

export const defaultColumns = {
  xs: 1, sm: 2, md: 3, lg: 4, xl: 4, '2xl': 4
} as const;

export const gapClasses = {
  none: 'gap-0', sm: 'gap-2', md: 'gap-4', lg: 'gap-6'
} as const;
