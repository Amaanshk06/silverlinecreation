import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import Header from "../../components/ui/Header";
import Footer from "./components/Footer";

const images = [
  "/assets/images/serviceImage1.bmp",
  "/assets/images/serviceImage2.bmp",
  "/assets/images/serviceImage3.bmp",
  "/assets/images/serviceImage4.bmp",
  "/assets/images/serviceImage5.bmp",
  "/assets/images/serviceImage6.bmp",
  "/assets/images/serviceImage7.bmp",
  "/assets/images/serviceImage8.bmp",
  "/assets/images/serviceImage9.bmp",
  "/assets/images/serviceImage10.bmp",
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
          className="relative w-full h-screen overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:grid-rows-1  md:grid-rows-2">
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Project ${index + 1}`}
                className="w-full h-32 sm:h-40 md:h-full object-cover"
                variants={directions[index % directions.length]}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10 px-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <motion.div
              className="bg-teal-600 text-white text-center py-4 sm:py-6 px-6 sm:px-12 rounded-lg sm:rounded-xl shadow-2xl"
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
