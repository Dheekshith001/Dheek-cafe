import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollCardContext } from '../context/ScrollCardContext';

gsap.registerPlugin(ScrollTrigger);

// Helper to compute element coordinates relative to the absolute document root
const getDocumentBounds = (el) => {
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  const scrollY = window.scrollY || window.pageYOffset;
  const scrollX = window.scrollX || window.pageXOffset;
  return {
    top: rect.top + scrollY,
    left: rect.left + scrollX,
    width: rect.width,
    height: rect.height,
  };
};

export default function ScrollCard() {
  const cardRef = useRef(null);
  const { targets } = useScrollCardContext();
  const [bounds, setBounds] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // DOM Refs for direct GSAP animation (bypasses React state delay during scrolling)
  const img0Ref = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  // 1. Interactive 3D tilt when scroll is at the top
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.scrollY > 150) return;
      const x = (e.clientX - window.innerWidth / 2) / 35;
      const y = (e.clientY - window.innerHeight / 2) / 35;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 2. Measure target coordinates dynamically and recalculate on layout shifts using ResizeObserver
  useEffect(() => {
    const calculateBounds = () => {
      const hero = targets['hero'];
      const collection = targets['collection'];
      const sellers = targets['sellers'];

      // Wait until all target landmarks are registered
      if (!hero || !collection || !sellers) return;

      setBounds({
        hero: getDocumentBounds(hero),
        collection: getDocumentBounds(collection),
        sellers: getDocumentBounds(sellers),
      });
    };

    // Initial calculation
    calculateBounds();

    // Use ResizeObserver on document body to catch layout shifts (like lazy loading images)
    const resizeObserver = new ResizeObserver(() => {
      calculateBounds();
    });

    if (document.body) {
      resizeObserver.observe(document.body);
    }

    window.addEventListener('resize', calculateBounds);
    window.addEventListener('load', calculateBounds);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', calculateBounds);
      window.removeEventListener('load', calculateBounds);
    };
  }, [targets]);

  // 3. Build the GSAP ScrollTrigger Flight Path
  useEffect(() => {
    if (!bounds) return;

    const el = cardRef.current;
    if (!el) return;

    // Initial setup: display correct start images and opacity
    gsap.set(el, {
      top: bounds.hero.top,
      left: bounds.hero.left,
      width: bounds.hero.width,
      height: bounds.hero.height,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
    });

    // Statically hide all non-active images
    gsap.set([img1Ref.current, img2Ref.current], { opacity: 0 });
    gsap.set(img0Ref.current, { opacity: 0.95 });

    // Timeline ending at top 10% of Best Sellers to ensure it has enough scroll distance for settles
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        endTrigger: '#best-sellers',
        end: 'top 10%',
        scrub: 1, // Smooth scrub linked to scrollbar
      },
    });

    // Flight Timeline:
    // Step 1: Fly from Hero to Collection (rotates 360 to stay facing forward when landed)
    tl.to(el, {
      top: bounds.collection.top,
      left: bounds.collection.left,
      width: bounds.collection.width,
      height: bounds.collection.height,
      rotateY: 360,
      rotateX: 0,
      duration: 1,
      ease: 'none',
    })
    .to(img0Ref.current, { opacity: 0, duration: 0.25 }, "<")
    .to(img1Ref.current, { opacity: 0.95, duration: 0.25 }, "<")

    // Step 1b: Hold/Settle inside Featured Collection card slot (keeps card locked during scroll)
    .to(el, {
      top: bounds.collection.top,
      left: bounds.collection.left,
      width: bounds.collection.width,
      height: bounds.collection.height,
      rotateY: 360,
      rotateX: 0,
      duration: 1.5, // Hold ratio
      ease: 'none',
    })

    // Step 2: Fly from Collection to Best Sellers (rotates to 720 to stay facing forward when landed)
    .to(el, {
      top: bounds.sellers.top,
      left: bounds.sellers.left,
      width: bounds.sellers.width,
      height: bounds.sellers.height,
      rotateY: 720,
      rotateX: 0,
      duration: 1,
      ease: 'none',
    })
    .to(img1Ref.current, { opacity: 0, duration: 0.25 }, "<")
    .to(img2Ref.current, { opacity: 0.95, duration: 0.25 }, "<")
    // Fade in the Featured Collection native card's image as the flying image lifts off and leaves it
    .to('#collection-native-img', { opacity: 1, duration: 0.25 }, "<")

    // Step 3: Settle and Fade out on top of Best Sellers native image container (native image fades in)
    .to(el, {
      opacity: 0,
      scale: 0.98,
      duration: 0.25,
      ease: 'none',
    })
    .to('#sellers-native-img', { opacity: 1, duration: 0.25 }, "<");

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [bounds]);

  const images = [
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80', // Cup (Hero)
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80', // Cup (Collection)
    'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80', // Espresso Blend (Sellers)
  ];

  return (
    <div
      ref={cardRef}
      className="hidden lg:block absolute z-30 pointer-events-none select-none"
      style={{
        perspective: '1200px',
        borderRadius: '16px',
        display: bounds ? 'block' : 'none',
      }}
    >
      {/* 3D Tilting image card (Image only, no details text) */}
      <div
        className="w-full h-full border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between transition-transform duration-300 ease-out relative rounded-inherit overflow-hidden"
        style={{
          transform: window.scrollY < 150
            ? `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
            : 'none',
          transformStyle: 'preserve-3d',
          borderRadius: 'inherit',
        }}
      >
        <div ref={img0Ref} style={{ backgroundImage: `url(${images[0]})` }} className="absolute inset-0 bg-cover bg-center" />
        <div ref={img1Ref} style={{ backgroundImage: `url(${images[1]})` }} className="absolute inset-0 bg-cover bg-center" />
        <div ref={img2Ref} style={{ backgroundImage: `url(${images[2]})` }} className="absolute inset-0 bg-cover bg-center" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-dark/30 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
