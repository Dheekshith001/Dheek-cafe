import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/coffeeData';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-24 bg-transparent border-t border-white/5 relative">
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-espresso/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            Information
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mt-3 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-espresso-dark/20 border border-white/5 rounded-2xl overflow-hidden hover:border-gold/20 transition-colors duration-300"
              >
                {/* Header Toggle */}
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 md:p-8 cursor-pointer select-none text-left"
                  onClick={() => toggleFAQ(idx)}
                >
                  <h3 className="font-serif font-bold text-base md:text-lg text-cream hover:text-gold transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-white/5 pt-4 text-sm md:text-base text-cream-dark/75 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
