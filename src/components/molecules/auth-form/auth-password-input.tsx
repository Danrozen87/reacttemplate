
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AuthPasswordInputProps {
  disabled?: boolean;
}

export function AuthPasswordInput({ disabled }: AuthPasswordInputProps) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <Label htmlFor="password">{t("auth.password")}</Label>
      <div className="relative">
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder={t("auth.passwordPlaceholder")}
          className="bg-white shadow-sm border-input-border placeholder:text-input-placeholder pr-10 font-poppins"
          disabled={disabled}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          aria-label={t(showPassword ? "auth.hidePassword" : "auth.showPassword")}
          disabled={disabled}
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  );
}
