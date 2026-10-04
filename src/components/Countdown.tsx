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
      <div className="flex items-center justify-center my-6">
        <div className="flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-black/80 border border-[#6D001A] shadow-[0_0_35px_rgba(109,0,26,0.6)] backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF1A1A] animate-ping" />
          <span className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-white uppercase font-display">
            WE ARE LIVE
          </span>
        </div>
      </div>
    );
  }

  const timeUnits = [
    { label: 'DAYS', value: mounted ? formatNum(timeLeft.days) : '105' },
    { label: 'HOURS', value: mounted ? formatNum(timeLeft.hours) : '02' },
    { label: 'MINUTES', value: mounted ? formatNum(timeLeft.minutes) : '23' },
    { label: 'SECONDS', value: mounted ? formatNum(timeLeft.seconds) : '50' },
  ];

  return (
    <div
      className="w-full my-4 sm:my-6 md:my-8 relative select-none"
      role="timer"
      aria-live="polite"
      aria-label={`Launch countdown: ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds remaining`}
    >
      <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-10 lg:gap-14 max-w-4xl mx-auto">
        {timeUnits.map((unit, index) => (
          <React.Fragment key={unit.label}>
            {/* Countdown Column */}
            <div className="flex flex-col items-center justify-center min-w-[65px] sm:min-w-[95px] md:min-w-[130px] lg:min-w-[150px]">
              {/* Large, Bold, Elegant Numbers with Subtle Burgundy Glow */}
              <span className="font-mono-numbers text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                {unit.value}
              </span>

              {/* Sub-label: DAYS, HOURS, MINUTES, SECONDS */}
              <span className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.28em] text-zinc-300 uppercase">
                {unit.label}
              </span>
            </div>

            {/* Thin Vertical Burgundy Divider Line Between Columns */}
            {index < timeUnits.length - 1 && (
              <div
                className="h-14 sm:h-20 md:h-24 w-[1px] bg-gradient-to-b from-transparent via-[#FF1A1A]/40 to-transparent flex-shrink-0"
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
