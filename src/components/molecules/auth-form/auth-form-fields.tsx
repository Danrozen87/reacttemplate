
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { AuthPasswordInput } from "./auth-password-input";

interface AuthFormFieldsProps {
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
}

/**
 * @component AuthFormFields
 * @description Main form fields section of the authentication form
 */
export function AuthFormFields({ email, setEmail, isSubmitting }: AuthFormFieldsProps) {
  const { t } = useTranslation();

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="email">{t("auth.emailOrPhone")}</Label>
        <Input
          id="email"
          type="text"
          placeholder={t("auth.emailOrPhonePlaceholder")}
          className="bg-muted/50"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <AuthPasswordInput />

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <label
            htmlFor="remember"
            className="text-sm font-medium leading-none font-poppins peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {t("auth.rememberMe")}
          </label>
        </div>
        <Button
          variant="link"
          className="text-sm font-medium text-primary"
        >
          {t("auth.forgotPassword")}
        </Button>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-primary text-primary-foreground font-poppins"
        disabled={isSubmitting}
      >
        {isSubmitting ? t("auth.signingIn") : t("auth.signIn")}
      </Button>
    </>
  );
}
