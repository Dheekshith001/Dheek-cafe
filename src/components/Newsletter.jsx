import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-transparent border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          className="bg-chocolate border border-gold/15 rounded-3xl p-8 md:p-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_40px_rgba(205,164,94,0.12),_0_25px_60px_rgba(0,0,0,0.55)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            Join the Club
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream mt-3 mb-6">
            Dheek Cellar Membership
          </h2>
          <p className="text-cream-dark/75 max-w-xl mx-auto font-light mb-10 leading-relaxed text-sm md:text-base">
            Subscribe to receive exclusive access to our seasonal single-origin micro-lots, private laboratory tastings, and artisan roasting insights.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            {!submitted ? (
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-espresso/50 border border-white/10 rounded-lg px-4 py-4 text-cream text-sm focus:border-gold focus:outline-none transition-colors duration-300 shadow-inner"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-hover text-chocolate font-bold px-6 py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-md"
                >
                  <span className="text-xs uppercase tracking-wider font-semibold">Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-espresso/45 border border-gold/25 rounded-xl text-gold text-sm font-semibold"
              >
                Welcome to the Cellar. An exclusive newsletter confirmation is heading your way.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
