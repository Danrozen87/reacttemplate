
import { DayPicker } from "react-day-picker";

export interface CalendarHeaderProps {
  displayMonth: Date;
  onGoToMonth: (month: Date) => void;
  className?: string;
}

export interface CalendarGridProps {
  days: Array<{
    date: Date;
    isSelected: boolean;
    isToday: boolean;
    isOutside: boolean;
  }>;
  selectedDay: Date | undefined;
  onSelectDate: (date: Date) => void;
  className?: string;
}

export type CalendarProps = React.ComponentProps<typeof DayPicker>;
