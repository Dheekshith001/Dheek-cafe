import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import { testimonials } from '../data/coffeeData';
import use3DTilt from '../hooks/use3DTilt';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function TestimonialCard({ t }) {
  const cardRef = use3DTilt(10, 1.015);

  return (
    <div
      ref={cardRef}
      className="bg-espresso-dark/30 border border-white/5 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between h-full min-h-[250px] shadow-lg select-none hover:border-gold/50 hover:shadow-[0_0_35px_rgba(205,164,94,0.15),_0_20px_45px_rgba(0,0,0,0.4)] group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
    >
      <div>
        {/* Rating */}
        <div className="flex gap-1 mb-6">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-gold text-gold" />
          ))}
        </div>

        {/* Comment */}
        <p className="text-cream-dark/85 font-light italic leading-relaxed mb-8 flex-grow text-left">
          "{t.comment}"
        </p>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-4 border-t border-white/5 pt-4 text-left mt-auto">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-12 h-12 rounded-full object-cover border border-gold/30 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          loading="lazy"
        />
        <div>
          <h4 className="font-serif font-bold text-cream text-base leading-none mb-1 group-hover:text-gold transition-colors duration-300">
            {t.name}
          </h4>
          <span className="text-xs text-gold-hover">{t.role}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-transparent border-t border-white/5 relative">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-espresso/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            Connoisseur Reviews
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mt-3 mb-6">
            Client Testimonials
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="pb-16"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
