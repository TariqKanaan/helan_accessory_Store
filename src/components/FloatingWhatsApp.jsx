import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppLink } from '../data/siteData';

export default function FloatingWhatsApp() {
  const whatsappUrl = buildWhatsAppLink(SITE_CONFIG.brand.phone);

  return (
    <aside
      aria-label="تواصل مباشر عبر واتساب"
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل مع هيلانة للإكسسوارات عبر واتساب"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#2bf075] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
      >
        {/* Subtle Outer Pulsing Wave Ring */}
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/35 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 relative z-10" />

        {/* Desktop Tooltip Label */}
        <span className="hidden sm:block absolute right-20 px-3.5 py-1.5 rounded-lg bg-black/95 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#D4AF37]/35 shadow-2xl pointer-events-none">
          تحدث معنا مباشرة عبر واتساب
        </span>
      </a>
    </aside>
  );
}
