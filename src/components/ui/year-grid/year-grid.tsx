
import React from 'react';
import { cn } from '@/lib/utils';
import { Navigator } from './navigator';
import { MonthHeader } from './month-header';
import { DayColumn } from './day-column';
import { getMonthsData } from './utils';
import type { YearGridProps } from './types';

export const YearGrid = ({ year, dayWidth = 20 }: YearGridProps) => {
  const [currentYear, setCurrentYear] = React.useState(year);
  const monthsData = React.useMemo(
    () => getMonthsData(currentYear),
    [currentYear]
  );

  return (
    <div className="w-full flex flex-col">
      <Navigator
        currentYear={currentYear}
        onChangeYear={setCurrentYear}
      />
      
      <div className="relative w-full overflow-x-auto">
        <div className="sticky top-0 z-10 flex bg-background/95 backdrop-blur">
          {monthsData.map((month) => (
            <MonthHeader
              key={month.name}
              monthName={month.name}
              monthWidth={month.days * dayWidth}
            />
          ))}
        </div>
        
        <div className="flex min-h-[500px]">
          {monthsData.map((month) => (
            <div key={month.name} className="flex">
              {Array.from({ length: month.days }).map((_, index) => (
                <DayColumn
                  key={month.startDayIndex + index}
                  dayIndex={month.startDayIndex + index}
                  dayWidth={dayWidth}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
