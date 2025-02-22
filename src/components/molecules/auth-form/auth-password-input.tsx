
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthInput } from "@/components/atoms/auth-input";
import { AuthLabel } from "@/components/atoms/auth-label";

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
          disabled={disabled}
          required
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? t("auth.hidePassword") : t("auth.showPassword")}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Eye className="h-4 w-4" aria-hidden="true" />
          )}
        </Button>
      </div>
    </div>
  );
}
