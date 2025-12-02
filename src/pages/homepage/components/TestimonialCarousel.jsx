import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Fernandes",
    role: "Managing Director",
    company: "Skyline Developers",
    location: "Porvorim, Goa",
    project: "Luxury Apartment Build",
    message:
      "The team handled my home renovation with so much patience and professionalism. From planning to finishing, everything was smooth and on time. I’m truly happy with the quality of workmanship — feels like a brand-new home!",
    image: "/assets/images/test2.png",
  },
  {
    id: 2,
    name: "Ryan D’Souza",
    role: "Project Manager",
    company: "UrbanBuild Co.",
    location: "Margao, Goa",
    project: "Commercial Complex",
    message:
      "I wanted a modern house with Goan touches, and they delivered exactly what I imagined. The transparency in costing and regular updates made the entire construction stress-free. Highly recommend them to anyone building in Goa.",
    image: "/assets/images/test1.png",
  },
  {
    id: 3,
    name: "Rukma Naik",
    role: "Homeowner",
    company: "",
    location: "Mapusa, Goa",
    project: "Residential Build",
    message:
      "Being a first-time homeowner, I was worried about delays and hidden charges. But they guided me at every step and stuck to the promised timeline. My family absolutely loves our new space. Truly trustworthy and reliable.",
    image: "/assets/images/test3.png",
  },
  {
    id: 4,
    name: "Elroy Braganza",
    role: "Homeowner",
    company: "",
    location: "Saligao, Goa",
    project: "Residential Renovation",
    message:
      "Their attention to detail is outstanding. The finishing work, carpentry, and design suggestions added real value to my house. You rarely find such dedicated teams nowadays. Very impressed with the final result.",
    image: "/assets/images/test4.png",
  },
  {
    id: 5,
    name: "Sunita Kamat",
    role: "Client",
    company: "",
    location: "Ponda, Goa",
    project: "Residential Project",
    message:
      "Excellent construction quality and great coordination. They understood our requirements perfectly and gave us practical solutions for the layout. The house has come out exactly as planned — strong, elegant, and spacious.",
    image: "/assets/images/test5.png",
  },
  {
    id: 6,
    name: "Clifford Lobo",
    role: "Client",
    company: "",
    location: "Vasco, Goa",
    project: "Private Residence",
    message:
      "From soil testing to final handover, everything was handled professionally. What I liked most is the honest communication and timely progress photos. My dream home is now a reality thanks to them!",
    image: "/assets/images/test6.png",
  },
];


const LiveReviews = () => {
  return (
    <section className="relative bg-[#050301] text-[#F2F2F2] py-24 px-4 sm:px-10 overflow-hidden">
      {/* Top Orange Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="origin-left h-1 w-screen absolute top-0 left-0 bg-[#F16319]"
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-bold text-[#F16319] mb-14 tracking-wide uppercase text-center"
      >
        Client Testimonials
      </motion.h2>

      {/* Swiper with Pagination */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        className="w-full max-w-7xl mx-auto pb-10"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#FFF1D5] border border-[#F16319] p-8 rounded-2xl shadow-2xl h-full min-h-[460px] mx-auto max-w-xl"
            >
              <div className="relative mb-6 flex justify-center items-center">
                <div className="w-36 h-36 rounded-full border-4 border-[#F16319] shadow-md p-1 bg-[#050301] z-10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[#059599] z-10">
                  <Quote size={32} strokeWidth={1.5} />
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#050301] px-4 leading-relaxed"
              style={{ fontFamily: "'Merriweather', serif", fontStyle: "italic" }}>
                “{item.message}”
              </p>

              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold text-[#050301] uppercase">
                  {item.name}
                </h3>
                <p className="text-xs text-[#050301] mt-1">
                  Location: {item.location}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional: Additional styling for pagination dots */}
      <style>
        {`
          .swiper-pagination-bullets {
            bottom: 0 !important;
          }
          .swiper-pagination-bullet {
            background: #F16319;
            opacity: 0.7;
          }
          .swiper-pagination-bullet-active {
            background: #059599;
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
};

export default LiveReviews;
