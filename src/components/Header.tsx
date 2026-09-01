import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="border-b border-uis-border bg-uis-card/50">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-3 gap-3">
        {/* Left: Rocket Badge + Brand Titles */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Rocket Icon in rounded technical box */}
          <div className="w-10 h-10 border border-uis-border bg-uis-paper rounded-md flex items-center justify-center p-1 shadow-sm shrink-0">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-uis-dark fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Rocket vector */}
              <path d="M12 2.5C12 2.5 7.5 7 7.5 13.5C7.5 16 8.5 18 9.5 19L9.5 21.5L12 20L14.5 21.5L14.5 19C15.5 18 16.5 16 16.5 13.5C16.5 7 12 2.5 12 2.5Z" stroke="#181816" strokeWidth="1.5" fill="#f4f3ee" />
              <circle cx="12" cy="10.5" r="1.75" fill="#181816" />
              <path d="M7.5 14L4.5 16.5L5.5 19.5L8.5 18" stroke="#181816" strokeWidth="1.2" fill="#181816" />
              <path d="M16.5 14L19.5 16.5L18.5 19.5L15.5 18" stroke="#181816" strokeWidth="1.2" fill="#181816" />
            </svg>
          </div>

          {/* Title and Subtitle */}
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h1 className="text-2xl sm:text-[28px] font-extrabold font-display tracking-tight text-uis-dark leading-none">
              UNCLES IN SPACE
            </h1>
            <div className="hidden sm:block h-4 w-px bg-uis-border self-center" />
            <p className="text-[11px] sm:text-xs font-mono font-medium tracking-widest text-uis-olive uppercase leading-none">
              A TAXONOMIC WORLDBUILDING SERIES
            </p>
          </div>
        </div>

        {/* Right: Archival Diagonal Hatch Pattern */}
        <div className="hidden sm:block w-24 h-6 hatch-pattern opacity-60 self-center rounded-sm" />
      </div>
    </header>
  );
};
