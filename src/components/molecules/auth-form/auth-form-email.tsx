
import { useTranslation } from "react-i18next";
import { AuthInput } from "@/components/atoms/auth-input";
import { AuthLabel } from "@/components/atoms/auth-label";

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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("auth.emailOrPhonePlaceholder")}
        disabled={disabled}
        required
      />
    </div>
  );
}
