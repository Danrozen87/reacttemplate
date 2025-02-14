
import React from 'react';
import { cn } from '@/lib/utils';
import { Navigator } from './navigator';
import { MonthHeader } from './month-header';
import { DayColumn } from './day-column';
import { getMonthsData, isWeekend } from './utils';
import type { YearGridProps, ViewMode } from './types';

export const YearGrid = ({ 
  year, 
  dayWidth = 20,
  onDayClick,
  onDragOver 
}: YearGridProps) => {
  const [currentYear, setCurrentYear] = React.useState(year);
  const [currentView, setCurrentView] = React.useState<ViewMode>('year');
  
  const monthsData = React.useMemo(
    () => getMonthsData(currentYear),
    [currentYear]
  );

  const today = React.useMemo(() => new Date(), []);

  const handleDayClick = React.useCallback((dayIndex: number) => {
    onDayClick?.(dayIndex);
  }, [onDayClick]);

  const handleDragOver = React.useCallback((dayIndex: number) => {
    onDragOver?.(dayIndex);
  }, [onDragOver]);

  return (
    <div 
      className="w-full flex flex-col"
      role="grid"
      aria-label="Year calendar grid"
    >
      <Navigator
        currentYear={currentYear}
        onChangeYear={setCurrentYear}
        onViewChange={setCurrentView}
        currentView={currentView}
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

                return (
                  <DayColumn
                    key={dayIndex}
                    dayIndex={dayIndex}
                    dayWidth={dayWidth}
                    dayNumber={index + 1}
                    isWeekend={isWeekend(date)}
                    isCurrentDay={isCurrentDay}
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
