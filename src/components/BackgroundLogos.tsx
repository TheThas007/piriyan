import React from 'react';
import { NewOnePlaceLogo } from './NewOnePlaceLogo';

interface LuxuryBackgroundLogoConfig {
  id: number;
  animationClass: string;
  duration: string;
  delay: string;
  startY: string;
  scale: string;
  opacity: number;
  blur: string;
  width: string;
  hideOnMobile?: boolean;
}

// Tasteful, subtle, luxury depth-of-field watermarks (reduced clutter, clean atmosphere)
const LUXURY_BACKGROUND_LOGOS: LuxuryBackgroundLogoConfig[] = [
  // 1. Slow, distant watermark moving across upper viewport
  {
    id: 1,
    animationClass: 'anim-luxury-ltr',
    duration: '65s',
    delay: '-10s',
    startY: '8vh',
    scale: '1.4',
    opacity: 0.045,
    blur: '5px',
    width: '540px',
  },
  // 2. Slow watermark drifting right to left across lower area
  {
    id: 2,
    animationClass: 'anim-luxury-rtl',
    duration: '70s',
    delay: '-25s',
    startY: '72vh',
    scale: '1.2',
    opacity: 0.04,
    blur: '6px',
    width: '480px',
  },
  // 3. Subtle diagonal watermark across mid-depth
  {
    id: 3,
    animationClass: 'anim-luxury-diag',
    duration: '75s',
    delay: '-5s',
    startY: '45vh',
    scale: '1.6',
    opacity: 0.035,
    blur: '7px',
    width: '620px',
    hideOnMobile: true,
  },
  // 4. Distant gentle watermark
  {
    id: 4,
    animationClass: 'anim-luxury-ltr',
    duration: '80s',
    delay: '-40s',
    startY: '28vh',
    scale: '0.9',
    opacity: 0.03,
    blur: '4px',
    width: '360px',
    hideOnMobile: true,
  },
];

export const BackgroundLogos: React.FC = () => {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {LUXURY_BACKGROUND_LOGOS.map((item) => (
        <div
          key={item.id}
          className={`absolute top-0 left-0 ${item.animationClass} ${
            item.hideOnMobile ? 'hidden md:block' : ''
          }`}
          style={
            {
              '--anim-duration': item.duration,
              '--anim-delay': item.delay,
              '--start-y': item.startY,
              '--logo-scale': item.scale,
              opacity: item.opacity,
              filter: `blur(${item.blur}) drop-shadow(0 0 20px rgba(109, 0, 26, 0.35))`,
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
