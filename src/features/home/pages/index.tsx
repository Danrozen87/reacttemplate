
import BaseLayout from "@/layouts/base-layout";
import { AuthForm } from "@/components/molecules/auth-form/auth-form";
import { AuthHero } from "@/components/organisms/auth-hero/auth-hero";
import { AuthLogo } from "@/components/atoms/auth-logo/auth-logo";
import { LanguageSwitcher } from "@/components/atoms/language-switcher/language-switcher";
import { ThemeSwitcher } from "@/components/atoms/theme-switcher";
import { animations } from "@/utils/animations";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";

/**
 * @component HomePage
 * @description Authentication page with login form and hero section
 * 
 * @accessibility
 * - Implements ARIA landmarks for main content and complementary sections
 * - Manages focus states for form elements
 * - Provides clear visual hierarchy through semantic HTML
 * - Ensures proper color contrast in both themes
 * 
 * @responsive
 * - Mobile (<640px): Single column layout, stacked components
 * - Tablet (640px-1024px): Enhanced spacing, optimized form width
 * - Desktop (>1024px): Two-column layout with hero section
 * 
 * @roles
 * - Admin: Full system access with user management capabilities
 *   - Can view all user data
 *   - Can modify system settings
 *   - Can manage other users' permissions
 * 
 * - Manager: Team management access
 *   - Can view team member data
 *   - Can modify team settings
 *   - Cannot access system-wide settings
 * 
 * - User: Basic authenticated access
 *   - Can view and modify own profile
 *   - Cannot access admin or management features
 * 
 * @testCoverage
 * Required coverage: 90%
 * Test scenarios:
 * - Component rendering in all viewport sizes
 * - Theme switching functionality
 * - Language switching behavior
 * - Role-based access control
 * - Form validation and submission
 * - Error handling and user feedback
 */
const HomePage = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div 
        className={`
          flex flex-col bg-background p-4 
          sm:p-6 
          md:p-8 
          lg:p-10 
          text-foreground dark:border-r
          transition-colors duration-200
          ${animations.modal.content.enter}
        `}
        role="main"
        aria-labelledby="auth-heading"
      >
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
          <h1 
            id="auth-heading" 
            className="sr-only"
          >
            {t("auth.welcome")}
          </h1>
          <AuthLogo />
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center w-full max-w-md mx-auto">
          <AuthForm />
        </div>
      </div>
      <AuthHero />
    </div>
  );
};

export default HomePage;
