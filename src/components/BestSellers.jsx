import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, ShoppingCart } from 'lucide-react';
import { bestSellers } from '../data/coffeeData';
import use3DTilt from '../hooks/use3DTilt';
import { useScrollCardContext } from '../context/ScrollCardContext';

function BestSellerCard({ item, idx }) {
  const cardRef = use3DTilt(10, 1.015);
  const sellersTargetRef = useRef(null);
  const { registerTarget } = useScrollCardContext();

  useEffect(() => {
    if (idx === 0 && sellersTargetRef.current) {
      registerTarget('sellers', sellersTargetRef.current);
    }
  }, [registerTarget, idx]);

  return (
    <motion.div
      ref={cardRef}
      className="bg-chocolate border border-white/10 rounded-2xl overflow-hidden hover:border-gold/60 hover:shadow-[0_0_40px_rgba(205,164,94,0.25),_0_25px_60px_rgba(0,0,0,0.65)] group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      initial={idx === 0 ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
      whileInView={idx === 0 ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={idx === 0 ? { duration: 0 } : { duration: 0.6, delay: idx * 0.1 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Image & Quick View Hover - Floating Depth Target */}
      <div 
        ref={idx === 0 ? sellersTargetRef : null}
        className="relative aspect-[4/3] overflow-hidden"
        style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
      >
        <img
          id={idx === 0 ? "sellers-native-img" : undefined}
          src={item.image}
          alt={item.name}
          className={`w-full h-full object-cover group-hover:scale-115 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            idx === 0 ? 'lg:opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />
        {/* Overlay details */}
        <div className="absolute inset-0 bg-chocolate/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <button className="w-12 h-12 bg-gold hover:bg-gold-hover text-chocolate rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_15px_rgba(205,164,94,0.5)] transition-all duration-300 hover:scale-110 cursor-pointer" aria-label="Quick View">
            <Eye className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-cream text-chocolate hover:bg-gold rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_15px_rgba(251,249,244,0.4)] transition-all duration-300 hover:scale-110 cursor-pointer" aria-label="Add to Cart">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
 
      {/* Card Details - Floating Depth */}
      <div className="p-6" style={{ transformStyle: 'preserve-3d' }}>
        <div 
          className="flex items-center justify-between mb-4"
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Rating & Reviews Count */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              <Star className="w-3.5 h-3.5 fill-gold text-gold" />
              <span className="text-xs font-semibold text-gold">{item.rating}</span>
            </div>
            <span className="text-xs text-cream-dark/70">({item.reviews} reviews)</span>
          </div>
 
          {/* Pricing tag */}
          <span className="text-xl font-serif font-bold text-gold">{item.price}</span>
        </div>
 
        <h3 
          className="text-lg font-serif font-bold text-cream mb-2 group-hover:text-gold transition-colors duration-300"
          style={{ transform: 'translateZ(35px)' }}
        >
          {item.name}
        </h3>
        <p 
          className="text-sm text-cream-dark/80 font-light leading-relaxed"
          style={{ transform: 'translateZ(25px)' }}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function BestSellers() {
  return (
    <section id="best-sellers" className="py-24 bg-transparent border-t border-white/5 relative">
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-copper/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            Favorite Blends
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mt-3 mb-6">
            Our Best Sellers
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-cream-dark/70 font-light">
            Loved by coffee connoisseurs worldwide, these signature blends and cold infusions showcase our ultimate consistency and roasting precision.
          </p>
        </div>

        {/* Best Sellers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((item, idx) => (
            <BestSellerCard key={item.id} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
