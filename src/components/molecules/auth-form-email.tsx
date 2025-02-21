
/**
 * @component AuthFormEmail
 * @description Email input field for authentication form with validation
 */
import { AuthInput } from "@/components/atoms/auth-input/auth-input";
import { AuthLabel } from "@/components/atoms/auth-label/auth-label";
import { useTranslation } from "react-i18next";

interface AuthFormEmailProps {
  email: string;
  setEmail: (email: string) => void;
  disabled?: boolean;
}

export function AuthFormEmail({ email, setEmail, disabled }: AuthFormEmailProps) {
  const { t } = useTranslation("auth-form-email");

  return (
    <div className="space-y-2">
      <AuthLabel htmlFor="email" required>
        {t("auth.emailOrPhone")}
      </AuthLabel>
      <AuthInput
        id="email"
        type="email"
        placeholder={t("auth.emailOrPhonePlaceholder")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={disabled}
        required
      />
    </div>
  );
}
