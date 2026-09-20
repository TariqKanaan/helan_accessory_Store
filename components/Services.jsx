import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppLink } from '../data/siteData';

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#090909] border-t border-b border-[#D4AF37]/15">
      
      {/* Background ambient gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-serif block mb-2 font-semibold">
            خدمات حصرية راقية
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mb-4">
            ما نقدمه ليومكم المميز
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-5" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            نعتني بأدق تفاصيل المناسبة لنصنع منها لوحة ساحرة تعكس فخامتكم وترتقي بأيامكم المميزة إلى أعلى درجات الأناقة.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SITE_CONFIG.services.map((service, index) => {
            const IconComponent = service.icon;
            const message = `مرحباً هيلانة، أود الاستفسار وحجز خدمة: ${service.title}`;
            const serviceWhatsAppUrl = buildWhatsAppLink(SITE_CONFIG.brand.phone, message);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative rounded-2xl p-7 sm:p-8 bg-gradient-to-b from-[#131313] via-[#0e0e0e] to-[#080808] border border-[#D4AF37]/20 hover:border-[#D4AF37]/80 transition-all duration-500 hover:shadow-[0_12px_35px_rgba(212,175,55,0.18)] hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#070707] border border-[#D4AF37]/40 text-[#D4AF37] group-hover:border-[#D4AF37] group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#D4AF37] px-2.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold-subtle transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-[11px] text-gray-500 font-serif tracking-wider uppercase block mb-3">
                    {service.shortDesc}
                  </span>
                  
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-8 text-xs text-gray-300">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Link */}
                <a
                  href={serviceWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#D4AF37] group-hover:text-[#FFF1B8] transition-colors"
                >
                  <span>استفسر واحجز عبر واتساب</span>
                  <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
