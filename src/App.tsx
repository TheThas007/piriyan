import React, { useState, useEffect } from 'react';
import { CinematicStageBackground } from './components/CinematicStageBackground';
import { LaunchHeroSection } from './components/LaunchHeroSection';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[100dvh] w-full bg-[#000000] text-white flex flex-col justify-between overflow-x-hidden selection:bg-[#6D001A] selection:text-white antialiased">
      {/* 1. Cinematic Stage Background: Luxury Dark Shopping Environment with Product Silhouettes & Wet Reflections */}
      <CinematicStageBackground />

      {/* 2. Main Centered Hero Viewport matching reference image exactly */}
      <main className="flex-1 flex items-center justify-center w-full z-10 py-6 sm:py-10">
        <div
          className={`w-full transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <LaunchHeroSection />
        </div>
      </main>

      {/* 3. Minimal Subtle Footer */}
      <footer className="w-full max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-4 text-center z-10 text-[10px] sm:text-[11px] text-zinc-500 tracking-[0.24em] uppercase select-none font-sans font-medium">
        <span>© 2026 1PLACE.LK</span>
        <span className="hidden sm:inline text-zinc-700">•</span>
        <span>Everything You Need. One Place.</span>
      </footer>
    </div>
  );
}
