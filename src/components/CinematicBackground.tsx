import React from 'react';

export const CinematicBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none select-none z-[-1] overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Pure Pitch Black Base (#000000) */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* 2. Premium Dark Gradient: Black transitioning gently to deep dark burgundy (#38000C / #6D001A) */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 25% 45%, #42000F 0%, #200007 35%, #0A0003 65%, #000000 100%)',
        }}
      />

      {/* 3. Soft Radial Burgundy Glow directly around the Left Hero Visual Area */}
      <div
        className="absolute top-[18%] left-[8%] w-[50vw] h-[50vw] max-w-[750px] max-h-[750px] rounded-full blur-[130px] opacity-35 anim-burgundy-pulse pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, #6D001A 0%, rgba(109, 0, 26, 0.4) 30%, rgba(61, 0, 15, 0.15) 60%, transparent 80%)',
        }}
      />

      {/* 4. Very Subtle Secondary Dark Red Ambient behind Right Countdown Area */}
      <div
        className="absolute top-[40%] right-[10%] w-[38vw] h-[38vw] max-w-[550px] max-h-[550px] rounded-full blur-[150px] opacity-15 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, #6D001A 0%, rgba(109, 0, 26, 0.2) 40%, transparent 75%)',
        }}
      />

      {/* 5. Minimalist Architectural Horizon Hairlines */}
      <div className="absolute top-[18%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6D001A]/20 to-transparent blur-[0.5px]" />
      <div className="absolute bottom-[14%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6D001A]/15 to-transparent blur-[0.5px]" />

      {/* 6. Subtle Sheen Ray (Slow, high-end reflection across dark surface) */}
      <div className="absolute top-[32%] left-0 w-[45vw] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[1px] anim-sheen" />

      {/* 7. Subtle Film Grain (High-end 2.5% opacity) */}
      <div className="absolute inset-0 film-grain opacity-25 mix-blend-overlay" />

      {/* 8. Soft Luxury Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 45%, rgba(0, 0, 0, 0.6) 80%, #000000 100%)',
        }}
      />
    </div>
  );
};
