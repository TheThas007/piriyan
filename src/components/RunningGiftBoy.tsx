import React from 'react';

export const RunningGiftBoy: React.FC = () => {
  return (
    <div
      className="absolute bottom-2 sm:bottom-4 left-0 right-0 w-full pointer-events-none z-30 select-none overflow-hidden h-[150px] sm:h-[180px]"
      aria-hidden="true"
    >
      <style>{`
        /* Whole Runner Trajectory: dashes out from under the 1 to the right and loops */
        @keyframes runnerDashAcross {
          0% {
            transform: translate3d(-90px, 10px, -20px) scale(0.78);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          45% {
            transform: translate3d(180px, 4px, 20px) scale(0.96);
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translate3d(460px, -6px, 40px) scale(1.08);
            opacity: 0;
          }
        }

        /* Running cycle: Body up and down bob */
        @keyframes boyBodyBounce {
          0%, 100% {
            transform: translateY(0px) rotate(4deg);
          }
          50% {
            transform: translateY(-8px) rotate(7deg);
          }
        }

        /* Front Leg Running Stride */
        @keyframes legFrontStride {
          0% {
            transform: rotate(-35deg);
          }
          50% {
            transform: rotate(38deg);
          }
          100% {
            transform: rotate(-35deg);
          }
        }

        /* Back Leg Running Stride */
        @keyframes legBackStride {
          0% {
            transform: rotate(38deg);
          }
          50% {
            transform: rotate(-35deg);
          }
          100% {
            transform: rotate(38deg);
          }
        }

        /* Gift Stack Wobble physics */
        @keyframes stackWobble {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(4deg);
          }
        }

        /* Fluttering ribbon tails */
        @keyframes ribbonFlutter {
          0% {
            transform: skewX(-12deg) rotate(-6deg);
          }
          50% {
            transform: skewX(16deg) rotate(8deg);
          }
          100% {
            transform: skewX(-12deg) rotate(-6deg);
          }
        }

        /* Ground running dust / sparkle puffs */
        @keyframes groundPuff {
          0% {
            opacity: 0.7;
            transform: scale(0.5) translateX(0);
          }
          100% {
            opacity: 0;
            transform: scale(1.6) translateX(-25px);
          }
        }
      `}</style>

      {/* Runner Entity with 3D Dash Motion */}
      <div
        className="absolute bottom-1 left-2 sm:left-12"
        style={{
          animation: 'runnerDashAcross 7.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          willChange: 'transform, opacity',
        }}
      >
        {/* Soft Drop Shadow under feet */}
        <div
          className="absolute -bottom-2 left-6 w-24 h-4 rounded-full bg-[#6D001A]/35 blur-[5px]"
          style={{ transform: 'scaleY(0.4)' }}
        />

        {/* Sneaker Dust / Energy Puffs */}
        <div
          className="absolute bottom-0 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-[#6D001A]/40 to-transparent blur-[3px]"
          style={{ animation: 'groundPuff 0.6s ease-out infinite' }}
        />

        {/* 3D SVG Character */}
        <svg
          width="160"
          height="160"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
        >
          <defs>
            {/* Skin Tone Gradient */}
            <linearGradient id="boySkin" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F9D3B4" />
              <stop offset="100%" stopColor="#E2A67C" />
            </linearGradient>

            {/* Streetwear Jacket Gradient (Burgundy & Obsidian) */}
            <linearGradient id="jacketGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6D001A" />
              <stop offset="60%" stopColor="#4A0012" />
              <stop offset="100%" stopColor="#181822" />
            </linearGradient>

            {/* Joggers Pants Gradient */}
            <linearGradient id="pantsGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E1E28" />
              <stop offset="100%" stopColor="#0E0E14" />
            </linearGradient>

            {/* Sneaker Accent Gradient */}
            <linearGradient id="sneakerGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#6D001A" />
              <stop offset="100%" stopColor="#111116" />
            </linearGradient>

            {/* Gift Box 1 (Bottom, Big Obsidian Box) */}
            <linearGradient id="box1Grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1F1F2A" />
              <stop offset="100%" stopColor="#0B0B10" />
            </linearGradient>

            {/* Gift Box 2 (Deep Wine Box) */}
            <linearGradient id="box2Grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8A0022" />
              <stop offset="100%" stopColor="#4A0012" />
            </linearGradient>

            {/* Gift Box 3 (Pure White Luxury Box) */}
            <linearGradient id="box3Grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#D5DAE2" />
            </linearGradient>

            {/* Gift Box 4 (Crimson Box) */}
            <linearGradient id="box4Grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C40032" />
              <stop offset="100%" stopColor="#6D001A" />
            </linearGradient>

            {/* Gift Box 5 (Top Tiny Gold Box) */}
            <linearGradient id="box5Grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFE082" />
              <stop offset="60%" stopColor="#FFA000" />
              <stop offset="100%" stopColor="#FF6F00" />
            </linearGradient>
          </defs>

          {/* ======================================================== */}
          {/* 1. BACK LEG (Running Stride)                             */}
          {/* ======================================================== */}
          <g style={{ transformOrigin: '56px 105px', animation: 'legBackStride 0.45s ease-in-out infinite' }}>
            {/* Back Thigh & Shin */}
            <path
              d="M 54 105 L 42 124 L 32 142"
              stroke="url(#pantsGrad)"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Back Sneaker */}
            <path
              d="M 32 142 L 20 148 L 16 146 L 24 140 Z"
              fill="url(#sneakerGrad)"
              stroke="#FFFFFF"
              strokeWidth="0.8"
            />
            {/* Sneaker Air Bubble Sole */}
            <path d="M 18 148 L 30 145" stroke="#6D001A" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* ======================================================== */}
          {/* 2. BODY, TORSO, HEAD (Bobbing & Forward Lean)           */}
          {/* ======================================================== */}
          <g style={{ transformOrigin: '65px 100px', animation: 'boyBodyBounce 0.45s ease-in-out infinite' }}>
            {/* Trendy Streetwear Jacket Torso */}
            <path
              d="M 52 75 L 72 73 L 78 104 L 54 105 Z"
              fill="url(#jacketGrad)"
              stroke="#6D001A"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Jacket Zipper Line & Collar */}
            <line x1="62" y1="74" x2="66" y2="104" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.7" />
            <polygon points="56,74 65,70 68,74" fill="#6D001A" />

            {/* Neck */}
            <rect x="62" y="66" width="7" height="8" rx="2" fill="url(#boySkin)" />

            {/* Head / Face */}
            <circle cx="68" cy="56" r="10" fill="url(#boySkin)" />

            {/* Joyful Determined Facial Features */}
            {/* Eye (focused forward) */}
            <ellipse cx="72" cy="55" rx="1.5" ry="2" fill="#1A1A22" />
            <circle cx="72.6" cy="54.2" r="0.6" fill="#FFFFFF" />
            {/* Eyebrow */}
            <path d="M 69 51 Q 72 49 75 52" stroke="#4A2511" strokeWidth="1" strokeLinecap="round" />
            {/* Cheerful Smile */}
            <path d="M 70 60 Q 73 63 76 59" stroke="#9E3A20" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            {/* Blushing Cheek */}
            <ellipse cx="73" cy="58" rx="2.2" ry="1.2" fill="#FF7B95" opacity="0.6" />

            {/* Cool Streetwear Hair & Backwards Cap */}
            {/* Dark Hair Tufts */}
            <path d="M 60 52 Q 62 47 66 48 Q 59 55 60 58 Z" fill="#24140D" />
            {/* Backwards Snapback Cap */}
            <path d="M 60 48 C 62 42, 73 42, 77 48 L 78 54 L 59 53 Z" fill="#6D001A" stroke="#FFFFFF" strokeWidth="0.8" />
            {/* Cap Visor facing backward */}
            <path d="M 59 50 L 50 49 L 52 53 Z" fill="#4A0012" stroke="#FFFFFF" strokeWidth="0.6" />
            {/* White Brand Button on Cap */}
            <circle cx="68" cy="44" r="1.2" fill="#FFFFFF" />

            {/* Left Arm (Clutching & Supporting the Gift Stack) */}
            <path
              d="M 58 78 L 72 88 L 94 86"
              stroke="#6D001A"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Hand with Glove wrapping under bottom box */}
            <circle cx="94" cy="86" r="4" fill="#0E0E14" stroke="#FFFFFF" strokeWidth="0.8" />

            {/* ====================================================== */}
            {/* 3. TOWERING STACK OF MANY LUXURY GIFTS (Balancing)    */}
            {/* ====================================================== */}
            <g style={{ transformOrigin: '88px 90px', animation: 'stackWobble 0.9s ease-in-out infinite' }}>
              {/* GIFT 1 (Bottom, Large Matte Black Box) */}
              <g transform="translate(74, 72)">
                <rect x="0" y="0" width="36" height="20" rx="2" fill="url(#box1Grad)" stroke="#6D001A" strokeWidth="1.2" />
                {/* Burgundy Satin Ribbon */}
                <rect x="15" y="0" width="6" height="20" fill="#6D001A" />
                <rect x="0" y="7" width="36" height="5" fill="#6D001A" />
                <line x1="18" y1="0" x2="18" y2="20" stroke="#FFFFFF" strokeWidth="0.6" strokeOpacity="0.6" />
              </g>

              {/* GIFT 2 (Second, Deep Wine & Gold Ribbon Box) */}
              <g transform="translate(77, 52)">
                <rect x="0" y="0" width="32" height="18" rx="2" fill="url(#box2Grad)" stroke="#FFA000" strokeWidth="0.8" />
                {/* Gold Ribbon */}
                <rect x="13" y="0" width="5" height="18" fill="#FFA000" />
                <rect x="0" y="6" width="32" height="4" fill="#FFA000" />
              </g>

              {/* GIFT 3 (Third, Crisp White Luxury Box with Crimson Knot) */}
              <g transform="translate(80, 34)">
                <rect x="0" y="0" width="28" height="16" rx="2" fill="url(#box3Grad)" stroke="#FFFFFF" strokeWidth="1" />
                {/* Red Ribbon */}
                <rect x="11" y="0" width="5" height="16" fill="#6D001A" />
                <rect x="0" y="5" width="28" height="4" fill="#6D001A" />
              </g>

              {/* GIFT 4 (Fourth, Ruby Metallic Box) */}
              <g transform="translate(83, 18)">
                <rect x="0" y="0" width="24" height="14" rx="2" fill="url(#box4Grad)" stroke="#FF8DA1" strokeWidth="0.8" />
                {/* Silver Ribbon */}
                <rect x="10" y="0" width="4" height="14" fill="#FFFFFF" />
                <rect x="0" y="4" width="24" height="4" fill="#FFFFFF" />
              </g>

              {/* GIFT 5 (Top, Tiny Golden Jewel Gift Box with Big Bow) */}
              <g transform="translate(87, 4)">
                <rect x="0" y="0" width="18" height="12" rx="1.5" fill="url(#box5Grad)" stroke="#FFFFFF" strokeWidth="0.8" />
                {/* Ribbon Bow on top */}
                <path
                  d="M 5 0 C 2 -4, 5 -8, 9 -2 C 13 -8, 16 -4, 13 0 Z"
                  fill="#FF3366"
                  stroke="#FFFFFF"
                  strokeWidth="0.6"
                />
                <circle cx="9" cy="-1" r="1.5" fill="#FFFFFF" />
              </g>

              {/* Trailing Fluttering Satin Ribbons from the Gift Stack */}
              <g style={{ transformOrigin: '80px 40px', animation: 'ribbonFlutter 0.6s ease-in-out infinite' }}>
                <path
                  d="M 75 42 C 60 48, 55 35, 42 44"
                  stroke="#6D001A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 76 60 C 65 66, 58 54, 46 64"
                  stroke="#FFA000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>

              {/* Specular Star Sparkles on Gift Stack */}
              <circle cx="82" cy="38" r="1.2" fill="#FFFFFF" style={{ filter: 'drop-shadow(0 0 3px #FFFFFF)' }} />
              <circle cx="108" cy="22" r="1.5" fill="#FFFFFF" style={{ filter: 'drop-shadow(0 0 4px #FFFFFF)' }} />
              <circle cx="100" cy="76" r="1.2" fill="#FFFFFF" />
            </g>

            {/* Right Arm (Reaching forward & stabilizing the stack) */}
            <path
              d="M 72 78 L 86 82 L 104 78"
              stroke="#8A0022"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="104" cy="78" r="3.5" fill="#0E0E14" stroke="#FFFFFF" strokeWidth="0.8" />
          </g>

          {/* ======================================================== */}
          {/* 4. FRONT LEG (Running Stride Forward)                   */}
          {/* ======================================================== */}
          <g style={{ transformOrigin: '68px 105px', animation: 'legFrontStride 0.45s ease-in-out infinite' }}>
            {/* Front Thigh & Shin */}
            <path
              d="M 68 105 L 82 122 L 96 140"
              stroke="url(#pantsGrad)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Front Sneaker */}
            <path
              d="M 96 140 L 112 144 L 114 148 L 94 147 Z"
              fill="url(#sneakerGrad)"
              stroke="#FFFFFF"
              strokeWidth="1"
            />
            {/* Sneaker Air Bubble Sole */}
            <path d="M 94 148 L 114 148" stroke="#6D001A" strokeWidth="3" strokeLinecap="round" />
            <circle cx="105" cy="144" r="1.2" fill="#FFFFFF" />
          </g>
        </svg>
      </div>
    </div>
  );
};
