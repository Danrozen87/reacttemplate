
import { AuthInput } from "@/components/atoms/auth-input/auth-input";
import { AuthLabel } from "@/components/atoms/auth-label/auth-label";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

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
  onForgotPassword,
}: AuthFormFieldsProps) {
  const { t } = useTranslation("auth-form-fields");

  return (
    <>
      <div className="space-y-2">
        <AuthLabel htmlFor="email" required>
          {t("auth.email")}
        </AuthLabel>
        <AuthInput
          id="email"
          type="email"
          placeholder={t("auth.emailPlaceholder")}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
        />
      </div>
      <Button
        type="button"
        variant="link"
        className="px-0 font-normal"
        onClick={onForgotPassword}
        disabled={isSubmitting}
      >
        {t("auth.forgotPassword")}
      </Button>
    </>
  );
}
