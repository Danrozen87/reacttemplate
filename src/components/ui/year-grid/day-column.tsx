
import React from 'react';
import { cn } from '@/lib/utils';
import { DayColumnProps } from './types';

export const DayColumn = ({ 
  dayIndex, 
  dayWidth, 
  dayNumber,
  isWeekend,
  isCurrentDay,
  onClick,
  onDragOver,
  children 
}: DayColumnProps) => {
  return (
    <div
      className={cn(
        "h-full border-r border-border/10 last:border-r-0",
        "transition-colors group relative",
        "hover:bg-muted/5",
        isWeekend && "bg-muted/5",
        isCurrentDay && "bg-primary/5"
      )}
      style={{ width: `${dayWidth}px` }}
      data-day-index={dayIndex}
      role="gridcell"
      aria-label={`Day ${dayNumber}`}
      tabIndex={0}
      onClick={onClick}
      onDragOver={onDragOver}
    >
      <span className="absolute top-1 right-1 text-xs text-muted-foreground">
        {dayNumber}
      </span>
      {children}
    </div>
  );
};
