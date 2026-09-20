import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppLink } from '../data/siteData';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? SITE_CONFIG.portfolioItems
    : SITE_CONFIG.portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 sm:py-32 relative bg-[#070707]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-serif block mb-2 font-semibold">
            إبداعاتنا ولمساتنا
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mb-4">
            معرض الأعمال الحصري
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-5" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            تشكيلة مختارة من أرقى إكسسوارات الأعراس وتجهيزات المناسبات المنفذة بأعلى معايير الإتقان.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14">
          {SITE_CONFIG.portfolioFilters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 relative ${
                  isActive
                    ? 'bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-black shadow-gold-md scale-105'
                    : 'bg-[#121212] text-gray-300 border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Masonry Grid (Mobile 1 Col, Tablet 2 Cols, Desktop 3 Cols) */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => {
              const itemWhatsAppMsg = `مرحباً هيلانة للإكسسوارات، أود الاستفسار عن تفاصيل وحجز: ${item.title} (كود: ${item.code})`;
              const whatsappUrl = buildWhatsAppLink(SITE_CONFIG.brand.phone, itemWhatsAppMsg);

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.45 }}
                  className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-[#111111] border border-[#D4AF37]/20 hover:border-[#D4AF37]/80 shadow-[0_4px_25px_rgba(0,0,0,0.7)] transition-all duration-500"
                >
                  {/* Portfolio Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to high quality placeholder if local file is not yet copied
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = item.category === 'cars' 
                        ? 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
                        : item.category === 'bags'
                        ? 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80'
                        : 'https://images.unsplash.com/photo-1546804784-896d0d517245?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Dark Elegant Hover Overlay (NO comments section) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-semibold text-[#D4AF37] tracking-wider">
                        {item.categoryLabel}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono">
                        {item.code}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mb-4 leading-snug">
                      {item.title}
                    </h4>

                    {/* WhatsApp CTA Button */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] hover:shadow-gold-md flex items-center justify-center gap-2 transition-all transform active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 text-black" />
                      <span>استفسر عن التفاصيل 💬</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
