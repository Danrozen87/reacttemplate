
import * as React from "react";
import { ThemeSwitcher } from "../../atoms/theme-switcher";
import { BrandLogo } from "../../atoms/brand-logo/brand-logo";
import { useTranslation } from "react-i18next";
import { animations } from "@/utils/animations";

export function NavBar() {
  const { t } = useTranslation();

  return (
    <nav 
      className={`fixed top-0 w-full border-b bg-background/95 ${animations.blur.DEFAULT} supports-[backdrop-filter]:bg-background/60 z-50 ${animations.modal.content.enter}`}
      aria-label={t("components.navbar.aria.mainNav")}
    >
      <div className="container flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center gap-2 sm:gap-4 ${animations.modal.content.enter} animate-in fade-in-50 duration-500`}>
          <BrandLogo />
        </div>
        <div className={`flex items-center gap-2 sm:gap-4 ${animations.modal.content.enter} animate-in fade-in-50 duration-700 delay-200`}>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
