import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgBeans from '../assets/bg_beans_pouring.png';
import bgEspresso from '../assets/bg_espresso_extraction.png';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCard() {
  const outerRef = useRef(null);
  const [activeImg, setActiveImg] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 1. Listen to mouse movements for premium 3D tilt when static in Hero
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.scrollY > 200) return; // Disable mouse tilt when scrolled down
      const x = (e.clientX - window.innerWidth / 2) / 30;
      const y = (e.clientY - window.innerHeight / 2) / 30;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 2. Configure GSAP ScrollTrigger flight path
  useEffect(() => {
    const element = outerRef.current;
    if (!element) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        endTrigger: '#about',
        end: 'bottom center',
        scrub: 1, // Smooth scroll scrubbing
        onUpdate: (self) => {
          const progress = self.progress; // 0 (Hero) to 1 (About bottom)
          if (progress < 0.35) {
            setActiveImg(0); // Hero image
          } else if (progress >= 0.35 && progress < 0.72) {
            setActiveImg(1); // Featured Collection image
          } else {
            setActiveImg(2); // About image
          }
        },
      },
    });

    // Flight animation:
    // - From Hero: right-aligned, normal size.
    // - To Featured Collection: glides to the left, Y-axis rotation, slight downscale.
    // - To About Story: glides back to the right, full Y-rotation, tilts.
    // - Beyond About: fades out and moves off screen.
    tl.to(element, {
      x: '-55vw',
      y: '100vh',
      rotateY: 180,
      rotateX: 8,
      scale: 0.92,
      duration: 1,
      ease: 'none',
    })
    .to(element, {
      x: '0vw',
      y: '200vh',
      rotateY: 360,
      rotateX: -8,
      scale: 0.96,
      duration: 1,
      ease: 'none',
    })
    .to(element, {
      opacity: 0,
      scale: 0.75,
      y: '235vh',
      duration: 0.3,
      ease: 'none',
    });

    return () => {
      // Clean up scroll triggers
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const images = [
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80', // Premium cup
    bgBeans, // Beans pouring
    bgEspresso, // Espresso extraction
  ];

  return (
    <div
      ref={outerRef}
      className="hidden lg:block fixed z-30 top-[53%] right-[12%] -translate-y-1/2 w-[340px] h-[430px] pointer-events-none select-none"
      style={{ perspective: '1200px' }}
    >
      {/* Inner card with 3D mouse tilt and border glow highlights */}
      <div
        className="w-full h-full bg-espresso-dark/45 border border-gold/30 rounded-3xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.65)] backdrop-blur-md flex flex-col justify-between transition-transform duration-300 ease-out"
        style={{
          transform: window.scrollY < 200
            ? `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
            : 'none',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Image Frame Layer */}
        <div 
          className="relative w-full h-[72%] rounded-2xl overflow-hidden border border-white/5 bg-chocolate/35 shadow-inner"
          style={{ transform: 'translateZ(20px)' }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              style={{ backgroundImage: `url(${src})` }}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
                activeImg === idx ? 'opacity-90' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-dark/60 to-transparent pointer-events-none" />
        </div>

        {/* Card Details Panel */}
        <div 
          className="flex justify-between items-center pt-2 text-left"
          style={{ transform: 'translateZ(30px)' }}
        >
          <div>
            <span className="text-gold uppercase tracking-[0.25em] text-[10px] font-bold block mb-1">
              Dheek-cafe
            </span>
            <span className="font-serif text-cream text-lg font-bold">
              {activeImg === 0 && 'Boutique Reserve'}
              {activeImg === 1 && 'Panama Geisha'}
              {activeImg === 2 && 'Signature Espresso'}
            </span>
          </div>

          {/* Monogram Seal */}
          <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center bg-espresso-dark shadow-inner text-gold">
            <svg viewBox="0 0 100 100" className="w-5 h-5" fill="currentColor">
              <text x="18" y="65" fontFamily="serif" fontSize="50" fontWeight="bold">D</text>
              <text x="45" y="70" fontFamily="serif" fontSize="38" fontWeight="bold">C</text>
              <path d="M 68 38 C 78 38, 78 52, 68 52" fill="none" stroke="currentColor" strokeWidth="6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
