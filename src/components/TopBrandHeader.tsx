import React from 'react';

export const TopBrandHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center select-none pt-2 sm:pt-4">
      {/* 1. Official 1PLACE.LK™ Wordmark */}
      <div className="flex items-start justify-center gap-1">
        <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-[0.14em] text-white uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          1PLACE<span className="text-[#FF1A1A] drop-shadow-[0_0_15px_rgba(255,26,26,0.6)]">.LK</span>
        </span>
        <span className="text-[9px] sm:text-[11px] font-bold text-zinc-300 uppercase tracking-widest mt-0.5">
          ™
        </span>
      </div>

      {/* 2. Sub-brand Tagline */}
      <span className="mt-1.5 text-[9px] sm:text-[11px] font-bold tracking-[0.32em] text-zinc-300 uppercase font-sans drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
        EVERYTHING YOU NEED. <span className="text-white">ONE PLACE.</span>
      </span>

      {/* 3. Sleek Red Divider with Glowing Center Highlight */}
      <div className="relative mt-3 sm:mt-4 w-24 sm:w-32 h-[2px] flex items-center justify-center">
        {/* Soft glowing line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF1A1A] to-transparent opacity-85 shadow-[0_0_8px_#FF1A1A]" />
        {/* Center intense pip */}
        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#FFFFFF] relative z-10" />
      </div>
    </div>
  );
};
