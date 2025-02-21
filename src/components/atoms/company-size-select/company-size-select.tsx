
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CompanySizeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const CompanySizeSelect = React.forwardRef<HTMLSelectElement, CompanySizeSelectProps>(
  ({ value, onChange }, ref) => {
    return (
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full" ref={ref}>
          <SelectValue placeholder="Select company size" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="1-10">1-10 employees</SelectItem>
            <SelectItem value="11-50">11-50 employees</SelectItem>
            <SelectItem value="51-200">51-200 employees</SelectItem>
            <SelectItem value="201-500">201-500 employees</SelectItem>
            <SelectItem value="501+">501+ employees</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
);

CompanySizeSelect.displayName = "CompanySizeSelect";