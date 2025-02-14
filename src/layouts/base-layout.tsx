
import React from 'react';
import { NavBar } from '@/components/molecules/nav-bar';
import { animations } from "@/utils/animations";

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors duration-300 ${animations.modal.content.enter}`}>
      <NavBar />
      <main className={`container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 transition-colors duration-300 ${animations.modal.content.enter} animate-in fade-in-50 duration-500`}>
        {children}
      </main>
    </div>
  );
};

export default BaseLayout;
