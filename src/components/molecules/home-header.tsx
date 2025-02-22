
import { AuthLogo } from "@/components/atoms/auth-logo";
import { LanguageSwitcher } from "@/components/atoms/language-switcher/language-switcher";
import { ThemeSwitcher } from "@/components/atoms/theme-switcher";
import { animations } from "@/utils/animations";
import { cn } from "@/lib/utils";

export const HomeHeader = () => {
  return (
    <div className={cn(
      "flex justify-between items-center mb-6 sm:mb-8 md:mb-10",
      animations.modal.content.enter
    )}>
      <AuthLogo className="scale-90 sm:scale-100 hover:scale-105 transition-transform duration-300" />
      <div className="flex items-center gap-3">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
