
import { FallbackProps } from "react-error-boundary";
import { Button } from "./button";
import { useTranslation } from "react-i18next";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 text-center">
      <h2 className="text-2xl font-bold text-destructive">
        {t("error.somethingWentWrong")}
      </h2>
      <p className="text-muted-foreground max-w-md">
        {error.message || t("error.unexpectedError")}
      </p>
      <Button onClick={resetErrorBoundary} variant="outline">
        {t("error.tryAgain")}
      </Button>
    </div>
  );
}

