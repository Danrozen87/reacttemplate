
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigatorProps } from './types';

export const Navigator = ({ currentYear, onChangeYear }: NavigatorProps) => {
  return (
    <div className="flex items-center gap-2 p-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onChangeYear(currentYear - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <span className="text-sm font-medium min-w-[4rem] text-center">
        {currentYear}
      </span>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onChangeYear(currentYear + 1)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
