import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const OriginStorySection = () => {
  return (
    <section className="w-full bg-[#050301] text-[#F2F2F2] overflow-hidden min-h-[650px] flex flex-col">
      {/* Top orange line */}
      <div className="w-full h-1 bg-[#F16319]" />

      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Image Slider */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:w-1/2 w-full relative h-64 md:h-auto"
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="absolute inset-0 w-full h-full"
          >
            <SwiperSlide>
              <img
                src="assets/images/construction1.png"
                alt="Slide 1"
                loading="lazy"
                className="w-full h-full object-cover grayscale"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="assets/images/construction2.png"
                alt="Slide 2"
                loading="lazy"
                className="w-full h-full object-cover grayscale"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="assets/images/construction3.png"
                alt="Slide 3"
                loading="lazy"
                className="w-full h-full object-cover grayscale"
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:w-1/2 w-full flex flex-col justify-center px-6 md:px-10 py-12 space-y-6"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#F16319] uppercase">
            The Origin Story
          </h2>

          {/* Description */}
          <div className="text-sm sm:text-base leading-relaxed text-justify">
            <p>
              Silverline Creation is a premium construction company in Goa offering end-to-end
              solutions for homes, hotels, bungalows, and commercial spaces. Inspired by the
              belief that{" "}
              <span className="text-[#FFF1D5]"
              style={{ fontFamily: "'Merriweather', serif", fontStyle: "italic" }}>
                <span className="text-[#F16319] ">"</span>Every dream has a silver lining
                <span className="text-[#F16319]">"</span>
              </span>
              , we bring integrity, passion, and a people-first mindset into every project we
              undertake.
            </p>
          </div>

          {/* Read More Button */}
          <div>
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#F16319] bg-[#059599] text-white hover:bg-[#F16319] hover:text-[#050301] hover:border-[#059599] transition-colors duration-300 font-bold"
              title="Read more about us"
            >
              Read More <span className="text-lg font-bold">{">"}</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OriginStorySection;
