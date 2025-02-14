
import { useTranslation } from "react-i18next";
import { animations } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthPasswordInput } from "./auth-password-input";
import { AuthSocialButtons } from "./auth-social-buttons";

export function AuthForm() {
  const { t } = useTranslation();

  return (
    <div className={`w-full max-w-md space-y-6 ${animations.modal.content.enter}`}>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">
          {t("auth.welcome")}
        </h1>
        <p className="text-muted-foreground">
          {t("auth.signInToContinue")}
        </p>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">{t("auth.emailOrPhone")}</Label>
          <Input
            id="email"
            type="text"
            placeholder={t("auth.emailOrPhonePlaceholder")}
            className="bg-muted/50"
          />
        </div>

        <AuthPasswordInput />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t("auth.rememberMe")}
            </label>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-primary hover:text-primary/90"
          >
            {t("auth.forgotPassword")}
          </a>
        </div>

        <Button type="submit" className="w-full bg-primary text-primary-foreground">
          {t("auth.signIn")}
        </Button>

        <AuthSocialButtons />

        <p className="text-center text-sm text-muted-foreground">
          {t("auth.noAccount")}{" "}
          <a href="#" className="text-primary hover:text-primary/90 font-medium">
            {t("auth.signUpNow")}
          </a>
        </p>
      </form>
    </div>
  );
}
