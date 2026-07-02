import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FloatingBeans() {
  const bean1Ref = useRef(null);
  const bean2Ref = useRef(null);
  const bean3Ref = useRef(null);
  const bean4Ref = useRef(null);

  useEffect(() => {
    // Parallax scrolling translations and rotations for each bean
    gsap.to(bean1Ref.current, {
      y: '220vh',
      rotation: 360,
      ease: 'none',
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      },
    });

    gsap.to(bean2Ref.current, {
      y: '180vh',
      rotation: -280,
      ease: 'none',
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    gsap.to(bean3Ref.current, {
      y: '260vh',
      rotation: 480,
      ease: 'none',
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
      },
    });

    gsap.to(bean4Ref.current, {
      y: '200vh',
      rotation: -180,
      ease: 'none',
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
      },
    });
  }, []);

  // Coffee Bean SVG element
  const BeanSVG = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <ellipse cx="50" cy="50" rx="36" ry="24" transform="rotate(25 50 50)" />
      <path d="M 15 38 C 36 46, 64 54, 85 62" fill="none" stroke="#110906" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
    </svg>
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Bean 1 - Left Side near Collection */}
      <div
        ref={bean1Ref}
        className="absolute left-6 md:left-12 top-[120vh] w-12 h-12 md:w-16 md:h-16 text-gold/10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
      >
        <BeanSVG className="w-full h-full" />
      </div>

      {/* Bean 2 - Right Side near Best Sellers */}
      <div
        ref={bean2Ref}
        className="absolute right-8 md:right-16 top-[180vh] w-14 h-14 md:w-20 md:h-20 text-espresso-dark/20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
      >
        <BeanSVG className="w-full h-full" />
      </div>

      {/* Bean 3 - Left Side near About / Why Choose Us */}
      <div
        ref={bean3Ref}
        className="absolute left-10 md:left-24 top-[250vh] w-16 h-16 md:w-22 md:h-22 text-gold/5 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
      >
        <BeanSVG className="w-full h-full" />
      </div>

      {/* Bean 4 - Right Side near Menu */}
      <div
        ref={bean4Ref}
        className="absolute right-12 md:right-24 top-[320vh] w-12 h-12 md:w-16 md:h-16 text-espresso-dark/35 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
      >
        <BeanSVG className="w-full h-full" />
      </div>
    </div>
  );
}
