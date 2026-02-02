// src/components/ToolsPage.tsx
import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Import ProjectCard
import projects from '../data/projects'; // Import your project data
import '../App.css'; // This page relies on App.css for styling

const ToolsPage: React.FC = () => {
  const humanPoseProjects = projects.filter(p => p.category === 'human-pose-recognition');
  const networksProjects = projects.filter(p => p.category === 'networks');
  const cellTrackingProjects = projects.filter(p => p.category === 'cell-tracking');
  // const haplotypeAssemblyProjects = projects.filter(p => p.category === 'haplotype-assembly');
  const galaxiesProjects = projects.filter(p => p.category === 'galaxies');
  // const classifiersPvaluesProjects = projects.filter(p => p.category === 'classifiers-pvalues');


  return (
    <div className="tools-page">
      <div className="tools-content-wrapper">
        <nav className="tools-nav-sidebar" aria-label="Tools categories navigation">

          <h2 id="networks-nav">Networks</h2>
          {networksProjects.map(project => (
            <a 
              key={project.id} 
              href={project.projectUrl} 
              className="tool-link-sidebar"
              aria-describedby="networks-nav"
            >
              {project.name.split(' - ')[0]}
            </a>
          ))}

          <h2 id="pose-nav">Human Pose Recognition</h2>
          {humanPoseProjects.map(project => (
            <a 
              key={project.id} 
              href={project.projectUrl} 
              className="tool-link-sidebar"
              aria-describedby="pose-nav"
            >
              {project.name.split(' - ')[0]}
            </a>
          ))}
          <h2 id="galaxy-nav">Galaxy Analysis</h2>
          {galaxiesProjects.map(project => (
            <a 
              key={project.id} 
              href={project.projectUrl} 
              className="tool-link-sidebar"
              aria-describedby="galaxy-nav"
            >
              {project.name.split(' - ')[0]}
            </a>
          ))}
          {/* <h2>Human Pose Recognition</h2>
          {humanPoseProjects.map(project => (
            <a key={project.id} href={project.projectUrl} className="tool-link-sidebar">
              {project.name.split(' - ')[0]}
            </a>
          ))} */}
          <h2 id="cell-nav">Cell Tracking</h2>
          {cellTrackingProjects.map(project => (
            <a 
              key={project.id} 
              href={project.projectUrl} 
              className="tool-link-sidebar"
              aria-describedby="cell-nav"
            >
              {project.name.split(' - ')[0]}
            </a>
          ))}
          {/* <h2>Haplotype Assembly</h2>
          {haplotypeAssemblyProjects.map(project => (
            <a key={project.id} href={project.projectUrl} className="tool-link-sidebar">
              {project.name.split(' - ')[0]}
            </a>
          ))}
          <h2>Classifiers with P-values</h2>
          {classifiersPvaluesProjects.map(project => (
            <a key={project.id} href={project.projectUrl} className="tool-link-sidebar">
              {project.name.split(' - ')[0]}
            </a>
          ))} */}
          
        </nav>

        <div className="tools-main-content">

        <section className="category-section">
            <h2 className="category-header networks-header">Networks</h2>
            <div className="projects-grid">
              {networksProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  imageUrl={project.imageUrl}
                  description={project.description}
                  projectUrl={project.projectUrl}
                />
              ))}
            </div>
          </section>


          <section className="category-section">
            <h2 className="category-header galaxies-header">Galaxy Analysis</h2>
            <div className="projects-grid">
              {galaxiesProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  imageUrl={project.imageUrl}
                  description={project.description}
                  projectUrl={project.projectUrl}
                />
              ))}
            </div>
          </section>

          <section className="category-section">
            <h2 className="category-header human-pose-recognition-header">Human Pose Recognition</h2>
            <div className="projects-grid">
              {humanPoseProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  imageUrl={project.imageUrl}
                  description={project.description}
                  projectUrl={project.projectUrl}
                />
              ))}
            </div>
          </section>

          <section className="category-section">
            <h2 className="category-header cell-tracking-header">Cell Tracking</h2>
            <div className="projects-grid">
              {cellTrackingProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  imageUrl={project.imageUrl}
                  description={project.description}
                  projectUrl={project.projectUrl}
                />
              ))}
            </div>
          </section>

          {/* <section className="category-section">
            <h2 className="category-header haplotype-assembly-header">Haplotype Assembly</h2>
            <div className="projects-grid">
              {haplotypeAssemblyProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  imageUrl={project.imageUrl}
                  description={project.description}
                  projectUrl={project.projectUrl}
                />
              ))}
            </div>
          </section> */}

          {/* <section className="category-section">
            <h2 className="category-header classifiers-pvalues-header">Classifiers with P-values</h2>
            <div className="projects-grid">
              {classifiersPvaluesProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  imageUrl={project.imageUrl}
                  description={project.description}
                  projectUrl={project.projectUrl}
                />
              ))}
            </div>
          </section> */}

        </div>
      </div>
    </div>
  );
};

export default ToolsPage;