import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Timer,
  HelpingHand,
  BadgeCheck,
  Settings,
  Leaf,
} from "lucide-react";

// Cards content
const industries = [
  {
    icon: <Users className="w-14 h-14 text-[#059599]" />,
    title: (
      <>
        {/* Desktop only */}
        <span className="hidden xl:inline">
          &nbsp;&nbsp;Trusted in-house <br />
          team for seamless <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;execution
        </span>
        {/* Mobile only */}
        <span className="inline xl:hidden">
          Trusted in-house <br />
          team for seamless <br />
          execution
        </span>
      </>
    ),
  },
  {
    icon: <Timer className="w-14 h-14 text-[#059599]" />,
    title: "Time-bound delivery with no compromise on quality",
  },
  {
    icon: <HelpingHand className="w-14 h-14 text-[#059599]" />,
    title: (
      <>
        <span className="hidden xl:inline">
          Post-construction <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;support and <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;guidance
        </span>
        <span className="inline xl:hidden">
          Post-construction <br />
          support and <br />
          guidance
        </span>
      </>
    ),
  },
  {
    icon: <BadgeCheck className="w-14 h-14 text-[#059599]" />,
    title: (
      <>
        <span className="hidden xl:inline">
          Honest pricing with <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; no hidden costs
        </span>
        <span className="inline xl:hidden">
          Honest pricing with <br />
          no hidden costs
        </span>
      </>
    ),
  },
  {
    icon: <Settings className="w-14 h-14 text-[#059599]" />,
    title: "Tailored solutions for every client",
  },
  {
    icon: <Leaf className="w-14 h-14 text-[#059599]" />,
    title: "Innovative designs backed with sustainability",
  },
];


const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative w-full bg-[#050301] overflow-hidden">
      {/* Top Orange Line */}
      <motion.div
        className="w-full h-[3px] bg-[#F16319]"
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 1 }}
      />

      <div className="py-20 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#F16319] text-center mb-16 uppercase">
          What Makes Us Different
        </h1>

        {/* DESKTOP VIEW */}
        <div className="relative mx-auto max-w-7xl w-full h-[700px] hidden xl:block">
          {/* SVG Lines */}
          <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <path d="M640 600 L640 300 Q640 250 250 100" stroke="#F16319" fill="none" strokeWidth="2" />
            <path d="M650 600 L650 300 Q640 250 1020 100" stroke="#F16319" fill="none" strokeWidth="2" />
            <path d="M660 600 L660 380 Q640 340 220 330" stroke="#F16319" fill="none" strokeWidth="2" />
            <path d="M670 600 L670 380 Q640 340 1060 330" stroke="#F16319" fill="none" strokeWidth="2" />
            <path d="M680 600 L680 460 Q640 420 280 590" stroke="#F16319" fill="none" strokeWidth="2" />
            <path d="M690 600 L690 460 Q640 420 1000 580" stroke="#F16319" fill="none" strokeWidth="2" />
          </svg>

          <motion.div
            className="absolute left-[40%] bottom-0 transform -translate-x-1/2 mb-1 z-10 hidden md:block"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div
              className="w-80 h-60 bg-gradient-to-b from-[#059599] to-[#036B6E] flex items-center justify-center shadow-lg"
              style={{ clipPath: "ellipse(50% 6% at 50% 60%)" }}
            ></div>
          </motion.div>




          {/* Cards */}
          <div className="absolute top-10 left-10 w-64">
            {renderCard(industries[0], 0, "left", isInView)}
          </div>
          <div className="absolute top-10 right-10 w-64">
            {renderCard(industries[1], 1, "right", isInView)}
          </div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64">
            {renderCard(industries[2], 2, "left", isInView)}
          </div>
          <div className="absolute bottom-10 left-10 w-64">
            {renderCard(industries[3], 3, "left", isInView)}
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64">
            {renderCard(industries[4], 4, "right", isInView)}
          </div>
          <div className="absolute bottom-10 right-10 w-64">
            {renderCard(industries[5], 5, "right", isInView)}
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="block xl:hidden">
          <div className="flex flex-col items-center gap-6">
            {industries.map((item, index) => (
              <motion.div
                key={index}
                className="w-full max-w-sm"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {renderCard(item, index, "left", isInView, true)} {/* Icon always left on mobile */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Orange Line */}
      <motion.div
        className="w-full h-[3px] bg-[#F16319]"
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

// Reusable card renderer
const renderCard = ({ icon, title }, index, direction, isInView, forceIconLeft = false) => {
  const iconLeft = forceIconLeft || index === 1 || index >= 4;

  const textAlignClass = index === 1 || index === 2 || index === 3 ? "text-right" : "text-left";

  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -80 : 80 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="bg-[#050301] rounded-lg p-4 shadow-md"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="flex items-center gap-2 ${textAlignClass}">
        {iconLeft ? (
          <>
            <div>{icon}</div>
            <p className="text-base font-semibold text-[#F2F2F2]">{title}</p>
          </>
        ) : (
          <>
            <p className="text-base font-semibold text-[#F2F2F2]">{title}</p>
            <div>{icon}</div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Industries;
