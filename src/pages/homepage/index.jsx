import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import OriginStorySection from './components/OriginStorySection';
import WhySilverline from './components/WhySilverline';
import TestimonialCarousel from './components/TestimonialCarousel';
import ConsultationWidget from './components/ConsultationWidget';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* <Helmet>
        <meta
          name="description"
          content="Silverline Creation specializes in residential and commercial construction in Goa. Delivering quality projects with transparency, innovation, and trust."
        />
        <meta
          name="keywords"
          content="construction company goa, building contractor goa, silverline creation, goa builders, residential projects goa, commercial construction goa"
        />
        <meta property="og:title" content="Silverline Creation - Goa’s Trusted Construction Partner" />
        <meta property="og:description" content="Your trusted partner for high-quality construction projects in Goa." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet> */}

      <Header />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <HeroSection />
        <OriginStorySection />
        <WhySilverline />
        <ConsultationWidget />
        <TestimonialCarousel />
      </motion.main>

      <Footer />
    </div>
  );
};

export default Homepage;
