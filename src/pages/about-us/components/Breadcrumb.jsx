import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import { motion } from 'framer-motion';

const Breadcrumb = () => {
  const breadcrumbItems = [
    // Example items — replace with your actual routes
    // { label: 'Home', path: '/', current: false },
    // { label: 'About Us', path: '/about-us', current: true }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-surface border-b border-gray-200"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <Icon
                  name="ChevronRight"
                  size={16}
                  className="text-primary-300 mx-2"
                />
              )}
              {item.current ? (
                <span
                  className="text-primary font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-text-secondary opacity-70 hover:opacity-100 hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </motion.nav>
  );
};

export default Breadcrumb;
