import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const cupRef = useRef(null);
  const bean1Ref = useRef(null);
  const bean2Ref = useRef(null);
  const bean3Ref = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Parallax displacements
      gsap.to(cupRef.current, {
        x: x * 0.05,
        y: y * 0.05,
        rotation: x * 0.02,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.to(bean1Ref.current, {
        x: x * -0.1,
        y: y * -0.1,
        rotation: y * -0.05,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.to(bean2Ref.current, {
        x: x * 0.08,
        y: y * -0.08,
        rotation: x * 0.06,
        duration: 1.2,
        ease: 'power2.out',
      });

      gsap.to(bean3Ref.current, {
        x: x * -0.06,
        y: y * 0.12,
        rotation: x * -0.04,
        duration: 1.4,
        ease: 'power2.out',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-transparent"
    >

      {/* Background Subtle Patterns / Glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-espresso/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-espresso/35 border border-gold/10 w-fit mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-hover">
              The Art of Specialty Coffee
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] text-cream mb-6">
            Crafted with Passion.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-hover to-copper">
              Brewed to Perfection.
            </span>
          </h1>

          <p className="text-base md:text-lg text-cream-dark/80 max-w-xl mb-8 leading-relaxed font-light">
            Welcome to Dheek-cafe, where botanical science meets roasting mastery. 
            We source rare single-origin coffees and micro-lots from high-altitude estates, roasted in small batches to capture every floral and dark cacao note.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#collection"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-copper text-chocolate font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-cream/20 hover:border-gold hover:text-gold text-cream font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              <span>Our Story</span>
            </a>
          </div>

          {/* Luxury Counters */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
            <div>
              <h3 className="text-3xl font-serif font-bold text-gold">50+</h3>
              <p className="text-xs uppercase tracking-widest text-cream-dark/60 mt-1">Micro Lots</p>
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold text-gold">15k+</h3>
              <p className="text-xs uppercase tracking-widest text-cream-dark/60 mt-1">Members</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <h3 className="text-3xl font-serif font-bold text-gold">4.9</h3>
                <Star className="w-5 h-5 fill-gold text-gold" />
              </div>
              <p className="text-xs uppercase tracking-widest text-cream-dark/60 mt-1">Bean Rating</p>
            </div>
          </div>
        </motion.div>

        {/* Right Media - Interactive Parallax Stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]"
        >
          {/* Decorative Glowing Rings */}
          <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-gold/10 rounded-full animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] border border-dashed border-gold/5 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

          {/* Floating Bean 1 */}
          <div
            ref={bean1Ref}
            className="absolute top-10 left-10 md:left-20 z-20 pointer-events-none select-none drop-shadow-2xl"
          >
            <svg viewBox="0 0 100 100" className="w-10 h-10 text-espresso" fill="currentColor">
              <ellipse cx="50" cy="50" rx="35" ry="22" transform="rotate(-30 50 50)" />
              <path d="M 18 32 C 40 45, 60 55, 82 68" fill="none" stroke="#110906" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          {/* Floating Bean 2 */}
          <div
            ref={bean2Ref}
            className="absolute bottom-10 right-10 md:right-20 z-20 pointer-events-none select-none drop-shadow-2xl"
          >
            <svg viewBox="0 0 100 100" className="w-12 h-12 text-copper" fill="currentColor">
              <ellipse cx="50" cy="50" rx="35" ry="22" transform="rotate(45 50 50)" />
              <path d="M 22 75 C 45 60, 55 40, 78 25" fill="none" stroke="#110906" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          {/* Floating Bean 3 */}
          <div
            ref={bean3Ref}
            className="absolute top-1/2 right-4 md:right-8 z-20 pointer-events-none select-none drop-shadow-2xl"
          >
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-espresso-dark" fill="currentColor">
              <ellipse cx="50" cy="50" rx="35" ry="22" transform="rotate(15 50 50)" />
              <path d="M 16 41 C 38 48, 62 52, 84 59" fill="none" stroke="#110906" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          {/* Main Hero Coffee Cup Image */}
          <div ref={cupRef} className="relative z-10 w-[280px] h-[280px] md:w-[380px] md:h-[380px] select-none">
            {/* Soft Steam Overlay */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none">
              <div className="w-1 h-12 bg-white/20 rounded-full filter blur-[2px] steam-effect" style={{ animationDelay: '0s' }} />
              <div className="w-1 h-14 bg-white/10 rounded-full filter blur-[2px] steam-effect" style={{ animationDelay: '0.8s' }} />
              <div className="w-1 h-10 bg-white/20 rounded-full filter blur-[2px] steam-effect" style={{ animationDelay: '1.5s' }} />
            </div>

            <img
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
              alt="Premium Dheek-cafe Pour"
              className="w-full h-full object-cover rounded-full border border-gold/20 shadow-[0_0_50px_rgba(205,164,94,0.15)] bg-chocolate"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
