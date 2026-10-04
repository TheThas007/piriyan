import React, { useEffect, useState } from 'react';

interface BirdConfig {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  scale: number;
  duration: number;
  delay: number;
  flapSpeed: number;
  giftColor: string;
  ribbonColor: string;
  depthZ: number;
  pathType: 'swoop-up' | 'glide-down' | 'diagonal-cross' | 'arc-loop';
}

export const GiftBirdsAnimation: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (prefersReducedMotion) {
    return null;
  }

  // Curated 3D flight paths across the main viewport
  const birds: BirdConfig[] = [
    {
      id: 1,
      startX: -15,
      startY: 65,
      endX: 115,
      endY: 20,
      scale: 0.95,
      duration: 16,
      delay: 0.5,
      flapSpeed: 0.55,
      giftColor: '#6D001A',
      ribbonColor: '#E6A15C',
      depthZ: 60,
      pathType: 'swoop-up',
    },
    {
      id: 2,
      startX: -20,
      startY: 25,
      endX: 120,
      endY: 55,
      scale: 0.72,
      duration: 21,
      delay: 5.5,
      flapSpeed: 0.65,
      giftColor: '#1A1A22',
      ribbonColor: '#6D001A',
      depthZ: 20,
      pathType: 'glide-down',
    },
    {
      id: 3,
      startX: 115,
      startY: 40,
      endX: -20,
      endY: 75,
      scale: 0.58,
      duration: 24,
      delay: 9.0,
      flapSpeed: 0.72,
      giftColor: '#6D001A',
      ribbonColor: '#FFFFFF',
      depthZ: -30,
      pathType: 'diagonal-cross',
    },
    {
      id: 4,
      startX: -10,
      startY: 85,
      endX: 110,
      endY: 15,
      scale: 0.82,
      duration: 18,
      delay: 13.0,
      flapSpeed: 0.58,
      giftColor: '#0E0E14',
      ribbonColor: '#E6A15C',
      depthZ: 40,
      pathType: 'arc-loop',
    },
  ];

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-20 select-none"
      style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes flapWingLeft {
          0% {
            transform: rotateY(-55deg) rotateZ(-10deg) skewY(-8deg);
          }
          100% {
            transform: rotateY(45deg) rotateZ(15deg) skewY(12deg);
          }
        }

        @keyframes flapWingRight {
          0% {
            transform: rotateY(55deg) rotateZ(10deg) skewY(8deg);
          }
          100% {
            transform: rotateY(-45deg) rotateZ(-15deg) skewY(-12deg);
          }
        }

        @keyframes birdBodyBob {
          0% {
            transform: translateY(-4px) rotateX(4deg);
          }
          100% {
            transform: translateY(4px) rotateX(-4deg);
          }
        }

        @keyframes giftBoxSway {
          0% {
            transform: rotate(-12deg) translateY(0px);
          }
          50% {
            transform: rotate(10deg) translateY(-2px);
          }
          100% {
            transform: rotate(-12deg) translateY(0px);
          }
        }

        @keyframes sparkleFade {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.6);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.2);
          }
        }

        /* Flight Paths */
        @keyframes flightSwoopUp {
          0% {
            transform: translate3d(-15vw, 65vh, 60px) rotateZ(-8deg) rotateY(15deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          45% {
            transform: translate3d(40vw, 42vh, 120px) rotateZ(6deg) rotateY(5deg);
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translate3d(115vw, 15vh, -20px) rotateZ(-14deg) rotateY(-10deg);
            opacity: 0;
          }
        }

        @keyframes flightGlideDown {
          0% {
            transform: translate3d(-20vw, 25vh, 20px) rotateZ(12deg) rotateY(10deg);
            opacity: 0;
          }
          12% {
            opacity: 0.95;
          }
          50% {
            transform: translate3d(45vw, 40vh, 50px) rotateZ(2deg) rotateY(0deg);
          }
          88% {
            opacity: 0.95;
          }
          100% {
            transform: translate3d(120vw, 65vh, -40px) rotateZ(8deg) rotateY(-8deg);
            opacity: 0;
          }
        }

        @keyframes flightReverseCross {
          0% {
            transform: translate3d(115vw, 35vh, -30px) rotateZ(-165deg) scaleX(-1);
            opacity: 0;
          }
          12% {
            opacity: 0.85;
          }
          55% {
            transform: translate3d(45vw, 55vh, 0px) rotateZ(-172deg) scaleX(-1);
          }
          85% {
            opacity: 0.85;
          }
          100% {
            transform: translate3d(-20vw, 75vh, -60px) rotateZ(-160deg) scaleX(-1);
            opacity: 0;
          }
        }

        @keyframes flightArcLoop {
          0% {
            transform: translate3d(-10vw, 85vh, 40px) rotateZ(-22deg) rotateY(20deg);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          40% {
            transform: translate3d(30vw, 50vh, 90px) rotateZ(-10deg) rotateY(10deg);
          }
          70% {
            transform: translate3d(75vw, 30vh, 60px) rotateZ(4deg) rotateY(0deg);
          }
          88% {
            opacity: 1;
          }
          100% {
            transform: translate3d(112vw, 10vh, -10px) rotateZ(-15deg) rotateY(-15deg);
            opacity: 0;
          }
        }
      `}</style>

      {birds.map((bird) => {
        let animationName = 'flightSwoopUp';
        if (bird.pathType === 'glide-down') animationName = 'flightGlideDown';
        if (bird.pathType === 'diagonal-cross') animationName = 'flightReverseCross';
        if (bird.pathType === 'arc-loop') animationName = 'flightArcLoop';

        return (
          <div
            key={bird.id}
            className="absolute top-0 left-0"
            style={{
              animation: `${animationName} ${bird.duration}s cubic-bezier(0.35, 0.1, 0.25, 1) infinite`,
              animationDelay: `${bird.delay}s`,
              transformStyle: 'preserve-3d',
              willChange: 'transform, opacity',
            }}
          >
            {/* Scaled 3D Bird Entity */}
            <div
              className="relative"
              style={{
                transform: `scale(${bird.scale})`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Stardust / Sparkle Trail behind Bird */}
              <div
                className="absolute -left-10 top-6 w-16 h-8 pointer-events-none opacity-70"
                style={{
                  background:
                    'radial-gradient(circle at 70% 50%, rgba(109,0,26,0.6) 0%, rgba(230,161,92,0.3) 40%, transparent 80%)',
                  filter: 'blur(6px)',
                }}
              />

              <svg
                width="140"
                height="130"
                viewBox="0 0 140 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <defs>
                  {/* Obsidian/Metallic Bird Body Shading */}
                  <linearGradient id={`birdBody-${bird.id}`} x1="30" y1="20" x2="100" y2="70" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="25%" stopColor="#D2D6DE" />
                    <stop offset="60%" stopColor="#6D001A" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#1E1E26" />
                  </linearGradient>

                  {/* Left Wing Gradient with Metallic Burgundy Trim */}
                  <linearGradient id={`wingGradLeft-${bird.id}`} x1="10" y1="0" x2="80" y2="60" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                    <stop offset="35%" stopColor="#F0F2F6" />
                    <stop offset="70%" stopColor="#A30028" />
                    <stop offset="100%" stopColor="#4A0012" />
                  </linearGradient>

                  {/* Right Wing Gradient */}
                  <linearGradient id={`wingGradRight-${bird.id}`} x1="60" y1="0" x2="130" y2="60" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                    <stop offset="40%" stopColor="#C8CCD6" />
                    <stop offset="80%" stopColor="#6D001A" />
                    <stop offset="100%" stopColor="#1F0208" />
                  </linearGradient>

                  {/* Gift Box Shading */}
                  <linearGradient id={`giftFront-${bird.id}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={bird.giftColor} />
                    <stop offset="100%" stopColor="#0B0B10" />
                  </linearGradient>

                  <linearGradient id={`giftSide-${bird.id}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={bird.giftColor === '#6D001A' ? '#990026' : '#2A2A36'} />
                    <stop offset="100%" stopColor={bird.giftColor} />
                  </linearGradient>
                </defs>

                {/* 1. LEFT WING (Flapping 3D articulation from pivot) */}
                <g
                  style={{
                    transformOrigin: '68px 50px',
                    animation: `flapWingLeft ${bird.flapSpeed}s ease-in-out infinite alternate`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Primary Fold Feather */}
                  <polygon
                    points="68,50 15,12 38,58"
                    fill={`url(#wingGradLeft-${bird.id})`}
                    stroke="#FFFFFF"
                    strokeWidth="0.8"
                    strokeOpacity="0.7"
                  />
                  {/* Outer Aerodynamic Tip */}
                  <polygon
                    points="15,12 4,24 38,58"
                    fill="#6D001A"
                    stroke="#FF7B95"
                    strokeWidth="0.6"
                    strokeOpacity="0.8"
                  />
                  {/* Secondary Inner Facet */}
                  <polygon
                    points="38,58 25,68 68,50"
                    fill="#15151E"
                    stroke="#6D001A"
                    strokeWidth="0.8"
                  />
                </g>

                {/* 2. RIGHT WING (Flapping 3D articulation opposite phase) */}
                <g
                  style={{
                    transformOrigin: '72px 50px',
                    animation: `flapWingRight ${bird.flapSpeed}s ease-in-out infinite alternate`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Primary Fold Feather */}
                  <polygon
                    points="72,50 125,10 102,58"
                    fill={`url(#wingGradRight-${bird.id})`}
                    stroke="#FFFFFF"
                    strokeWidth="0.8"
                    strokeOpacity="0.7"
                  />
                  {/* Outer Aerodynamic Tip */}
                  <polygon
                    points="125,10 136,22 102,58"
                    fill="#8A0022"
                    stroke="#FFA0B4"
                    strokeWidth="0.6"
                    strokeOpacity="0.8"
                  />
                  {/* Secondary Inner Facet */}
                  <polygon
                    points="102,58 115,68 72,50"
                    fill="#0F0F16"
                    stroke="#6D001A"
                    strokeWidth="0.8"
                  />
                </g>

                {/* 3. BIRD BODY & HEAD (Aerodynamic Origami Silhouette) */}
                <g
                  style={{
                    transformOrigin: '70px 52px',
                    animation: `birdBodyBob ${bird.flapSpeed}s ease-in-out infinite alternate`,
                  }}
                >
                  {/* Sleek Tapered Tail */}
                  <polygon
                    points="64,56 70,82 76,56"
                    fill="#0D0D14"
                    stroke="#6D001A"
                    strokeWidth="1"
                  />
                  <line x1="70" y1="56" x2="70" y2="84" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" />

                  {/* Central Torso Keel */}
                  <polygon
                    points="70,30 60,56 70,68 80,56"
                    fill={`url(#birdBody-${bird.id})`}
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    strokeOpacity="0.6"
                  />

                  {/* Origami Beak / Head Crest */}
                  <polygon
                    points="70,16 65,30 75,30"
                    fill="#FFFFFF"
                    stroke="#E6A15C"
                    strokeWidth="0.8"
                  />
                  <polygon
                    points="70,16 68,26 70,30"
                    fill="#6D001A"
                  />

                  {/* Specular Glint Eye Dot */}
                  <circle cx="68.5" cy="24" r="1" fill="#FFFFFF" />
                  <circle cx="71.5" cy="24" r="1" fill="#FFFFFF" />

                  {/* 4. SUSPENDED LUXURY GIFT BOX & GLOWING RIBBON */}
                  <g
                    style={{
                      transformOrigin: '70px 68px',
                      animation: 'giftBoxSway 1.8s ease-in-out infinite alternate',
                    }}
                  >
                    {/* Golden/Burgundy Silk Ribbon Suspension Strings */}
                    <line
                      x1="67"
                      y1="66"
                      x2="63"
                      y2="92"
                      stroke={bird.ribbonColor}
                      strokeWidth="1"
                      strokeOpacity="0.85"
                    />
                    <line
                      x1="73"
                      y1="66"
                      x2="77"
                      y2="92"
                      stroke={bird.ribbonColor}
                      strokeWidth="1"
                      strokeOpacity="0.85"
                    />

                    {/* Ribbon Bow / Knot */}
                    <path
                      d="M 66 90 C 63 87, 60 88, 64 92 C 67 92, 73 92, 76 92 C 80 88, 77 87, 74 90 Z"
                      fill={bird.ribbonColor}
                      stroke="#FFFFFF"
                      strokeWidth="0.5"
                    />

                    {/* 3D Isometric Mini Gift Cube */}
                    {/* Top Face */}
                    <polygon
                      points="70,92 82,97 70,102 58,97"
                      fill="#FFFFFF"
                      stroke={bird.ribbonColor}
                      strokeWidth="0.8"
                      strokeOpacity="0.8"
                    />
                    {/* Left Face */}
                    <polygon
                      points="58,97 70,102 70,116 58,111"
                      fill={`url(#giftFront-${bird.id})`}
                      stroke="#6D001A"
                      strokeWidth="0.8"
                    />
                    {/* Right Face */}
                    <polygon
                      points="70,102 82,97 82,111 70,116"
                      fill={`url(#giftSide-${bird.id})`}
                      stroke="#6D001A"
                      strokeWidth="0.8"
                    />

                    {/* Gift Ribbon Wrapping Lines */}
                    <line x1="70" y1="92" x2="70" y2="116" stroke={bird.ribbonColor} strokeWidth="1.6" />
                    <line x1="58" y1="104" x2="82" y2="104" stroke={bird.ribbonColor} strokeWidth="1.4" />

                    {/* Specular Star Sparkle on Ribbon Bow */}
                    <circle cx="70" cy="92" r="2" fill="#FFFFFF" style={{ filter: 'drop-shadow(0 0 4px #FFFFFF)' }} />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};
