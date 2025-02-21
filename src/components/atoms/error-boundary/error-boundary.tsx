
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/toast';
import { logger } from '@/utils/logger';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    logger.error('ErrorBoundary caught an error:', {
      error: error.message,
      componentStack: info.componentStack
    });
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}

function ErrorFallback({ error }: { error?: Error }) {
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleReload = () => {
    window.location.reload();
  };

  React.useEffect(() => {
    toast({
      title: t('errors.unexpectedError'),
      description: t('errors.pleaseReload'),
      variant: 'destructive',
    });
  }, [toast, t]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-4 text-center">
      <AlertTriangle className="w-12 h-12 text-destructive mb-4" />
      <h2 className="text-xl font-bold mb-2">{t('errors.somethingWentWrong')}</h2>
      <p className="text-muted-foreground mb-4">{t('errors.tryReloading')}</p>
      <Button onClick={handleReload}>
        {t('common.reload')}
      </Button>
    </div>
  );
}
