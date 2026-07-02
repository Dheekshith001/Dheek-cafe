import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-espresso/15 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Overlapping Images */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[450px]">
            {/* Background textured frame */}
            <div className="absolute inset-0 border border-gold/10 rounded-2xl transform rotate-3 pointer-events-none" />

            {/* Back smaller image */}
            <motion.div
              className="absolute left-4 top-4 w-2/3 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
                alt="Luxury Roastery Equipment"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Front main image */}
            <motion.div
              className="absolute right-4 bottom-4 w-2/3 aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gold/25"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1606791405792-1004f1718d0c?auto=format&fit=crop&w=600&q=80"
                alt="Expert Barista Pouring Coffee"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Right Column: Narrative Content */}
          <motion.div
            className="lg:col-span-6 text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
              The Legend & Legacy
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mt-3 mb-6">
              Sourcing the Extravagant
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-6" />

            <p className="text-cream-dark/85 font-light leading-relaxed mb-6">
              Founded under a simple premise of absolute devotion, Dheek-cafe has spent over a decade mapping micro-climates across the equatorial belt. We do not search for mass compatibility; we hunt for the exceptional botanical anomalies.
            </p>

            <blockquote className="border-l-2 border-gold/60 pl-4 py-1 italic text-gold-hover text-base font-light mb-6">
              "We believe that a truly premium cup of coffee does not just wake you up—it tells you the soil chemistry, elevation, and passion of the hand that picked it."
            </blockquote>

            <p className="text-cream-dark/70 text-sm font-light leading-relaxed mb-8">
              Every bean passing through our doors undergoes rigorous cryogenic sorting and precise heat roasting profiles inside our boutique laboratory. This ensures that when the hot water meets the grounds, a symphony of jasmine, cedarwood, and natural fruit sugars are released.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-cream">1,500m+</span>
                <span className="text-[10px] uppercase tracking-widest text-cream-dark/50 mt-1">Growth Altitude</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-cream">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-cream-dark/50 mt-1">Direct Trade</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-cream">88.5+</span>
                <span className="text-[10px] uppercase tracking-widest text-cream-dark/50 mt-1">Average Cup Score</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
