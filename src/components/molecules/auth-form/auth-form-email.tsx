
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

interface AuthFormEmailProps {
  email: string;
  setEmail: (email: string) => void;
  disabled?: boolean;
}

/**
 * @component AuthFormEmail
 * @description Email input field for authentication form
 */
export function AuthFormEmail({ email, setEmail, disabled }: AuthFormEmailProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-2">
      <Input
        id="email"
        type="email"
        placeholder={t("auth.emailOrPhonePlaceholder")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={disabled}
        required
        className="font-poppins bg-input shadow-sm border-input-border placeholder:text-input-placeholder"
      />
    </div>
  );
}

