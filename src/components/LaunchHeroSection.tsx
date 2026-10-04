import React from 'react';
import { TopBrandHeader } from './TopBrandHeader';
import { Countdown } from './Countdown';
import { ActionButtons } from './ActionButtons';
import { SocialLinks } from './SocialLinks';

export const LaunchHeroSection: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 py-6 sm:py-10 z-10 relative">
      {/* 1. TOP BRANDING: 1PLACE.LK™ + SUBTITLE + RED GLOW DIVIDER */}
      <TopBrandHeader />

      {/* 2. MAIN HEADLINE: "WE ARE LAUNCHING IN" */}
      <h1 className="mt-6 sm:mt-8 md:mt-10 font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-white uppercase select-none drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
        WE ARE LAUNCHING IN
      </h1>

      {/* 3. 4-PART COUNTDOWN WITH VERTICAL RED DIVIDER LINES */}
      <Countdown />

      {/* 4. SLEEK RED HORIZONTAL DIVIDER BAR */}
      <div className="relative my-2 sm:my-3 w-20 sm:w-28 h-[2px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF1A1A] to-transparent opacity-85 shadow-[0_0_8px_#FF1A1A]" />
        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#FFFFFF] relative z-10" />
      </div>

      {/* 5. BRAND TAGLINE: "Everything You Need. One Place." */}
      <p className="mt-2 text-base sm:text-lg md:text-xl font-light tracking-wide text-zinc-200 font-sans select-none">
        Everything You Need.{' '}
        <span className="font-bold text-white tracking-normal">One Place.</span>
      </p>

      {/* 6. LAUNCH INFORMATION & TIMEZONE */}
      <div className="mt-3 flex flex-col items-center gap-1 select-none">
        {/* LAUNCHING NOVEMBER 01, 2026 • 12:00 AM */}
        <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold tracking-[0.22em] text-white uppercase font-display drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          <span className="text-zinc-400 font-semibold">LAUNCHING</span>
          <span className="text-[#FF1A1A]">•</span>
          <span className="text-white font-extrabold text-sm sm:text-base md:text-lg">
            NOVEMBER 01, 2026
          </span>
          <span className="text-[#FF1A1A]">•</span>
          <span>12:00 AM</span>
        </div>

        {/* SRI LANKA STANDARD TIME */}
        <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-zinc-400 font-mono-numbers">
          SRI LANKA STANDARD TIME (ASIA/COLOMBO · UTC+05:30)
        </div>
      </div>

      {/* 7. TWO PREMIUM BUTTONS: NOTIFY ME & ENTER 1PLACE → */}
      <ActionButtons />

      {/* 8. ONLY TWO SOCIAL MEDIA OPTIONS: INSTAGRAM & WHATSAPP */}
      <SocialLinks />
    </div>
  );
};
