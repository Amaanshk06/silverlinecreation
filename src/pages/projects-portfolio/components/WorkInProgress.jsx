import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const WorkInProgress = ({ projects }) => {
  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-success-500';
    if (progress >= 50) return 'bg-warning-500';
    return 'bg-accent-500';
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'foundation':
        return 'Layers';
      case 'structure':
        return 'Building';
      case 'roofing':
        return 'Home';
      case 'finishing':
        return 'Paintbrush';
      case 'final':
        return 'CheckCircle';
      default:
        return 'Clock';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
          Work in Progress
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Transparency is our commitment. Track our current projects and see the quality craftsmanship in action.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-card rounded-xl shadow-md hover:shadow-lg transition-smooth overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.currentImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              
              {/* Progress Badge */}
              <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-soft px-3 py-1 rounded-full">
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={getStatusIcon(project.currentPhase)} 
                    size={14} 
                    className="text-accent" 
                  />
                  <span className="text-sm font-medium text-text-primary">
                    {project.progress}% Complete
                  </span>
                </div>
              </div>

              {/* Live Update Badge */}
              <div className="absolute top-4 right-4 bg-success-500 text-success-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <div className="w-2 h-2 bg-success-foreground rounded-full animate-pulse"></div>
                <span>Live</span>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                {project.title}
              </h3>
              
              <div className="flex items-center space-x-2 text-text-secondary text-sm mb-4">
                <Icon name="MapPin" size={14} />
                <span>{project.location}</span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-text-secondary">Progress</span>
                  <span className="font-medium text-text-primary">{project.progress}%</span>
                </div>
                <div className="w-full bg-primary-100 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-smooth ${getProgressColor(project.progress)}`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Current Phase */}
              <div className="bg-primary-50 rounded-lg p-3 mb-4">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon 
                    name={getStatusIcon(project.currentPhase)} 
                    size={16} 
                    className="text-primary-600" 
                  />
                  <span className="font-medium text-text-primary text-sm">
                    Current Phase
                  </span>
                </div>
                <p className="text-primary-600 text-sm">
                  {project.currentPhaseDescription}
                </p>
              </div>

              {/* Timeline */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-text-secondary">Started</span>
                  <div className="font-medium text-text-primary">
                    {formatDate(project.startDate)}
                  </div>
                </div>
                <div>
                  <span className="text-text-secondary">Expected Completion</span>
                  <div className="font-medium text-text-primary">
                    {formatDate(project.expectedCompletion)}
                  </div>
                </div>
              </div>

              {/* Recent Updates */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-text-primary mb-2">
                  Recent Update
                </h4>
                <p className="text-text-secondary text-sm">
                  {project.lastUpdate}
                </p>
                <span className="text-xs text-text-muted">
                  {formatDate(project.lastUpdateDate)}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="primary"
                  size="sm"
                  iconName="Eye"
                  iconPosition="left"
                  className="flex-1"
                >
                  View Updates
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Camera"
                  className="px-3"
                />
                
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Share2"
                  className="px-3"
                />
              </div>

              {/* Quality Checkpoints */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Quality Checkpoints</span>
                  <div className="flex items-center space-x-1">
                    <Icon name="CheckCircle" size={14} className="text-success-500" />
                    <span className="text-success-500 font-medium">
                      {project.qualityChecksPassed}/{project.totalQualityChecks}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Progress Button */}
      <div className="text-center mt-8">
        <Button
          variant="outline"
          size="lg"
          iconName="ArrowRight"
          iconPosition="right"
        >
          View All Progress Updates
        </Button>
      </div>
    </div>
  );
};

export default WorkInProgress;