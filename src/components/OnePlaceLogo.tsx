import React from 'react';

interface OnePlaceLogoProps {
  className?: string;
  glow?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showSubtitle?: boolean;
}

export const OnePlaceLogo: React.FC<OnePlaceLogoProps> = ({
  className = '',
  glow = true,
  size = 'hero',
  showSubtitle = true,
}) => {
  const sizeClasses = {
    sm: 'w-36 h-auto',
    md: 'w-56 h-auto',
    lg: 'w-72 h-auto',
    xl: 'w-96 h-auto',
    hero: 'w-full h-auto',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${sizeClasses[size]} ${className}`}
      style={{
        filter: glow
          ? 'drop-shadow(0 0 35px rgba(229, 9, 20, 0.55)) drop-shadow(0 20px 45px rgba(0, 0, 0, 0.95))'
          : undefined,
      }}
      role="img"
      aria-label="1PLACE - Everything You Need, In One Place."
    >
      <svg
        viewBox="0 0 1000 660"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        <defs>
          {/* Linear Gradients for Bag */}
          <linearGradient id="bagFrontGrad" x1="420" y1="90" x2="620" y2="440" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#F3F5F8" />
            <stop offset="70%" stopColor="#D8DDE6" />
            <stop offset="100%" stopColor="#BAC2CE" />
          </linearGradient>

          <linearGradient id="bagFrontSpecular" x1="400" y1="120" x2="560" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="bagSideRedGrad" x1="280" y1="180" x2="410" y2="430" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF1E2B" />
            <stop offset="20%" stopColor="#E50914" />
            <stop offset="60%" stopColor="#96050C" />
            <stop offset="100%" stopColor="#550005" />
          </linearGradient>

          <linearGradient id="bagRimHighlight" x1="270" y1="200" x2="390" y2="440" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFA4A8" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#FF333E" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.85" />
          </linearGradient>

          {/* Numeral 1 Gradients */}
          <linearGradient id="numeral1FrontGrad" x1="560" y1="180" x2="650" y2="450" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF333E" />
            <stop offset="30%" stopColor="#E50914" />
            <stop offset="70%" stopColor="#B30710" />
            <stop offset="100%" stopColor="#700207" />
          </linearGradient>

          <linearGradient id="numeral1BevelGrad" x1="600" y1="160" x2="690" y2="350" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="15%" stopColor="#FF8B92" />
            <stop offset="50%" stopColor="#B50710" />
            <stop offset="100%" stopColor="#4A0004" />
          </linearGradient>

          <linearGradient id="swooshGrad" x1="450" y1="360" x2="770" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="15%" stopColor="#FF333E" />
            <stop offset="50%" stopColor="#E50914" />
            <stop offset="85%" stopColor="#8C040A" />
            <stop offset="100%" stopColor="#E50914" />
          </linearGradient>

          <linearGradient id="swooshRimGrad" x1="470" y1="340" x2="740" y2="380" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#FFCAD0" stopOpacity="0.85" />
            <stop offset="80%" stopColor="#FF3B47" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
          </linearGradient>

          {/* Chrome Wordmark Gradients */}
          <linearGradient id="chromeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="44%" stopColor="#F1F3F7" />
            <stop offset="47%" stopColor="#CAD0DB" />
            <stop offset="50%" stopColor="#6C7380" />
            <stop offset="53%" stopColor="#CBD2DE" />
            <stop offset="80%" stopColor="#EFF2F7" />
            <stop offset="100%" stopColor="#B6BEC9" />
          </linearGradient>

          <linearGradient id="chromeRedBevel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF2E3A" />
            <stop offset="40%" stopColor="#E50914" />
            <stop offset="100%" stopColor="#6B0005" />
          </linearGradient>
        </defs>

        {/* ========================================================= */}
        {/* UPPER EMBLEM: Shopping Bag + 3D "1" + Red Orbital Swoosh */}
        {/* ========================================================= */}
        <g id="upper-emblem">
          {/* Back Handle Loop */}
          <path
            d="M 460 140 C 455 70, 520 40, 565 55 C 605 68, 608 120, 602 165"
            stroke="#111111"
            strokeWidth="24"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 460 140 C 455 70, 520 40, 565 55 C 605 68, 608 120, 602 165"
            stroke="#E2E5EB"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />

          {/* Front Handle Loop */}
          <path
            d="M 430 185 C 420 100, 480 65, 525 80 C 565 92, 570 145, 560 195"
            stroke="#0A0A0A"
            strokeWidth="24"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 430 185 C 420 100, 480 65, 525 80 C 565 92, 570 145, 560 195"
            stroke="#F8F9FA"
            strokeWidth="13"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 440 175 C 435 110, 485 80, 520 92 C 550 102, 555 140, 550 185"
            stroke="#C0C5CF"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Bag Deep Shadow Base */}
          <path
            d="M 268 415 L 372 445 L 640 445 L 645 285 L 430 190 L 335 220 Z"
            fill="#050505"
            opacity="0.8"
          />

          {/* Bag Left Red Side (3D Perspective Flap) */}
          <path
            d="M 334 220 L 428 190 L 396 448 L 268 418 Z"
            fill="#000000"
            stroke="#000000"
            strokeWidth="14"
            strokeLinejoin="round"
          />
          <path
            d="M 336 222 L 426 193 L 394 445 L 271 416 Z"
            fill="url(#bagSideRedGrad)"
          />
          <path
            d="M 338 226 L 275 413"
            stroke="url(#bagRimHighlight)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M 423 197 L 392 441"
            stroke="#3B0003"
            strokeWidth="7"
          />

          {/* Bag Front White Face */}
          <path
            d="M 428 190 L 640 280 L 605 448 L 396 448 Z"
            fill="#050505"
            stroke="#000000"
            strokeWidth="14"
            strokeLinejoin="round"
          />
          <path
            d="M 430 193 L 636 281 L 602 444 L 398 444 Z"
            fill="url(#bagFrontGrad)"
          />
          <polygon
            points="430,193 450,210 622,284 636,281"
            fill="#CAD1DC"
          />
          <path
            d="M 440 215 L 530 250 L 470 440 L 415 440 Z"
            fill="url(#bagFrontSpecular)"
          />

          {/* 3D NUMERAL "1" */}
          <path
            d="M 526 310 L 646 244 L 688 285 L 610 330 L 600 448 L 510 448 L 526 310 Z"
            fill="#050505"
            stroke="#000000"
            strokeWidth="16"
            strokeLinejoin="round"
          />
          <path
            d="M 646 244 L 688 285 L 616 448 L 588 448 L 610 330 Z"
            fill="url(#numeral1BevelGrad)"
            stroke="#150002"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M 530 312 L 646 246 L 610 332 L 600 444 L 525 444 Z"
            fill="url(#numeral1FrontGrad)"
            stroke="#FF4D57"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M 530 312 L 646 246 L 688 285"
            stroke="#FFFFFF"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 646 246 L 610 332 L 600 444"
            stroke="#FFA4A8"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* RED CRESCENT ORBITAL SWOOSH */}
          <path
            d="M 450 365 C 510 445, 680 448, 772 385 C 755 422, 635 456, 520 442 C 465 435, 435 398, 450 365 Z"
            fill="#000000"
            stroke="#000000"
            strokeWidth="14"
            strokeLinejoin="round"
          />
          <path
            d="M 454 367 C 512 442, 678 445, 768 387 C 750 420, 633 452, 522 439 C 468 432, 440 397, 454 367 Z"
            fill="url(#swooshGrad)"
          />
          <path
            d="M 456 369 C 518 438, 675 442, 765 389"
            stroke="url(#swooshRimGrad)"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <path
            d="M 490 415 C 560 444, 650 442, 720 410"
            stroke="#FF6B75"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.85"
          />
        </g>

        {/* ========================================================= */}
        {/* WORDMARK: "ONEPLACE" with Chrome Face + Red 3D Under-Bevel */}
        {/* ========================================================= */}
        <g id="wordmark-oneplace">
          {/* Letter O */}
          <g transform="translate(25, 435)">
            <path
              d="M 65 15 C 25 15, 0 45, 0 85 C 0 125, 25 155, 65 155 C 105 155, 130 125, 130 85 C 130 45, 105 15, 65 15 Z M 65 52 C 84 52, 92 68, 92 85 C 92 102, 84 118, 65 118 C 46 118, 38 102, 38 85 C 38 68, 46 52, 65 52 Z"
              fill="#080808"
              stroke="#000000"
              strokeWidth="20"
              strokeLinejoin="round"
            />
            <path
              d="M 65 24 C 30 24, 8 50, 8 88 C 8 128, 30 156, 65 156 C 100 156, 122 128, 122 88 C 122 50, 100 24, 65 24 Z"
              fill="url(#chromeRedBevel)"
            />
            <path
              d="M 65 16 C 28 16, 6 44, 6 82 C 6 120, 28 148, 65 148 C 102 148, 124 120, 124 82 C 124 44, 102 16, 65 16 Z M 65 50 C 83 50, 89 66, 89 82 C 89 98, 83 114, 65 114 C 47 114, 41 98, 41 82 C 41 66, 47 50, 65 50 Z"
              fill="url(#chromeGrad)"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </g>

          {/* Letter N */}
          <g transform="translate(170, 435)">
            <path
              d="M 12 18 L 46 18 L 86 102 L 86 18 L 118 18 L 118 152 L 84 152 L 44 68 L 44 152 L 12 152 Z"
              fill="#080808"
              stroke="#000000"
              strokeWidth="20"
              strokeLinejoin="round"
            />
            <path
              d="M 12 25 L 46 25 L 86 108 L 86 25 L 118 25 L 118 156 L 84 156 L 44 74 L 44 156 L 12 156 Z"
              fill="url(#chromeRedBevel)"
            />
            <path
              d="M 12 18 L 46 18 L 86 102 L 86 18 L 118 18 L 118 148 L 84 148 L 44 64 L 44 148 L 12 148 Z"
              fill="url(#chromeGrad)"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </g>

          {/* Letter E */}
          <g transform="translate(305, 435)">
            <path
              d="M 14 18 L 105 18 L 105 50 L 52 50 L 52 68 L 98 68 L 98 98 L 52 98 L 52 118 L 108 118 L 108 150 L 14 150 Z"
              fill="#080808"
              stroke="#000000"
              strokeWidth="20"
              strokeLinejoin="round"
            />
            <path
              d="M 14 25 L 105 25 L 105 56 L 52 56 L 52 74 L 98 74 L 98 104 L 52 104 L 52 124 L 108 124 L 108 156 L 14 156 Z"
              fill="url(#chromeRedBevel)"
            />
            <path
              d="M 14 18 L 105 18 L 105 50 L 52 50 L 52 68 L 98 68 L 98 98 L 52 98 L 52 118 L 108 118 L 108 148 L 14 148 Z"
              fill="url(#chromeGrad)"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </g>

          {/* Letter P */}
          <g transform="translate(425, 435)">
            <path
              d="M 14 18 L 76 18 C 105 18, 122 35, 122 64 C 122 93, 105 110, 76 110 L 52 110 L 52 150 L 14 150 Z M 52 48 L 72 48 C 84 48, 88 54, 88 64 C 88 74, 84 80, 72 80 L 52 80 Z"
              fill="#080808"
              stroke="#000000"
              strokeWidth="20"
              strokeLinejoin="round"
            />
            <path
              d="M 14 25 L 76 25 C 105 25, 122 42, 122 70 C 122 98, 105 116, 76 116 L 52 116 L 52 156 L 14 156 Z"
              fill="url(#chromeRedBevel)"
            />
            <path
              d="M 14 18 L 76 18 C 105 18, 122 35, 122 64 C 122 93, 105 110, 76 110 L 52 110 L 52 148 L 14 148 Z M 52 48 L 72 48 C 84 48, 88 54, 88 64 C 88 74, 84 80, 72 80 L 52 80 Z"
              fill="url(#chromeGrad)"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </g>

          {/* Letter L */}
          <g transform="translate(560, 435)">
            <path
              d="M 14 18 L 52 18 L 52 116 L 106 116 L 106 150 L 14 150 Z"
              fill="#080808"
              stroke="#000000"
              strokeWidth="20"
              strokeLinejoin="round"
            />
            <path
              d="M 14 25 L 52 25 L 52 122 L 106 122 L 106 156 L 14 156 Z"
              fill="url(#chromeRedBevel)"
            />
            <path
              d="M 14 18 L 52 18 L 52 116 L 106 116 L 106 148 L 14 148 Z"
              fill="url(#chromeGrad)"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </g>

          {/* Letter A (Signature Red Inner Triangle) */}
          <g transform="translate(680, 435)">
            <path
              d="M 64 16 L 118 150 L 80 150 L 66 114 L 38 114 L 26 150 L 4 150 Z M 52 74 L 62 100 L 42 100 Z"
              fill="#080808"
              stroke="#000000"
              strokeWidth="20"
              strokeLinejoin="round"
            />
            <path
              d="M 64 24 L 118 156 L 80 156 L 66 120 L 38 120 L 26 156 L 4 156 Z"
              fill="url(#chromeRedBevel)"
            />
            <path
              d="M 64 16 L 118 148 L 80 148 L 66 112 L 38 112 L 26 148 L 4 148 Z"
              fill="url(#chromeGrad)"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <polygon
              points="52,68 74,112 30,112"
              fill="#000000"
              stroke="#000000"
              strokeWidth="6"
            />
            <polygon
              points="52,70 72,110 32,110"
              fill="url(#numeral1FrontGrad)"
              stroke="#FF8890"
              strokeWidth="2"
            />
            <polygon
              points="52,70 60,94 44,94"
              fill="#FFFFFF"
              opacity="0.75"
            />
          </g>

          {/* Letter C */}
          <g transform="translate(805, 435)">
            <path
              d="M 106 50 C 95 30, 80 18, 58 18 C 24 18, 0 46, 0 85 C 0 124, 24 152, 58 152 C 80 152, 96 138, 106 120 L 76 102 C 72 112, 64 118, 55 118 C 38 118, 36 102, 36 85 C 36 68, 40 52, 55 52 C 64 52, 70 58, 76 68 Z"
              fill="#080808"
              stroke="#000000"
              strokeWidth="20"
              strokeLinejoin="round"
            />
            <path
              d="M 106 56 C 95 36, 80 24, 58 24 C 24 24, 0 52, 0 91 C 0 130, 24 158, 58 158 C 80 158, 96 144, 106 126 L 76 108 C 72 118, 64 124, 55 124 C 38 124, 36 108, 36 91 C 36 74, 40 58, 55 58 C 64 58, 70 64, 76 74 Z"
              fill="url(#chromeRedBevel)"
            />
            <path
              d="M 106 48 C 95 28, 80 16, 58 16 C 24 16, 0 44, 0 83 C 0 122, 24 150, 58 150 C 80 150, 96 136, 106 118 L 76 100 C 72 110, 64 116, 55 116 C 38 116, 36 100, 36 83 C 36 66, 40 50, 55 50 C 64 50, 70 56, 76 66 Z"
              fill="url(#chromeGrad)"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </g>

          {/* Letter E */}
          <g transform="translate(900, 435)">
            <path
              d="M 14 18 L 92 18 L 92 50 L 48 50 L 48 68 L 86 68 L 86 98 L 48 98 L 48 118 L 94 118 L 94 150 L 14 150 Z"
              fill="#080808"
              stroke="#000000"
              strokeWidth="20"
              strokeLinejoin="round"
            />
            <path
              d="M 14 25 L 92 25 L 92 56 L 48 56 L 48 74 L 86 74 L 86 104 L 48 104 L 48 124 L 94 124 L 94 156 L 14 156 Z"
              fill="url(#chromeRedBevel)"
            />
            <path
              d="M 14 18 L 92 18 L 92 50 L 48 50 L 48 68 L 86 68 L 86 98 L 48 98 L 48 118 L 94 118 L 94 148 L 14 148 Z"
              fill="url(#chromeGrad)"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </g>
        </g>

        {/* ========================================================= */}
        {/* SUBTITLE & HORIZONTAL FRAME BARS */}
        {/* ========================================================= */}
        {showSubtitle && (
          <g id="subtitle-tagline" transform="translate(0, 615)">
            <path
              d="M 40 10 L 132 10"
              stroke="#0D0D0D"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M 40 10 L 132 10"
              stroke="#E50914"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <text
              x="500"
              y="17"
              textAnchor="middle"
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="4"
              paintOrder="stroke fill"
              fontSize="24"
              fontWeight="900"
              fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
              letterSpacing="0.22em"
            >
              EVERYTHING YOU NEED, IN ONE PLACE.
            </text>
            <path
              d="M 868 10 L 960 10"
              stroke="#0D0D0D"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M 868 10 L 960 10"
              stroke="#E50914"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
