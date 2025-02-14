
/**
 * @component AuthInput
 * @description Base input component for authentication forms with consistent styling and accessibility
 */
import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const AuthInput = React.forwardRef<HTMLInputElement, AuthInputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        className={cn(
          "font-poppins bg-input shadow-sm border-input-border",
          "placeholder:text-input-placeholder",
          error && "border-destructive",
          className
        )}
        aria-invalid={error ? "true" : "false"}
        aria-errormessage={error ? `${props.id}-error` : undefined}
        {...props}
      />
    );
  }
);

AuthInput.displayName = "AuthInput";
