import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <header
      className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between z-20 relative select-none transition-all duration-700"
      style={{
        filter: 'blur(2px)',
        opacity: 0.65,
      }}
    >
      {/* Discreet Brand Monogram / Domain */}
      <div className="flex items-center gap-2.5">
        <span className="w-2 h-2 rounded-full bg-[#E50914] shadow-[0_0_10px_#E50914] animate-pulse" />
        <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-white/90 uppercase font-display">
          1PLACE<span className="text-[#E50914]">.LK</span>
        </span>
      </div>

      {/* Discreet Location / Timezone Indicator */}
      <div className="flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.25em] text-[#A1A1AA]/80 uppercase font-mono-numbers">
        <span>LK</span>
        <span className="text-white/20">|</span>
        <span>COLOMBO</span>
      </div>
    </header>
  );
};
