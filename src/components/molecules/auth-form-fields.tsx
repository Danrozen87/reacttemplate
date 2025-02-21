
/**
 * @component AuthFormFields
 * @description Field group for authentication form with enhanced accessibility
 */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthInput } from "@/components/atoms/auth-input/auth-input";
import { AuthLabel } from "@/components/atoms/auth-label/auth-label";
import { AuthPasswordInput } from "./auth-password-input";
import { AuthFormEmail } from "./auth-form-email";
import { animations } from "@/utils/animations";

interface AuthFormFieldsProps {
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
  onForgotPassword: () => void;
}

export function AuthFormFields({
  email,
  setEmail,
  isSubmitting,
  onForgotPassword
}: AuthFormFieldsProps) {
  const { t } = useTranslation();
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className={`space-y-4 ${animations.modal.content.enter}`}>
      <AuthFormEmail 
        email={email}
        setEmail={setEmail}
        disabled={isSubmitting}
      />
      <AuthPasswordInput disabled={isSubmitting} />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            disabled={isSubmitting}
          />
          <AuthLabel
            htmlFor="remember"
            className="text-muted-foreground font-light"
          >
            {t("auth.rememberMe")}
          </AuthLabel>
        </div>
        <Button
          variant="link"
          className="px-0 font-poppins font-light text-sm"
          onClick={onForgotPassword}
          disabled={isSubmitting}
          type="button"
        >
          {t("auth.forgotPassword")}
        </Button>
      </div>
      <Button
        type="submit"
        className="w-full font-poppins"
        disabled={isSubmitting}
      >
        {isSubmitting ? t("auth.signingIn") : t("auth.signIn")}
      </Button>
    </div>
  );
}
