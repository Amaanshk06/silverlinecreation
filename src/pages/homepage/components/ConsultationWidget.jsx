import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const projects = [
  {
    image: 'assets/images/project1.jpg',
    title: 'Residential Structure – RCC Framework',
    description: 'Reinforced concrete framework construction with slab and column work executed as per structural engineering standards.',
  },
  {
    image: 'assets/images/project4.jpg',
    title: 'Modern Apartment Building',
    description: 'Completed multi-storey residential apartment with contemporary façade design and efficient space planning.',
  },
  {
    image: 'assets/images/project3.jpg',
    title: 'Commercial Building – Ongoing Construction',
    description: 'Commercial structure under development featuring high-load RCC slabs and robust site execution.',
  },
  {
    image: 'assets/images/project2.jpg',
    title: 'Slab Casting & Foundation Work',
    description: 'On-site slab casting and reinforcement work carried out with precision to ensure long-term structural durability.',
  },
];


const OurPortfolio = () => {
  return (
    <section className="relative w-full text-white py-16 px-4 sm:px-8 lg:px-20 overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        loading="lazy"
      >
        <source src="/assets/videos/Body.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[#050301]/70 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F16319] mb-3">OUR PORTFOLIO</h2>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg bg-[#111] transition-transform hover:scale-[1.015]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 sm:h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-4">
                <h3 className="text-[#F16319] text-base sm:text-lg font-semibold mb-1 uppercase">{project.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/projects-portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#F16319] bg-[#059599] text-white hover:bg-[#F16319] hover:text-[#050301] hover:border-[#059599] transition-colors duration-300 font-bold"
          >
            Explore Our Categories <span className="text-lg font-bold">{'>'}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
