
import React from 'react';
import { cn } from '@/lib/utils';

export interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  gap?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const ResponsiveGrid = ({
  columns = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 4,
    '2xl': 4
  },
  gap = 'md',
  className,
  children,
  ...props
}: ResponsiveGridProps) => {
  const gapClasses = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6'
  };

  const getColumnsClass = () => {
    const classes = [];
    if (columns.xs) classes.push(`grid-cols-${columns.xs}`);
    if (columns.sm) classes.push(`sm:grid-cols-${columns.sm}`);
    if (columns.md) classes.push(`md:grid-cols-${columns.md}`);
    if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`);
    if (columns.xl) classes.push(`xl:grid-cols-${columns.xl}`);
    if (columns['2xl']) classes.push(`2xl:grid-cols-${columns['2xl']}`);
    return classes.join(' ');
  };

  return (
    <div 
      className={cn(
        'grid w-full',
        getColumnsClass(),
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
