// src/components/ProjectCard.tsx 

import React from 'react';
import '../App.css';

interface ProjectCardProps {
  name: string; // Corresponds to title in our data
  imageUrl: string; // Corresponds to image in our data
  description: string;
  projectUrl: string; // Corresponds to link in our data
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, imageUrl, description, projectUrl }) => {
  return (
    <article className="project-row">
      {
        imageUrl && (
          <div className="project-image-container">
            <img src={imageUrl} alt={`${name} project preview`} className="project-image" />
          </div>
        )
      }
      <div className="project-content">
        <h3 className="project-title">
          {projectUrl ? (
            <a 
              href={projectUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link-title"
              aria-label={`Visit ${name} project page (opens in new tab)`}
            >
              {name}
            </a>
          ) : (
            name
          )}
        </h3>
        <p className="project-description">{description}</p>
        
      </div>
      
    </article>
  );
};

export default ProjectCard;