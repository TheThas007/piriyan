import React from 'react';

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-6 sm:gap-8 mt-5 sm:mt-7 select-none">
      {/* 1. Official Instagram Link */}
      <a
        href="https://www.instagram.com/1place.lk1/"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-2.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-1 focus:ring-[#FF1A1A]"
        aria-label="Follow 1PLACE.LK on Instagram"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,26,26,0.8)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>

      {/* 2. Official WhatsApp Community Link */}
      <a
        href="https://chat.whatsapp.com/Jd1M5N2xeFfJh9tyLiEr2j"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-2.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-1 focus:ring-[#FF1A1A]"
        aria-label="Join 1PLACE.LK WhatsApp Community"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,26,26,0.8)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.77.464 3.498 1.346 5.026L2 22l5.097-1.336a10.007 10.007 0 0 0 4.934 1.287h.004c5.535 0 10.031-4.495 10.031-10.031C22.066 6.495 17.57 2 12.031 2zm5.864 14.184c-.244.686-1.42 1.315-1.954 1.399-.512.08-1.18.115-1.905-.116-.437-.14-1-.326-1.728-.642-3.056-1.328-5.05-4.437-5.203-4.641-.153-.204-1.246-1.657-1.246-3.16 0-1.503.789-2.242 1.069-2.547.28-.306.61-.382.814-.382.204 0 .407.002.585.011.188.01.442-.071.691.528.255.61.865 2.112.941 2.265.076.153.127.331.025.534-.102.204-.153.331-.305.509-.153.178-.321.397-.458.534-.153.153-.313.32-.134.628.178.306.792 1.306 1.7 2.114 1.168 1.04 2.152 1.362 2.458 1.515.306.153.484.127.662-.076.178-.204.763-.89.967-1.196.204-.306.407-.255.686-.153.28.102 1.78.84 2.085.992.306.153.51.229.585.356.076.128.076.738-.168 1.424z" />
        </svg>
      </a>
    </div>
  );
};
