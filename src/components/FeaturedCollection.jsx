import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { featuredCollection } from '../data/coffeeData';
import use3DTilt from '../hooks/use3DTilt';
import { useScrollCardContext } from '../context/ScrollCardContext';

function FeaturedCard({ product, idx }) {
  const cardRef = use3DTilt(10, 1.015);
  const collectionTargetRef = useRef(null);
  const { registerTarget } = useScrollCardContext();

  useEffect(() => {
    if (idx === 0 && collectionTargetRef.current) {
      registerTarget('collection', collectionTargetRef.current);
    }
  }, [registerTarget, idx]);

  return (
    <motion.div
      ref={cardRef}
      className="bg-espresso-dark/45 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-gold/45 hover:shadow-[0_0_30px_rgba(205,164,94,0.15),_0_20px_50px_rgba(0,0,0,0.5)] group"
      initial={idx === 0 ? { opacity: 1 } : { opacity: 0, y: 50 }}
      whileInView={idx === 0 ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={idx === 0 ? { duration: 0 } : { duration: 0.8, delay: idx * 0.15 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div style={{ transformStyle: 'preserve-3d' }}>
        {/* Image and Badge - Floating Depth Target */}
        <div 
          ref={idx === 0 ? collectionTargetRef : null}
          className="relative rounded-xl overflow-hidden aspect-square mb-6"
          style={{ transform: 'translateZ(30px)' }}
        >
          <img
            id={idx === 0 ? "collection-native-img" : undefined}
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              idx === 0 ? 'lg:opacity-0' : 'opacity-100'
            }`}
            loading="lazy"
          />
          <span 
            className="absolute top-4 left-4 bg-gold text-chocolate text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-md shadow-md"
            style={{ transform: 'translateZ(10px)' }}
          >
            {product.badge}
          </span>
        </div>

        {/* Rating - Floating Depth */}
        <div 
          className="flex items-center gap-1.5 mb-3"
          style={{ transform: 'translateZ(20px)' }}
        >
          <Star className="w-4 h-4 fill-gold text-gold" />
          <span className="text-xs font-semibold text-gold-hover">{product.rating}</span>
          <span className="text-xs text-cream-dark/40">• Single Origin</span>
        </div>

        {/* Title & Tagline - Floating Depth */}
        <h3 
          className="text-xl font-serif font-bold text-cream mb-1 group-hover:text-gold transition-colors duration-300"
          style={{ transform: 'translateZ(35px)' }}
        >
          {product.name}
        </h3>
        <p 
          className="text-xs italic text-copper mb-4"
          style={{ transform: 'translateZ(20px)' }}
        >
          {product.tagline}
        </p>

        {/* Description - Floating Depth */}
        <p 
          className="text-sm text-cream-dark/70 font-light mb-6 leading-relaxed"
          style={{ transform: 'translateZ(25px)' }}
        >
          {product.description}
        </p>

        {/* Notes List - Floating Depth */}
        <div 
          className="flex flex-wrap gap-2 mb-6"
          style={{ transform: 'translateZ(28px)' }}
        >
          {product.notes.map((note) => (
            <span
              key={note}
              className="text-[10px] bg-espresso/50 border border-gold/15 text-cream-dark px-2.5 py-1 rounded-full uppercase tracking-wider"
            >
              {note}
            </span>
          ))}
        </div>
      </div>

      {/* Price & Purchase Actions - Floating Depth */}
      <div 
        className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto"
        style={{ transform: 'translateZ(30px)' }}
      >
        <div className="flex flex-col">
          <span className="text-xs text-cream-dark/50 uppercase tracking-widest">Price</span>
          <span className="text-2xl font-serif font-bold text-cream">{product.price}</span>
        </div>

        <button className="flex items-center gap-2 bg-espresso hover:bg-gold hover:text-chocolate border border-gold/30 hover:border-gold text-gold font-bold px-4 py-3 rounded-lg hover:shadow-[0_0_15px_rgba(205,164,94,0.35)] transition-all duration-500 ease-out cursor-pointer">
          <ShoppingCart className="w-4 h-4" />
          <span className="text-xs uppercase tracking-wider">Secure Bag</span>
        </button>
      </div>
    </motion.div>
  );
}

export default function FeaturedCollection() {
  return (
    <section id="collection" className="py-24 bg-transparent border-t border-white/5 relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-espresso/20 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            Specialty Micro-Lots
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mt-3 mb-6">
            Featured Collection
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-cream-dark/70 font-light">
            We travel to remote volcanic valleys to select rare single-origin coffees with distinctive cup scores of 85+. Taste the purity of single estates.
          </p>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCollection.map((product, idx) => (
            <FeaturedCard key={product.id} product={product} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
