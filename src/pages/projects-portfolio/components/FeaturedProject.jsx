import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

// Motion variants
const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const FeaturedProject = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === project.gallery.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [project.gallery.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  const formatBudget = (budget) => {
    if (budget >= 10000000) return `₹${(budget / 10000000).toFixed(1)}Cr`;
    if (budget >= 100000) return `₹${(budget / 100000).toFixed(1)}L`;
    return `₹${budget.toLocaleString()}`;
  };

  return (
    <div className="bg-card rounded-xl shadow-lg overflow-hidden mb-8">
      {/* Header Label */}
      <div className="bg-gradient-to-r from-accent to-accent-600 px-6 py-4">
        <div className="flex items-center space-x-2">
          <Icon name="Star" size={20} className="text-accent-foreground fill-current" />
          <span className="text-accent-foreground font-medium">Featured Project</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left: Image Section with motion */}
        <motion.div
          className="relative h-96 lg:h-full"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src={project.gallery[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-text-primary/80 text-text-inverse px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {project.gallery.length}
          </div>
        </motion.div>

        {/* Right: Project Details with motion */}
        <motion.div
          className="p-8"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-2">
                {project.title}
              </h2>
              <div className="flex items-center space-x-4 text-text-secondary">
                <div className="flex items-center space-x-1">
                  <Icon name="MapPin" size={16} />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={16} />
                  <span>{project.completionDate}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-accent">
                {formatBudget(project.budget)}
              </div>
              <div className="text-sm text-text-secondary">Total Investment</div>
            </div>
          </div>

          <p className="text-text-secondary mb-6 leading-relaxed">{project.description}</p>

          {/* Project Highlights */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-primary-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Home" size={18} className="text-primary-600" />
                <span className="font-medium text-text-primary">Area</span>
              </div>
              <div className="text-xl font-bold text-primary-600">
                {project.area.toLocaleString()} sq ft
              </div>
            </div>

            <div className="bg-success-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Clock" size={18} className="text-success-500" />
                <span className="font-medium text-text-primary">Duration</span>
              </div>
              <div className="text-xl font-bold text-success-500">
                {project.duration} months
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h3 className="font-medium text-text-primary mb-3">Key Features</h3>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feature, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent-50 text-accent-600 text-sm rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Client Rating */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={18}
                  className={i < project.rating ? 'text-accent fill-current' : 'text-text-muted'}
                />
              ))}
            </div>
            <span className="text-text-primary font-medium">{project.rating}/5</span>
            <span className="text-text-secondary">Client Rating</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="primary"
              size="md"
              iconName="Eye"
              iconPosition="left"
              className="flex-1"
            >
              View Full Case Study
            </Button>

            {/* Optional buttons */}
            {/* <Button
              variant="outline"
              size="md"
              iconName="RotateCcw"
              iconPosition="left"
            >
              360° Virtual Tour
            </Button> */}

            <Button variant="ghost" size="md" iconName="Share2" className="px-4" />
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-start space-x-3">
                <Image
                  src={project.testimonial.clientPhoto}
                  alt={project.testimonial.clientName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-text-secondary italic text-sm mb-2">
                    "{project.testimonial.quote}"
                  </p>
                  <div className="text-sm">
                    <span className="font-medium text-text-primary">
                      {project.testimonial.clientName}
                    </span>
                    <span className="text-text-secondary ml-2">
                      - {project.testimonial.clientTitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedProject;
