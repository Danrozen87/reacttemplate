
export interface DayColumnProps {
  dayIndex: number;
  dayWidth: number;
  dayNumber: number;
  isWeekend: boolean;
  isCurrentDay: boolean;
  onClick?: () => void;
  onDragOver?: () => void;
  children?: React.ReactNode;
}

export interface MonthHeaderProps {
  monthName: string;
  monthWidth: number;
  weekNumbers: number[];
  children?: React.ReactNode;
}

export interface NavigatorProps {
  currentYear: number;
  onChangeYear: (year: number) => void;
  onViewChange: (view: ViewMode) => void;
  currentView: ViewMode;
}

export interface YearGridProps {
  year: number;
  dayWidth?: number;
  onDayClick?: (dayIndex: number) => void;
  onDragOver?: (dayIndex: number) => void;
}

export type MonthData = {
  name: string;
  days: number;
  startDayIndex: number;
  weekNumbers: number[];
};

export type ViewMode = 'year' | 'month' | 'week';
