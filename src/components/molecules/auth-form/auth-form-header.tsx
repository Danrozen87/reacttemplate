
import { useTranslation } from "react-i18next";
import { AuthLogo } from "@/components/atoms/auth-logo/auth-logo";

export function AuthFormHeader() {
  const { t } = useTranslation("auth-form-header");
  
  return (
    <div className="space-y-2 text-center">
      <AuthLogo className="mx-auto h-12 w-12" />
      <h1 className="text-2xl font-semibold tracking-tight">
        {t("auth.welcome")}
      </h1>
      <p className="text-sm text-muted-foreground">
        {t("auth.enterCredentials")}
      </p>
    </div>
  );
}
