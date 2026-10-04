import React, { useState, useEffect } from 'react';

// Single configurable launch progress percentage variable
export const LAUNCH_PROGRESS = 70;

export const ProgressBar: React.FC = () => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    // Smooth cinematic ease-in transition on load from 0 to LAUNCH_PROGRESS
    const timer = setTimeout(() => {
      setAnimatedProgress(LAUNCH_PROGRESS);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="w-full max-w-[540px] my-5 sm:my-6 select-none transition-all duration-700"
      style={{
        filter: 'blur(3px)',
        opacity: 0.65,
      }}
    >
      {/* Progress Meta Header */}
      <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wider mb-2.5">
        <span className="text-[#A1A1AA] uppercase flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse" />
          SYSTEM READINESS
        </span>
        <span className="text-white font-mono-numbers font-bold tracking-widest text-glow-red">
          {animatedProgress}%
        </span>
      </div>

      {/* Progress Track */}
      <div
        className="relative h-2 sm:h-2.5 w-full bg-[#141416] rounded-full p-[1px] overflow-hidden border border-white/10 shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]"
        role="progressbar"
        aria-valuenow={animatedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`System launch readiness: ${animatedProgress}%`}
      >
        {/* Animated Glowing Fill */}
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#99050D] via-[#E50914] to-[#FF2E3A] relative transition-all duration-1000 ease-out shadow-[0_0_16px_rgba(229,9,20,0.85)]"
          style={{ width: `${animatedProgress}%` }}
        >
          {/* Animated Sheen Sweep */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent anim-progress-gleam" />
        </div>
      </div>
    </div>
  );
};
