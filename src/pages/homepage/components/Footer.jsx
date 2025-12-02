import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about-us' },
      { name: 'Services', path: '/services-hub' },
      { name: 'Projects', path: '/projects-portfolio' },
      { name: 'Contact Us', path: '/contact-consultation' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' },
      { name: 'Disclaimer', path: '#' },
    ],
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'Facebook',
      url: 'https://www.facebook.com/people/Silverline-Creation/61576373805388/',
    },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/silverline.creation_' },
  ];

  return (
    <footer className="bg-[#050301] text-[#F2F2F2]">
      {/* Orange Line */}
      <motion.div
        className="w-full h-1 bg-[#F16319] origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      {/* Main Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16"
      >
        {/* Main Grid */}
        <motion.div
          className="grid lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/homepage" className="flex items-center space-x-3 ">
              <div className="w-34 h-20 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/images/footerLogo.png"
                  alt="Silverline Logo"
                  className="w-36 h-28 object-contain"
                />
              </div>
            </Link>
            <p className="text-[#F2F2F2]/80 mb-6 leading-relaxed">
              Building your vision with trust and precision, crafted with care, built to last, and delivered with excellence.
            </p>
          </div>

          {/* Company + Contact */}
          <motion.div
            className="lg:col-span-3 flex flex-col sm:flex-row gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Quick Links */}
            <div className="sm:w-1/2">
              <h4 className="font-semibold text-[#F2F2F2] mb-4 uppercase">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-[#F2F2F2]/80 hover:text-[#F16319] transition-smooth text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info + Social Links */}
            <div className="sm:w-1/2">
              <h4 className="font-semibold text-[#F2F2F2] mb-4 uppercase">Contact</h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-[#F16319]" />
                  <a
                    href="tel:+917522999449"
                    target="_blank"
                    className="text-sm text-[#F2F2F2]/80 hover:text-[#F16319] transition-colors duration-300"
                  >
                    +91 7522999449
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-[#F16319]" />
                  <a
                    href="mailto:silverlinecreation5001@gmail.com"
                    target="_blank"
                    className="text-sm text-[#F2F2F2]/80 hover:text-[#F16319] transition-colors duration-300"
                  >
                    silverlinecreation5001@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={16} className="text-[#F16319]" />
                  <span className="text-sm text-[#F2F2F2]/80">
                    Goa,India
                  </span>
                </div>
              </div>

              {/* Social Icons Below Contact */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[#050301]/10 rounded-full flex items-center justify-center hover:bg-[#050301] hover:text-[#F16319] transition-smooth"
                    aria-label={social.name}
                    whileHover={{ scale: 1.3 }}
                    viewport={{ once: true }}
                  >
                    <Icon name={social.icon} size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="border-t border-[#F2F2F2]/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#F2F2F2]/80 text-sm">
              © {currentYear} SilverlineCreation. All rights reserved.
            </div>

            {/* Developer Credit */}
            <div className="text-sm text-[#F2F2F2] flex items-center gap-3 text-center md:text-right">

              {/* Designed By */}
              <span>
                Designed by{' '}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F16319] no-underline italic"
                >
                  Eviation Marketing
                </a>
              </span>

              {/* Divider Dot */}
              <span className="text-[#F2F2F2]/30">•</span>

              {/* Developed By */}
              <span>
                Developed by{' '}
                <a
                  href="https://cashlesskarma.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F16319] no-underline italic"
                >
                  Cashless Karma
                </a>
              </span>

            </div>

          </div>
        </div>
      </motion.div>

      {/* Floating Buttons Container */}
      <div className="fixed bottom-20 right-11 flex flex-row gap-4 z-50">

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/+917522999449"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#050301] border-2 border-[#059599] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-smooth"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="text-[#F2F2F2]"
          >
            <path d="M16.02 2.007a13.965 13.965 0 0 0-12.27 20.51l-1.35 4.94 5.06-1.33a13.97 13.97 0 1 0 8.56-24.12zM16 28a11.94 11.94 0 0 1-6.08-1.65l-.43-.26-3.01.79.8-2.94-.28-.45a11.97 11.97 0 1 1 21.06-6.48A11.94 11.94 0 0 1 16 28zm6.26-8.55c-.34-.17-2.01-1-2.32-1.12s-.54-.17-.76.17-0.88 1.12-1.08 1.35c-.2.22-.4.25-.74.08s-1.43-.52-2.72-1.65c-1.01-.9-1.69-2.02-1.89-2.36-.2-.35-.02-.53.15-.7.15-.15.34-.4.5-.6.17-.2.22-.35.34-.58.11-.22.05-.43-.03-.6s-.76-1.83-1.04-2.5c-.27-.65-.55-.56-.76-.57l-.65-.01c-.22 0-.6.08-.91.4s-1.2 1.18-1.2 2.88 1.23 3.35 1.41 3.58c.17.22 2.42 3.7 5.87 5.19.82.36 1.46.58 1.96.74.82.26 1.56.22 2.15.13.66-.1 2.01-.82 2.3-1.6.28-.8.28-1.5.2-1.64-.08-.13-.3-.22-.64-.39z" />
          </svg>
        </motion.a>

        {/* Email Button */}
        <motion.a
          href="mailto:rinitanagvekar@silverlinecreation.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#050301] border-2 border-[#059599] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-smooth"
          aria-label="Send Email"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-[#F2F2F2]"
          >
            <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 
      1.103.897 2 2 2h16c1.103 0 2-.897 
      2-2V6c0-1.103-.897-2-2-2zm0 
      2v.511l-8 5.333-8-5.333V6h16zM4 
      18V8.489l8 5.333 8-5.333V18H4z"/>
          </svg>
        </motion.a>

      </div>


    </footer>
  );
};

export default Footer;
