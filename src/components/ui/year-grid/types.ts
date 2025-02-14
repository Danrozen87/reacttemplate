
export interface DayColumnProps {
  dayIndex: number;
  dayWidth: number;
  children?: React.ReactNode;
}

export interface MonthHeaderProps {
  monthName: string;
  monthWidth: number;
  children?: React.ReactNode;
}

export interface NavigatorProps {
  currentYear: number;
  onChangeYear: (year: number) => void;
}

export interface YearGridProps {
  year: number;
  dayWidth?: number;
}

export type MonthData = {
  name: string;
  days: number;
  startDayIndex: number;
};
