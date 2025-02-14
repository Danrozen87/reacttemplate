
export interface DayColumnProps {
  dayIndex: number;
  dayWidth: number;
  dayNumber: number;
  isWeekend: boolean;
  isCurrentDay: boolean;
  isSelected?: boolean;
  isInRange?: boolean;
  hasEvents?: boolean;
  onClick?: () => void;
  onDragOver?: () => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  children?: React.ReactNode;
}

export interface MonthHeaderProps {
  monthName: string;
  monthWidth: number;
  weekNumbers: number[];
  onMonthClick?: () => void;
  children?: React.ReactNode;
}

export interface NavigatorProps {
  currentYear: number;
  onChangeYear: (year: number) => void;
  onViewChange: (view: ViewMode) => void;
  currentView: ViewMode;
  onToday?: () => void;
}

export interface YearGridProps {
  year: number;
  dayWidth?: number;
  selectedDays?: number[];
  events?: CalendarEvent[];
  onDayClick?: (dayIndex: number) => void;
  onDragOver?: (dayIndex: number) => void;
  onRangeSelect?: (start: number, end: number) => void;
  onViewChange?: (view: ViewMode) => void;
  className?: string;
}

export type MonthData = {
  name: string;
  days: number;
  startDayIndex: number;
  weekNumbers: number[];
};

export type ViewMode = 'year' | 'month' | 'week';

export type CalendarEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  color?: string;
};
