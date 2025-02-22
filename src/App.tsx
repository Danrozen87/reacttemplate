
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomePage from "@/features/home/pages";
import NotFound from "@/pages/not-found";
import { AppProviders } from "./providers/app-providers";
import { animations } from "@/utils/animations";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div
      key={location.pathname}
      className={`${animations.page.enter}`}
      role="main"
    >
      {children}
    </div>
  );
};

const App = () => {
  const { t } = useTranslation();

  return (
    <AppProviders>
      <main aria-label={t("app.aria.main")} className="min-h-screen bg-background">
        <BrowserRouter>
          <div aria-label={t("app.aria.content")} className="h-full">
            <PageTransition>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/index" element={<Navigate to="/" replace />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
          </div>
        </BrowserRouter>
      </main>
    </AppProviders>
  );
};

export default App;
