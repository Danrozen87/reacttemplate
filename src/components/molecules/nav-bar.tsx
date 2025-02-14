
import * as React from "react";
import { ThemeSwitcher } from "../atoms/theme-switcher";
import { BrandLogo } from "../atoms/brand-logo";
import { useTranslation } from "react-i18next";

export function NavBar() {
  const { t } = useTranslation();

  return (
    <nav 
      className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50"
      aria-label={t("components.navbar.aria.mainNav")}
    >
      <div className="container flex h-14 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <BrandLogo />
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
