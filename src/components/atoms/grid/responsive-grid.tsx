
import React from 'react';
import { cn } from '@/lib/utils';
import { ResponsiveGridProps, defaultColumns, gapClasses } from './types';
import { getColumnsClass } from './utils';
import { useTranslation } from 'react-i18next';

export const ResponsiveGrid = ({
  columns = defaultColumns,
  gap = 'md',
  className,
  children,
  gridLabel,
  gridRole = 'grid',
  ...props
}: ResponsiveGridProps) => {
  const { t } = useTranslation('grid');
  
  return (
    <div 
      role={gridRole}
      aria-label={gridLabel || t('grid.aria.label')}
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
