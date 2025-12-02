import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ stats }) => {
  const statItems = [
    {
      icon: 'Building',
      label: 'Total Projects',
      value: stats.totalProjects,
      color: 'text-accent'
    },
    {
      icon: 'CheckCircle',
      label: 'Completed',
      value: stats.completed,
      color: 'text-success-500'
    },
    {
      icon: 'Clock',
      label: 'In Progress',
      value: stats.inProgress,
      color: 'text-warning-500'
    },
    {
      icon: 'Calendar',
      label: 'Upcoming',
      value: stats.upcoming,
      color: 'text-primary-600'
    },
    {
      icon: 'Star',
      label: 'Avg Rating',
      value: `${stats.avgRating}/5`,
      color: 'text-accent'
    },
    {
      icon: 'Users',
      label: 'Happy Clients',
      value: stats.happyClients,
      color: 'text-success-500'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 mb-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-2">
          Our Project Portfolio
        </h2>
        <p className="text-text-secondary">
          Transforming dreams into reality across Goa with quality craftsmanship
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statItems.map((item, index) => (
          <div
            key={index}
            className="bg-card rounded-lg p-4 text-center hover:shadow-md transition-smooth"
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 mb-3 ${item.color}`}>
              <Icon name={item.icon} size={24} />
            </div>
            <div className="text-2xl font-bold text-text-primary mb-1">
              {item.value}
            </div>
            <div className="text-sm text-text-secondary">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStats;