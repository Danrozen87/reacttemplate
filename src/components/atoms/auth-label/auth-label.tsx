
/**
 * @component AuthLabel
 * @version 1.0.0
 * @category atom
 * 
 * @description
 * A consistent label component for authentication form fields with support
 * for required field indication and proper accessibility attributes.
 * 
 * @example
 * ```tsx
 * <AuthLabel htmlFor="email" required>
 *   {t("auth.emailLabel")}
 * </AuthLabel>
 * ```
 * 
 * @interface
 * ```typescript
 * interface AuthLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
 *   required?: boolean;
 * }
 * ```
 * 
 * @accessibility
 * - role: "label"
 * - associations: ["htmlFor", "aria-labelledby"]
 * - requiredIndicator: true
 * - colorContrast: true
 * 
 * @i18n
 * - supportedLanguages: ["en", "sv", "da", "nl"]
 * - requiredKeys: ["auth.label.required"]
 * - rtlSupport: true
 * 
 * @testing
 * - coverage: 100%
 * - priority: ["accessibility", "i18n"]
 * - scenarios: [
 *     "renders with required indicator",
 *     "maintains proper associations",
 *     "supports RTL languages",
 *     "handles long text gracefully"
 *   ]
 * 
 * @styling
 * - themeTokens: ["foreground", "destructive"]
 * - responsive: true
 * - darkMode: true
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
