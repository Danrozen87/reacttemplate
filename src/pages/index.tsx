
import BaseLayout from "@/layouts/base-layout";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  return (
    <BaseLayout>
      <div className="flex items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 sm:space-y-6 animate-in fade-in duration-700 max-w-[90%] sm:max-w-[80%] lg:max-w-[60%]">
          <div className="inline-flex items-center justify-center">
            <span className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full bg-primary/10 text-primary">
              {t("common.ready")}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {t("common.cleanSlate")}
          </h1>
          <p className="text-base sm:text-lg font-light text-muted-foreground">
            {t("common.foundation")}
          </p>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Index;
