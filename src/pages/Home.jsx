import React, { useState, useEffect } from 'react';
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

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Lock page scroll during the 3-second cinematic video intro
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setShowContent(true);
      document.body.style.overflow = 'unset';
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="bg-transparent min-h-screen text-cream relative" id="home">
      {/* Scroll-linked background transition (always visible as base layer) */}
      <ScrollBackground />

      {/* Main Content Wrapper - Fades in smoothly after 3 seconds */}
      <div
        className={`transition-opacity duration-1000 ease-out ${
          showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Floating 3D Morphing Card */}
        <ScrollCard />

        {/* Floating Background Coffee Beans */}
        <FloatingBeans />

        {/* 1. Premium Navbar */}
        <Navbar />

        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Featured Coffee Collection */}
        <FeaturedCollection />

        {/* 4. Best Sellers */}
        <BestSellers />

        {/* 5. About Dheek Coffee */}
        <About />

        {/* 6. Why Choose Dheek Coffee */}
        <WhyChooseUs />

        {/* 7. Coffee Menu */}
        <CoffeeMenu />

        {/* 8. Brewing Process */}
        <BrewingProcess />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Gallery */}
        <Gallery />

        {/* 11. FAQ */}
        <FAQ />

        {/* 12. Newsletter */}
        <Newsletter />

        {/* 13. Contact Form */}
        <Contact />

        {/* 14. Footer */}
        <Footer />
      </div>
    </div>
  );
}
