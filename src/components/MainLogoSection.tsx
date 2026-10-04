import React, { useState, useEffect } from 'react';
import { NewOnePlaceLogo } from './NewOnePlaceLogo';

export const MainLogoSection: React.FC = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseOffset({ x: 0, y: 0 });
  };

  const parallaxX = isHovered && !prefersReducedMotion ? mouseOffset.x * 8 : 0;
  const parallaxY = isHovered && !prefersReducedMotion ? -mouseOffset.y * 6 : 0;

  return (
    <div
      className="w-full flex items-center justify-center lg:justify-start px-2 sm:px-4 lg:px-6 py-4 sm:py-6 select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
    >
      <div
        className="relative flex items-center justify-center w-full max-w-[620px] transition-transform duration-700 ease-out"
        style={{
          transform: `rotateY(${-4 + parallaxX}deg) rotateX(${2 + parallaxY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 1. Soft Radial Burgundy Atmospheric Lighting behind the Campaign Visual */}
        <div
          className="absolute -inset-10 sm:-inset-16 rounded-full blur-[110px] sm:blur-[140px] bg-gradient-to-tr from-[#6D001A]/35 via-[#4A0012]/20 to-transparent pointer-events-none -z-20 anim-burgundy-pulse"
          aria-hidden="true"
        />

        {/* 2. Abstract Luxury Architectural Numeral "1" Sculpted Behind the Brand Mark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 opacity-20 sm:opacity-25 transition-opacity duration-500"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 400 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[280px] sm:w-[340px] lg:w-[420px] h-auto overflow-visible filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
          >
            <defs>
              <linearGradient id="monolithFace" x1="120" y1="40" x2="280" y2="460" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1A1A22" />
                <stop offset="40%" stopColor="#0E0E14" />
                <stop offset="100%" stopColor="#050508" />
              </linearGradient>

              <linearGradient id="monolithBevel" x1="80" y1="40" x2="280" y2="460" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
                <stop offset="25%" stopColor="#6D001A" stopOpacity="0.7" />
                <stop offset="65%" stopColor="#30000B" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#6D001A" stopOpacity="0.2" />
              </linearGradient>

              <linearGradient id="subtleGleam" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6D001A" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Monumental Sculpted 3D "1" Silhouette */}
            {/* 3D Extrusion Back */}
            <path
              d="M 130 140 L 220 70 L 290 100 L 250 450 L 190 450 L 220 150 L 130 190 Z"
              fill="#060608"
              stroke="#6D001A"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
            {/* Front Beveled Face */}
            <path
              d="M 140 150 L 220 85 L 245 440 L 195 440 L 215 160 L 140 195 Z"
              fill="url(#monolithFace)"
              stroke="url(#monolithBevel)"
              strokeWidth="2"
            />
            {/* Specular Edge Highlights */}
            <line x1="140" y1="150" x2="220" y2="85" stroke="url(#subtleGleam)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="220" y1="85" x2="245" y2="440" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" />
          </svg>
        </div>

        {/* 3. Luxury Floating Brand Card Container */}
        <div
          className={`relative z-10 w-full flex flex-col items-center justify-center p-4 sm:p-6 rounded-3xl ${
            !prefersReducedMotion ? 'anim-hero-float' : ''
          }`}
        >
          {/* Subtle Glassmorphic Ambient Rim */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] pointer-events-none shadow-[0_20px_50px_rgba(0,0,0,0.8)]" />

          {/* Crisp, Sharp, Elegant 1PLACE Wordmark */}
          <div className="w-[280px] xs:w-[320px] sm:w-[400px] md:w-[480px] lg:w-[520px] xl:w-[560px] max-w-full relative z-20">
            <NewOnePlaceLogo className="w-full h-auto filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]" />
          </div>

          {/* 4. Luxury Pedestal Mirror Reflection */}
          <div
            className="w-[80%] h-12 mt-2 opacity-15 overflow-hidden pointer-events-none transform scale-y-[-1] blur-[1.5px]"
            style={{
              maskImage: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 80%)',
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 80%)',
            }}
          >
            <NewOnePlaceLogo className="w-full h-auto" />
          </div>

          {/* Ultra-thin Horizontal Burgundy Reflection Line */}
          <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#6D001A]/60 to-transparent mt-1" />
        </div>
      </div>
    </div>
  );
};
