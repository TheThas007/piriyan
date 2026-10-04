import React from 'react';
import { ProgressBar } from './ProgressBar';
import { Countdown } from './Countdown';

export const ComingSoonContent: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-[640px] select-text">
      {/* ======================================================== */}
      {/* SECONDARY LAYER: SLIGHTLY BLURRED HEADERS                */}
      {/* ======================================================== */}

      {/* 1. Top Label: ──── OUR NEW SITE ──── (blur 3px, opacity 0.65) */}
      <div
        className="inline-flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 select-none transition-all duration-700"
        style={{
          filter: 'blur(3px)',
          opacity: 0.65,
        }}
      >
        {/* Left red horizontal line */}
        <span
          className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#E50914] shadow-[0_0_8px_#E50914]"
          aria-hidden="true"
        />

        <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.32em] text-[#E50914] uppercase drop-shadow-[0_0_10px_rgba(229,9,20,0.6)]">
          OUR NEW SITE
        </span>

        {/* Right red horizontal line */}
        <span
          className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#E50914] shadow-[0_0_8px_#E50914]"
          aria-hidden="true"
        />
      </div>

      {/* 2. Main Headline: COMING SOON (blur 4.5px, opacity 0.75 - recognizable, but secondary to countdown) */}
      <h1
        className="font-display font-black leading-[0.92] tracking-tight uppercase text-[44px] xs:text-[52px] sm:text-[68px] md:text-[80px] lg:text-[92px] xl:text-[104px] my-1 sm:my-2 select-none transition-all duration-700"
        style={{
          filter: 'blur(4.5px)',
          opacity: 0.75,
        }}
      >
        <span className="text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
          COMING{' '}
        </span>
        <span className="text-[#E50914] text-glow-red inline-block">
          SOON
        </span>
      </h1>

      {/* 3. Progress Bar (blur 3px, opacity 0.65) */}
      <ProgressBar />

      {/* ======================================================== */}
      {/* FOREGROUND LAYER: CRYSTAL CLEAR COUNTDOWN & LAUNCH INFO   */}
      {/* ======================================================== */}

      {/* 4. Real-Time Countdown (COMPLETELY SHARP, NO BLUR, HERO FOCAL POINT) */}
      <div className="w-full relative z-30" style={{ filter: 'none', backdropFilter: 'none' }}>
        <Countdown />
      </div>

      {/* 5. Launch Information & Tagline (COMPLETELY SHARP, NO BLUR) */}
      <div
        className="mt-2 sm:mt-4 flex flex-col items-center lg:items-start gap-2 relative z-30"
        style={{
          filter: 'none',
          backdropFilter: 'none',
        }}
      >
        {/* Launch Date Specification (Crystal Clear White with Red Dot) */}
        <div
          className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base font-extrabold tracking-[0.22em] text-white uppercase font-display drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          style={{ filter: 'none' }}
        >
          <span>LAUNCHING NOVEMBER 1, 2026</span>
          <span className="text-[#FF1A1A] drop-shadow-[0_0_8px_#FF1A1A]">•</span>
          <span>12:00 AM</span>
        </div>

        {/* Location & Timezone Meta (Crystal Clear Muted Typography) */}
        <div
          className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#D4D4D8] font-mono-numbers drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
          style={{ filter: 'none' }}
        >
          SRI LANKA STANDARD TIME (ASIA/COLOMBO • UTC+05:30)
        </div>

        {/* Brand Tagline (Crystal Clear) */}
        <p
          className="mt-2 text-sm sm:text-base md:text-lg font-light tracking-wide text-zinc-200 font-sans"
          style={{ filter: 'none' }}
        >
          Everything You Need.{' '}
          <span className="font-semibold text-white">One Place.</span>
        </p>
      </div>
    </div>
  );
};
