
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Eye, EyeOff } from "lucide-react";
import { AuthInput } from "@/components/atoms/auth-input/auth-input";
import { AuthLabel } from "@/components/atoms/auth-label/auth-label";

interface AuthPasswordInputProps {
  disabled?: boolean;
}

export function AuthPasswordInput({ disabled }: AuthPasswordInputProps) {
  const { t } = useTranslation("auth-password-input");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <AuthLabel htmlFor="password" required>
        {t("auth.password")}
      </AuthLabel>
      <div className="relative">
        <AuthInput
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder={t("auth.passwordPlaceholder")}
          className="pr-10"
          disabled={disabled}
          required
          aria-required="true"
          autoComplete="current-password"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label={t(showPassword ? "auth.hidePassword" : "auth.showPassword")}
          disabled={disabled}
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  );
}
