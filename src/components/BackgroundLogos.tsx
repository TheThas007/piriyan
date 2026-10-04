import React from 'react';
import { NewOnePlaceLogo } from './NewOnePlaceLogo';

interface BackgroundLogoConfig {
  id: number;
  animationClass: string;
  duration: string;
  delay: string;
  startY: string;
  startRot: string;
  swayY: string;
  scale: string;
  desktopOpacity: number;
  mobileOpacity: number;
  blur: string;
  glow: boolean;
  zIndex: number;
  width: string;
  hideOnMobile?: boolean;
}

// 13 heavily blurred cinematic background logos moving in 3D mystery space
const BACKGROUND_LOGOS: BackgroundLogoConfig[] = [
  // 1. Oversized heavily blurred logo moving left → right across upper viewport
  {
    id: 1,
    animationClass: 'anim-drift-ltr',
    duration: '46s',
    delay: '-6s',
    startY: '4vh',
    startRot: '-5deg',
    swayY: '35px',
    scale: '2.1',
    desktopOpacity: 0.12,
    mobileOpacity: 0.07,
    blur: '18px',
    glow: true,
    zIndex: 1,
    width: '720px',
  },
  // 2. Heavily blurred logo moving right → left across mid-viewport
  {
    id: 2,
    animationClass: 'anim-drift-rtl',
    duration: '40s',
    delay: '-12s',
    startY: '35vh',
    startRot: '6deg',
    swayY: '40px',
    scale: '1.9',
    desktopOpacity: 0.11,
    mobileOpacity: 0.06,
    blur: '16px',
    glow: true,
    zIndex: 1,
    width: '640px',
  },
  // 3. Logo moving diagonally bottom-left → top-right
  {
    id: 3,
    animationClass: 'anim-drift-diag-up',
    duration: '44s',
    delay: '-18s',
    startY: '80vh',
    startRot: '-8deg',
    swayY: '30px',
    scale: '1.5',
    desktopOpacity: 0.14,
    mobileOpacity: 0.08,
    blur: '15px',
    glow: true,
    zIndex: 2,
    width: '520px',
  },
  // 4. Oversized logo moving diagonally top-right → bottom-left (partially cropped)
  {
    id: 4,
    animationClass: 'anim-drift-diag-down',
    duration: '48s',
    delay: '-4s',
    startY: '-15vh',
    startRot: '7deg',
    swayY: '45px',
    scale: '2.4',
    desktopOpacity: 0.09,
    mobileOpacity: 0.05,
    blur: '22px',
    glow: true,
    zIndex: 1,
    width: '840px',
  },
  // 5. Slow horizontal logo gliding across lower viewport
  {
    id: 5,
    animationClass: 'anim-drift-ltr',
    duration: '56s',
    delay: '-28s',
    startY: '68vh',
    startRot: '3deg',
    swayY: '25px',
    scale: '1.6',
    desktopOpacity: 0.13,
    mobileOpacity: 0.07,
    blur: '16px',
    glow: true,
    zIndex: 2,
    width: '560px',
  },
  // 6. Distant blurred logo across upper hemisphere
  {
    id: 6,
    animationClass: 'anim-drift-rtl',
    duration: '32s',
    delay: '-8s',
    startY: '12vh',
    startRot: '-10deg',
    swayY: '15px',
    scale: '1.1',
    desktopOpacity: 0.12,
    mobileOpacity: 0.06,
    blur: '14px',
    glow: true,
    zIndex: 2,
    width: '380px',
    hideOnMobile: true,
  },
  // 7. Gigantic cropped logo entering from left edge
  {
    id: 7,
    animationClass: 'anim-drift-ltr',
    duration: '52s',
    delay: '-34s',
    startY: '20vh',
    startRot: '-4deg',
    swayY: '50px',
    scale: '2.6',
    desktopOpacity: 0.08,
    mobileOpacity: 0.05,
    blur: '24px',
    glow: true,
    zIndex: 1,
    width: '900px',
  },
  // 8. Distant logo moving bottom-left to top-right
  {
    id: 8,
    animationClass: 'anim-drift-diag-up',
    duration: '38s',
    delay: '-22s',
    startY: '75vh',
    startRot: '10deg',
    swayY: '20px',
    scale: '0.9',
    desktopOpacity: 0.13,
    mobileOpacity: 0.06,
    blur: '14px',
    glow: true,
    zIndex: 2,
    width: '320px',
    hideOnMobile: true,
  },
  // 9. Rotating heavily blurred logo moving horizontally
  {
    id: 9,
    animationClass: 'anim-drift-rot',
    duration: '60s',
    delay: '-15s',
    startY: '48vh',
    startRot: '0deg',
    swayY: '30px',
    scale: '1.7',
    desktopOpacity: 0.10,
    mobileOpacity: 0.06,
    blur: '19px',
    glow: true,
    zIndex: 1,
    width: '580px',
  },
  // 10. Red-glowing logo drifting slowly behind the hero area
  {
    id: 10,
    animationClass: 'anim-drift-ltr',
    duration: '50s',
    delay: '-19s',
    startY: '26vh',
    startRot: '-2deg',
    swayY: '35px',
    scale: '2.0',
    desktopOpacity: 0.13,
    mobileOpacity: 0.07,
    blur: '17px',
    glow: true,
    zIndex: 1,
    width: '680px',
  },
  // 11. Lower quadrant blurred drift
  {
    id: 11,
    animationClass: 'anim-drift-rtl',
    duration: '36s',
    delay: '-5s',
    startY: '84vh',
    startRot: '5deg',
    swayY: '18px',
    scale: '1.2',
    desktopOpacity: 0.11,
    mobileOpacity: 0.06,
    blur: '15px',
    glow: false,
    zIndex: 2,
    width: '420px',
    hideOnMobile: true,
  },
  // 12. Deep background ambient giant (oversized, partially outside viewport)
  {
    id: 12,
    animationClass: 'anim-drift-diag-down',
    duration: '64s',
    delay: '-30s',
    startY: '-8vh',
    startRot: '-6deg',
    swayY: '40px',
    scale: '2.8',
    desktopOpacity: 0.07,
    mobileOpacity: 0.04,
    blur: '25px',
    glow: true,
    zIndex: 1,
    width: '980px',
  },
  // 13. Mid-size diagonal drifter with mysterious aura
  {
    id: 13,
    animationClass: 'anim-drift-diag-up',
    duration: '42s',
    delay: '-10s',
    startY: '55vh',
    startRot: '8deg',
    swayY: '25px',
    scale: '1.4',
    desktopOpacity: 0.12,
    mobileOpacity: 0.06,
    blur: '16px',
    glow: true,
    zIndex: 2,
    width: '480px',
    hideOnMobile: true,
  },
];

export const BackgroundLogos: React.FC = () => {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {BACKGROUND_LOGOS.map((item) => (
        <div
          key={item.id}
          className={`absolute top-0 left-0 ${item.animationClass} ${
            item.hideOnMobile ? 'hidden md:block' : ''
          } mobile-bg-logo`}
          style={
            {
              '--anim-duration': item.duration,
              '--anim-delay': item.delay,
              '--start-y': item.startY,
              '--start-rot': item.startRot,
              '--sway-y': item.swayY,
              '--logo-scale': item.scale,
              '--mobile-opacity': item.mobileOpacity,
              opacity: item.desktopOpacity,
              filter: `blur(${item.blur}) ${
                item.glow
                  ? 'drop-shadow(0 0 35px rgba(229, 9, 20, 0.45)) drop-shadow(0 0 15px rgba(255, 26, 26, 0.25))'
                  : ''
              }`,
              zIndex: item.zIndex,
              width: item.width,
            } as React.CSSProperties
          }
        >
          <NewOnePlaceLogo className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};
