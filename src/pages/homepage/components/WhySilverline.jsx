import React from "react";
import { motion } from "framer-motion";
import { Building2, Ruler, Layers, Hammer, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const serviceItems = [
  {
    title: "Complete Residential & Commercial Construction",
    icon: <Building2 size={28} />,
    description:
      "Comprehensive building solutions for both homes and businesses—from planning to full construction.",
    image: "/assets/images/residentialImage.png",
  },
  {
    title: "Interior Designing & Fit-Outs",
    icon: <Ruler size={28} />,
    description:
      "Modern, functional interiors and turnkey fit-outs tailored to your lifestyle or brand.",
    image: "/assets/images/interiorImage.png",
  },
  {
    title: "Deep Boring Pile Foundation",
    icon: <Layers size={28} />,
    description:
      "Reliable piling services for high-load structures using precision boring and soil testing.",
    image: "/assets/images/deepBoringImage.png",
  },
  {
    title: "Structural Repairs & Renovation",
    icon: <Hammer size={28} />,
    description:
      "Revitalize old structures with expert crack repair, retrofitting, and waterproofing.",
    image: "/assets/images/structuralRepairImage.png",
  },
  {
    title: "Turnkey Project Management",
    icon: <Briefcase size={28} />,
    description:
      "From concept to completion—seamless project delivery under one professional team.",
    image: "/assets/images/turnkeyImage.png",
  },
];

const ServiceHero = () => {
  return (
    <section className="bg-[#050301] text-[#F2F2F2] w-full overflow-hidden">
      {/* Top Orange Line */}
      <motion.div
        className="w-screen h-1 bg-[#F16319]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
      />

      <div className="px-4">
        {/* Heading */}
        <div className="text-center my-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F16319]">
            SERVICES OFFERED
          </h2>
        </div>

        {/* Grid Section */}
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-2">
          {serviceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative w-full h-[160px] rounded-md overflow-hidden shadow-md group p-3 bg-[#050301]">
                {/* Only image gets blurred */}
                <div className="absolute inset-0 z-0 transition duration-300 ease-in-out group-hover:blur-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlay (text & icon) stays sharp */}
                <div className="absolute inset-0 bg-[#050301]/60 z-10 flex flex-col justify-center items-center text-[#F2F2F2] text-sm font-semibold px-2 uppercase tracking-wide text-center">
                  <div className="flex items-center gap-2 mb-1 flex-wrap justify-center">
                    {item.icon}
                    <span className="text-xs md:text-sm">{item.title}</span>
                  </div>
                </div>

                {/* Bottom tab (not blurred) */}
                <div className="absolute bottom-0 left-0 w-full h-4 bg-[#050301] z-20" />
                <div className="absolute bottom-0  left-0 w-full h-1 bg-[#059599] z-30" />
              </div>

              <p className="text-[#F2F2F2]/80 text-sm mt-4 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

          {/* Explore More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: serviceItems.length * 0.1 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Link
              to="/services-hub"
              className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 border-2 border-[#F16319] bg-[#059599] text-white hover:bg-[#F16319] hover:text-[#050301] hover:border-[#059599] transition-all duration-300 font-semibold text-sm sm:text-base"
            >
              Explore More <span className="text-lg font-bold">{'>'}</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Orange Line */}
      <motion.div
        className="w-screen h-1 bg-[#F16319] mt-20"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
      />
    </section>
  );
};

export default ServiceHero;
