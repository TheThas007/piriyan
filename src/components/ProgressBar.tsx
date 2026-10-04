import React, { useState, useEffect } from 'react';

export const LAUNCH_PROGRESS = 70;

export const ProgressBar: React.FC = () => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(LAUNCH_PROGRESS);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-[540px] my-4 sm:my-5 select-none">
      {/* Sleek Minimal Meta Header */}
      <div className="flex items-center justify-between text-[11px] sm:text-xs font-medium tracking-[0.2em] mb-2 text-zinc-400">
        <span className="uppercase flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6D001A] animate-pulse" />
          SYSTEM READINESS
        </span>
        <span className="font-mono-numbers text-white font-semibold tracking-widest">
          {animatedProgress}%
        </span>
      </div>

      {/* Thin Elegant Burgundy Progress Line */}
      <div
        className="relative h-[2px] w-full bg-[#18181E] rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={animatedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`System readiness: ${animatedProgress}%`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#4A0012] via-[#6D001A] to-[#A30829] relative transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(109,0,26,0.8)]"
          style={{ width: `${animatedProgress}%` }}
        >
          {/* Subtle Sheen Light Sweep */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent anim-progress-gleam" />
        </div>
      </div>
    </div>
  );
};
