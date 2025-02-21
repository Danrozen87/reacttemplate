
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
          "font-poppins bg-background border-input-border",
          "placeholder:text-muted-foreground/60",
          "selection:bg-primary/30 selection:text-foreground",
          "hover:border-primary/50 focus:border-primary",
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
