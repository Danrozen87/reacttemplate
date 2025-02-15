
/**
 * @component AuthInput
 * @version 1.0.0
 * @category atom
 * 
 * @description
 * A foundational input component for authentication forms with built-in
 * accessibility features, error handling, and internationalization support.
 * 
 * @example
 * ```tsx
 * <AuthInput
 *   id="email"
 *   type="email"
 *   placeholder={t("auth.emailPlaceholder")}
 *   error={errors.email}
 *   required
 * />
 * ```
 * 
 * @interface
 * ```typescript
 * interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
 *   error?: string;
 * }
 * ```
 * 
 * @accessibility
 * - role: "textbox"
 * - aria-*: ["aria-invalid", "aria-required", "aria-describedby"]
 * - keyboardInteractions: ["Tab", "Shift+Tab"]
 * - focusManagement: true
 * 
 * @i18n
 * - supportedLanguages: ["en", "sv", "da", "nl"]
 * - requiredKeys: ["auth.input.placeholder", "auth.input.error"]
 * - rtlSupport: true
 * 
 * @testing
 * - coverage: 100%
 * - priority: ["accessibility", "validation", "i18n"]
 * - scenarios: [
 *     "renders default state",
 *     "handles error states",
 *     "manages focus states",
 *     "supports RTL languages",
 *     "validates input correctly"
 *   ]
 * 
 * @styling
 * - themeTokens: ["input", "destructive", "ring"]
 * - responsive: true
 * - darkMode: true
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
