import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BackgroundSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative h-[400px] md:h-[580px] lg:h-[580px]  flex items-center bg-cover bg-center "
      loading="lazy"
      style={{ backgroundImage: "url('assets/images/Body.png')" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#050301] bg-opacity-50 ml-4 md:ml-20 mt-40 md:mt-80 px-4 md:pl-5 md:pr-24 py-2 text-[#F2F2F2] max-w-[90%] md:max-w-none flex items-center justify-center"
      >
        <h1 className="text-xl md:text-3xl font-bold pl-11 text-[#F16319] uppercase">
          Services
        </h1>
      </motion.div>

    </section>
  );
};

export default BackgroundSection;