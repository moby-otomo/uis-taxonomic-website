import React from 'react';
import { UncleEntry } from '../types/uncle';
import { UncleEntryCard } from './UncleEntryCard';

interface PermalinkViewProps {
  uncle: UncleEntry;
  onReturnToArchive: () => void;
}

export const PermalinkView: React.FC<PermalinkViewProps> = ({
  uncle,
  onReturnToArchive,
}) => {
  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6">
      {/* Permalink Header Context */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-uis-border pb-3 text-xs font-mono">
        <button
          onClick={onReturnToArchive}
          className="flex items-center gap-2 font-bold text-uis-dark hover:text-uis-orange transition-colors uppercase tracking-wider group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          <span>Return to Continuous Archive</span>
        </button>

        <div className="flex items-center gap-2 text-uis-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-uis-olive" />
          <span className="text-[11px] uppercase tracking-wider">
            Canonical Permalink: <strong className="text-uis-dark font-mono font-normal">/entries/{uncle.slug}</strong>
          </span>
        </div>
      </div>

      {/* The Canonical Uncle Entry Card */}
      <UncleEntryCard uncle={uncle} />

      {/* Continuation Bridge */}
      <div className="pt-4 border-t border-dashed border-uis-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono bg-uis-paper p-4 rounded-md">
        <div className="space-y-0.5 text-center sm:text-left">
          <p className="font-bold text-uis-dark uppercase tracking-wider">
            Explore More in the Field Log Archive
          </p>
          <p className="text-uis-muted font-sans">
            Uncles in Space is designed as a continuous reading stream.
          </p>
        </div>
        <button
          onClick={onReturnToArchive}
          className="px-4 py-2 bg-uis-dark text-uis-bg hover:bg-uis-orange font-bold uppercase tracking-wider transition-colors rounded-[3px] text-[11px] shrink-0"
        >
          Open Continuous Stream ↓
        </button>
      </div>
    </div>
  );
};
