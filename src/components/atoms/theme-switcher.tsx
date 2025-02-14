
/**
 * @component ThemeSwitcher
 * @description A button component that toggles between light and dark themes
 * @example
 * ```tsx
 * import { ThemeSwitcher } from "@/components/atoms/theme-switcher"
 * 
 * function Header() {
 *   return <ThemeSwitcher />
 * }
 * ```
 */
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { animations } from "@/utils/animations";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`w-9 h-9 relative rounded-full transition-colors hover:bg-accent animate-fade-in ${animations.blur.sm}`}
      aria-label={t("components.themeSwitcher.toggle")}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">
        {theme === "light" 
          ? t("components.themeSwitcher.darkMode")
          : t("components.themeSwitcher.lightMode")}
      </span>
    </Button>
  );
}

