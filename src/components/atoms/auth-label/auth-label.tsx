
/**
 * @component AuthLabel
 * @description Consistent label component for authentication form fields
 */
import * as React from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface AuthLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const AuthLabel = React.forwardRef<HTMLLabelElement, AuthLabelProps>(
  ({ className, children, required, ...props }, ref) => {
    return (
      <Label
        ref={ref}
        className={cn(
          "font-poppins text-sm font-medium leading-none",
          "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          className
        )}
        {...props}
      >
        {children}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
    );
  }
);

AuthLabel.displayName = "AuthLabel";
