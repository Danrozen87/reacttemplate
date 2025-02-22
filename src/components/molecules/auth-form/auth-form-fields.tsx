
import { useState, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthLabel } from "@/components/atoms/auth-label";
import { AuthPasswordInput } from "./auth-password-input";
import { AuthFormEmail } from "./auth-form-email";
import { animations } from "@/utils/animations";
import type { AuthFormFieldsProps } from "./types";

export const AuthFormFields = memo(function AuthFormFields({
  email,
  setEmail,
  isSubmitting,
  onForgotPassword
}: AuthFormFieldsProps) {
  const { t } = useTranslation("auth-form-fields");
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = useCallback((checked: boolean) => {
    setRememberMe(checked);
  }, []);

  return (
    <div 
      className={`space-y-4 ${animations.modal.content.enter}`}
      role="group" 
      aria-labelledby="login-fields"
    >
      <div id="login-fields" className="sr-only">
        {t("auth.loginFields")}
      </div>
      
      <AuthFormEmail 
        email={email}
        setEmail={setEmail}
        disabled={isSubmitting}
      />
      
      <AuthPasswordInput 
        disabled={isSubmitting}
      />
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 hover-visible rounded-md p-1">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={handleRememberMeChange}
            disabled={isSubmitting}
            aria-label={t("auth.rememberMe")}
          />
          <AuthLabel
            htmlFor="remember"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("auth.rememberMe")}
          </AuthLabel>
        </div>
        <Button
          variant="link"
          className="px-0 font-poppins font-light text-sm hover:text-primary/80 focus:text-primary/80"
          onClick={onForgotPassword}
          disabled={isSubmitting}
          type="button"
        >
          {t("auth.forgotPassword")}
        </Button>
      </div>
      
      <Button
        type="submit"
        className="w-full font-poppins hover:bg-primary/90 focus:bg-primary/90"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? t("auth.signingIn") : t("auth.signIn")}
      </Button>
    </div>
  );
});
