import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "DEEP BORING PILE FOUNDATION",
    description:
      "Ensure structural stability with our deep boring pile foundation solutions in Goa—perfect for varied soil conditions. Precision-drilled and engineered for safety, durability, and long-term strength.",
    image: "assets/images/deepBoringImage.png",
    keywords: ["foundation work Goa", "pile foundation construction"],
  },
  {
    id: 2,
    title: "RESIDENTIAL & COMMERCIAL PROJECTS",
    description:
      "From elegant family homes to multi-storey corporate buildings, Silverline handles all types of residential and commercial construction in Goa with full-service project management.",
    image: "assets/images/turnkeyImage.png",
    keywords: [
      "residential construction Goa",
      "commercial building contractors Goa",
    ],
  },
  {
    id: 3,
    title: "BUNGALOWS",
    description:
      "Build your dream bungalow with Silverline’s in-house team. We combine traditional charm with modern convenience to deliver personalized, luxurious homes across North and South Goa.",
    image: "assets/images/residentialImage.png",
    keywords: ["bungalow construction Goa", "custom bungalows Goa"],
  },
  {
    id: 4,
    title: "INTERIOR DESIGNING",
    description:
      "We offer expert interior design services in Goa—balancing beauty with functionality. From concept to execution, every space is styled to reflect your personality and purpose.",
    image: "assets/images/interiorImage.png",
    keywords: ["interior design Goa", "home interiors Goa", "turnkey interiors"],
  },
  {
    id: 5,
    title: "REPAIR & MAINTENANCE OF OLD STRUCTURES",
    description:
      "Give your aging property a new lease on life. We specialize in structural repairs, waterproofing, upgrades, and full refurbishments for old homes and buildings across Goa.",
    image: "assets/images/structuralRepairImage.png",
    keywords: [
      "structural repairs Goa",
      "home renovation Goa",
      "refurbish old homes Goa",
    ],
  },
];

const Card = ({ service, index }) => (
  <motion.div
    key={service.id}
    className="flex flex-col h-full items-start text-left bg-[#050301] w-full max-w-sm mx-auto"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <img
      src={service.image}
      alt={service.title}
      loading="lazy"
      className="w-full h-48 sm:h-56 object-cover"
    />

    <motion.div
      className="w-full flex-1"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
      viewport={{ once: true }}
    >
      <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-bold text-[#F16319]">
        {service.title}
      </h3>
      <p className="mt-2 mb-4 text-sm sm:text-base text-[#F2F2F2] leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-20 bg-[#050301] relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 h-1 bg-[#F16319]"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      {/* All cards in one uniform grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28 items-stretch">
        {services.map((service, index) => (
          <Card key={service.id} service={service} index={index} />
        ))}

        {/* Contact Button in the same row as the 5th card */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact-consultation"
            className="inline-flex flex-wrap items-center gap-2 px-6 py-3 border-2 border-[#F16319] bg-[#059599] text-[#F2F2F2] hover:bg-[#F16319] hover:text-[#050301] hover:border-[#059599] transition-colors duration-300 font-bold text-sm"
          >
            CONTACT US <span className="text-lg font-bold">{">"}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
