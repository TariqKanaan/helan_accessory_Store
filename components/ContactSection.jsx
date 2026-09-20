import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Mail, ExternalLink } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppLink } from '../data/siteData';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#070707]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-serif block mb-2 font-semibold">
            يسعدنا استقبالكم
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mb-4">
            تواصل معنا واحجز موعدك
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-5" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            فريق هيلانة مستعد للإجابة على استفساراتكم ومساعدتكم في اختيار أرقى تجهيزات مناسباتكم السعيدة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 rounded-2xl p-8 bg-gradient-to-b from-[#131313] to-[#0A0A0A] border border-[#D4AF37]/30 shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold font-serif text-white mb-6">
                معلومات دار هيلانة
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">الموقع والعنوان</h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {SITE_CONFIG.brand.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">أوقات العمل</h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {SITE_CONFIG.brand.workHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">رقم الهاتف والحجز</h4>
                    <p dir="ltr" className="text-gray-300 font-mono text-sm">
                      {SITE_CONFIG.brand.phoneDisplay}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">البريد الإلكتروني</h4>
                    <p className="text-gray-300 font-mono text-xs sm:text-sm">
                      {SITE_CONFIG.brand.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href={buildWhatsAppLink(SITE_CONFIG.brand.phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] hover:shadow-gold-md flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-black" />
                <span>بدء محادثة واتساب فورية</span>
              </a>
            </div>
          </div>

          {/* Interactive Map & Direct Visit Card */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#0E0E0E] relative min-h-[380px] flex flex-col">
            <div className="p-6 bg-gradient-to-r from-[#141414] to-[#0A0A0A] border-b border-white/5 flex items-center justify-between">
              <div>
                <h4 className="text-white font-bold text-base">موقع المعرض على الخريطة</h4>
                <p className="text-xs text-gray-400">السويداء، غربي مضافة أبو الفضل، مقابل كشكول وألبسة أطيار</p>
              </div>
              <a
                href={SITE_CONFIG.brand.googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.brand.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline"
              >
                <span>فتح في خرائط Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Stylized Dark Map Embed Placeholder / Visual Representation */}
            <div className="flex-1 bg-[#101010] relative flex items-center justify-center p-8 text-center">
              <div className="max-w-md">
                <div className="w-16 h-16 rounded-full border border-[#D4AF37]/50 bg-black/60 flex items-center justify-center text-[#D4AF37] mx-auto mb-4 shadow-gold-sm">
                  <MapPin className="w-8 h-8 animate-bounce" />
                </div>
                <h5 className="text-lg font-bold text-white mb-2">معرض هيلانة للإكسسوارات</h5>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-5">
                  غربي مضافة أبو الفضل - مقابل كشكول وألبسة أطيار. تفضلوا بزيارتنا لمعاينة التيجان، الفضيات، ونماذج تزيين السيارات على أرض الواقع.
                </p>
                <a
                  href={SITE_CONFIG.brand.googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.brand.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D4AF37] text-xs font-semibold text-[#FCF6BA] hover:bg-[#D4AF37]/15 transition-all"
                >
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>توجيه المسار والاتجاهات</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
