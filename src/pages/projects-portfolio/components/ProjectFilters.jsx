import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ProjectFilters = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  projectCounts 
}) => {
  const projectTypes = [
    { value: 'all', label: 'All Projects', count: projectCounts.all },
    { value: 'residential', label: 'Residential', count: projectCounts.residential },
    { value: 'commercial', label: 'Commercial', count: projectCounts.commercial },
    { value: 'renovation', label: 'Renovation', count: projectCounts.renovation },
    { value: 'luxury', label: 'Luxury Homes', count: projectCounts.luxury }
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'panaji', label: 'Panaji' },
    { value: 'margao', label: 'Margao' },
    { value: 'vasco', label: 'Vasco da Gama' },
    { value: 'mapusa', label: 'Mapusa' },
    { value: 'ponda', label: 'Ponda' },
    { value: 'calangute', label: 'Calangute' },
    { value: 'anjuna', label: 'Anjuna' },
    { value: 'candolim', label: 'Candolim' }
  ];

  const budgetRanges = [
    { value: 'all', label: 'All Budgets' },
    { value: '0-1000000', label: 'Under ₹10L' },
    { value: '1000000-5000000', label: '₹10L - ₹50L' },
    { value: '5000000-10000000', label: '₹50L - ₹1Cr' },
    { value: '10000000-50000000', label: '₹1Cr - ₹5Cr' },
    { value: '50000000+', label: 'Above ₹5Cr' }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'completed', label: 'Completed' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'upcoming', label: 'Upcoming' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'budget-high', label: 'Budget: High to Low' },
    { value: 'budget-low', label: 'Budget: Low to High' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'area', label: 'Largest Area' }
  ];

  const handleFilterChange = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const hasActiveFilters = Object.values(filters).some(value => 
    value !== 'all' && value !== '' && value !== 'newest'
  );

  return (
    <div className="bg-card rounded-xl shadow-md p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
          />
          <Input
            type="search"
            placeholder="Search projects by name, location, or features..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="pl-10 pr-4 py-3 w-full"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {/* Project Type */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Project Type
          </label>
          <select
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            {projectTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label} {type.count && `(${type.count})`}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Location
          </label>
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            {locations.map((location) => (
              <option key={location.value} value={location.value}>
                {location.label}
              </option>
            ))}
          </select>
        </div>

        {/* Budget Range */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Budget Range
          </label>
          <select
            value={filters.budget}
            onChange={(e) => handleFilterChange('budget', e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            {budgetRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Status
          </label>
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            {statusOptions.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Sort By
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-sm font-medium text-text-secondary">Quick Filters:</span>
        <Button
          variant={filters.has360Tour ? 'primary' : 'outline'}
          size="xs"
          onClick={() => handleFilterChange('has360Tour', !filters.has360Tour)}
          iconName="RotateCcw"
          iconPosition="left"
        >
          360° Tours
        </Button>
        <Button
          variant={filters.hasVideo ? 'primary' : 'outline'}
          size="xs"
          onClick={() => handleFilterChange('hasVideo', !filters.hasVideo)}
          iconName="Play"
          iconPosition="left"
        >
          Video Tours
        </Button>
        <Button
          variant={filters.featured ? 'primary' : 'outline'}
          size="xs"
          onClick={() => handleFilterChange('featured', !filters.featured)}
          iconName="Star"
          iconPosition="left"
        >
          Featured
        </Button>
        <Button
          variant={filters.awardWinning ? 'primary' : 'outline'}
          size="xs"
          onClick={() => handleFilterChange('awardWinning', !filters.awardWinning)}
          iconName="Award"
          iconPosition="left"
        >
          Award Winning
        </Button>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-sm text-text-secondary">
            Active filters applied
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectFilters;