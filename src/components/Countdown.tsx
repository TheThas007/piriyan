import React, { useState, useEffect } from 'react';

// Official Launch Target: November 1, 2026 at 12:00:00 AM Sri Lanka Time (Asia/Colombo / UTC+5:30)
const LAUNCH_TARGET_ISO = '2026-11-01T00:00:00+05:30';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
}

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  function calculateTimeLeft(): TimeLeft {
    const targetTimestamp = new Date(LAUNCH_TARGET_ISO).getTime();
    const currentTimestamp = Date.now();
    const difference = targetTimestamp - currentTimestamp;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isLive: true,
      };
    }

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
      isLive: false,
    };
  }

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  if (timeLeft.isLive) {
    return (
      <div
        className="flex flex-col items-start gap-4 my-6 relative z-30"
        style={{ filter: 'none', backdropFilter: 'none' }}
      >
        <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-black/95 border-2 border-[#E50914] shadow-[0_0_35px_rgba(229,9,20,0.65)]">
          <span className="w-3.5 h-3.5 rounded-full bg-[#E50914] animate-ping" />
          <span className="text-2xl sm:text-3xl font-black tracking-widest text-white uppercase font-display">
            WE&apos;RE LIVE
          </span>
        </div>
        <a
          href="https://1place.lk"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E50914] hover:bg-[#FF1A1A] text-white font-bold text-lg rounded-xl shadow-[0_0_30px_rgba(229,9,20,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#FF1A1A] focus:ring-offset-2 focus:ring-offset-[#050505]"
        >
          <span>ENTER 1PLACE</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    );
  }

  const timeUnits = [
    { label: 'DAYS', value: mounted ? formatNum(timeLeft.days) : '--' },
    { label: 'HOURS', value: mounted ? formatNum(timeLeft.hours) : '--' },
    { label: 'MINUTES', value: mounted ? formatNum(timeLeft.minutes) : '--' },
    { label: 'SECONDS', value: mounted ? formatNum(timeLeft.seconds) : '--' },
  ];

  return (
    <div
      className="w-full my-6 sm:my-8 relative z-30"
      role="timer"
      aria-live="polite"
      aria-label={`Launch countdown: ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds remaining until launch`}
      style={{
        filter: 'none',
        backdropFilter: 'none',
      }}
    >
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-[540px]">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="group relative flex flex-col items-center justify-center py-4 px-2 sm:py-5 sm:px-4 rounded-xl sm:rounded-2xl bg-[#09090b]/90 border border-[#E50914]/40 hover:border-[#E50914]/80 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.95)] hover:shadow-[0_0_30px_rgba(229,9,20,0.35)]"
            style={{
              filter: 'none',
              backdropFilter: 'none',
            }}
          >
            {/* Top red edge ambient glint */}
            <div className="absolute top-0 inset-x-3 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF1A1A]/80 to-transparent group-hover:via-[#FF1A1A] transition-colors" />

            {/* Countdown Digits: Razor-sharp, bright white, high contrast */}
            <span
              className="font-mono-numbers text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
              style={{ filter: 'none' }}
            >
              {unit.value}
            </span>

            {/* Card Label: Razor-sharp uppercase */}
            <span
              className="mt-1.5 sm:mt-2 text-[9px] sm:text-[11px] font-bold tracking-[0.25em] text-[#D4D4D8] uppercase select-none group-hover:text-white transition-colors"
              style={{ filter: 'none' }}
            >
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
