
import React from "react";
import { Select } from "@/components/ui/select";

interface CompanySizeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const CompanySizeSelect = React.forwardRef<HTMLSelectElement, CompanySizeSelectProps>(
  ({ value, onChange }, ref) => {
    return (
      <Select
        ref={ref}
        value={value}
        onValueChange={onChange}
      >
        <Select.Trigger className="w-full">
          <Select.Value placeholder="Select company size" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Item value="1-10">1-10 employees</Select.Item>
            <Select.Item value="11-50">11-50 employees</Select.Item>
            <Select.Item value="51-200">51-200 employees</Select.Item>
            <Select.Item value="201-500">201-500 employees</Select.Item>
            <Select.Item value="501+">501+ employees</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>
    );
  }
);

CompanySizeSelect.displayName = "CompanySizeSelect";