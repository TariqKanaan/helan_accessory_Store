import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = SITE_CONFIG.heroSlides;

  // Auto rotation
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  // Touch Swipe for Mobile Browsing
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    // RTL: Swipe left = next, Swipe right = prev
    if (distance > minSwipeDistance) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (distance < -minSwipeDistance) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#070707]"
    >
      {/* Background Image Carousel with Smooth Crossfade */}
      <div className="absolute inset-0 z-0 select-none">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = slides[currentSlide].fallbackImage || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80';
              }}
              className="w-full h-full object-cover object-center brightness-[0.4] filter contrast-105"
            />
          </motion.div>
        </AnimatePresence>

        {/* Deep Dark Multilayer Overlays for Optimal Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/65 to-black/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#070707]/50 to-[#070707] z-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 sm:py-32">
        
        {/* Subtle Brand Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-black/50 backdrop-blur-md mb-6 shadow-gold-sm"
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
          <span className="text-xs sm:text-sm text-[#FCF6BA] font-medium tracking-wide">
            {SITE_CONFIG.brand.tagline}
          </span>
        </motion.div>

        {/* Dynamic Slide Category Badge */}
        <div className="mb-3">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-serif">
            {slides[currentSlide].category}
          </span>
        </div>

        {/* Slogan & Title */}
        <motion.h1
          key={`headline-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-6"
        >
          <span className="block font-serif text-gold-gradient drop-shadow-lg mb-2">
            {SITE_CONFIG.brand.slogan}
          </span>
        </motion.h1>

        {/* Slide Subtitle */}
        <motion.p
          key={`sub-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          {slides[currentSlide].subtitle}
        </motion.p>

        {/* Interactive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          {/* Main Gold CTA */}
          <button
            onClick={() => scrollTo('portfolio')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm tracking-wide text-black bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>شاهد معرض أعمالنا</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* Secondary Outline CTA */}
          <button
            onClick={() => scrollTo('services')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide text-gray-200 border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-white/5 transition-all duration-300"
          >
            استكشف خدماتنا
          </button>
        </motion.div>

        {/* Carousel Navigation Indicators */}
        <div className="mt-14 sm:mt-16 flex items-center justify-center gap-3">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`الانتقال إلى الشريحة ${idx + 1}: ${slide.title}`}
              className={`transition-all duration-500 rounded-full ${
                idx === currentSlide
                  ? 'w-10 h-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] shadow-[0_0_12px_rgba(212,175,55,0.6)]'
                  : 'w-2.5 h-2 bg-white/25 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
