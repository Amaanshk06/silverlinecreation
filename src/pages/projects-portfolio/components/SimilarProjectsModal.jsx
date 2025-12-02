import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const SimilarProjectsModal = ({ isOpen, onClose, referenceProject, onSubmitRequest }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    budget: '',
    timeline: '',
    requirements: '',
    preferredContact: 'phone'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitRequest({ ...formData, referenceProject: referenceProject.id });
    onClose();
  };

  if (!isOpen) return null;

  const formatBudget = (budget) => {
    if (budget >= 10000000) {
      return `₹${(budget / 10000000).toFixed(1)}Cr`;
    } else if (budget >= 100000) {
      return `₹${(budget / 100000).toFixed(1)}L`;
    }
    return `₹${budget.toLocaleString()}`;
  };

  return (
    <div className="fixed inset-0 bg-text-primary/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-heading font-bold text-text-primary">
              Request Similar Project
            </h2>
            <p className="text-text-secondary mt-1">
              Get a customized quote based on "{referenceProject?.title}"
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary-50 rounded-lg transition-smooth"
          >
            <Icon name="X" size={24} className="text-text-secondary" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {/* Reference Project Details */}
          <div>
            <h3 className="text-lg font-heading font-bold text-text-primary mb-4">
              Reference Project
            </h3>
            
            <div className="bg-primary-50 rounded-lg p-4 mb-4">
              <div className="flex items-start space-x-4">
                <Image
                  src={referenceProject?.image}
                  alt={referenceProject?.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-text-primary mb-1">
                    {referenceProject?.title}
                  </h4>
                  <div className="text-sm text-text-secondary space-y-1">
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} />
                      <span>{referenceProject?.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Home" size={14} />
                      <span>{referenceProject?.area?.toLocaleString()} sq ft</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="DollarSign" size={14} />
                      <span>{formatBudget(referenceProject?.budget)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-4">
              <h4 className="font-medium text-text-primary mb-2">Key Features</h4>
              <div className="flex flex-wrap gap-2">
                {referenceProject?.features?.map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-accent-50 text-accent-600 text-xs rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* What You'll Get */}
            <div className="bg-success-50 rounded-lg p-4">
              <h4 className="font-medium text-success-600 mb-2 flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} />
                <span>What You'll Get</span>
              </h4>
              <ul className="text-sm text-success-600 space-y-1">
                <li>• Detailed project proposal within 48 hours</li>
                <li>• Customized design based on your requirements</li>
                <li>• Transparent cost breakdown</li>
                <li>• Timeline with milestones</li>
                <li>• Free site visit and consultation</li>
              </ul>
            </div>
          </div>

          {/* Request Form */}
          <div>
            <h3 className="text-lg font-heading font-bold text-text-primary mb-4">
              Your Project Details
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">
                  Email Address *
                </label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">
                    Project Location *
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., Panaji, Goa"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="10-25">₹10L - ₹25L</option>
                    <option value="25-50">₹25L - ₹50L</option>
                    <option value="50-100">₹50L - ₹1Cr</option>
                    <option value="100-250">₹1Cr - ₹2.5Cr</option>
                    <option value="250+">Above ₹2.5Cr</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">
                  Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Start Immediately</option>
                  <option value="1-3">1-3 months</option>
                  <option value="3-6">3-6 months</option>
                  <option value="6-12">6-12 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">
                  Specific Requirements
                </label>
                <textarea
                  placeholder="Tell us about your specific needs, modifications, or preferences..."
                  value={formData.requirements}
                  onChange={(e) => handleInputChange('requirements', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                      className="text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-text-primary">Phone Call</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                      className="text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-text-primary">Email</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="whatsapp"
                      checked={formData.preferredContact === 'whatsapp'}
                      onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                      className="text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-text-primary">WhatsApp</span>
                  </label>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  iconName="Send"
                  iconPosition="left"
                  className="flex-1"
                >
                  Submit Request
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProjectsModal;