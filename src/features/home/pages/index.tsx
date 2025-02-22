
import { AuthForm } from "@/components/molecules/auth-form";
import { AuthLogo } from "@/components/atoms/auth-logo";
import { LanguageSwitcher } from "@/components/atoms/language-switcher/language-switcher";
import { ThemeSwitcher } from "@/components/atoms/theme-switcher";
import { AuthHero } from "@/components/organisms/auth-hero/auth-hero";
import { animations } from "@/utils/animations";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen grid lg:grid-cols-[30%_70%] bg-background">
      <div 
        className={cn(
          "relative flex flex-col",
          "p-4 sm:p-6 md:p-8 lg:p-10",
          "bg-background text-foreground",
          "dark:border-r border-border",
          "transition-all duration-300 ease-in-out",
          "after:absolute after:inset-0",
          "after:bg-gradient-to-b after:from-background/50 after:to-background",
          "after:opacity-0 hover:after:opacity-100",
          "after:transition-opacity after:duration-500",
          "after:-z-10",
          animations.modal.content.enter
        )}
        role="main"
        aria-labelledby="auth-heading"
      >
        <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-10">
          <h1 id="auth-heading" className="sr-only">{t("auth.welcome")}</h1>
          <AuthLogo className="scale-90 sm:scale-100 hover:scale-105 transition-transform duration-300" />
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center py-6 sm:py-8 md:py-10">
          <AuthForm />
        </div>
      </div>
      <div className="hidden lg:block">
        <AuthHero />
      </div>
    </div>
  );
};

export default HomePage;
