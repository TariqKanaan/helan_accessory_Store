import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { SITE_CONFIG } from './data/siteData';

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#070707] text-[#E5E7EB] font-sans antialiased overflow-x-hidden">
      {/* Sticky & Frosted Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Carousel */}
        <Hero />

        {/* 2. Services Grid */}
        <Services />

        {/* 3. Why Choose Us (Value Proposition) */}
        <section id="why-us" className="py-20 bg-[#0B0B0B] border-b border-[#D4AF37]/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SITE_CONFIG.values.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.id}
                    className="p-8 rounded-2xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-[#D4AF37]/20 text-center flex flex-col items-center hover:border-[#D4AF37]/50 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-full border border-[#D4AF37]/40 bg-black flex items-center justify-center text-[#D4AF37] mb-5 shadow-gold-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Portfolio / Gallery Section */}
        <Portfolio />

        {/* 5. Testimonials (Social Proof) */}
        <Testimonials />

        {/* 6. Contact & Location Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* 7. Global Floating WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
