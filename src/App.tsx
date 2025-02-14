
/**
 * @component App
 * @description Root component of the application that sets up the main providers and routing.
 * 
 * Features:
 * - Theme support (light/dark mode)
 * - Internationalization (i18n) with support for en, sv, da, nl
 * - React Query for data fetching
 * - Toast notifications
 * - Tooltip functionality
 * - React Router for navigation
 * 
 * @example
 * ```tsx
 * <App />
 * ```
 * 
 * @requirements
 * - Must handle theme switching
 * - Must support all required languages
 * - Must provide toast notifications
 * - Must handle routing
 */

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomePage from "@/features/home/pages";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => {
  const { t } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <main aria-label={t("app.aria.main")} className="min-h-screen">
            <Toaster />
            <BrowserRouter>
              <div aria-label={t("app.aria.content")} className="h-full">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
  );
};

export default App;
