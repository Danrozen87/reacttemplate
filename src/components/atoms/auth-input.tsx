
import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const AuthInput = React.forwardRef<HTMLInputElement, AuthInputProps>(
  ({ className, error, id, ...props }, ref) => {
    const errorId = error ? `${id}-error` : undefined;
    
    return (
      <Input
        ref={ref}
        id={id}
        className={cn(
          "font-poppins bg-background",
          "placeholder:text-muted-foreground/60",
          "selection:bg-primary/30 selection:text-foreground",
          "border-input-border hover:border-primary/50 focus:border-primary",
          "transition-all duration-200",
          "focus:scale-[1.02] focus:shadow-sm",
          "motion-safe:transform motion-safe:transition",
          error && "border-destructive",
          className
        )}
        aria-invalid={!!error}
        aria-errormessage={errorId}
        aria-describedby={errorId}
        {...props}
      />
    );
  }
);

AuthInput.displayName = "AuthInput";
