import React from 'react';
import { motion } from 'framer-motion';

// marquee animation
const styles = `
@keyframes marquee-seamless {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
.animate-marquee-seamless {
  display: flex;
  width: max-content;
  animation: marquee-seamless 60s linear infinite;
}
`;

const HeroSection = () => {
  const videoSrc = "/assets/videos/homepageBgVideo";
  const gifSrc = "/assets/videos/animated-logo.gif";
  const marqueeText = "End-to-end construction solutions from Goa's most trusted building partner.";

  // Repeat the content to avoid gaps
  const repeatedText = [...Array(10)].map((_, idx) => (
    <span key={idx} className="mx-4">
      {marqueeText}
    </span>
  ));

  return (
    <section className="relative h-[100vh] lg:h-[60vh] xl:h-[100vh] sm:h-screen-[350px]  w-full overflow-hidden">
      {/* Inject keyframes */}
      <style>{styles}</style>

      {/* Background Video */}
      <motion.video
        className="absolute inset-0 w-full h-full object-cover grayscale"
        autoPlay
        muted
        loop
        playsInline
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        loading="lazy"
      >
        <source src={`${videoSrc}.mp4`} type="video/mp4" />
        <source src={`${videoSrc}.webm`} type="video/webm" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-144 bg-gradient-to-t from-[#050301] via-[#050301]/80 via-50% to-transparent z-10" />

      {/* Center Logo + Heading */}
      <div className="absolute bottom-16 sm:bottom-32 md:bottom-36 left-1/2 transform -translate-x-1/2 text-center z-20">
        <motion.img
          src={gifSrc}
          alt="Animated Logo"
          className="h-20 sm:h-24 md:h-32 mb-5 mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.h1
          className="text-[#F2F2F2] text-base sm:text-base md:text-5xl font-semibold tracking-wide italic"
          style={{ fontFamily: "'Merriweather', serif", fontStyle: "italic" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          You Dream. We Build.
        </motion.h1>
              {/* Centered Button */}
          <div className="flex justify-center mt-7">
            <a
              href="/SilverlineBrochure.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 border-2 border-[#F16319] bg-[#059599] text-white hover:bg-[#F16319] hover:text-[#050301] hover:border-[#059599] transition-all duration-300 font-semibold text-sm sm:text-base"
            >
              Download Brochure
            </a>
          </div>
      </div>

      {/* Seamless Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-30 bg-[#059599] py-2">
        <div className="animate-marquee-seamless text-[#F2F2F2] text-sm sm:text-base md:text-3xl font-medium italic whitespace-nowrap">
          {repeatedText}
          {repeatedText}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
