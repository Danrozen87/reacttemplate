
import React from 'react';
import { cn } from '@/lib/utils';
import { MonthHeaderProps } from './types';

export const MonthHeader = ({ monthName, monthWidth, children }: MonthHeaderProps) => {
  return (
    <div
      className={cn(
        "border-r border-border relative",
        "flex flex-col items-center justify-center"
      )}
      style={{ width: `${monthWidth}px` }}
    >
      <h3 className="text-sm font-medium text-foreground/80">
        {monthName}
      </h3>
      {children}
    </div>
  );
};
