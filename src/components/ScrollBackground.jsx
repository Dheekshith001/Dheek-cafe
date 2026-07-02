import React, { useState, useEffect } from 'react';
import bgBeans from '../assets/bg_beans_pouring.png';
import bgEspresso from '../assets/bg_espresso_extraction.png';
import bgLatte from '../assets/bg_latte_art.png';

export default function ScrollBackground() {
  const [activeBg, setActiveBg] = useState(-1); // -1 means welcome/Hero state (video active, image overlay hidden)

  useEffect(() => {
    const sections = [
      { id: 'collection', index: 0 },
      { id: 'best-sellers', index: 0 },
      { id: 'about', index: 1 },
      { id: 'brewing', index: 1 },
      { id: 'menu', index: 2 },
      { id: 'gallery', index: 2 },
      { id: 'faq', index: 2 },
      { id: 'contact', index: 2 },
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px', // Trigger when section occupies the center 40% of the viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matched = sections.find((s) => s.id === entry.target.id);
          if (matched !== undefined) {
            setActiveBg(matched.index);
          }
        }
      });
    };

    // Track scroll back to top (Hero section)
    const handleScroll = () => {
      if (window.scrollY < 300) {
        setActiveBg(-1); // Return to hero video state
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bgs = [bgBeans, bgEspresso, bgLatte];

  return (
    <div className="fixed inset-0 w-full h-full z-[-1] bg-chocolate overflow-hidden pointer-events-none select-none">
      {/* Global Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      >
        <source src="/coffee-video.mp4" type="video/mp4" />
      </video>

      {/* Background Image Stack for cross-fading */}
      {bgs.map((imgSrc, idx) => (
        <div
          key={idx}
          style={{ backgroundImage: `url(${imgSrc})` }}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            activeBg === idx ? 'opacity-25' : 'opacity-0'
          }`}
        />
      ))}

      {/* Ambient dark blending overlay to keep text fully legible */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(17,9,6,0.3),_rgba(17,9,6,0.7))]"
      />
    </div>
  );
}
