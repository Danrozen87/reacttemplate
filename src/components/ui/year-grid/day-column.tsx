
import React from 'react';
import { cn } from '@/lib/utils';
import { DayColumnProps } from './types';

export const DayColumn = ({ 
  dayIndex, 
  dayWidth, 
  dayNumber,
  isWeekend,
  isCurrentDay,
  isSelected,
  isInRange,
  hasEvents,
  onClick,
  onDragOver,
  onDragStart,
  onDragEnd,
  onKeyDown,
  children 
}: DayColumnProps) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
    onKeyDown?.(event);
  };

  return (
    <div
      className={cn(
        "h-full border-r border-border/10 last:border-r-0",
        "transition-all duration-200 group relative",
        "hover:bg-muted/10",
        "focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        isWeekend && "bg-muted/5",
        isCurrentDay && "bg-primary/5",
        isSelected && "bg-primary/20",
        isInRange && "bg-primary/10",
        hasEvents && "ring-1 ring-primary/20"
      )}
      style={{ width: `${dayWidth}px` }}
      data-day-index={dayIndex}
      role="gridcell"
      aria-label={`Day ${dayNumber}${isCurrentDay ? ' (Today)' : ''}${hasEvents ? ' (Has events)' : ''}`}
      aria-selected={isSelected}
      tabIndex={0}
      onClick={onClick}
      onDragOver={(e) => {
        e.preventDefault();
        onDragOver?.();
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onKeyDown={handleKeyDown}
      draggable
    >
      <span 
        className={cn(
          "absolute top-1 right-1 text-xs",
          "transition-colors duration-200",
          isCurrentDay ? "text-primary font-medium" : "text-muted-foreground"
        )}
      >
        {dayNumber}
      </span>
      
      {hasEvents && (
        <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-primary" />
      )}
      
      <div className="p-1 pt-4">
        {children}
      </div>
    </div>
  );
};
