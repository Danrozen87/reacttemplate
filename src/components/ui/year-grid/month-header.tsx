
import React from 'react';
import { cn } from '@/lib/utils';
import { MonthHeaderProps } from './types';

export const MonthHeader = ({ 
  monthName, 
  monthWidth, 
  weekNumbers,
  children 
}: MonthHeaderProps) => {
  const uniqueWeeks = [...new Set(weekNumbers)];
  
  return (
    <div
      className={cn(
        "border-r border-border relative",
        "flex flex-col"
      )}
      style={{ width: `${monthWidth}px` }}
      role="columnheader"
      aria-label={monthName}
    >
      <h3 className="text-sm font-medium text-foreground/80 p-2 text-center">
        {monthName}
      </h3>
      
      <div className="flex justify-start px-1 pb-1 text-xs text-muted-foreground">
        {uniqueWeeks.map((week) => (
          <span 
            key={week}
            className="min-w-[2rem] text-center"
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
