
import { useTranslation } from "react-i18next";
import { animations } from "@/utils/animations";

/**
 * @component AuthFormHeader
 * @description Header section of the authentication form with title and subtitle
 */
export function AuthFormHeader() {
  const { t } = useTranslation("auth-form-header");

  return (
    <div className={`space-y-2 ${animations.modal.content.enter}`}>
      <h2 className="text-2xl font-bold tracking-tight font-poppins">
        {t("auth.welcome")}
      </h2>
      <p className="text-muted-foreground font-poppins font-light">
        {t("auth.signInToContinue")}
      </p>
    </div>
  );
}
