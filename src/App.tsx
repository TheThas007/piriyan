import React, { useState, useEffect } from 'react';
import { CinematicBackground } from './components/CinematicBackground';
import { BackgroundLogos } from './components/BackgroundLogos';
import { TopBar } from './components/TopBar';
import { MainLogoSection } from './components/MainLogoSection';
import { ComingSoonContent } from './components/ComingSoonContent';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[100dvh] w-full bg-[#050505] text-white flex flex-col justify-between overflow-x-hidden selection:bg-[#E50914] selection:text-white">
      {/* 1. Cinematic Background Layer with Boosted Red Atmospheric Lighting */}
      <CinematicBackground />

      {/* 2. Continuously Moving Background Logos Layer (13 Animated Instances) */}
      <BackgroundLogos />

      {/* 3. Minimal Clean Top Header */}
      <TopBar />

      {/* 4. Main Viewport Hero: 45% Left (Large Hero Logo) / 55% Right (Clean Coming Soon Content) */}
      <main className="flex-1 flex items-center justify-center w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-8 z-10">
        <div
          className={`w-full flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 xl:gap-16 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Left Column (Desktop ~45%) / Top Center (Mobile): Hero 1PLACE Logo */}
          <div className="w-full lg:w-[46%] xl:w-[45%] flex items-center justify-center lg:justify-center order-1">
            <MainLogoSection />
          </div>

          {/* Right Column (Desktop ~55%) / Bottom Center (Mobile): Coming Soon Launch Content */}
          <div className="w-full lg:w-[54%] xl:w-[55%] flex items-center justify-center lg:justify-start order-2">
            <ComingSoonContent />
          </div>
        </div>
      </main>

      {/* 5. Minimal Ambient Footer */}
      <footer
        className="w-full max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-center text-center z-10 text-[10px] sm:text-xs text-[#A1A1AA]/50 tracking-[0.22em] uppercase select-none font-mono-numbers transition-all duration-700"
        style={{
          filter: 'blur(2px)',
          opacity: 0.5,
        }}
      >
        © 2026 1PLACE.LK • ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}
