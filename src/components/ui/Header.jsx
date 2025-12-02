import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'About Us', path: '/about-us', icon: 'User' },
    { name: 'Services', path: '/services-hub', icon: 'Building' },
    { name: 'Projects', path: '/projects-portfolio', icon: 'Image' },
    { name: 'Contact Us', path: '/contact-consultation', icon: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  const isActivePath = (path) => location.pathname.trim() === path.trim();

  const handleNavClick = (path) => {
    closeMenu();
    if (location.pathname !== path) {
      navigate(path);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#F2F2F2] shadow-LG' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-40">
        <div className="flex items-center justify-between h-16 sm:h-16 lg:h-20">
          
          {/* Logo */}
          <div className="block">
            <Link to="/homepage" className="flex items-center space-x-3 group" onClick={closeMenu}>
              <div className="relative">
                <div className="w-28 h-28 lg:w-32 lg:h-32 flex items-center">
                  <img
                    src="/assets/images/SilverlineLogo.png"
                    alt="Silverline Logo"
                    className="lg:-ml-20 w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 object-contain mb-5"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* NOTE: changed breakpoint to xl so iPad Pro (1024px) uses mobile menu */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-lg font-medium transition-smooth group ${
                  isActivePath(item.path)
                    ? 'text-[#F16319] bg-[#F2F2F2]'
                    : 'text-[#050301] hover:text-[#F16319] hover:bg-[#F2F2F2]'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Icon name={item.icon} size={16} />
                  <span>{item.name}</span>
                </span>
                {isActivePath(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#F16319] rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center justify-end flex-1 space-x-4 pr-6 lg:pr-14">
            <Button
              variant="outline"
              size="base"
              className="hidden sm:flex !bg-[#050301] !text-[#F2F2F2] border-2 border-[#F16319] hover:border-[#050301] hover:!bg-[#059599] hover:!text-white"
              iconName="Calendar"
              iconPosition="left"
              onClick={() => navigate("/contact-consultation")}
            >
              Book Site Visit
            </Button>

            {/* NOTE: changed breakpoint to xl so toggle appears at lg (1024px) and below */}
            <button
              onClick={toggleMenu}
              className="xl:hidden p-2 rounded-lg text-[#050301] hover:text-text-primary hover:bg-[#F2F2F2] transition-smooth"
              aria-label="Toggle menu"
            >
              <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (Overlay Menu) */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-[#F2F2F2]/95 backdrop-blur-lg h-screen overflow-y-auto px-4 pt-6">
          {/* Close Button Inside */}
          <div className="flex justify-end mb-4">
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg text-[#050301] hover:text-[#F16319] transition"
              aria-label="Close menu"
            >
              <Icon name="X" size={24} />
            </button>
          </div>

          <nav className="max-w-7xl mx-auto">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full text-left flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                    isActivePath(item.path)
                      ? 'text-[#F16319] bg-[#F2F2F2] border-l-4 border-[#F16319]'
                      : 'text-[#050301] hover:text-text-primary hover:bg-[#F2F2F2]'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.name}</span>
                  {isActivePath(item.path) && (
                    <div className="ml-auto w-2 h-2 bg-[#F16319] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-6 pt-4 border-t border-border">
              <Button
                variant="primary"
                size="md"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                onClick={() => {
                  closeMenu();
                  navigate("/contact-consultation");
                }}
              >
                Book Site Visit
              </Button>
              <Button
                variant="outline"
                size="md"
                fullWidth
                className="mt-3"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => {
                  closeMenu();
                  window.open('https://wa.me/919876543210', '_blank');
                }}
              >
                WhatsApp Chat
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
