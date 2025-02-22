
import { ReactNode } from "react";
import { animations } from "@/utils/animations";
import { cn } from "@/lib/utils";
import { AuthHero } from "./auth-hero/auth-hero";

interface HomeLayoutProps {
  children: ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="min-h-screen grid lg:grid-cols-[45%_55%] bg-background">
      <div 
        className={cn(
          "relative flex flex-col",
          "p-4 sm:p-6 md:p-8 lg:p-10",
          "bg-background text-foreground",
          "dark:border-r border-border",
          "transition-all duration-300 ease-in-out",
          animations.modal.content.enter
        )}
        role="main"
      >
        {children}
      </div>
      <div className="hidden lg:block">
        <AuthHero />
      </div>
    </div>
  );
};
