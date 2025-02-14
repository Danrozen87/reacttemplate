
import React from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigatorProps, ViewMode } from './types';

export const Navigator = ({ 
  currentYear, 
  onChangeYear,
  onViewChange,
  currentView,
  onToday
}: NavigatorProps) => {
  const views: ViewMode[] = ['year', 'month', 'week'];
  
  return (
    <div className="flex items-center justify-between p-2 gap-4 border-b border-border/10">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onChangeYear(currentYear - 1)}
          aria-label="Previous year"
          className="hover:bg-muted/10"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <span className="text-sm font-medium min-w-[4rem] text-center select-none">
          {currentYear}
        </span>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => onChangeYear(currentYear + 1)}
          aria-label="Next year"
          className="hover:bg-muted/10"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {onToday && (
          <Button
            variant="outline"
            size="sm"
            onClick={onToday}
            className="ml-2"
          >
            Today
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2">
        {views.map((view) => (
          <Button
            key={view}
            variant={currentView === view ? "secondary" : "ghost"}
            size="sm"
            onClick={() => onViewChange(view)}
            className={cn(
              "capitalize",
              "transition-colors duration-200",
              currentView === view ? "bg-primary/10" : "hover:bg-muted/10"
            )}
          >
            <Calendar className="h-4 w-4 mr-2" />
            {view}
          </Button>
        ))}
      </div>
    </div>
  );
};
