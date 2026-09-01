import React, { useMemo, useRef } from 'react';
import { UncleEntry } from '../types/uncle';
import { getSessionRandomizedGallery } from '../utils/gallery';

interface TaxonomyGalleryProps {
  uncles: UncleEntry[];
  selectedUncleId?: string;
  onSelectUncle: (uncle: UncleEntry) => void;
  randomize?: boolean;
}

export const TaxonomyGallery: React.FC<TaxonomyGalleryProps> = ({
  uncles,
  selectedUncleId,
  onSelectUncle,
  randomize = true,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Generate session-stable randomized list for presentation without altering canonical order
  const displayUncles = useMemo(() => {
    return randomize ? getSessionRandomizedGallery(uncles) : uncles;
  }, [uncles, randomize]);

  const handleSelect = (uncle: UncleEntry) => {
    onSelectUncle(uncle);

    // Scroll to the corresponding entry in the continuous archive
    const targetElement = document.getElementById(`entry-${uncle.slug}`) || document.getElementById(`uncle-${uncle.id}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section aria-label="Uncle Taxonomy Gallery" className="border-b border-uis-border bg-uis-card/30">
      {/* Gallery Header Bar */}
      <div className="flex items-center gap-3 px-4 pt-3 pb-2 text-xs font-mono">
        <span className="w-2.5 h-2.5 bg-uis-olive inline-block shrink-0 shadow-sm" aria-hidden="true" />
        <h2 className="font-bold tracking-widest text-uis-dark uppercase text-[11px] sm:text-xs shrink-0">
          UNCLE TAXONOMY GALLERY
        </h2>
        <div className="h-px bg-uis-border flex-1 mx-2" aria-hidden="true" />
        <span className="text-uis-muted/80 font-mono text-sm font-semibold select-none leading-none" aria-hidden="true">
          +
        </span>
      </div>

      {/* Horizontal Single-Row Thumbnail Strip */}
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-2 sm:gap-2.5 px-4 pb-3 pt-1 overflow-x-auto no-scrollbar scroll-smooth focus:outline-none"
        tabIndex={0}
        role="region"
        aria-label="Horizontal scrollable gallery of Uncles"
      >
        {displayUncles.map((uncle) => {
          const isSelected = selectedUncleId === uncle.id;
          return (
            <button
              key={uncle.id}
              onClick={() => handleSelect(uncle)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelect(uncle);
                }
              }}
              aria-label={`Taxonomy No. ${uncle.number}: ${uncle.name}`}
              title={`Uncle No. ${uncle.number} — ${uncle.name}`}
              className={`group relative shrink-0 w-[72px] sm:w-[80px] h-[78px] sm:h-[86px] rounded-[3px] border transition-all duration-150 overflow-hidden flex items-center justify-center p-1.5 focus:outline-none ${
                isSelected
                  ? 'border-uis-orange ring-2 ring-uis-orange/40 scale-[1.02] shadow-sm'
                  : 'border-uis-border hover:border-uis-dark/80 hover:shadow-xs focus:ring-2 focus:ring-uis-orange'
              }`}
              style={{ backgroundColor: uncle.galleryBgColor }}
            >
              {/* Crisp Pixel-Art Avatar */}
              <img
                src={uncle.galleryImage}
                alt=""
                aria-hidden="true"
                loading="eager"
                className="w-full h-full object-contain pixelated pointer-events-none transition-transform duration-150 group-hover:scale-105"
              />

              {/* Subordinate Active Corner Dot */}
              {isSelected && (
                <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-uis-orange shadow-xs" />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
};
