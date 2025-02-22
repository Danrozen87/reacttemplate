
import { useTranslation } from "react-i18next";

export function AuthFormHeader() {
  const { t } = useTranslation("auth-form-header");
  
  return (
    <div className="space-y-2 text-center">
      <h2 className="text-2xl font-semibold tracking-tight font-poppins">
        {t("auth.welcome")}
      </h2>
      <p className="text-sm text-muted-foreground font-poppins font-light">
        {t("auth.enterCredentials")}
      </p>
    </div>
  );
}
