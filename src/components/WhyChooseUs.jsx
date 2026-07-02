import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { features } from '../data/coffeeData';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-transparent border-t border-white/5 relative">
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            Our Quality Standards
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mt-3 mb-6">
            Why Choose Dheek-cafe
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            // Dynamically resolve Lucide Icon
            const IconComponent = Icons[feature.icon] || Icons.Coffee;

            return (
              <motion.div
                key={feature.title}
                className="bg-chocolate border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gold/40 hover:shadow-[0_0_30px_rgba(205,164,94,0.12),_0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Icon Container */}
                <div className="w-14 h-14 bg-espresso/40 border border-gold/20 rounded-xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-chocolate group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(205,164,94,0.45)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <IconComponent className="w-6 h-6 transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-110" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-serif font-bold text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-cream-dark/70 font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
