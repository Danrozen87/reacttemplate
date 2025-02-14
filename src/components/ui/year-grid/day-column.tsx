
import React from 'react';
import { cn } from '@/lib/utils';
import { DayColumnProps } from './types';

export const DayColumn = ({ dayIndex, dayWidth, children }: DayColumnProps) => {
  return (
    <div
      className={cn(
        "h-full border-r border-border/10 last:border-r-0",
        "transition-colors hover:bg-muted/5"
      )}
      style={{ width: `${dayWidth}px` }}
      data-day-index={dayIndex}
    >
      {children}
    </div>
  );
};
