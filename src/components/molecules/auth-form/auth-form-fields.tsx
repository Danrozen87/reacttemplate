
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthPasswordInput } from "./auth-password-input";

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
    <div className="space-y-4">
      <div className="space-y-2">
        <Input
          id="email"
          type="email"
          placeholder={t("auth.emailOrPhonePlaceholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          required
          className="font-poppins bg-input shadow-sm border-input-border placeholder:text-input-placeholder"
        />
      </div>

      <div className="space-y-2">
        <AuthPasswordInput disabled={isSubmitting} />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            name="remember"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            disabled={isSubmitting}
          />
          <label
            htmlFor="remember"
            className="text-sm font-poppins font-light text-muted-foreground"
          >
            {t("auth.rememberMe")}
          </label>
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
