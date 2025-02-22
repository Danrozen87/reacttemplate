
import React from "react";
import { useTranslation } from "react-i18next";
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
  error?: string;
  disabled?: boolean;
}

export const CompanySizeSelect = React.forwardRef<HTMLButtonElement, CompanySizeSelectProps>(
  ({ value, onChange, error, disabled }, ref) => {
    const { t } = useTranslation("sign-up-form");
    const errorId = error ? "company-size-error" : undefined;

    return (
      <Select 
        value={value} 
        onValueChange={onChange}
        disabled={disabled}
      >
        <SelectTrigger 
          ref={ref}
          className="w-full font-poppins bg-background transition-all duration-200 focus:scale-[1.02] focus:shadow-sm motion-safe:transform motion-safe:transition" 
          aria-invalid={!!error}
          aria-errormessage={errorId}
          aria-describedby={errorId}
        >
          <SelectValue placeholder={t("company-size-placeholder")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {[
              { value: "1-10", label: t("company-size.1-10") },
              { value: "11-50", label: t("company-size.11-50") },
              { value: "51-200", label: t("company-size.51-200") },
              { value: "201-500", label: t("company-size.201-500") },
              { value: "501+", label: t("company-size.501+") },
            ].map(({ value: optionValue, label }) => (
              <SelectItem 
                key={optionValue} 
                value={optionValue}
                className="font-poppins"
              >
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
);

CompanySizeSelect.displayName = "CompanySizeSelect";
