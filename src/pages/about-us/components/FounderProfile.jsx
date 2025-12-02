import React from 'react';
import { motion } from 'framer-motion';
import { Users, PhoneCall, Hammer } from "lucide-react";

const FounderSection = () => {
  return (
    <section className="relative bg-[#050301] py-20 overflow-hidden text-[#F2F2F2]">
      {/* Background Repeating Text */}
      <div className="absolute inset-0 flex flex-col justify-start sm:justify-center z-0 mt-28 sm:mt-0 md:mb-[700px] lg:mb-128 gap-0">
{[...Array(4)].map((_, i) => (
  <div
    key={i}
    style={{ opacity: 0.3 - i * 0.05 }} // fade out each subsequent line
    className="w-full text-center text-[30px] xs:text-[30px] sm:text-[60px] md:text-[70px] lg:text-[130px] font-extrabold uppercase tracking-tighter leading-none whitespace-nowrap sm:-m-2 md:-m-3 lg:-m-8"
  >
    <span className="text-[#F16319]">MEET OUR FOUNDER</span>
  </div>
))}

      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Founder Image */}
        <motion.img
          src="/assets/images/founderImage.png"
          alt="Rahool Mayekar"
          loading="lazy"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-[400px] sm:w-[360px] md:w-[420px] lg:w-[580px] grayscale object-cover rounded-md mb-6"
        />

        {/* Name */}
        <h3 className="italic text-[#F2F2F2] text-lg sm:text-xl md:text-2xl font-medium z-10 uppercase">
          Rahool Mayekar
        </h3>

        {/* Underline */}
        <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[700px] h-[3px] bg-[#059599] mt-3 mb-4" />

        {/* Description */}
        <p className="text-[#F2F2F2] text-sm sm:text-base max-w-3xl px-2 sm:px-4 mb-10 leading-relaxed">
          With over a decade of hands-on experience, Rahool built Silverline Creation as a transparent, honest,
          and emotionally driven construction brand. He leads every project with vision and dedication,
          backed by a loyal team of skilled professionals.
        </p>

        {/* Section Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[#F16319] text-3xl sm:text-4xl font-semibold text-center mb-2 uppercase"
        >
          Culture & Team
        </motion.h1>

        {/* Decorative Underline */}
        <div className="flex items-center justify-center mb-11">
          <div className="w-10 sm:w-16 h-[1px] bg-[#059599]" />
          <div className="w-4 sm:w-5 h-4 sm:h-5 bg-[#059599] rounded-full mx-2" />
          <div className="w-10 sm:w-16 h-[1px] bg-[#059599]" />
        </div>

        {/* Team Culture Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4 max-w-6xl mx-auto"
        >
          {/* Card 1 */}
          <div className="bg-[#FAFAFA] border border-gray-200 shadow-md rounded-lg p-5 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03] hover:border-[#F16319] hover:shadow-[0_10px_25px_-5px_#F16319]/50 group">
            <div className="bg-[#F16319] text-white rounded-full w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce">
              <Users size={24} className="sm:size-7" />
            </div>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-gray-800 uppercase">Supportive Team</h4>
            <p className="text-sm text-gray-600">
              We operate like a family—supportive and always there for one another.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FAFAFA] border border-gray-200 shadow-md rounded-lg p-5 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03] hover:border-[#F16319] hover:shadow-[0_10px_25px_-5px_#F16319]/50 group">
            <div className="bg-[#F16319] text-white rounded-full w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce">
              <PhoneCall size={24} className="sm:size-7" />
            </div>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-gray-800 uppercase">Responsive Communication</h4>
            <p className="text-sm text-gray-600">
              Quick and clear communication with clients at every step.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FAFAFA] border border-gray-200 shadow-md rounded-lg p-5 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03] hover:border-[#F16319] hover:shadow-[0_10px_25px_-5px_#F16319]/50 group">
            <div className="bg-[#F16319] text-white rounded-full w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce">
              <Hammer size={24} className="sm:size-7" />
            </div>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-gray-800 uppercase">Work Hard, Build Harder</h4>
            <p className="text-sm text-gray-600">
              We bring passion, precision, and strength to every project we build.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
