import React, { useState } from 'react';
import { ProgressBar } from './ProgressBar';
import { Countdown } from './Countdown';
import { WhatsAppIcon, InstagramIcon } from './SocialIcons';

export const ComingSoonContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const WHATSAPP_COMMUNITY_URL = 'https://chat.whatsapp.com/Jd1M5N2xeFfJh9tyLiEr2j';
  const INSTAGRAM_URL = 'https://www.instagram.com/1place.lk1/';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSubscribed(false);
      setEmail('');
    }, 2200);
  };

  return (
    <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-[640px]">
      {/* 1. Small Premium Label: THE NEXT SHOPPING EXPERIENCE */}
      <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3 select-none">
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#6D001A] shadow-[0_0_8px_#6D001A]"
          aria-hidden="true"
        />
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-zinc-300 uppercase">
          THE NEXT SHOPPING EXPERIENCE
        </span>
      </div>

      {/* 2. Main Headline: COMING SOON */}
      <h1 className="font-display font-black leading-[0.9] tracking-tight uppercase text-[48px] xs:text-[56px] sm:text-[72px] md:text-[84px] lg:text-[96px] xl:text-[108px] my-1 sm:my-2 select-none">
        <span className="text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
          COMING{' '}
        </span>
        <span className="text-[#6D001A] text-glow-burgundy inline-block">
          SOON
        </span>
      </h1>

      {/* 3. Thin Elegant Burgundy Progress Line */}
      <ProgressBar />

      {/* 4. Luxury Glassmorphic Real-Time Countdown */}
      <Countdown />

      {/* 5. Launch Information */}
      <div className="mt-2 sm:mt-3 flex flex-col items-center lg:items-start gap-1.5 select-none w-full">
        {/* LAUNCHING Label */}
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] text-zinc-400 uppercase">
          LAUNCHING
        </span>

        {/* Date and Time: Prominent, larger, with tiny burgundy dot */}
        <div className="flex items-center gap-2 sm:gap-2.5 text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] text-white uppercase font-display">
          <span>NOVEMBER 01, 2026</span>
          <span className="text-[#6D001A] text-lg leading-none" aria-hidden="true">
            •
          </span>
          <span>12:00 AM</span>
        </div>

        {/* Timezone Meta */}
        <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-zinc-400 font-mono-numbers">
          SRI LANKA STANDARD TIME{' '}
          <span className="text-zinc-500">(ASIA/COLOMBO · UTC+05:30)</span>
        </div>

        {/* Brand Tagline: "One Place." slightly bold */}
        <p className="mt-3 text-sm sm:text-base md:text-lg font-light tracking-wide text-zinc-300 font-sans">
          Everything You Need.{' '}
          <span className="font-bold text-white tracking-normal">One Place.</span>
        </p>

        {/* 6. Action & Social Community Buttons */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 w-full">
          {/* Main VIP CTA */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-transparent border border-[#6D001A]/80 hover:border-[#6D001A] hover:bg-[#6D001A]/15 text-white text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:shadow-[0_0_24px_rgba(109,0,26,0.5)] focus:outline-none focus:ring-1 focus:ring-[#6D001A]"
          >
            <span>ENTER 1PLACE</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 text-[#6D001A] group-hover:text-white">
              →
            </span>
          </button>

          {/* WhatsApp Community Link Button */}
          <a
            href={WHATSAPP_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#08080b]/90 hover:bg-[#111116] border border-[#6D001A]/40 hover:border-[#25D366]/70 text-zinc-300 hover:text-white text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.7)] hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] focus:outline-none"
            aria-label="Join our official WhatsApp Community"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366] transition-transform duration-300 group-hover:scale-110" />
            <span>WHATSAPP COMMUNITY</span>
          </a>

          {/* Instagram Profile Link Button */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#08080b]/90 hover:bg-[#111116] border border-[#6D001A]/40 hover:border-[#E1306C]/70 text-zinc-300 hover:text-white text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.7)] hover:shadow-[0_0_20px_rgba(225,48,108,0.3)] focus:outline-none"
            aria-label="Follow 1PLACE on Instagram"
          >
            <InstagramIcon className="w-4 h-4 text-[#E1306C] transition-transform duration-300 group-hover:scale-110" />
            <span>INSTAGRAM</span>
          </a>
        </div>
      </div>

      {/* Luxury Early Access / VIP Notification Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl bg-[#09090c] border border-[#6D001A]/50 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(109,0,26,0.3)] text-left">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xs tracking-widest uppercase p-2 focus:outline-none"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-2 text-[#6D001A] text-[10px] font-bold tracking-[0.28em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D001A]" />
              PRIVATE LAUNCH ACCESS
            </div>

            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase font-display mb-2">
              Be The First In Line
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 font-light mb-5 leading-relaxed">
              1PLACE.LK opens November 01, 2026. Enter your email for exclusive private access and opening privilege codes.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-[#6D001A]/20 border border-[#6D001A]/60 text-center">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-white uppercase">
                  VIP Invitation Confirmed. See you at launch.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  placeholder="ENTER YOUR EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#121216] border border-white/10 text-white placeholder-zinc-500 text-xs tracking-wider uppercase focus:outline-none focus:border-[#6D001A] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#6D001A] hover:bg-[#8A0020] text-white font-bold text-xs tracking-[0.22em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(109,0,26,0.5)]"
                >
                  REQUEST ACCESS
                </button>
              </form>
            )}

            {/* Direct Social Community Links inside Modal */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-2.5">
              <span className="text-[10px] font-semibold tracking-[0.2em] text-zinc-400 uppercase">
                Direct Community Channels
              </span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={WHATSAPP_COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#14141a] hover:bg-[#1a1a24] border border-white/10 hover:border-[#25D366]/50 text-zinc-300 hover:text-white text-[11px] font-medium tracking-wider transition-all"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#14141a] hover:bg-[#1a1a24] border border-white/10 hover:border-[#E1306C]/50 text-zinc-300 hover:text-white text-[11px] font-medium tracking-wider transition-all"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
