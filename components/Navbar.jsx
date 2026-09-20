import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppLink } from '../data/siteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav border-b border-[#D4AF37]/25 shadow-[0_4px_30px_rgba(0,0,0,0.85)] py-3'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram & Title */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-3.5 focus:outline-none"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-gradient-to-br from-[#1d1912] to-[#080808] shadow-[0_0_15px_rgba(212,175,55,0.25)] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
            <span className="font-serif text-xl sm:text-2xl font-bold text-gold-gradient">
              H
            </span>
          </div>
          <div className="text-right">
            <span className="block font-serif text-lg sm:text-2xl font-bold tracking-wide text-gold-subtle">
              {SITE_CONFIG.brand.nameAr}
            </span>
            <span className="block text-[9px] sm:text-[10px] tracking-[0.25em] text-gray-400 uppercase font-serif">
              {SITE_CONFIG.brand.nameEn}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium">
          {SITE_CONFIG.navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-300 hover:text-[#D4AF37] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#BF953F] after:to-[#FCF6BA] after:absolute after:bottom-0 after:right-0 after:transition-all after:duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop Header Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={buildWhatsAppLink(SITE_CONFIG.brand.phone)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border border-[#D4AF37]/50 text-[#FCF6BA] hover:bg-gradient-to-r hover:from-[#D4AF37]/20 hover:to-transparent hover:border-[#D4AF37] transition-all duration-300 shadow-[0_0_12px_rgba(212,175,55,0.15)] hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
            <span>تواصل معنا</span>
          </a>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-200 hover:text-[#D4AF37] p-2 focus:outline-none rounded-lg active:bg-white/5"
          aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0a0a0a]/95 border-b border-[#D4AF37]/30 px-6 py-6 flex flex-col gap-3.5 backdrop-blur-2xl shadow-2xl"
          >
            {SITE_CONFIG.navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.href)}
                className="text-right text-base text-gray-200 hover:text-[#D4AF37] py-2.5 px-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </button>
            ))}

            <a
              href={buildWhatsAppLink(SITE_CONFIG.brand.phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2.5 py-3 rounded-xl border border-[#D4AF37] bg-gradient-to-r from-[#D4AF37]/25 to-transparent text-[#FCF6BA] font-semibold text-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>محادثة واتساب مباشرة</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
