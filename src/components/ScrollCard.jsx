import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollCardContext } from '../context/ScrollCardContext';

gsap.registerPlugin(ScrollTrigger);

const getDocumentBounds = (el) => {
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  return {
    top:    rect.top  + (window.scrollY || window.pageYOffset),
    left:   rect.left + (window.scrollX || window.pageXOffset),
    width:  rect.width,
    height: rect.height,
  };
};

export default function ScrollCard({ skipEntrance = false }) {
  const cardRef      = useRef(null);
  const glowRef      = useRef(null);
  const shimmerRef   = useRef(null);
  const { targets }  = useScrollCardContext();
  const [bounds, setBounds]   = useState(null);
  const [ready, setReady]     = useState(false); // entrance done
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const img0Ref = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  // ── Strong 3D mouse tilt ──
  useEffect(() => {
    const handle = (e) => {
      if (window.scrollY > 150) return;
      setMousePos({
        x: (e.clientX - window.innerWidth  / 2) / 20,
        y: (e.clientY - window.innerHeight / 2) / 20,
      });
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  // ── Calculate bounds ──
  useEffect(() => {
    const calc = () => {
      const hero       = targets['hero'];
      const collection = targets['collection'];
      const sellers    = targets['sellers'];
      if (!hero || !collection || !sellers) return;
      setBounds({
        hero:       getDocumentBounds(hero),
        collection: getDocumentBounds(collection),
        sellers:    getDocumentBounds(sellers),
      });
    };
    calc();
    const ro = new ResizeObserver(calc);
    if (document.body) ro.observe(document.body);
    window.addEventListener('resize', calc);
    window.addEventListener('load', calc);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', calc);
      window.removeEventListener('load', calc);
    };
  }, [targets]);

  // ── Cinematic entrance animation ──
  useEffect(() => {
    if (!bounds) return;
    if (skipEntrance) {
      setReady(true);
      return;
    }
    const el = cardRef.current;
    if (!el) return;

    // Start: tiny + far above hero slot + heavily rotated (like a card face-down)
    gsap.set(el, {
      top:     bounds.hero.top - 60,
      left:    bounds.hero.left + bounds.hero.width * 0.5,
      width:   bounds.hero.width,
      height:  bounds.hero.height,
      opacity: 0,
      scale:   0.2,
      rotateY: 90,
      rotateX: -30,
      rotateZ: 15,
    });

    gsap.set([img1Ref.current, img2Ref.current], { opacity: 0 });
    gsap.set(img0Ref.current, { opacity: 0.95 });

    const tl = gsap.timeline({ delay: 0.1 });

    tl
      // Phase 1 — zoom in + start flip (0.45s)
      .to(el, {
        opacity: 1,
        scale: 1.12,
        left: bounds.hero.left + bounds.hero.width * 0.15,
        top:  bounds.hero.top - 20,
        rotateY: 40,
        rotateX: -10,
        rotateZ: -5,
        duration: 0.45,
        ease: 'power3.out',
      })
      // Phase 2 — slam into position + full flip (0.4s)
      .to(el, {
        left:    bounds.hero.left,
        top:     bounds.hero.top,
        scale:   1,
        rotateY: 0,
        rotateX: 0,
        rotateZ: 0,
        duration: 0.4,
        ease: 'back.out(1.8)',
        onComplete: () => {
          setReady(true);
        },
      });

    return () => tl.kill();
  }, [bounds]);

  // ── Scroll-linked flight path (after entrance) ──
  useEffect(() => {
    if (!bounds || !ready) return;
    const el = cardRef.current;
    if (!el) return;

    gsap.set(el, {
      top: bounds.hero.top, left: bounds.hero.left,
      width: bounds.hero.width, height: bounds.hero.height,
      opacity: 1, scale: 1, rotateY: 0, rotateX: 0, rotateZ: 0,
    });
    gsap.set([img1Ref.current, img2Ref.current], { opacity: 0 });
    gsap.set(img0Ref.current, { opacity: 0.95 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        endTrigger: '#best-sellers',
        end: 'top 10%',
        scrub: 1,
      },
    });

    tl.to(el, {
      top: bounds.collection.top, left: bounds.collection.left,
      width: bounds.collection.width, height: bounds.collection.height,
      rotateY: 360, rotateX: 0, duration: 1, ease: 'none',
    })
    .to(img0Ref.current, { opacity: 0, duration: 0.25 }, '<')
    .to(img1Ref.current, { opacity: 0.95, duration: 0.25 }, '<')
    .to(el, {
      top: bounds.collection.top, left: bounds.collection.left,
      width: bounds.collection.width, height: bounds.collection.height,
      rotateY: 360, duration: 1.5, ease: 'none',
    })
    .to(el, {
      top: bounds.sellers.top, left: bounds.sellers.left,
      width: bounds.sellers.width, height: bounds.sellers.height,
      rotateY: 720, rotateX: 0, duration: 1, ease: 'none',
    })
    .to(img1Ref.current, { opacity: 0, duration: 0.25 }, '<')
    .to(img2Ref.current, { opacity: 0.95, duration: 0.25 }, '<')
    .to('#collection-native-img', { opacity: 1, duration: 0.25 }, '<')
    .to(el, { opacity: 0, scale: 0.98, duration: 0.25, ease: 'none' })
    .to('#sellers-native-img', { opacity: 1, duration: 0.25 }, '<');

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [bounds, ready]);

  const images = [
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80',
  ];

  return (
    <div
      ref={cardRef}
      className="hidden lg:block absolute z-30 pointer-events-none select-none"
      style={{
        perspective:   '900px',
        borderRadius:  '20px',
        display:        bounds ? 'block' : 'none',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Gold burst glow on landing */}
      <div ref={glowRef} className="absolute pointer-events-none" style={{
        inset: '-20px',
        borderRadius: '28px',
        border: '2px solid rgba(205,164,94,0.8)',
        boxShadow: '0 0 40px 10px rgba(205,164,94,0.6), inset 0 0 30px rgba(205,164,94,0.2)',
        opacity: 0,
        transformOrigin: 'center',
      }} />

      {/* Card body */}
      <div
        className="w-full h-full relative overflow-hidden"
        style={{
          borderRadius: 'inherit',
          border: '1.5px solid rgba(205,164,94,0.35)',
          boxShadow: `
            0 25px 60px rgba(0,0,0,0.75),
            0 0 0 1px rgba(205,164,94,0.1),
            inset 0 1px 0 rgba(255,255,255,0.08)
          `,
          transform: ready && window.scrollY < 150
            ? `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
            : 'none',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.12s ease-out',
        }}
      >
        {/* Coffee images */}
        <div ref={img0Ref} style={{ backgroundImage: `url(${images[0]})` }}
          className="absolute inset-0 bg-cover bg-center" />
        <div ref={img1Ref} style={{ backgroundImage: `url(${images[1]})` }}
          className="absolute inset-0 bg-cover bg-center" />
        <div ref={img2Ref} style={{ backgroundImage: `url(${images[2]})` }}
          className="absolute inset-0 bg-cover bg-center" />

        {/* Rich gradient overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(135deg, rgba(205,164,94,0.06) 0%, transparent 50%, rgba(0,0,0,0.4) 100%)',
        }} />

        {/* Shimmer sweep on landing */}
        <div ref={shimmerRef} className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)',
          opacity: 0,
        }} />

        {/* Gold corner accents */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-gold/50 rounded-tl-sm" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-gold/50 rounded-tr-sm" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-gold/50 rounded-bl-sm" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-gold/50 rounded-br-sm" />

        {/* Bottom vignette */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(10,5,2,0.45) 0%, transparent 50%)' }} />
      </div>
    </div>
  );
}
