
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthInput } from "@/components/atoms/auth-input/auth-input";
import { AuthLabel } from "@/components/atoms/auth-label/auth-label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

interface AuthPasswordInputProps {
  disabled?: boolean;
}

export function AuthPasswordInput({ disabled }: AuthPasswordInputProps) {
  const { t } = useTranslation("auth-form-fields");
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
          required
          disabled={disabled}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 h-full px-3"
          onClick={() => setShowPassword(!showPassword)}
          disabled={disabled}
        >
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
