
import BaseLayout from "@/layouts/base-layout";
import { AuthForm } from "@/components/molecules/auth-form/auth-form";
import { AuthHero } from "@/components/organisms/auth-hero/auth-hero";
import { animations } from "@/utils/animations";

const HomePage = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex items-center justify-center bg-background p-6 md:p-10 text-foreground dark:border-r">
        <AuthForm />
      </div>
      <AuthHero />
    </div>
  );
};

export default HomePage;
