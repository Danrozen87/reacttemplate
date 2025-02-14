
import { useTranslation } from "react-i18next";

export function BrandLogo() {
  const { t } = useTranslation();
  
  return (
    <span className="font-bold text-base sm:text-lg lg:text-xl transition-all duration-200 animate-fade-in dark:text-white">
      {t("components.navbar.brand")}
    </span>
  );
}
