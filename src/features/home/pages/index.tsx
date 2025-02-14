import BaseLayout from "@/layouts/base-layout";
import { AuthForm } from "@/components/molecules/auth-form/auth-form";
import { AuthHero } from "@/components/organisms/auth-hero/auth-hero";
import { AuthLogo } from "@/components/atoms/auth-logo/auth-logo";
import { LanguageSwitcher } from "@/components/atoms/language-switcher/language-switcher";
import { animations } from "@/utils/animations";
import { useTranslation } from "react-i18next";
import FocusTrap from 'focus-trap-react';
import { useCallback, useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

/**
 * @component HomePage
 * @description Authentication page with login form and hero section
 * @accessibility
 * - Implements proper ARIA labels and roles
 * - Supports keyboard navigation
 * - Manages focus states using focus-trap
 * - High contrast in both light and dark modes
 */
const HomePage = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial page load
  const handleContentLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Handle keyboard shortcuts
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Alt + L focuses the language switcher
    if (e.altKey && e.key === 'l') {
      const langSwitcher = document.querySelector('[aria-label="Select language"]');
      (langSwitcher as HTMLElement)?.focus();
    }
  }, []);

  // Add keyboard listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    // Simulate content loading
    const timer = setTimeout(handleContentLoad, 1000);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [handleKeyDown]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className={`h-8 w-8 text-primary animate-spin ${animations.modal.content.enter}`} />
      </div>
    );
  }

  return (
    <FocusTrap>
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
    </FocusTrap>
  );
};

export default HomePage;
