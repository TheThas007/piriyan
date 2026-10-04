import React from 'react';

interface NewOnePlaceLogoProps {
  className?: string;
}

export const NewOnePlaceLogo: React.FC<NewOnePlaceLogoProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none w-full h-auto ${className}`}
      role="img"
      aria-label="1PLACE - Everything You Need, In One Place."
    >
      <svg
        viewBox="0 0 1020 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        {/* ======================================================== */}
        {/* MAIN WORDMARK: "ONEPLACE"                                */}
        {/* ======================================================== */}

        {/* 1. Letter "O" */}
        <path
          d="M 125 45 C 160 45, 186 71, 186 106 C 186 141, 160 167, 125 167 C 90 167, 64 141, 64 106 C 64 71, 90 45, 125 45 Z M 125 75 C 143 75, 154 89, 154 106 C 154 123, 143 137, 125 137 C 107 137, 96 123, 96 106 C 96 89, 107 75, 125 75 Z"
          fill="#FFFFFF"
        />

        {/* 2. Letter "N" */}
        <path
          d="M 205 48 L 237 48 L 283 126 L 283 48 L 315 48 L 315 164 L 283 164 L 237 86 L 237 164 L 205 164 Z"
          fill="#FFFFFF"
        />

        {/* 3. Letter "E" */}
        <path
          d="M 335 48 L 415 48 L 415 75 L 367 75 L 367 92 L 407 92 L 407 119 L 367 119 L 367 137 L 417 137 L 417 164 L 335 164 Z"
          fill="#FFFFFF"
        />

        {/* 4. Distinctive "P" with Inverted Angled Polygon Badge */}
        {/* Dark quadrilateral background badge that extends taller and angles over the top of L */}
        <path
          d="M 424 40 L 642 34 L 552 168 L 424 168 Z"
          fill="#050505"
        />
        {/* The White Letter "P" inside the dark badge */}
        <path
          d="M 452 48 L 504 48 C 528 48, 542 62, 542 86 C 542 110, 528 124, 504 124 L 484 124 L 484 164 L 452 164 Z M 484 74 L 500 74 C 510 74, 514 80, 514 86 C 514 92, 510 98, 500 98 L 484 98 Z"
          fill="#FFFFFF"
        />

        {/* 5. Letter "L" */}
        <path
          d="M 564 48 L 596 48 L 596 136 L 642 136 L 642 164 L 564 164 Z"
          fill="#FFFFFF"
        />

        {/* 6. Letter "A" (Modern minimalist chevron / lambda apex with no crossbar) */}
        <path
          d="M 654 164 L 712 48 L 744 48 L 802 164 L 766 164 L 728 84 L 690 164 Z"
          fill="#FFFFFF"
        />

        {/* 7. Letter "C" */}
        <path
          d="M 885 76 C 875 58, 860 48, 838 48 C 804 48, 780 74, 780 106 C 780 138, 804 164, 838 164 C 860 164, 876 154, 885 136 L 855 120 C 850 129, 844 135, 836 135 C 820 135, 812 121, 812 106 C 812 91, 820 77, 836 77 C 844 77, 850 83, 855 92 Z"
          fill="#FFFFFF"
        />

        {/* 8. Letter "E" */}
        <path
          d="M 898 48 L 978 48 L 978 75 L 930 75 L 930 92 L 970 92 L 970 119 L 930 119 L 930 137 L 980 137 L 980 164 L 898 164 Z"
          fill="#FFFFFF"
        />

        {/* ======================================================== */}
        {/* SUBTITLE: ─── EVERYTHING YOU NEED, IN ONE PLACE. ───     */}
        {/* ======================================================== */}
        <g id="tagline-row">
          {/* Left accent line */}
          <line
            x1="55"
            y1="210"
            x2="155"
            y2="210"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.95"
          />

          {/* Tagline Typography */}
          <text
            x="515"
            y="216"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="18"
            fontWeight="700"
            fontFamily="'Space Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif"
            letterSpacing="0.28em"
          >
            EVERYTHING YOU NEED, IN ONE PLACE.
          </text>

          {/* Right accent line */}
          <line
            x1="875"
            y1="210"
            x2="975"
            y2="210"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.95"
          />
        </g>
      </svg>
    </div>
  );
};
