import React from 'react';

export const CinematicBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none select-none z-[-1] overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Deep Solid Base (#050505 to #0B0B0B) */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* 2. Primary Atmospheric Red Glow on LEFT/HERO side */}
      <div
        className="absolute -top-[10%] -left-[12%] w-[68vw] h-[68vw] max-w-[950px] max-h-[950px] rounded-full blur-[150px] opacity-35 anim-pulse-red"
        style={{
          background:
            'radial-gradient(circle, #E50914 0%, rgba(229, 9, 20, 0.4) 35%, rgba(179, 7, 16, 0.15) 60%, transparent 80%)',
        }}
      />

      {/* 3. Secondary Left-Center Volumetric Aura */}
      <div
        className="absolute top-[30%] -left-[5%] w-[45vw] h-[45vw] rounded-full blur-[120px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #FF1A1A 0%, rgba(229, 9, 20, 0.25) 45%, transparent 75%)',
        }}
      />

      {/* 4. Subtle Bottom Red Horizon Depth */}
      <div
        className="absolute -bottom-[20%] left-[20%] w-[55vw] h-[40vw] rounded-full blur-[160px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #99050D 0%, rgba(153, 5, 13, 0.1) 50%, transparent 80%)',
        }}
      />

      {/* 4b. Soft Red Atmosphere directly behind the Countdown Area */}
      <div
        className="absolute top-[42%] right-[12%] w-[42vw] h-[36vw] max-w-[600px] max-h-[500px] rounded-full blur-[140px] opacity-18 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #E50914 0%, rgba(229, 9, 20, 0.2) 40%, transparent 75%)',
        }}
      />

      {/* 5. Volumetric Red Light Ray Angles on the Left */}
      <div
        className="absolute -top-[20%] left-[5%] w-[35vw] h-[120vh] opacity-15 rotate-[-22deg] blur-[40px]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(229, 9, 20, 0.4) 0%, rgba(255, 26, 26, 0.15) 40%, transparent 80%)',
        }}
      />

      {/* 6. Cinematic Horizontal Light Streaks */}
      <div className="absolute top-[22%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E50914]/35 to-transparent blur-[1px]" />
      <div className="absolute top-[72%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E50914]/20 to-transparent blur-[1px]" />

      {/* 7. Drifting Dynamic Red Beam */}
      <div className="absolute top-[35%] left-0 w-[50vw] h-[2px] bg-gradient-to-r from-transparent via-[#FF1A1A]/45 to-transparent blur-[2px] anim-light-streak" />

      {/* 8. Film Grain Overlay */}
      <div className="absolute inset-0 film-grain opacity-45 mix-blend-overlay" />

      {/* 9. Soft Vignette: Centers attention and keeps right side text area dark & crisp */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 40% 50%, transparent 35%, rgba(5, 5, 5, 0.65) 75%, #050505 100%)',
        }}
      />
    </div>
  );
};
