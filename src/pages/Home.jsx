import React from 'react';
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
  return (
    <div className="bg-transparent min-h-screen text-cream relative" id="home">
      {/* Scroll-linked background transition */}
      <ScrollBackground />

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

      {/* 13. Contact */}
      <Contact />

      {/* 14. Premium Footer */}
      <Footer />
    </div>
  );
}
