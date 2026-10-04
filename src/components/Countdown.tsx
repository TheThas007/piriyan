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
      <div className="flex flex-col items-start gap-4 my-6 relative z-30">
        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-black/80 border border-[#6D001A] shadow-[0_0_35px_rgba(109,0,26,0.5)] backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#6D001A] animate-ping" />
          <span className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-white uppercase font-display">
            WE ARE LIVE
          </span>
        </div>
      </div>
    );
  }

  const timeUnits = [
    { label: 'DAYS', value: mounted ? formatNum(timeLeft.days) : '27' },
    { label: 'HOURS', value: mounted ? formatNum(timeLeft.hours) : '00' },
    { label: 'MINUTES', value: mounted ? formatNum(timeLeft.minutes) : '34' },
    { label: 'SECONDS', value: mounted ? formatNum(timeLeft.seconds) : '52' },
  ];

  return (
    <div
      className="w-full my-6 sm:my-8 relative z-20"
      role="timer"
      aria-live="polite"
      aria-label={`Launch countdown: ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds remaining`}
    >
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-[540px]">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="group relative flex flex-col items-center justify-center py-4 px-2 sm:py-5 sm:px-3 rounded-2xl bg-[#08080a]/60 backdrop-blur-md border border-[#6D001A]/35 hover:border-[#6D001A]/75 transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.85)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.95),0_0_20px_rgba(109,0,26,0.25)]"
          >
            {/* Ultra-subtle Top Bevel Specular Line */}
            <div className="absolute top-0 inset-x-3 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#6D001A]/60 transition-colors" />

            {/* Countdown Digits: Crisp, Elegant, High-Contrast White */}
            <span className="font-mono-numbers text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {unit.value}
            </span>

            {/* Sub-label: Small Uppercase with Letter Spacing */}
            <span className="mt-1.5 sm:mt-2 text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] text-zinc-400 uppercase select-none group-hover:text-zinc-200 transition-colors">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
