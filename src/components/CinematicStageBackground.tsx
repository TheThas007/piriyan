import React from 'react';

export const CinematicStageBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Base Pitch Black */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* 2. Deep Burgundy Radial Atmospheric Glow in Center-Hero */}
      <div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[70vw] h-[55vh] max-w-[1100px] rounded-full blur-[140px] opacity-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, #6D001A 0%, rgba(109, 0, 26, 0.45) 40%, rgba(35, 0, 8, 0.2) 70%, transparent 90%)',
        }}
      />

      {/* 3. Left & Right Atmospheric Burgundy Light Pillars */}
      <div
        className="absolute top-0 left-[2%] w-[25vw] h-[80vh] rounded-full blur-[110px] opacity-35"
        style={{
          background: 'radial-gradient(ellipse at center, #8A0020 0%, #6D001A 35%, transparent 75%)',
        }}
      />
      <div
        className="absolute top-0 right-[2%] w-[25vw] h-[80vh] rounded-full blur-[110px] opacity-35"
        style={{
          background: 'radial-gradient(ellipse at center, #8A0020 0%, #6D001A 35%, transparent 75%)',
        }}
      />

      {/* 4. Left Product Stage Silhouettes (Shopping Bag, Smartphone on Pedestal, Controller, Tech Boxes) */}
      <div className="absolute bottom-[8%] left-0 w-[38vw] max-w-[500px] h-[65vh] opacity-60 sm:opacity-85 pointer-events-none hidden md:block">
        <svg
          viewBox="0 0 500 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(109,0,26,0.35)]"
        >
          <defs>
            {/* Red Rim Light Gradient */}
            <linearGradient id="redRimGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF1A1A" />
              <stop offset="50%" stopColor="#6D001A" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="phoneGleam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="30%" stopColor="#6D001A" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1A0006" />
            </linearGradient>

            <linearGradient id="bagSurface" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#121216" />
              <stop offset="50%" stopColor="#08080A" />
              <stop offset="100%" stopColor="#040405" />
            </linearGradient>
          </defs>

          {/* Vertical Neon Tube on Left Wall */}
          <rect x="25" y="40" width="4" height="420" rx="2" fill="#FF1A1A" opacity="0.85" filter="drop-shadow(0 0 12px #FF1A1A)" />
          <rect x="23" y="20" width="8" height="460" rx="4" fill="#6D001A" opacity="0.35" filter="blur(8px)" />

          {/* Luxury Pedestal Platform */}
          <path d="M 0 520 L 320 520 L 380 570 L 0 570 Z" fill="#0A0A0D" stroke="#6D001A" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="0" y1="520" x2="320" y2="520" stroke="#FF2E3A" strokeWidth="2.5" opacity="0.8" filter="drop-shadow(0 0 8px #FF1A1A)" />

          {/* Luxury Matte Black Shopping Bag */}
          <g transform="translate(10, 160)">
            {/* Bag Handles */}
            <path
              d="M 90 20 C 90 -25, 140 -25, 140 20"
              stroke="#6D001A"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              filter="drop-shadow(0 0 6px #FF1A1A)"
            />
            <path
              d="M 120 20 C 120 -25, 170 -25, 170 20"
              stroke="#3D000E"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Main Bag Body */}
            <path
              d="M 60 20 L 210 10 L 240 320 L 80 340 Z"
              fill="url(#bagSurface)"
              stroke="#6D001A"
              strokeWidth="1.5"
              strokeOpacity="0.7"
            />
            {/* Edge Red Rim Light */}
            <line x1="60" y1="20" x2="80" y2="340" stroke="#FF1A1A" strokeWidth="2.5" opacity="0.75" filter="drop-shadow(0 0 6px #FF1A1A)" />
            {/* Debossed Bag Logo */}
            <text
              x="145"
              y="180"
              fill="#FFFFFF"
              fontSize="14"
              fontWeight="900"
              letterSpacing="0.2em"
              textAnchor="middle"
              opacity="0.9"
            >
              1PLACE<tspan fill="#FF1A1A">.LK</tspan>
            </text>
          </g>

          {/* Premium Smartphone on Illuminated Stand */}
          <g transform="translate(145, 310)">
            {/* Glowing Stand Base */}
            <ellipse cx="60" cy="180" rx="55" ry="12" fill="#0A0A0D" stroke="#FF1A1A" strokeWidth="1.5" filter="drop-shadow(0 0 10px #FF1A1A)" />
            {/* Phone Silhouette angled */}
            <rect
              x="25"
              y="15"
              width="68"
              height="145"
              rx="14"
              fill="#060608"
              stroke="url(#phoneGleam)"
              strokeWidth="2"
              transform="rotate(-6 60 90)"
              filter="drop-shadow(0 15px 25px rgba(0,0,0,0.9))"
            />
            {/* Phone Camera Bump */}
            <rect x="34" y="26" width="22" height="24" rx="6" fill="#14141A" transform="rotate(-6 60 90)" />
            <circle cx="41" cy="34" r="3.5" fill="#000000" stroke="#6D001A" strokeWidth="0.8" />
            <circle cx="49" cy="42" r="3.5" fill="#000000" stroke="#6D001A" strokeWidth="0.8" />
          </g>

          {/* Luxury Matte Tech Boxes */}
          <g transform="translate(15, 380)">
            <path d="M 0 60 L 90 20 L 140 50 L 50 90 Z" fill="#111116" stroke="#6D001A" strokeWidth="1" />
            <path d="M 0 60 L 50 90 L 50 140 L 0 110 Z" fill="#070709" stroke="#6D001A" strokeWidth="1" />
            <path d="M 50 90 L 140 50 L 140 100 L 50 140 Z" fill="#0A0A0E" stroke="#FF1A1A" strokeWidth="1" strokeOpacity="0.6" />
          </g>

          {/* Gaming Controller Silhouette */}
          <g transform="translate(10, 480)" opacity="0.85">
            <path
              d="M 20 40 C 20 20, 50 15, 75 25 C 90 20, 110 20, 125 25 C 150 15, 180 20, 180 40 C 185 65, 170 85, 155 80 C 145 78, 140 65, 130 65 C 120 65, 115 72, 100 72 C 85 72, 80 65, 70 65 C 60 65, 55 78, 45 80 C 30 85, 15 65, 20 40 Z"
              fill="#060608"
              stroke="#6D001A"
              strokeWidth="1.5"
            />
            {/* Thumbsticks & D-Pad glow */}
            <circle cx="60" cy="48" r="9" fill="#0D0D12" stroke="#FF1A1A" strokeWidth="1" />
            <circle cx="140" cy="48" r="9" fill="#0D0D12" stroke="#FF1A1A" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* 5. Right Product Stage Silhouettes (Shopping Cart, Headphones, Smartwatch, Designer Sneaker) */}
      <div className="absolute bottom-[8%] right-0 w-[38vw] max-w-[500px] h-[65vh] opacity-60 sm:opacity-85 pointer-events-none hidden md:block">
        <svg
          viewBox="0 0 500 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(109,0,26,0.35)]"
        >
          {/* Vertical Neon Tube on Right Wall */}
          <rect x="465" y="40" width="4" height="420" rx="2" fill="#FF1A1A" opacity="0.85" filter="drop-shadow(0 0 12px #FF1A1A)" />
          <rect x="463" y="20" width="8" height="460" rx="4" fill="#6D001A" opacity="0.35" filter="blur(8px)" />

          {/* Luxury Pedestal Platform */}
          <path d="M 120 520 L 500 520 L 500 570 L 60 570 Z" fill="#0A0A0D" stroke="#6D001A" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="120" y1="520" x2="500" y2="520" stroke="#FF2E3A" strokeWidth="2.5" opacity="0.8" filter="drop-shadow(0 0 8px #FF1A1A)" />

          {/* Metallic Luxury Shopping Cart Silhouette */}
          <g transform="translate(180, 130)">
            {/* Cart Frame & Grid */}
            <path
              d="M 50 40 L 240 25 L 220 180 L 70 190 Z"
              fill="rgba(10, 10, 14, 0.4)"
              stroke="#6D001A"
              strokeWidth="2.5"
            />
            {/* Grid wires with subtle red glow */}
            <line x1="80" y1="38" x2="95" y2="188" stroke="#FF1A1A" strokeWidth="1" opacity="0.6" />
            <line x1="120" y1="35" x2="135" y2="185" stroke="#FF1A1A" strokeWidth="1" opacity="0.6" />
            <line x1="160" y1="31" x2="175" y2="182" stroke="#FF1A1A" strokeWidth="1" opacity="0.6" />
            <line x1="200" y1="28" x2="210" y2="180" stroke="#FF1A1A" strokeWidth="1" opacity="0.6" />
            <line x1="55" y1="80" x2="235" y2="65" stroke="#FF1A1A" strokeWidth="1" opacity="0.5" />
            <line x1="60" y1="120" x2="230" y2="105" stroke="#FF1A1A" strokeWidth="1" opacity="0.5" />
            <line x1="65" y1="160" x2="225" y2="145" stroke="#FF1A1A" strokeWidth="1" opacity="0.5" />
            {/* Cart Handle */}
            <path d="M 50 40 L 15 30 L 10 50" stroke="#FF1A1A" strokeWidth="4" strokeLinecap="round" filter="drop-shadow(0 0 6px #FF1A1A)" />
            {/* Cart Under-Chassis & Wheels */}
            <path d="M 70 190 L 80 240 L 210 240 L 220 180" stroke="#6D001A" strokeWidth="3" fill="none" />
            <circle cx="85" cy="245" r="9" fill="#0A0A0D" stroke="#FF1A1A" strokeWidth="2" />
            <circle cx="205" cy="245" r="9" fill="#0A0A0D" stroke="#FF1A1A" strokeWidth="2" />
          </g>

          {/* Premium Over-Ear Studio Headphones */}
          <g transform="translate(320, 290)">
            {/* Headband */}
            <path
              d="M 25 80 C 25 -5, 125 -5, 125 80"
              stroke="#1C1C24"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 25 80 C 25 -5, 125 -5, 125 80"
              stroke="#6D001A"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
            {/* Ear Cups */}
            <ellipse cx="25" cy="85" rx="14" ry="24" fill="#060608" stroke="#FF1A1A" strokeWidth="2" filter="drop-shadow(0 0 8px #FF1A1A)" />
            <ellipse cx="125" cy="85" rx="14" ry="24" fill="#060608" stroke="#FF1A1A" strokeWidth="2" filter="drop-shadow(0 0 8px #FF1A1A)" />
          </g>

          {/* Luxury Smartwatch on Stand */}
          <g transform="translate(240, 420)">
            {/* Pedestal stand */}
            <path d="M 40 40 L 40 70 L 60 70 L 60 40 Z" fill="#14141C" />
            {/* Watch Case */}
            <rect
              x="20"
              y="5"
              width="40"
              height="48"
              rx="10"
              fill="#060608"
              stroke="#FF1A1A"
              strokeWidth="1.5"
              filter="drop-shadow(0 0 10px #FF1A1A)"
            />
            {/* Watch Screen Glow */}
            <rect x="25" y="10" width="30" height="38" rx="6" fill="#0E0004" />
            <circle cx="40" cy="28" r="8" stroke="#6D001A" strokeWidth="1.5" fill="none" />
            <line x1="40" y1="28" x2="40" y2="24" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="40" y1="28" x2="44" y2="28" stroke="#FF1A1A" strokeWidth="1.2" strokeLinecap="round" />
          </g>

          {/* Designer Sneaker Silhouette */}
          <g transform="translate(280, 470)">
            {/* Sole with White Edge */}
            <path
              d="M 10 55 C 40 55, 140 55, 180 50 C 190 48, 195 40, 190 35 L 180 30 C 160 20, 130 18, 110 22 L 75 0 C 60 5, 45 15, 40 30 L 15 35 C 5 40, 5 50, 10 55 Z"
              fill="#08080C"
              stroke="#6D001A"
              strokeWidth="1.5"
            />
            {/* Sole White Line Highlight */}
            <path d="M 12 52 L 185 48" stroke="#FFFFFF" strokeWidth="3" opacity="0.9" strokeLinecap="round" />
            {/* Red Collar and Swoosh Rim */}
            <path d="M 65 10 C 90 15, 120 28, 150 25" stroke="#FF1A1A" strokeWidth="2" opacity="0.8" />
          </g>
        </svg>
      </div>

      {/* 6. Realistic Glossy Wet Floor Reflections (Streaks of Burgundy & Red Lighting) */}
      <div className="absolute bottom-0 inset-x-0 h-[38vh] overflow-hidden pointer-events-none">
        {/* Dark wet floor base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(5, 0, 2, 0.4) 20%, rgba(0, 0, 0, 0.95) 85%, #000000 100%)',
          }}
        />

        {/* Central Wet Floor Reflection Trails */}
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-[60vw] max-w-[850px] h-[35vh] opacity-45 blur-[28px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, #FF1A1A 0%, #6D001A 40%, rgba(109, 0, 26, 0.15) 70%, transparent 90%)',
          }}
        />

        {/* Dynamic Wet Light Streaks Radiating Downward */}
        <div className="absolute top-0 left-[22%] w-[8vw] h-full bg-gradient-to-b from-[#FF1A1A]/35 via-[#6D001A]/20 to-transparent blur-[12px] opacity-40 transform -skew-x-12" />
        <div className="absolute top-0 left-[42%] w-[6vw] h-full bg-gradient-to-b from-[#FF1A1A]/45 via-[#6D001A]/25 to-transparent blur-[10px] opacity-50" />
        <div className="absolute top-0 right-[42%] w-[6vw] h-full bg-gradient-to-b from-[#FF1A1A]/45 via-[#6D001A]/25 to-transparent blur-[10px] opacity-50" />
        <div className="absolute top-0 right-[22%] w-[8vw] h-full bg-gradient-to-b from-[#FF1A1A]/35 via-[#6D001A]/20 to-transparent blur-[12px] opacity-40 transform skew-x-12" />

        {/* Ground Surface Specular Micro-Reflections */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF1A1A]/60 to-transparent blur-[1px]" />
      </div>

      {/* 7. Subtle Luxury Film Grain */}
      <div className="absolute inset-0 film-grain opacity-25 mix-blend-overlay" />

      {/* 8. Vignette to ensure center content readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 45%, transparent 35%, rgba(0, 0, 0, 0.55) 70%, #000000 95%)',
        }}
      />
    </div>
  );
};
