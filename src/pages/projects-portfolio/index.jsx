import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import Header from "../../components/ui/Header";
import Footer from "./components/Footer";

const images = [
  "/assets/images/serviceImage1.png",
  "/assets/images/serviceImage2.png",
  "/assets/images/serviceImage3.png",
  "/assets/images/serviceImage4.png",
  "/assets/images/serviceImage5.png",
  "/assets/images/serviceImage6.png",
  "/assets/images/serviceImage7.png",
  "/assets/images/serviceImage8.png",
  "/assets/images/serviceImage9.png",
  "/assets/images/serviceImage10.png",
  "/assets/images/serviceImage11.png",
  "/assets/images/serviceImage12.png",
];

const directions = [
  { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } },
];

// Example project data
const sampleProject = {
  title: "Luxury Villa",
  image: "/assets/images/project.jpeg",
  budget: 25000000,
  status: "completed",
  rating: 4,
  duration: 12,
  area: 5000,
  type: "Residential",
  location: "Mumbai, India",
  description: "A luxurious villa project with modern design and top-notch amenities.",
  features: ["Swimming Pool", "Garden", "Gym", "Smart Home System"],
  has360Tour: true,
};

const ProjectsPortfolio = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      {/* Project Card */}
      <div>
        <ProjectCard/>
      </div>

      <main className="flex-grow relative overflow-hidden">
  <motion.section
    className="relative w-full bg-black py-10 overflow-hidden"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {/* Image gallery */}
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative aspect-[4/3] overflow-hidden"
            variants={directions[index % directions.length]}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: index * 0.15 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={img}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </div>
    </div>

    {/* Centered heading overlay */}
    <motion.div
      className="pointer-events-none absolute inset-0 flex items-center justify-center z-10 px-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
    >
      <motion.div
        className="bg-teal-600/60 text-white text-center py-4 sm:py-6 px-6 sm:px-12 rounded-lg sm:rounded-xl shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-xl sm:text-3xl md:text-5xl font-bold tracking-wide leading-snug">
          PROJECT <br /> SNAPSHOTS
        </h2>
      </motion.div>
    </motion.div>
  </motion.section>
</main>


      <Footer />
    </div>
  );
};

export default ProjectsPortfolio;
