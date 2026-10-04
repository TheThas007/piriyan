import React, { useState } from 'react';

export const ActionButtons: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEnterModalOpen, setIsEnterModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitted(false);
      setEmail('');
    }, 2200);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 mt-4 sm:mt-6 w-full max-w-md mx-auto">
        {/* 1. NOTIFY ME (Burgundy Background, Elegant Rounded Corners, Subtle Glow) */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#6D001A] hover:bg-[#850020] text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(109,0,26,0.55)] hover:shadow-[0_0_35px_rgba(109,0,26,0.85)] transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#FF1A1A]"
        >
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
          </svg>
          <span>NOTIFY ME</span>
        </button>

        {/* 2. ENTER 1PLACE → (Transparent Black Background, Thin Border, Minimal Premium) */}
        <button
          type="button"
          onClick={() => setIsEnterModalOpen(true)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-black/40 hover:bg-[#6D001A]/15 backdrop-blur-md border border-white/25 hover:border-[#FF1A1A]/70 text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_24px_rgba(109,0,26,0.35)] transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#6D001A]"
        >
          <span>ENTER 1PLACE</span>
          <span className="text-[#FF1A1A] font-black transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      {/* NOTIFY ME Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="notify-modal-title"
        >
          <div className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl bg-[#09090D] border border-[#6D001A]/60 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(109,0,26,0.4)] text-left">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xs tracking-widest uppercase p-2 focus:outline-none"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-2 text-[#FF1A1A] text-[10px] font-bold tracking-[0.28em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF1A1A] animate-pulse" />
              OFFICIAL LAUNCH ALERT
            </div>

            <h3 id="notify-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase font-display mb-2">
              Be Notified The Moment We Open
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 font-light mb-6 leading-relaxed">
              1PLACE.LK officially goes live November 01, 2026. Join the priority notification list for real-time launch access.
            </p>

            {submitted ? (
              <div className="p-4 rounded-xl bg-[#6D001A]/30 border border-[#FF1A1A]/60 text-center">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-white uppercase">
                  ✓ Priority alert registered. We will notify you at launch.
                </span>
              </div>
            ) : (
              <form onSubmit={handleNotifySubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#13131A] border border-white/10 text-white placeholder-zinc-500 text-xs tracking-wider uppercase focus:outline-none focus:border-[#FF1A1A] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#6D001A] hover:bg-[#850020] text-white font-bold text-xs tracking-[0.22em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(109,0,26,0.6)]"
                >
                  NOTIFY ME
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ENTER 1PLACE Preview Modal */}
      {isEnterModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enter-modal-title"
        >
          <div className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl bg-[#09090D] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-left">
            <button
              type="button"
              onClick={() => setIsEnterModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xs tracking-widest uppercase p-2 focus:outline-none"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-2 text-[#FF1A1A] text-[10px] font-bold tracking-[0.28em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF1A1A]" />
              PLATFORM STATUS: PRE-LAUNCH
            </div>

            <h3 id="enter-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase font-display mb-2">
              Doors Open November 01, 2026
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 font-light mb-6 leading-relaxed">
              We are finalizing inventory, security verification, and platform infrastructure. Follow our official WhatsApp Community and Instagram for early previews.
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href="https://chat.whatsapp.com/Jd1M5N2xeFfJh9tyLiEr2j"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366]/20 border border-[#25D366]/50 text-white font-bold text-xs tracking-wider uppercase text-center hover:bg-[#25D366]/30 transition-colors"
              >
                JOIN WHATSAPP COMMUNITY
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsEnterModalOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wider uppercase text-center transition-colors"
              >
                GET LAUNCH NOTIFICATION
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
