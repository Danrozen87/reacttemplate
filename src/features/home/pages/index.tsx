
import { AuthForm } from "@/components/molecules/auth-form";
import { HomeHeader } from "@/components/molecules/home-header";
import { HomeLayout } from "@/components/organisms/home-layout";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <HomeLayout>
      <h1 id="auth-heading" className="sr-only">{t("auth.welcome")}</h1>
      <HomeHeader />
      <div className="flex-1 flex items-center justify-center py-6 sm:py-8 md:py-10">
        <AuthForm />
      </div>
    </HomeLayout>
  );
};

export default HomePage;
