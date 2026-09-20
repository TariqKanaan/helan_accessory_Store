import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Heart } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppLink } from '../data/siteData';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040404] text-gray-400 text-xs sm:text-sm pt-16 pb-12 border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-[#111111] shadow-gold-sm">
                <span className="font-serif text-xl font-bold text-gold-gradient">H</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">
                  {SITE_CONFIG.brand.nameAr}
                </h3>
                <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase font-serif block">
                  {SITE_CONFIG.brand.nameEn}
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
              {SITE_CONFIG.brand.description}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-white font-serif font-semibold text-base mb-4 text-gold-subtle">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="hover:text-[#D4AF37] transition-colors text-right"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div>
            <h4 className="text-white font-serif font-semibold text-base mb-4 text-gold-subtle">
              أقسام التجهيزات
            </h4>
            <ul className="space-y-2.5">
              {SITE_CONFIG.services.map((serv) => (
                <li key={serv.id}>
                  <a
                    href={buildWhatsAppLink(SITE_CONFIG.brand.phone, `مرحباً، أود تفاصيل عن: ${serv.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {serv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h4 className="text-white font-serif font-semibold text-base mb-4 text-gold-subtle">
              معلومات الاتصال
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{SITE_CONFIG.brand.location}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{SITE_CONFIG.brand.workHours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span dir="ltr" className="font-mono text-xs">{SITE_CONFIG.brand.phoneDisplay}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <p className="text-gray-500 text-xs">
            جميع الحقوق محفوظة © {new Date().getFullYear()} {SITE_CONFIG.brand.nameAr} ({SITE_CONFIG.brand.nameEn}).
          </p>
          <div className="flex items-center gap-1.5 text-gray-500 text-xs">
            <span>صُمم بعناية لإضفاء بريق ملكي لا يُنسى</span>
            <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
