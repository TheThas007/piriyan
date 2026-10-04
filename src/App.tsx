import React, { useState, useEffect } from 'react';
import { CinematicBackground } from './components/CinematicBackground';
import { BackgroundLogos } from './components/BackgroundLogos';
import { TopBar } from './components/TopBar';
import { MainLogoSection } from './components/MainLogoSection';
import { ComingSoonContent } from './components/ComingSoonContent';
import { WhatsAppIcon, InstagramIcon } from './components/SocialIcons';

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
      {/* 1. Cinematic Background Layer: Deep Black with Subtle Burgundy Ambient Lighting */}
      <CinematicBackground />

      {/* 2. Luxury Depth-of-Field Moving Brand Watermarks */}
      <BackgroundLogos />

      {/* 3. Minimal Luxury Top Header (1PLACE.LK | LAUNCH, CATEGORIES, ABOUT) */}
      <TopBar />

      {/* 4. Main Hero Viewport: Balanced 45% Left (Brand Campaign Visual) / 55% Right (Coming Soon & Countdown) */}
      <main className="flex-1 flex items-center justify-center w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-4 sm:py-8 z-10">
        <div
          className={`w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Left Column (~45%): Luxury Fashion-Tech Brand Campaign Visual */}
          <div className="w-full lg:w-[46%] xl:w-[45%] flex items-center justify-center lg:justify-start order-1">
            <MainLogoSection />
          </div>

          {/* Right Column (~55%): Clean Coming Soon Content & Glassmorphic Countdown */}
          <div className="w-full lg:w-[54%] xl:w-[55%] flex items-center justify-center lg:justify-start order-2">
            <ComingSoonContent />
          </div>
        </div>
      </main>

      {/* 5. Minimal Agency-Quality Footer with Social Links */}
      <footer className="w-full max-w-[1600px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left z-20 text-[10px] sm:text-[11px] text-zinc-500 tracking-[0.24em] uppercase select-none font-sans font-medium">
        <span>© 2026 1PLACE.LK</span>

        {/* Social Community Direct Links */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://chat.whatsapp.com/Jd1M5N2xeFfJh9tyLiEr2j"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-[#25D366] transition-colors"
            aria-label="Join WhatsApp Community"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span className="tracking-[0.18em]">WHATSAPP</span>
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href="https://www.instagram.com/1place.lk1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-[#E1306C] transition-colors"
            aria-label="Follow on Instagram"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span className="tracking-[0.18em]">INSTAGRAM</span>
          </a>
        </div>

        <span>EVERYTHING YOU NEED. ONE PLACE.</span>
      </footer>
    </div>
  );
}
