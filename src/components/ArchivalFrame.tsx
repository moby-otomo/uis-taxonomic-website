import React from 'react';

interface ArchivalFrameProps {
  imageSrc: string;
  altText: string;
  characterNotes?: string;
  isEager?: boolean;
}

export const ArchivalFrame: React.FC<ArchivalFrameProps> = ({
  imageSrc,
  altText,
  isEager = false,
}) => {
  return (
    <div className="relative w-full aspect-[4/5] max-w-[420px] mx-auto md:mx-0 bg-uis-paper border border-uis-border overflow-hidden select-none flex items-center justify-center p-4 sm:p-6 shadow-xs">
      {/* Blueprint Square Grid Background */}
      <div
        className="absolute inset-0 opacity-35 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #cfcdc4 1px, transparent 1px),
            linear-gradient(to bottom, #cfcdc4 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Top-Left Corner Tick ⌜ */}
      <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-uis-dark pointer-events-none" aria-hidden="true" />

      {/* Top-Right Corner Tick ⌝ */}
      <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-uis-dark pointer-events-none" aria-hidden="true" />

      {/* Bottom-Left Corner Tick ⌞ */}
      <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-uis-dark pointer-events-none" aria-hidden="true" />

      {/* Bottom-Right Corner Tick ⌟ */}
      <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-uis-dark pointer-events-none" aria-hidden="true" />

      {/* Top-Left Crosshair Reticle ⊕ */}
      <div className="absolute top-8 left-8 w-6 h-6 flex items-center justify-center pointer-events-none opacity-45" aria-hidden="true">
        <div className="w-5 h-5 rounded-full border border-uis-dark flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-uis-dark/60" />
        </div>
        <div className="absolute w-7 h-px bg-uis-dark" />
        <div className="absolute h-7 w-px bg-uis-dark" />
      </div>

      {/* Bottom-Right Crosshair Reticle ⊕ */}
      <div className="absolute bottom-8 right-8 w-6 h-6 flex items-center justify-center pointer-events-none opacity-45" aria-hidden="true">
        <div className="w-5 h-5 rounded-full border border-uis-dark flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-uis-dark/60" />
        </div>
        <div className="absolute w-7 h-px bg-uis-dark" />
        <div className="absolute h-7 w-px bg-uis-dark" />
      </div>

      {/* Standardized Character Image Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <img
          src={imageSrc}
          alt={altText}
          loading={isEager ? 'eager' : 'lazy'}
          decoding="async"
          className="w-full h-full max-h-[460px] object-contain pixelated drop-shadow-sm transition-transform duration-200"
        />
      </div>
    </div>
  );
};
