import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/ui/Header';
import Breadcrumb from './components/Breadcrumb';
import CompanyStory from './components/CompanyStory';
import FounderProfile from './components/FounderProfile';
import CoreValues from './components/CoreValues';
import DifferentiatingFactors from './components/DifferentiatingFactors';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 overflow-hidden">
      {/* <Helmet>
        <meta
          name="description"
          content="Learn about Silverline Creation's journey, founder Rahool Mayekar, core values, and what makes us Goa's trusted construction partner for residential and commercial projects."
        />
        <meta
          name="keywords"
          content="about silverline creation, construction company goa, rahool mayekar, building contractor goa, construction values, goa builders"
        />
        <meta property="og:title" content="Silverline Creation" />
        <meta property="og:description" content="Discover the story behind Goa's leading construction company and our commitment to excellence." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-us" />
      </Helmet> */}

      <Header />
      <Breadcrumb />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <CompanyStory />
        <CoreValues />
        <DifferentiatingFactors />
        <FounderProfile />
      </motion.main>

      <Footer />
    </div>
  );
};

export default AboutUs;
