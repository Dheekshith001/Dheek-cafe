import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollCardContext } from '../context/ScrollCardContext';

function FlipCard({ image, title, subtitle, description, className, initialDelay, isTarget, targetRef }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Card variants for the scroll entrance flip
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      rotateY: 180, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      rotateY: 0, 
      scale: 1,
      transition: { 
        duration: 1.1, 
        delay: initialDelay,
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      ref={isTarget ? targetRef : null}
      className={className}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-60px' }}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        onClick={handleCardClick}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          position: 'relative',
          cursor: 'pointer',
        }}
        className="w-full h-full"
      >
        {/* Front Side (Image) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
          }}
          className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/5"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            loading="lazy"
          />
          {/* Subtle instructions on hover */}
          <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300 flex items-end p-4">
            <span className="text-[10px] uppercase tracking-widest text-gold bg-chocolate/85 px-3 py-1.5 rounded border border-gold/25 shadow-md">Click to Reveal</span>
          </div>
        </div>

        {/* Back Side (Narrative Results) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className="w-full h-full rounded-2xl overflow-hidden bg-espresso-dark/95 border border-gold/40 flex flex-col justify-center p-6 text-center shadow-2xl relative"
        >
          {/* Decorative Corner Accents */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/30 rounded-tl-sm" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/30 rounded-tr-sm" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/30 rounded-bl-sm" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/30 rounded-br-sm" />

          <span className="text-[9px] uppercase tracking-[0.2em] text-gold mb-1.5">{subtitle}</span>
          <h4 className="font-serif text-lg font-bold text-cream mb-3">{title}</h4>
          <p className="text-xs text-cream-dark/85 font-light leading-relaxed px-2">
            {description}
          </p>
          <span className="text-[9px] uppercase tracking-widest text-gold/40 mt-5">Click to Flip Back</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  const aboutTargetRef = useRef(null);
  const { registerTarget } = useScrollCardContext();

  useEffect(() => {
    if (aboutTargetRef.current) {
      registerTarget('about', aboutTargetRef.current);
    }
  }, [registerTarget]);

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-espresso/15 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Overlapping Flippable Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[450px]">
            {/* Background textured frame */}
            <div className="absolute inset-0 border border-gold/10 rounded-2xl transform rotate-3 pointer-events-none" />

            {/* Back Card (Left position) */}
            <FlipCard
              image="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
              title="Micro-Lot Roasting"
              subtitle="Cryogenic Profiling"
              description="We roast rare micro-lots under controlled gas curves in small batches, capturing delicate jasmine and cacao aromatics."
              className="absolute left-4 top-4 w-2/3 aspect-[4/5]"
              initialDelay={0.25}
              isTarget={false}
            />

            {/* Front Card (Right position) */}
            <FlipCard
              image="https://images.unsplash.com/photo-1606791405792-1004f1718d0c?auto=format&fit=crop&w=600&q=80"
              title="Precision Brews"
              subtitle="Concierge Extraction"
              description="Hand-poured at exactly 93°C with structured mineralized water to preserve volatile floral oils and sweet natural sugars."
              className="absolute right-4 bottom-4 w-2/3 aspect-[4/5]"
              initialDelay={0.0}
              isTarget={true}
              targetRef={aboutTargetRef}
            />
          </div>

          {/* Right Column: Narrative Content */}
          <motion.div
            className="lg:col-span-6 text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
