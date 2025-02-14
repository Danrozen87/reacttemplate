
import React from 'react';
import { cn } from '@/lib/utils';
import { Navigator } from './navigator';
import { MonthHeader } from './month-header';
import { DayColumn } from './day-column';
import { getMonthsData, isWeekend } from './utils';
import type { YearGridProps, ViewMode, CalendarEvent } from './types';

export const YearGrid = ({ 
  year, 
  dayWidth = 20,
  selectedDays = [],
  events = [],
  onDayClick,
  onDragOver,
  onRangeSelect,
  onViewChange: onViewChangeProp,
  className
}: YearGridProps) => {
  const [currentYear, setCurrentYear] = React.useState(year);
  const [currentView, setCurrentView] = React.useState<ViewMode>('year');
  const [rangeStart, setRangeStart] = React.useState<number | null>(null);
  
  const monthsData = React.useMemo(
    () => getMonthsData(currentYear),
    [currentYear]
  );

  const today = React.useMemo(() => new Date(), []);

  const handleDayClick = React.useCallback((dayIndex: number) => {
    if (rangeStart !== null) {
      onRangeSelect?.(Math.min(rangeStart, dayIndex), Math.max(rangeStart, dayIndex));
      setRangeStart(null);
    } else {
      setRangeStart(dayIndex);
      onDayClick?.(dayIndex);
    }
  }, [rangeStart, onDayClick, onRangeSelect]);

  const handleDragOver = React.useCallback((dayIndex: number) => {
    onDragOver?.(dayIndex);
  }, [onDragOver]);

  const handleViewChange = React.useCallback((view: ViewMode) => {
    setCurrentView(view);
    onViewChangeProp?.(view);
  }, [onViewChangeProp]);

  const handleToday = React.useCallback(() => {
    setCurrentYear(today.getFullYear());
  }, [today]);

  return (
    <div 
      className={cn("w-full flex flex-col", className)}
      role="grid"
      aria-label="Year calendar grid"
    >
      <Navigator
        currentYear={currentYear}
        onChangeYear={setCurrentYear}
        onViewChange={handleViewChange}
        currentView={currentView}
        onToday={handleToday}
      />
      
      <div className="relative w-full overflow-x-auto">
        <div className="sticky top-0 z-10 flex bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          {monthsData.map((month) => (
            <MonthHeader
              key={month.name}
              monthName={month.name}
              monthWidth={month.days * dayWidth}
              weekNumbers={month.weekNumbers}
            />
          ))}
        </div>
        
        <div className="flex min-h-[500px]">
          {monthsData.map((month) => (
            <div key={month.name} className="flex">
              {Array.from({ length: month.days }).map((_, index) => {
                const dayIndex = month.startDayIndex + index;
                const date = new Date(currentYear, monthsData.indexOf(month), index + 1);
                const isCurrentDay = (
                  date.getDate() === today.getDate() &&
                  date.getMonth() === today.getMonth() &&
                  date.getFullYear() === today.getFullYear()
                );
                const isSelected = selectedDays.includes(dayIndex);
                const isInRange = rangeStart !== null && 
                  Math.min(rangeStart, dayIndex) <= dayIndex && 
                  dayIndex <= Math.max(rangeStart, dayIndex);
                const hasEvents = events.some(event => 
                  event.start <= date && date <= event.end
                );

                return (
                  <DayColumn
                    key={dayIndex}
                    dayIndex={dayIndex}
                    dayWidth={dayWidth}
                    dayNumber={index + 1}
                    isWeekend={isWeekend(date)}
                    isCurrentDay={isCurrentDay}
                    isSelected={isSelected}
                    isInRange={isInRange}
                    hasEvents={hasEvents}
                    onClick={() => handleDayClick(dayIndex)}
                    onDragOver={() => handleDragOver(dayIndex)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
