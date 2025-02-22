
import { AlertTriangle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./button";

interface ErrorFallbackProps {
  error?: Error;
  resetErrorBoundary?: () => void;
}

export function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  const { t } = useTranslation();

  const handleReset = () => {
    resetErrorBoundary?.();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-4 text-center">
      <AlertTriangle className="w-12 h-12 text-destructive mb-4" />
      <h2 className="text-xl font-bold mb-2">{t('errors.somethingWentWrong')}</h2>
      <p className="text-muted-foreground mb-4">
        {error?.message || t('errors.tryReloading')}
      </p>
      <Button onClick={handleReset}>
        {t('common.reload')}
      </Button>
    </div>
  );
}
