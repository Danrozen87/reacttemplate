
import { AuthForm } from "@/components/molecules/auth-form";
import { AuthLogo } from "@/components/atoms/auth-logo";
import { LanguageSwitcher } from "@/components/atoms/language-switcher/language-switcher";
import { ThemeSwitcher } from "@/components/atoms/theme-switcher";
import { animations } from "@/utils/animations";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen grid lg:grid-cols-[35%_65%] bg-background">
      <div 
        className={cn(
          "flex flex-col p-4 sm:p-6 md:p-8 lg:p-10",
          "bg-background text-foreground",
          "dark:border-r border-border",
          "transition-colors duration-200",
          animations.modal.content.enter
        )}
        role="main"
        aria-labelledby="auth-heading"
      >
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
          <h1 id="auth-heading" className="sr-only">{t("auth.welcome")}</h1>
          <AuthLogo />
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <AuthForm />
        </div>
      </div>
      <div className="hidden lg:block bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
    </div>
  );
};

export default HomePage;
