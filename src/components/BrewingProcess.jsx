import React from 'react';
import { motion } from 'framer-motion';
import { brewingSteps } from '../data/coffeeData';

export default function BrewingProcess() {
  return (
    <section id="brewing" className="py-24 bg-transparent border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-copper/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            From Seed to Sip
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mt-3 mb-6">
            The Brewing Process
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-cream-dark/70 font-light">
            We leave nothing to chance. Discover the journey of Dheek Specialty Coffee, mapped across four critical stages of taste development.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-gold/30 max-w-3xl mx-auto pl-6 md:pl-12 flex flex-col gap-16 text-left">
          {brewingSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
            >
              {/* Timeline Bullet Indicator */}
              <div className="absolute -left-[31px] md:-left-[55px] top-0 w-4 h-4 rounded-full bg-chocolate border-2 border-gold flex items-center justify-center shadow-[0_0_15px_rgba(205,164,94,0.3)]">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              </div>

              {/* Step Info */}
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-baseline">
                {/* Step Number */}
                <span className="font-serif text-5xl font-extrabold text-gold/65 leading-none md:w-20">
                  {step.step}
                </span>

                <div className="flex-grow">
                  {/* Step Title & Subtitle */}
                  <h3 className="text-2xl font-serif font-bold text-cream mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-gold-hover mb-4">
                    {step.subtitle}
                  </p>
                  {/* Description */}
                  <p className="text-sm md:text-base text-cream/90 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
