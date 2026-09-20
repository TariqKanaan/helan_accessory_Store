import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 relative bg-[#090909] border-t border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-serif block mb-2 font-semibold">
            ثقة وفخامة
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mb-4">
            آراء عملائنا الكرام
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-5" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            نفخر بأن نكون جزءاً من ذكرياتكم السعيدة التي تدوم مدى الحياة.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SITE_CONFIG.testimonials.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative rounded-2xl p-7 sm:p-8 bg-gradient-to-b from-[#131313] via-[#0E0E0E] to-[#080808] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#D4AF37]/30" />
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic mb-8 font-light">
                "{review.content}"
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    {review.name}
                  </h4>
                  <span className="text-xs text-[#D4AF37]">
                    {review.role} • {review.location}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#D4AF37]/40 bg-[#070707] flex items-center justify-center text-xs font-serif text-[#D4AF37] shadow-gold-sm">
                  ★
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
