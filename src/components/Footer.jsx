import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { navLinks } from '../data/coffeeData';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
        {/* Brand Column */}
        <div className="lg:col-span-4 flex flex-col text-left">
          {/* Logo Monogram */}
          <a href="#home" className="flex items-center gap-3 group mb-6 w-fit">
            <div className="w-10 h-10 flex items-center justify-center border border-gold/40 rounded-lg bg-espresso-dark">
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-gold" fill="currentColor">
                <text x="18" y="65" fontFamily="serif" fontSize="50" fontWeight="bold">D</text>
                <text x="45" y="70" fontFamily="serif" fontSize="38" fontWeight="bold">C</text>
                <path d="M 68 38 C 78 38, 78 52, 68 52" fill="none" stroke="currentColor" strokeWidth="6" />
                <path d="M 35 25 C 45 40, 45 60, 55 75" fill="none" stroke="#110906" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-widest text-cream">
                DHEEK
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-gold">
                Coffee
              </span>
            </div>
          </a>

          <p className="text-sm text-cream-dark/65 font-light leading-relaxed mb-8 max-w-sm">
            Experience specialty coffee refined through scientific roasting profiles and sustainable global trade. Sourced directly, roasted with devotion.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://instagram.com" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-cream-dark hover:border-gold hover:text-gold transition-colors duration-300" aria-label="Instagram">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://twitter.com" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-cream-dark hover:border-gold hover:text-gold transition-colors duration-300" aria-label="Twitter">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="https://facebook.com" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-cream-dark hover:border-gold hover:text-gold transition-colors duration-300" aria-label="Facebook">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="lg:col-span-3 text-left">
          <h4 className="font-serif text-lg font-bold text-cream mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {navLinks.slice(0, 5).map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-cream-dark/75 hover:text-gold transition-colors duration-300 font-light"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Laboratory Menu Shortcuts */}
        <div className="lg:col-span-2 text-left">
          <h4 className="font-serif text-lg font-bold text-cream mb-6">Support & Policy</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-sm text-cream-dark/75 hover:text-gold transition-colors duration-300 font-light">Cupping Classes</a></li>
            <li><a href="#" className="text-sm text-cream-dark/75 hover:text-gold transition-colors duration-300 font-light">Laboratory Tours</a></li>
            <li><a href="#" className="text-sm text-cream-dark/75 hover:text-gold transition-colors duration-300 font-light">Terms of Service</a></li>
            <li><a href="#" className="text-sm text-cream-dark/75 hover:text-gold transition-colors duration-300 font-light">Privacy Policy</a></li>
            <li><a href="#" className="text-sm text-cream-dark/75 hover:text-gold transition-colors duration-300 font-light">Refund Guidelines</a></li>
          </ul>
        </div>

        {/* Quick Contact Form Mini */}
        <div className="lg:col-span-3 text-left">
          <h4 className="font-serif text-lg font-bold text-cream mb-6">Private Concierge</h4>
          <p className="text-sm text-cream-dark/65 font-light leading-relaxed mb-4">
            Connect directly with our lab representatives for wholesale accounts.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="bg-espresso/50 border border-white/10 rounded-l-lg px-4 py-2 text-xs text-cream focus:border-gold focus:outline-none w-full transition-colors duration-300"
            />
            <button className="bg-gold text-chocolate rounded-r-lg px-3 flex items-center justify-center hover:bg-gold-hover transition-colors duration-300 cursor-pointer">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Bottom */}
      <div className="border-t border-white/5 pt-8 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider uppercase text-cream-dark/45 font-semibold">
        <span>&copy; {new Date().getFullYear()} Dheek-cafe Inc. All rights reserved.</span>
        <span>Crafted with Passion. Brewed to Perfection.</span>
      </div>
    </footer>
  );
}
