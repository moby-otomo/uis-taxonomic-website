import React from 'react';
import { UncleEntry } from '../types/uncle';
import { ArchivalFrame } from './ArchivalFrame';

interface UncleEntryCardProps {
  uncle: UncleEntry;
  onPermalinkClick?: (slug: string) => void;
}

export const UncleEntryCard: React.FC<UncleEntryCardProps> = ({
  uncle,
  onPermalinkClick,
}) => {
  const handlePermalink = (e: React.MouseEvent) => {
    if (onPermalinkClick) {
      e.preventDefault();
      onPermalinkClick(uncle.slug);
    }
  };

  return (
    <article
      id={`entry-${uncle.slug}`}
      data-uncle-id={uncle.id}
      className="scroll-mt-6 border border-uis-border bg-uis-card/60 rounded-md p-4 sm:p-6 md:p-8 shadow-xs"
      aria-labelledby={`title-${uncle.id}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Left Column: Standardized Archival Frame (5 cols on md) */}
        <div className="md:col-span-5 flex justify-center">
          <ArchivalFrame
            imageSrc={uncle.mainImage}
            altText={`Full taxonomy portrait of ${uncle.name} (No. ${uncle.number})`}
            characterNotes={uncle.notes}
            isEager={uncle.isLatest}
          />
        </div>

        {/* Right Column: Taxonomic Essay & Text Stack (7 cols on md) */}
        <div className="md:col-span-7 flex flex-col space-y-4">
          {/* Status, Uncle Number & Canonical Permalink Anchor */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              {uncle.isLatest && (
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-widest text-uis-dark uppercase">
                  <span>LATEST ENTRY</span>
                  <span className="w-2 h-2 rounded-full bg-uis-orange inline-block" aria-hidden="true" />
                </div>
              )}
              <p className="text-xs font-mono font-bold tracking-widest text-uis-olive uppercase">
                UNCLE NO. {uncle.number}
              </p>
            </div>

            <a
              href={`/entries/${uncle.slug}`}
              onClick={handlePermalink}
              title={`Permanent Link for ${uncle.name}`}
              className="text-[10px] font-mono text-uis-muted hover:text-uis-orange border border-uis-border/80 px-2 py-0.5 rounded bg-uis-paper/80 transition-colors uppercase tracking-wider"
            >
              Permalink ↗
            </a>
          </div>

          {/* Entry Title */}
          <h2
            id={`title-${uncle.id}`}
            className="text-3xl sm:text-4xl md:text-[42px] font-black font-display tracking-tight text-uis-dark uppercase leading-[0.95]"
          >
            {uncle.entryTitle}
          </h2>

          {/* Dotted Separator with 4-Point Star ✧ */}
          <div className="relative flex items-center my-1">
            <div className="w-full border-b border-dashed border-uis-border" />
            <span className="ml-2 text-uis-dark text-base select-none font-serif leading-none" aria-hidden="true">
              ✧
            </span>
          </div>

          {/* Conceptual Phrase */}
          <p className="font-serif italic text-base sm:text-[17px] text-uis-dark leading-snug">
            {uncle.phrase}
          </p>

          {/* Bordered Chinese / Explanation Box */}
          <div className="inline-flex self-start border border-uis-border bg-uis-paper px-3 py-1.5 rounded-[2px] shadow-xs">
            <span className="font-sans text-xs sm:text-[13px] text-uis-dark font-medium">
              <span className="font-semibold">{uncle.chinesePhrase}</span> = {uncle.translation}
            </span>
          </div>

          {/* Meaning Section */}
          <div className="pt-2 space-y-1.5">
            <h3 className="font-serif font-bold text-sm text-uis-olive tracking-wide">
              Meaning:
            </h3>
            <p className="font-serif font-bold text-xl sm:text-[23px] md:text-[25px] leading-tight text-uis-dark">
              {uncle.meaning}
            </p>
          </div>

          {/* Full Long-Form Essay (Continuous Reading) */}
          <div className="pt-2 space-y-3 font-serif text-[14.5px] sm:text-[15px] leading-relaxed text-uis-dark/90">
            {uncle.essay.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
