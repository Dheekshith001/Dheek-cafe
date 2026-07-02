import React, { useState, useCallback, useRef } from 'react';
import gsap from 'gsap';
import SplashScreen from '../components/SplashScreen';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ScrollBackground from '../components/ScrollBackground';
import ScrollCard from '../components/ScrollCard';
import FloatingBeans from '../components/FloatingBeans';
import FeaturedCollection from '../components/FeaturedCollection';
import BestSellers from '../components/BestSellers';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import CoffeeMenu from '../components/CoffeeMenu';
import BrewingProcess from '../components/BrewingProcess';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useScrollCardContext } from '../context/ScrollCardContext';

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showCard,   setShowCard]   = useState(false);
  const [showHero,   setShowHero]   = useState(false);
  const [showBeans,  setShowBeans]  = useState(false);
  const [showRest,   setShowRest]   = useState(false);
  const [splashDone, setSplashDone] = useState(false);

  const flyRef = useRef(null);
  const { targets } = useScrollCardContext();

  // Called when user clicks the splash image
  const handleEnter = useCallback((circleBounds) => {
    document.body.style.overflow = 'hidden';

    const el = flyRef.current;
    if (!el) return;

    // Get the hero card slot position
    const heroTarget = targets['hero'];
    const heroBounds = heroTarget?.getBoundingClientRect?.() ?? null;

    // Start coordinates from the circular badge
    const startLeft = circleBounds ? circleBounds.left : (window.innerWidth - 260) / 2;
    const startTop = circleBounds ? circleBounds.top : (window.innerHeight - 260) / 2;
    const startWidth = circleBounds ? circleBounds.width : 260;
    const startHeight = circleBounds ? circleBounds.height : 260;

    // Set initial flyer state (circular card matching splash)
    gsap.set(el, {
      display: 'block',
      position: 'fixed',
      left: startLeft,
      top: startTop,
      width: startWidth,
      height: startHeight,
      borderRadius: '50%',
      border: '2.5px solid rgba(205,164,94,0.6)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.75)',
      rotateY: 0,
      rotateX: 0,
      rotateZ: 0,
      scale: 1,
      opacity: 1,
    });

    gsap.set('#fly-layer-a', { opacity: 1 });
    gsap.set('#fly-layer-b', { opacity: 0 });
    gsap.set(['#fly-accent-tl', '#fly-accent-tr', '#fly-accent-bl', '#fly-accent-br'], { opacity: 0 });

    if (!heroBounds) {
      gsap.to(el, { opacity: 0, duration: 0.8, onComplete: () => { gsap.set(el, { display: 'none' }); revealAll(); } });
      return;
    }

    const tl = gsap.timeline({
      onComplete() {
        gsap.set(el, { display: 'none' });
        document.body.style.overflow = 'unset';
        setSplashDone(true); // Unmount SplashScreen only after landing!
        revealAll();
      }
    });

    // Phase 1: Quick punch zoom (0.12s)
    tl.to(el, {
      scale: 1.08,
      duration: 0.12,
      ease: 'power2.out',
    })
    // Phase 2: Stretch, fly, spin 3D, morph to rectangle, cross-fade image
    .to(el, {
      left: heroBounds.left,
      top: heroBounds.top,
      width: heroBounds.width,
      height: heroBounds.height,
      borderRadius: '20px',
      border: '1.5px solid rgba(205,164,94,0.35)',
      boxShadow: '0 25px 60px rgba(0,0,0,0.75)',
      rotateY: 360, // 3D spin!
      scale: 1.0,
      duration: 1.25,
      ease: 'back.out(1.1)', // Elastic landing bounce overshoot
    }, '+=0.04')
    // Cross-fade the images during the fly
    .to('#fly-layer-a', {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut',
    }, '<+=0.3')
    .to('#fly-layer-b', {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.inOut',
    }, '<')
    // Fade in the gold corner accents near the end of flight
    .to(['#fly-accent-tl', '#fly-accent-tr', '#fly-accent-bl', '#fly-accent-br'], {
      opacity: 1,
      duration: 0.4,
    }, '-=0.45');

    function revealAll() {
      // 1. Show the landed 3D Card and start Hero stagger immediately
      setShowCard(true);
      setShowHero(true);

      // 2. Wait 3.0 seconds, then reveal the Navbar
      setTimeout(() => {
        setShowNavbar(true);
      }, 3000);

      // 3. Wait 4.0 seconds, then reveal the floating beans and the rest of the sections
      setTimeout(() => {
        setShowBeans(true);
        setShowRest(true);
      }, 4000);
    }
  }, [targets]);

  return (
    <div className="bg-transparent min-h-screen text-cream relative" id="home">

      {/* Fixed background video + overlays */}
      <ScrollBackground />

      {/* ── Navbar — Animates in after splash screen transition starts ── */}
      <div className={`transition-opacity duration-1000 ease-out ${showNavbar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <Navbar />
      </div>

      {/* Splash: fullscreen logo, click to enter */}
      {!splashDone && <SplashScreen onEnter={handleEnter} />}

      {/* Ghost flyer wrapper: flies and morphs from circular badge to card */}
      <div
        ref={flyRef}
        style={{
          display: 'none',
          position: 'fixed',
          pointerEvents: 'none',
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          zIndex: 989,
          overflow: 'hidden',
        }}
      >
        {/* Layer A: Logo Badge */}
        <div
          id="fly-layer-a"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('/logocafe.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 1,
          }}
        />
        {/* Layer B: Coffee Image */}
        <div
          id="fly-layer-b"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0,
          }}
        />
        {/* Gold corner accents inside flyer */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-gold/50 rounded-tl-sm" style={{ opacity: 0 }} id="fly-accent-tl" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-gold/50 rounded-tr-sm" style={{ opacity: 0 }} id="fly-accent-tr" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-gold/50 rounded-bl-sm" style={{ opacity: 0 }} id="fly-accent-bl" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-gold/50 rounded-br-sm" style={{ opacity: 0 }} id="fly-accent-br" />
      </div>

      {/* 1. 3D ScrollCard — appears right where logo landed */}
      <div className={`transition-opacity duration-1000 ease-out ${showCard ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ScrollCard skipEntrance={true} />
      </div>

      {/* 2. Hero names & CTA */}
      <div>
        <Hero showHero={showHero} />
      </div>

      {/* 3. Floating coffee beans */}
      <div className={`transition-opacity duration-1000 ease-out ${showBeans ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <FloatingBeans />
      </div>

      {/* 4. All remaining sections */}
      <div className={`transition-opacity duration-1000 ease-out ${showRest ? 'opacity-100' : 'opacity-0'}`}>
        <FeaturedCollection />
        <BestSellers />
        <About />
        <WhyChooseUs />
        <CoffeeMenu />
        <BrewingProcess />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Newsletter />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}
