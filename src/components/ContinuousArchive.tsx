import React from 'react';
import { UncleEntry } from '../types/uncle';
import { UncleEntryCard } from './UncleEntryCard';

interface ContinuousArchiveProps {
  uncles: UncleEntry[];
  searchQuery?: string;
  onPermalinkClick?: (slug: string) => void;
}

export const ContinuousArchive: React.FC<ContinuousArchiveProps> = ({
  uncles,
  searchQuery = '',
  onPermalinkClick,
}) => {
  // Filter entries if search query is provided, without altering canonical order
  const filteredUncles = uncles.filter((uncle) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      uncle.name.toLowerCase().includes(query) ||
      uncle.number.includes(query) ||
      uncle.translation.toLowerCase().includes(query) ||
      uncle.meaning.toLowerCase().includes(query) ||
      uncle.phrase.toLowerCase().includes(query) ||
      uncle.essay.some((p) => p.toLowerCase().includes(query))
    );
  });

  if (filteredUncles.length === 0) {
    return (
      <div className="p-8 sm:p-12 text-center border border-uis-border bg-uis-paper rounded-md">
        <p className="text-sm font-mono text-uis-dark font-bold uppercase">
          No archive field logs matching &ldquo;{searchQuery}&rdquo;
        </p>
        <p className="text-xs font-mono text-uis-muted mt-2">
          Try searching by Uncle number (e.g. 0013), name, phrase, or keyword.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 sm:space-y-12">
      {filteredUncles.map((uncle, idx) => (
        <React.Fragment key={uncle.id}>
          <UncleEntryCard
            uncle={uncle}
            onPermalinkClick={onPermalinkClick}
          />

          {/* Archival Stream Divider between entries */}
          {idx < filteredUncles.length - 1 && (
            <div className="flex items-center justify-center gap-3 py-2" aria-hidden="true">
              <div className="h-px bg-uis-border flex-1" />
              <span className="text-xs font-mono text-uis-muted/60 tracking-widest uppercase select-none">
                ✦ ✦ ✦
              </span>
              <div className="h-px bg-uis-border flex-1" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
