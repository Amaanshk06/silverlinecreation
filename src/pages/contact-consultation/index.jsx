import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby-mLzxAVPHW3Y4uY0dvOzjnfc4uyDIeAMyGMhTDV9rA_2e0vRiL_aQTNYpqt-784Ds/exec"; // keep as-is

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    if (!name || !phone || !email || !message) {
      setFormStatus("Please fill out all fields before submitting.");
      setTimeout(() => setFormStatus(""), 3000);
      return;
    }

    setFormStatus("Submitting...");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setFormStatus("Thank you! Your request has been submitted.");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => setFormStatus(""), 5000);
    } catch (err) {
      console.error(err);
      setFormStatus("Failed to submit. Please check your internet connection.");
      setTimeout(() => setFormStatus(""), 5000);
    }
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Get in touch with Silverline Creation for expert construction services in Goa. Reach us for consultations, site visits, and project inquiries."
        />
        <meta
          name="keywords"
          content="contact builder Goa, construction help Goa, free site visit Goa"
        />
        <meta property="og:title" content="Silverline Creation" />
        <meta
          property="og:description"
          content="Contact Silverline Creation today for premium residential and commercial construction services in Goa."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <Header />

      {/* Top Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pt-20"
      >
        <h1 className="text-center text-2xl sm:text-3xl md:text-5xl font-bold bg-[#050301] text-[#F16319] px-4 pt-14 pb-8 uppercase leading-tight">
          Let’s Talk Construction
        </h1>
        <div className="bg-[#050301] text-[#F16319] pb-12 text-center px-4">
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#F2F2F2] leading-relaxed">
            Looking for reliable construction support in Goa?{" "}
            <br className="hidden sm:block" />
            Contact us for a consultation. Our experts are happy to answer your
            questions and recommend the best solution for your residential or
            commercial project.
          </p>
          <div className="flex justify-center mt-7">
            <a
              href="/SilverlineBrochure.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 border-2 border-[#F16319] bg-[#059599] text-white hover:bg-[#F16319] hover:text-[#050301] hover:border-[#059599] transition-all duration-300 font-semibold text-sm sm:text-base"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </motion.div>

      {/* Form + Contact Column */}
      <div className="bg-[#050301] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start py-12">

          {/* LEFT: Contact Info (matches screenshot layout) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 justify-start"
          >
            <div className="max-w-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 uppercase">Get in Touch</h2>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 mt-1">
                  {/* simple phone icon */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#F16319]">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12 1.05.36 2.08.7 3.07a2 2 0 0 1-.45 2.11L9.91 10.91a16 16 0 0 0 6 6l1.01-1.01a2 2 0 0 1 2.11-.45c.99.34 2.02.58 3.07.7A2 2 0 0 1 22 16.92z" fill="#F16319" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm text-[#F2F2F2] font-semibold uppercase">Phone</h4>
                  <p className="text-sm text-[#bfc7c9]">+91 7522999449</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 mt-1">
                  <svg width="28" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13a2.5 2.5 0 0 0 2.5-2.5v-7" stroke="#9fb6b7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.5 6.5L12 13 2.5 6.5" stroke="#F16319" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm text-[#F2F2F2] font-semibold uppercase">Email</h4>
                  <p className="text-sm text-[#bfc7c9]">silverlinecreation5001@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 mt-1">
                  <svg width="20" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21s-6.5-4.35-8.5-8.5A7.5 7.5 0 1 1 20.5 12.5C18.5 16.65 12 21 12 21z" fill="#F16319" />
                    <circle cx="12" cy="10" r="2.5" fill="#050301" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm text-[#F2F2F2] font-semibold uppercase">Location</h4>
                  <p className="text-sm text-[#bfc7c9]">Goa, India</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-4">
                <a
                  href="https://wa.me/+917522999449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-3 rounded-md bg-[#25D366] text-white font-semibold shadow-md hover:opacity-95 transition"
                >
                  {/* whatsapp circle */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20.5 3.5A10.5 10.5 0 1 0 7 22L3 23l1.2-4A10.5 10.5 0 0 0 20.5 3.5z" fill="#FFF" /><path d="M17.8 14.2c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15s-.8 1-.9 1.2c-.15.3-.3.35-.6.2-1-.5-1.8-1.9-2-3.4-.05-.3.2-.4.45-.6.5-.3 1-.8 1.1-1.1.1-.35 0-.65-.2-.85-.2-.2-.7-.5-1.05-.8-.35-.25-.6-.45-.85-.35-.35.15-1.35.5-2.05 1.35-.7.85-1 1.9-1.05 2.05-.05.15-.15.35.15.65.3.3 1.05.95 2.45 1.6 1.4.65 1.8.7 2.4.6.6-.05 1.8-.7 2.05-1.1.25-.4.25-.75.15-.85-.1-.1-.35-.15-.65-.3z" fill="#25D366" /></svg>
                  <span>Talk on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form card (white card like screenshot) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-xl bg-[#F16319] rounded-lg shadow-lg border-2 border-[#059599] p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-[#050301] mb-4">Send us a Message</h3>
              <form onSubmit={handleSubmit} noValidate className="space-y-4 text-[#050301]">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full mt-2 p-3 rounded-md border-2 border-[#059599] focus:outline-none focus:ring-2 focus:ring-[#F16319]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full mt-2 p-3 rounded-md border-2 border-[#059599] focus:outline-none focus:ring-2 focus:ring-[#F16319]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    pattern="^\+?\d{10,13}$"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 1234567890"
                    className="w-full mt-2 p-3 rounded-md border-2 border-[#059599] focus:outline-none focus:ring-2 focus:ring-[#F16319]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full mt-2 p-3 rounded-md border-2 border-[#059599] focus:outline-none focus:ring-2 focus:ring-[#F16319]"
                  />
                </div>

                <div className="flex gap-3 items-center">
                  <button
                    type="submit"
                    className="bg-[#059599] text-[#F2F2F2] border-2 border-[#F16319] hover:bg-[#F16319] hover:text-[#050301] hover:border-[#059599]  duration-300 text-sm sm:text-base font-semibold px-6 py-3  transition-all"
                  >
                    Submit Inquiry
                  </button>

                  <a
                    href="https://wa.me/+917522999449"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 border-2 border-[#F16319]  bg-[#25D366] text-white font-semibold shadow-sm"
                  >
                    Talk on WhatsApp
                  </a>
                </div>

                {formStatus && <p className="mt-2 text-sm text-gray-600 italic">{formStatus}</p>}
              </form>
            </div>
          </motion.div>

        </div>

        {/* Map + Bottom Info */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden shadow-2xl border-4 border-[#059599] h-64 sm:h-[500px] md:h-full"
          >
            <iframe
              title="Goa Construction Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.8596723321083!2d73.81057611535468!3d15.500660788243378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb481f35f36c3%3A0x83ed851a5206b2fa!2sGoa%2C%20India!5e0!3m2!1sen!2sus!4v1696333511716!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-8 mb-16"
          >
            <div className="bg-[#FFF1D5] border-2 border-[#059599] text-center p-4 sm:p-6 shadow-md w-full">
              <p className="text-[#050301] font-semibold text-sm sm:text-lg">
                <strong>Business Hours:</strong> Mon–Sat | 9:30 AM – 6:30 PM
              </p>
            </div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
