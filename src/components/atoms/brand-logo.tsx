
import { useTranslation } from "react-i18next";

export function BrandLogo() {
  const { t } = useTranslation();
  
  return (
    <span className="font-bold text-lg md:text-xl">
      {t("components.navbar.brand")}
    </span>
  );
}
