
import { useTranslation } from "react-i18next";
import { animations } from "@/utils/animations";

export function SignUpHeader() {
  const { t } = useTranslation("sign-up-form");

  return (
    <div className="space-y-2 text-center">
      <h2 className="text-2xl font-semibold tracking-tight font-poppins">
        {t("auth.signup.title")}
      </h2>
      <p className="text-sm text-muted-foreground font-poppins font-light">
        {t("auth.signup.description")}
      </p>
    </div>
  );
}
