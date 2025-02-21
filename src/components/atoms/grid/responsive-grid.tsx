
import React from 'react';
import { cn } from '@/lib/utils';
import { ResponsiveGridProps, defaultColumns, gapClasses } from './types';
import { getColumnsClass } from './utils';

export const ResponsiveGrid = ({
  columns = defaultColumns,
  gap = 'md',
  className,
  children,
  ...props
}: ResponsiveGridProps) => {
  return (
    <div 
      className={cn(
        'grid w-full',
        getColumnsClass(columns),
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
