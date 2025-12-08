import React from 'react';
import Image from '../../../components/AppImage';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="w-full pt-0 -mt-9">
      {/* === TOP HERO SECTION WITH BACKGROUND IMAGE === */}
      <div className="relative w-full h-[10vh] md:h-[50vh] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/assets/images/letBuild.png"
          alt="Office Background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Bottom Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050301] via-[#050301]/60 to-transparent z-10" />
      </div>

      {/* === ABOUT CONTENT SECTION === */}
      <div className="bg-[#050301] py-12 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image with orange border frame */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative w-full md:w-auto"
          >
            {/* Orange Border */}
            <div className="absolute bottom-4 right-4 w-full h-full bg-[#F15A24] z-0" />
            <div className="relative z-10">
              <Image
                src="/assets/images/construction1.png"
                alt="About Silverline"
                loading="lazy"
                className="w-full md:w-128 h-auto md:h-96 object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#F15A24] mb-6 uppercase">
              About Us
            </h2>
            <p className="text-[#F2F2F2] text-sm sm:text-base md:text-lg leading-[1.6] text-justify px-0 sm:px-0 md:px-0">
              At Silverline Creation, we don’t just build houses we create homes filled with warmth, care,
              and precision. Inspired by the timeless belief that every cloud has a silver lining, we stand
              as a symbol of transformation and trust. Every structure we build is rooted in purpose, empathy,
              and vision—because your dream deserves more than just brick and mortar. It deserves a partner
              who understands it. A team that values it. A builder that brings it to life.
            </p>

          </motion.div>
        </div>

        {/* === OUR APPROACH === */}
        <div className="bg-[#050301]">
          {/* Full-width Top Orange Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100vw' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="relative left-1/2 right-1/2 -mx-[50vw] h-[3px] bg-[#F15A24] mt-11"
          />

          <div className="py-12 px-4 sm:px-8 md:px-16 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto px-2 sm:px-4"
            >
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#F16319] mb-4 uppercase">
                Our Approach
              </h2>

              {/* Decorative Underline */}
              <div className="flex items-center justify-center mb-11">
                <div className="w-20 h-[1px] bg-[#059599]" />
                <div className="w-5 h-5 bg-[#059599] rounded-full mx-2" />
                <div className="w-20 h-[1px] bg-[#059599]" />
              </div>

              {/* Paragraph */}
              <p className="text-[#F2F2F2] text-lg sm:text-lg md:text-xl leading-[1.6] text-center px-4 sm:px-4 md:px-0">
                Silverline Creation is more than a construction company. We're your building partners
                bringing trust, precision, and a people-first approach to every space we shape across Goa.
                We don’t outsource. We don’t cut corners. We don’t disappear after handover. We deliver
                seamless, end-to-end execution with quality craftsmanship you can see and feel.
              </p>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
