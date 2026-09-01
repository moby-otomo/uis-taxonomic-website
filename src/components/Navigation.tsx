import React from 'react';
import { Search } from 'lucide-react';

interface NavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab = 'ENTRIES',
  onTabChange,
  searchQuery = '',
  onSearchChange,
}) => {
  const navItems = [
    { id: 'ENTRIES', label: 'ENTRIES' },
    { id: 'ABOUT_UIS', label: 'ABOUT UNCLES IN SPACE' },
    { id: 'ABOUT_MOBY', label: 'ABOUT MOBY OTOMO' },
    { id: 'FUTURE_WORKS', label: 'FUTURE WORKS' },
  ];

  return (
    <nav className="border-b border-uis-border bg-uis-paper/80 px-4 py-2 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono font-medium text-uis-dark">
      {/* Navigation Links */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange?.(item.id)}
              className={`relative py-1 tracking-wider uppercase transition-colors hover:text-uis-orange ${
                isActive ? 'font-bold text-uis-dark' : 'text-uis-muted'
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-uis-dark" />
              )}
            </button>
          );
        })}
      </div>

      {/* Search Input Box */}
      <div className="relative flex items-center min-w-[200px] sm:min-w-[230px]">
        <Search className="w-3.5 h-3.5 absolute left-2.5 text-uis-muted pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange?.(e.target.value)}
          placeholder="Search field log..."
          className="w-full bg-white/80 border border-uis-border rounded-md pl-8 pr-3 py-1 text-xs font-mono text-uis-dark placeholder-uis-muted/70 focus:outline-none focus:border-uis-orange transition-colors"
        />
      </div>
    </nav>
  );
};
