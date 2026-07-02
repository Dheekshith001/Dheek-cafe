import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { navLinks } from '../data/coffeeData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-chocolate/85 backdrop-blur-md border-b border-white/5 py-4 shadow-xl'
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo - DC Monogram + Coffee Bean + Cup */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center border border-gold/40 rounded-lg overflow-hidden bg-espresso-dark group-hover:border-gold transition-colors duration-300">
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-gold transition-transform duration-500 group-hover:rotate-12" fill="currentColor">
                {/* Monogram DC */}
                <text x="18" y="65" fontFamily="serif" fontSize="50" fontWeight="bold" fill="currentColor">D</text>
                <text x="45" y="70" fontFamily="serif" fontSize="38" fontWeight="bold" fill="currentColor">C</text>
                {/* Coffee cup handle / layout overlay */}
                <path d="M 68 38 C 78 38, 78 52, 68 52" fill="none" stroke="currentColor" strokeWidth="6" />
                {/* Bean center line */}
                <path d="M 35 25 C 45 40, 45 60, 55 75" fill="none" stroke="#110906" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-widest text-cream group-hover:text-gold transition-colors duration-300">
                DHEEK
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-gold">
                Cafe
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium tracking-wide text-cream-dark hover:text-gold transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions & Hamburger Toggle */}
          <div className="flex items-center gap-4">
            <button
              className="relative p-2 text-cream hover:text-gold transition-colors duration-300 cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-chocolate text-[9px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            <button
              className="lg:hidden p-2 text-cream hover:text-gold transition-colors duration-300 cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-chocolate/98 backdrop-blur-lg flex flex-col justify-center p-8 lg:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <button
              className="absolute top-6 right-6 p-2 text-cream hover:text-gold transition-colors duration-300 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {/* Mobile Monogram */}
              <div className="w-16 h-16 border border-gold/40 rounded-xl flex items-center justify-center bg-espresso-dark mb-4">
                <svg viewBox="0 0 100 100" className="w-10 h-10 text-gold" fill="currentColor">
                  <text x="18" y="65" fontFamily="serif" fontSize="50" fontWeight="bold">D</text>
                  <text x="45" y="70" fontFamily="serif" fontSize="38" fontWeight="bold">C</text>
                  <path d="M 68 38 C 78 38, 78 52, 68 52" fill="none" stroke="currentColor" strokeWidth="6" />
                  <path d="M 35 25 C 45 40, 45 60, 55 75" fill="none" stroke="#110906" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </div>

              <ul className="flex flex-col gap-6 text-center">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-2xl font-serif font-bold text-cream hover:text-gold transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
