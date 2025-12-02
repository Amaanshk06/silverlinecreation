import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartHandshake,
  ShieldCheck,
  Hammer,
  CheckCircle2,
  Repeat,
} from 'lucide-react';

const backgroundImages = [
  "/assets/images/construction1.png",
  "/assets/images/construction2.png",
  "/assets/images/construction3.png",
];

const CoreValues = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const values = [
    {
      icon: <HeartHandshake className="w-12 h-12 text-[#059599]" />,
      title: 'Empathy',
      description: 'We listen to your dreams, needs, and concerns at every stage.',
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-[#059599]" />,
      title: 'Transparency',
      description: 'No surprises, no hidden clauses. What we say is what we do.',
    },
    {
      icon: <Hammer className="w-12 h-12 text-[#059599]" />,
      title: 'Hard Work',
      description: 'We go the extra mile to ensure your project exceeds expectations.',
    },
    {
      icon: <CheckCircle2 className="w-12 h-12 text-[#059599]" />,
      title: 'Commitment',
      description: "We treat every project as if it's our own home.",
    },
    {
      icon: <Repeat className="w-12 h-12 text-[#059599]" />,
      title: 'Reliability',
      description: 'You can count on us to deliver — on time, every time.',
    },
  ];

  return (
    <section className="relative w-full bg-[#050301] text-white overflow-hidden py-20">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={backgroundImages[currentImage]}
            src={backgroundImages[currentImage]}
            alt="Core Value Background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover absolute inset-0"
            loading="lazy"
          />
        </AnimatePresence>
      </div>

      {/* Full Section Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050301]/60 via-[#050301]/90 to-[#050301] z-10" />

      {/* Top Orange Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-1 bg-orange-500 z-30 origin-left transform will-change-transform"
      />


      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 mt-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-orange-500 text-center mb-16 uppercase"
        >
          Our Core Values
        </motion.h2>

        {/* First Row (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {values.slice(0, 3).map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden flex flex-col justify-between bg-[#ffffff10] border border-[#059599] hover:border hover:border-[#F2F2F2] rounded-xl p-8 text-center h-full transition-all duration-300"
              >
                {/* Blur Layer */}
                <div className="absolute inset-0 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#F16319] uppercase">{item.title}</h3>
                  <p className="text-[#F2F2F2]">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Second Row (2 Cards Centered) */}
        <div className="mt-8 flex flex-col lg:flex-row justify-center gap-8">
          {values.slice(3).map((item, index) => {
            return (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden flex flex-col justify-between bg-[#ffffff10] border border-[#059599] hover:border hover:border-[#F2F2F2] rounded-xl p-8 text-center h-full w-full lg:max-w-sm transition-all duration-300"
              >
                {/* Blur Layer */}
                <div className="absolute inset-0 backdrop-blur-2xl opacity-0 group-hover:opacity-100  transition-opacity duration-300 z-0" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#F16319] uppercase">{item.title}</h3>
                  <p className="text-[#F2F2F2]">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
