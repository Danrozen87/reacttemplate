
import * as React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, required, id, ...props }, ref) => {
    const { t } = useTranslation("input");

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2",
          "text-sm ring-offset-background",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive",
          className
        )}
        ref={ref}
        id={id}
        required={required}
        aria-invalid={error ? "true" : "false"}
        aria-errormessage={error ? `${id}-error` : undefined}
        aria-required={required}
        aria-label={required ? t("input.aria.required") : undefined}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
