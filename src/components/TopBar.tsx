import React, { useState } from 'react';
import { WhatsAppIcon, InstagramIcon } from './SocialIcons';

export const TopBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const WHATSAPP_COMMUNITY_URL = 'https://chat.whatsapp.com/Jd1M5N2xeFfJh9tyLiEr2j';
  const INSTAGRAM_URL = 'https://www.instagram.com/1place.lk1/';

  const navItems = [
    {
      id: 'LAUNCH',
      label: 'LAUNCH',
      info: 'Official public opening on November 01, 2026 • 12:00 AM Sri Lanka Time.',
    },
    {
      id: 'CATEGORIES',
      label: 'CATEGORIES',
      info: 'Curated premium fashion, consumer tech, lifestyle essentials, home, and luxury collections.',
    },
    {
      id: 'ABOUT',
      label: 'ABOUT',
      info: '1PLACE.LK — Sri Lanka’s next-generation e-commerce marketplace built for discerning shoppers.',
    },
  ];

  return (
    <header className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-6 sm:py-8 flex items-center justify-between z-30 relative select-none">
      {/* Brand Monogram / Domain */}
      <a
        href="/"
        className="flex items-center gap-2 group focus:outline-none"
        aria-label="1PLACE.LK Home"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#6D001A] shadow-[0_0_8px_#6D001A] group-hover:scale-125 transition-transform" />
        <span className="text-xs sm:text-sm font-extrabold tracking-[0.26em] text-white uppercase font-display group-hover:text-zinc-200 transition-colors">
          1PLACE<span className="text-[#6D001A]">.LK</span>
        </span>
      </a>

      {/* Right Minimal Luxury Navigation & Social Links */}
      <nav aria-label="Main Navigation" className="flex items-center gap-6 sm:gap-8">
        <ul className="flex items-center gap-5 sm:gap-8">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                type="button"
                onClick={() => setActiveTab(activeTab === item.id ? null : item.id)}
                className={`text-[10px] sm:text-[11px] font-medium tracking-[0.28em] uppercase transition-colors py-1 ${
                  activeTab === item.id
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>

              {/* Minimal Luxury Floating Preview Popover */}
              {activeTab === item.id && (
                <div
                  className="absolute right-0 top-full mt-3 w-64 p-4 rounded-xl bg-[#09090c]/95 border border-[#6D001A]/40 shadow-[0_15px_35px_rgba(0,0,0,0.9)] backdrop-blur-md z-40 text-left animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-bold tracking-[0.25em] text-[#6D001A] uppercase">
                      {item.label}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTab(null);
                      }}
                      className="text-zinc-500 hover:text-white text-[10px] p-1"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-[11px] text-zinc-300 font-light leading-relaxed">
                    {item.info}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Top Header Social Quick Links */}
        <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-white/10 text-zinc-400">
          <a
            href={WHATSAPP_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:text-[#25D366] transition-colors"
            title="Join WhatsApp Community"
            aria-label="WhatsApp Community"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:text-[#E1306C] transition-colors"
            title="Follow on Instagram"
            aria-label="Instagram Profile"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>
      </nav>
    </header>
  );
};
