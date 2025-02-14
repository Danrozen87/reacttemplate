
import * as React from "react";
import { cn } from "@/lib/utils";
import { CalendarGridProps } from "./types";
import { buttonVariants } from "@/components/ui/button";

/**
 * @component
 * @description Grid component for displaying calendar days
 */
export function CalendarGrid({
  days,
  selectedDay,
  onSelectDate,
  className,
}: CalendarGridProps) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <button
            key={day.date.toString()}
            onClick={() => onSelectDate(day.date)}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
              day.isToday && "bg-accent text-accent-foreground",
              day.isSelected && "bg-primary text-primary-foreground",
              day.isOutside && "text-muted-foreground opacity-50",
              className
            )}
            aria-selected={day.isSelected}
            aria-label={day.date.toDateString()}
          >
            <span className="text-sm">{day.date.getDate()}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
