
import * as React from "react";
import { useTranslation } from "react-i18next";
import { animations } from "@/utils/animations";

export function BrandLogo() {
  const { t } = useTranslation();

  return (
    <span 
      className={`text-base sm:text-lg lg:text-xl font-bold transition-all duration-200 ${animations.modal.content.enter} animate-fade-in`}
    >
      {t("components.navbar.brand")}
    </span>
  );
}
