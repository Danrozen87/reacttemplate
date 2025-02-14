
import * as React from "react";
import { ThemeSwitcher } from "../atoms/theme-switcher";
import { useTranslation } from "react-i18next";

export function NavBar() {
  const { t } = useTranslation();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold">{t("common.cleanSlate")}</span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
