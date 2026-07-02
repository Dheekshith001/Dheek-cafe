import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { galleryItems } from '../data/coffeeData';

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 bg-transparent border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            Visual Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mt-3 mb-6">
            Dheek Gallery
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/5 group cursor-pointer shadow-md transition-all duration-500 hover:border-gold/50 hover:shadow-[0_0_35px_rgba(205,164,94,0.2),_0_15px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.75, delay: (idx % 3) * 0.1, ease: 'easeOut' }}
              onClick={() => setSelectedIdx(idx)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-chocolate/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <span className="text-[10px] uppercase tracking-widest text-gold mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-cream">
                  {item.title}
                </h3>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-cream hover:bg-gold hover:text-chocolate transition-colors duration-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-chocolate/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-2 text-cream hover:text-gold transition-colors duration-300 cursor-pointer"
              onClick={() => setSelectedIdx(null)}
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Left Control */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 text-cream hover:border-gold hover:text-gold transition-all duration-300 hover:scale-110 active:scale-95 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
              onClick={handlePrev}
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[selectedIdx].image}
                alt={galleryItems[selectedIdx].title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-chocolate/90 to-transparent p-6 text-left">
                <span className="text-xs uppercase tracking-widest text-gold">
                  {galleryItems[selectedIdx].category}
                </span>
                <h3 className="font-serif text-xl font-bold text-cream mt-1">
                  {galleryItems[selectedIdx].title}
                </h3>
              </div>
            </motion.div>

            {/* Right Control */}
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 text-cream hover:border-gold hover:text-gold transition-all duration-300 hover:scale-110 active:scale-95 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
              onClick={handleNext}
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
