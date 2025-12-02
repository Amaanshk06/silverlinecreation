import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BackgroundSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <>
      {/* Background image section */}
      <section
        ref={ref}
        className="relative h-[350px] sm:h-[400px] md:h-[450px] bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url('assets/images/project.jpeg')" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#050301] bg-opacity-50 px-4 sm:px-6 md:px-18 ml-4 sm:ml-10 md:ml-20 py-2 text-[#F2F2F2] text-center max-w-[95%] sm:max-w-[90%] md:max-w-lg mb-4 sm:mb-6"
        >
          <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-[#F16319] uppercase">
            Projects
          </h1>
        </motion.div>

        {/* Orange animated line at the bottom */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[2px] sm:h-1 bg-[#F16319] origin-left"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </section>

      {/* Portfolio description below */}
      <section className="bg-[#050301] py-20 sm:py-32 md:py-44 px-4 sm:px-8 md:px-16 text-center relative overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-3xl font-bold text-[#F16319] mb-4 uppercase"
        >
          Our Portfolio
        </motion.h2>

        {/* Decorative Underline */}
        <div className="flex items-center justify-center mb-8 sm:mb-11">
          <div className="w-8 sm:w-10 md:w-16 h-[1px] bg-[#059599]" />
          <div className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 bg-[#059599] rounded-full mx-2" />
          <div className="w-8 sm:w-10 md:w-16 h-[1px] bg-[#059599]" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm md:text-lg text-[#F2F2F2] max-w-4xl mx-auto leading-relaxed px-2"
        >
          We take pride in building diverse structures across Goa, ranging from
          elegant bungalows to multi-storey commercial buildings and high-end
          hotels. Every project is a story of detail, design, and discipline.
        </motion.p>

        {/* Orange line at bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 w-full h-[2px] sm:h-1 bg-[#F16319] origin-left"
        />
      </section>
    </>
  );
};

export default BackgroundSection;
