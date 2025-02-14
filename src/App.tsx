
/**
 * @component App
 * @description Root component of the application that sets up the main providers and routing.
 */

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomePage from "@/features/home/pages";
import NotFound from "@/pages/not-found";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-destructive mb-4">Something went wrong</h2>
        <pre className="text-sm text-muted-foreground">{error.message}</pre>
      </div>
    </div>
  );
}

const App = () => {
  const { t } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <main aria-label={t("app.aria.main")} className="min-h-screen bg-background">
              <Toaster />
              <BrowserRouter>
                <div aria-label={t("app.aria.content")} className="h-full">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </BrowserRouter>
            </main>
          </ErrorBoundary>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
