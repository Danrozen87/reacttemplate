
import BaseLayout from "@/layouts/base-layout";
import { AuthForm } from "@/components/molecules/auth-form/auth-form";
import { AuthHero } from "@/components/organisms/auth-hero/auth-hero";
import { AuthLogo } from "@/components/atoms/auth-logo/auth-logo";
import { LanguageSwitcher } from "@/components/atoms/language-switcher/language-switcher";
import { animations } from "@/utils/animations";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";

/**
 * @component HomePage
 * @description Authentication page with login form and hero section
 * @accessibility
 * - Implements proper ARIA labels and roles
 * - Supports keyboard navigation
 * - Manages focus states
 * - High contrast in both light and dark modes
 * @roles
 * - Admin: Full access to all features and user management
 * - Manager: Access to team management and content moderation
 * - User: Basic access to personal content and features
 */
const HomePage = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div 
        className={`flex flex-col bg-background p-6 md:p-10 text-foreground dark:border-r ${animations.modal.content.enter}`}
        role="main"
        aria-labelledby="auth-heading"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 
            id="auth-heading" 
            className="sr-only"
          >
            {t("auth.welcome")}
          </h1>
          <AuthLogo />
          <LanguageSwitcher />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <AuthForm />
        </div>
      </div>
      <AuthHero />
    </div>
  );
};

export default HomePage;
