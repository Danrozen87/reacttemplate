
import React from 'react';
import { cn } from '@/lib/utils';
import { MonthHeaderProps } from './types';

export const MonthHeader = ({ 
  monthName, 
  monthWidth, 
  weekNumbers,
  onMonthClick,
  children 
}: MonthHeaderProps) => {
  const uniqueWeeks = [...new Set(weekNumbers)];
  
  return (
    <div
      className={cn(
        "border-r border-border relative",
        "flex flex-col",
        "transition-colors duration-200",
        "hover:bg-muted/5"
      )}
      style={{ width: `${monthWidth}px` }}
      role="columnheader"
      aria-label={monthName}
      onClick={onMonthClick}
    >
      <h3 
        className={cn(
          "text-sm font-medium p-2 text-center",
          "transition-colors duration-200",
          "text-foreground/80 hover:text-foreground"
        )}
      >
        {monthName}
      </h3>
      
      <div 
        className={cn(
          "flex justify-start px-1 pb-1",
          "text-xs text-muted-foreground",
          "overflow-x-auto scrollbar-none"
        )}
      >
        {uniqueWeeks.map((week) => (
          <span 
            key={week}
            className={cn(
              "min-w-[2rem] text-center",
              "transition-colors duration-200",
              "hover:text-foreground"
            )}
            aria-label={`Week ${week}`}
          >
            W{week}
          </span>
        ))}
      </div>
      
      {children}
    </div>
  );
};
