import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories, menuItems } from '../data/coffeeData';
import use3DTilt from '../hooks/use3DTilt';
import { useScrollCardContext } from '../context/ScrollCardContext';

function MenuItemCard({ item }) {
  // Use slightly lower max tilt degrees (8) for a wider horizontal card layout
  const cardRef = use3DTilt(8, 1.012);
  const menuTargetRef = useRef(null);
  const { registerTarget } = useScrollCardContext();

  useEffect(() => {
    if (item.id === 2 && menuTargetRef.current) {
      registerTarget('menu', menuTargetRef.current);
    }
  }, [registerTarget, item.id]);

  return (
    <motion.div
      ref={item.id === 2 ? null : cardRef}
      layout
      initial={item.id === 2 ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
      animate={item.id === 2 ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      exit={item.id === 2 ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
      transition={item.id === 2 ? { duration: 0 } : { duration: 0.4 }}
      className="flex items-center gap-4 md:gap-6 bg-espresso-dark/20 border border-white/8 rounded-2xl p-4 md:p-6 hover:border-gold/35 hover:bg-espresso-dark/45 hover:shadow-[0_12px_30px_rgba(205,164,94,0.08),_0_10px_25px_rgba(0,0,0,0.3)] group"
    >
      {/* Thumbnail */}
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0 border border-white/5 bg-chocolate/30 relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex-grow text-left">
        <div className="flex justify-between items-baseline gap-2 mb-1.5">
          <h3 className="text-base md:text-lg font-serif font-bold text-cream">
            {item.name}
          </h3>
          <span className="text-base font-serif font-bold text-gold group-hover:text-gold-hover transition-colors duration-300 flex-shrink-0">
            {item.price}
          </span>
        </div>
        <div className="w-full border-t border-dashed border-white/10 group-hover:border-gold/20 my-2 transition-colors duration-500" />
        <p className="text-xs md:text-sm text-cream-dark/60 font-light leading-relaxed">
          {item.notes}
        </p>
      </div>
    </motion.div>
  );
}

export default function CoffeeMenu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-transparent border-t border-white/5 relative">
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-espresso/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            Boutique Menu
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mt-3 mb-6">
            Dheek-cafe Menu
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-cream-dark/70 font-light">
            Every extraction is handled by high-end La Marzocco machinery, matching water mineral content to beans origin. Try our signature coffees & specialty sweets.
          </p>
        </div>

        {/* Categories Tab selector */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-gold border-gold text-chocolate shadow-[0_4px_15px_rgba(205,164,94,0.3)]'
                  : 'bg-transparent border-white/10 text-cream-dark hover:border-gold hover:text-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
