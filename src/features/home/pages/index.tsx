
import BaseLayout from "@/layouts/base-layout";
import { AuthForm } from "@/components/molecules/auth-form/auth-form";
import { AuthHero } from "@/components/organisms/auth-hero/auth-hero";
import { AuthLogo } from "@/components/atoms/auth-logo/auth-logo";
import { animations } from "@/utils/animations";

const HomePage = () => {
  return (
    <div className="h-screen">
      <div className="container relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative h-full flex-col bg-background p-10 text-foreground dark:border-r md:flex">
          <div className="absolute right-4 top-4 md:right-8 md:top-8">
            <AuthLogo />
          </div>
          <div className="flex items-center justify-center h-full">
            <AuthForm />
          </div>
        </div>
        <AuthHero />
      </div>
    </div>
  );
};

export default HomePage;
