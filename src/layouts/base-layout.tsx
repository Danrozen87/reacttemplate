
import React from 'react';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default BaseLayout;
