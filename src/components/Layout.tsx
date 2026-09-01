import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  activeTab = 'ENTRIES',
  onTabChange,
  searchQuery = '',
  onSearchChange,
}) => {
  return (
    <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4 md:px-6 flex justify-center items-start selection:bg-uis-orange/20 selection:text-uis-orange">
      {/* Contained Document Canvas */}
      <div className="w-full max-w-[960px] bg-uis-bg border border-uis-border shadow-md rounded-lg overflow-hidden flex flex-col">
        {/* Site Header */}
        <Header />

        {/* Primary Navigation */}
        <Navigation
          activeTab={activeTab}
          onTabChange={onTabChange}
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />

        {/* Dynamic Content Slot */}
        <main className="flex-1 bg-uis-bg">
          {children}
        </main>

        {/* Archival Publication Footer */}
        <Footer />
      </div>
    </div>
  );
};
