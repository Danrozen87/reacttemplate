
import BaseLayout from "@/layouts/base-layout";
import { AuthForm } from "@/components/molecules/auth-form/auth-form";
import { AuthHero } from "@/components/organisms/auth-hero/auth-hero";
import { AuthLogo } from "@/components/atoms/auth-logo/auth-logo";
import { animations } from "@/utils/animations";

const HomePage = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col bg-background p-6 md:p-10 text-foreground dark:border-r">
        <div className="mb-8">
          <AuthLogo />
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
