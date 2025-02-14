
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarHeaderProps } from "./types";

/**
 * @component
 * @description Header component for the calendar, handling navigation and month display
 */
export function CalendarHeader({
  onPreviousMonth,
  onNextMonth,
  currentMonth,
  className,
}: CalendarHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex items-center space-x-1">
        <button
          onClick={onPreviousMonth}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          )}
          aria-label="Previous month"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={onNextMonth}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          )}
          aria-label="Next month"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <h2 className="text-sm font-medium" aria-live="polite">
        {currentMonth}
      </h2>
    </div>
  );
}
