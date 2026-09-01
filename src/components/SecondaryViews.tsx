import React from 'react';

interface SecondaryViewProps {
  viewId: 'ABOUT_UIS' | 'ABOUT_MOBY' | 'FUTURE_WORKS';
  onReturnToEntries: () => void;
}

export const SecondaryViews: React.FC<SecondaryViewProps> = ({
  viewId,
  onReturnToEntries,
}) => {
  return (
    <div className="p-6 sm:p-8 md:p-10 space-y-6">
      {/* Return button */}
      <button
        onClick={onReturnToEntries}
        className="flex items-center gap-2 text-xs font-mono font-bold text-uis-muted hover:text-uis-orange transition-colors uppercase tracking-wider group"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
        <span>Return to Canonical Archive Stream</span>
      </button>

      {viewId === 'ABOUT_UIS' && (
        <article className="border border-uis-border bg-uis-card/70 rounded-md p-6 sm:p-8 space-y-5">
          <div className="space-y-1 border-b border-uis-border/80 pb-4">
            <span className="text-[11px] font-mono text-uis-olive font-bold tracking-widest uppercase">
              REGISTER // 01_CONSTRUCTION-des-ONTOLOGIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-uis-dark uppercase tracking-tight">
              About Uncles in Space
            </h2>
          </div>

          <div className="space-y-4 font-serif text-[15px] sm:text-base leading-relaxed text-uis-dark/90">
            <p>
              <strong>Uncles in Space</strong> is a taxonomic worldbuilding project that documents
              the quiet, unheralded, and hyper-specialized roles assumed by older men across
              interstellar transit systems, mining skiffs, hydroponic bays, and orbital repair docks.
            </p>
            <p>
              In conventional science fiction, the cosmos is conquered by starship admirals, cybernetic
              mercenaries, and chosen pilots. In <em>Uncles in Space</em>, the galaxy functions because
              thousands of middle-aged uncles are quietly tightening loose radiator bolts, simmering
              nutrient broths to taste like ancestral herbal soup, and adjusting antenna relays by one-quarter
              turn without asking for credit.
            </p>
            <blockquote className="p-4 border-l-2 border-uis-orange bg-uis-paper text-sm italic font-serif my-4">
              &ldquo;Horizontal browsing discovers the world. Vertical reading explores it. The archive connects the two.&rdquo;
            </blockquote>
            <p>
              Every Uncle represents a distinct taxonomic entry, complete with his standardized visual log,
              conceptual phrase, translation, quick-sense Meaning statement, and long-form field note.
            </p>
          </div>
        </article>
      )}

      {viewId === 'ABOUT_MOBY' && (
        <article className="border border-uis-border bg-uis-card/70 rounded-md p-6 sm:p-8 space-y-5">
          <div className="space-y-1 border-b border-uis-border/80 pb-4">
            <span className="text-[11px] font-mono text-uis-olive font-bold tracking-widest uppercase">
              AUTHOR & CANON ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-uis-dark uppercase tracking-tight">
              About Moby Otomo
            </h2>
          </div>

          <div className="space-y-4 font-serif text-[15px] sm:text-base leading-relaxed text-uis-dark/90">
            <p>
              <strong>Moby Otomo</strong> is an independent worldbuilding studio and creative imprint
              focusing on rich speculative architectures, taxonomic storytelling, and character-driven archives.
            </p>
            <p>
              Operating across multiple creative registers—including <em>Uncles in Space</em>, ontological
              taxonomies, visual guides, and serialized literary essays—Moby Otomo builds worlds through
              deliberate, granular observation rather than sweeping spectacle.
            </p>
            <p>
              All taxonomic entries and field records are maintained within a canonical knowledge archive
              and released periodically to this public terminal.
            </p>
          </div>
        </article>
      )}

      {viewId === 'FUTURE_WORKS' && (
        <article className="border border-uis-border bg-uis-card/70 rounded-md p-6 sm:p-8 space-y-5">
          <div className="space-y-1 border-b border-uis-border/80 pb-4">
            <span className="text-[11px] font-mono text-uis-olive font-bold tracking-widest uppercase">
              TAXONOMIC EXPANSION PIPELINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-uis-dark uppercase tracking-tight">
              Future Works
            </h2>
          </div>

          <div className="space-y-4 font-serif text-[15px] sm:text-base leading-relaxed text-uis-dark/90">
            <p>
              The Uncles in Space catalogue is designed for continuous expansion. Currently in active
              field documentation:
            </p>
            <ul className="space-y-3 font-mono text-xs text-uis-dark pt-2">
              <li className="p-3 border border-uis-border bg-uis-paper rounded flex items-center justify-between">
                <div>
                  <span className="font-bold text-uis-olive">TAXO_No11188</span> — <span className="font-semibold">Mr. Papi</span>
                  <p className="text-[11px] text-uis-muted font-sans mt-0.5">Intentional smaller-stature exception. Senior skiff handler.</p>
                </div>
                <span className="text-[10px] text-uis-orange font-bold uppercase tracking-wider bg-uis-orange/10 px-2 py-1 rounded">In Field Log</span>
              </li>
              <li className="p-3 border border-uis-border bg-uis-paper rounded flex items-center justify-between">
                <div>
                  <span className="font-bold text-uis-olive">TAXO_No0021</span> — <span className="font-semibold">Thermal Radiator Uncle</span>
                  <p className="text-[11px] text-uis-muted font-sans mt-0.5">Master of convective equilibrium and heavy insulated gloves.</p>
                </div>
                <span className="text-[10px] text-uis-muted font-bold uppercase tracking-wider bg-uis-muted/10 px-2 py-1 rounded">Drafting</span>
              </li>
              <li className="p-3 border border-uis-border bg-uis-paper rounded flex items-center justify-between">
                <div>
                  <span className="font-bold text-uis-olive">TAXO_No0044</span> — <span className="font-semibold">Galactic Mahjong Observer Uncle</span>
                  <p className="text-[11px] text-uis-muted font-sans mt-0.5">Never plays a tile; watches every game in the mess hall and sighs knowingly.</p>
                </div>
                <span className="text-[10px] text-uis-muted font-bold uppercase tracking-wider bg-uis-muted/10 px-2 py-1 rounded">Queued</span>
              </li>
            </ul>
          </div>
        </article>
      )}
    </div>
  );
};
