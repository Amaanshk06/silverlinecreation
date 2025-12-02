import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ProcessTimeline from './components/ProcessTimeline';
import Footer from './components/Footer';

// Simple motion variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ServicesHub = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <main className="">
        <motion.section>
          <ServiceHero />
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProcessTimeline />
        </motion.section>

        <motion.section>
          <Footer />
        </motion.section>
      </main>
    </div>
  );
};

export default ServicesHub;
