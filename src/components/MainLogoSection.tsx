import React from 'react';
import { NewOnePlaceLogo } from './NewOnePlaceLogo';

export const MainLogoSection: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center lg:justify-start px-2 sm:px-4 lg:px-6 py-4 sm:py-6 select-none pointer-events-none">
      <div className="relative flex items-center justify-center w-full">
        {/* Subtle red ambient glow behind the teaser logo */}
        <div
          className="absolute -inset-10 sm:-inset-16 rounded-full blur-[100px] sm:blur-[130px] bg-[#E50914]/25 pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* Central Core Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] rounded-full blur-[80px] bg-[#FF1A1A]/15 pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* The 1PLACE Wordmark Logo: Heavily Blurred Mysterious Brand Silhouette (blur 14px, opacity 0.35) */}
        <div
          className="w-[280px] xs:w-[310px] sm:w-[360px] md:w-[460px] lg:w-[520px] xl:w-[600px] 2xl:w-[640px] max-w-full transition-all duration-700"
          style={{
            filter: 'blur(14px)',
            opacity: 0.35,
          }}
        >
          <NewOnePlaceLogo className="w-full h-auto filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]" />
        </div>
      </div>
    </div>
  );
};
