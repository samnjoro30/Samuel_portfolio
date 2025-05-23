import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/body.css';

// Import multiple images for each project (example - you'll need actual images)
import bazelinkImg1 from '../assets/about.jpeg';
import bazelinkImg2 from '../assets/about.jpeg';
import bazelinkImg3 from '../assets/sam.jpeg';
import pharmaImg1 from '../assets/about.jpeg';
import pharmaImg2 from '../assets/sam.jpeg';

const projects = [
  {
    title: "Bazelink",
    description: "E-commerce platform with 100+ users, React/Node.js backend",
    technologies: ["React", "Node", "MongoDB", "Redux"],
    github: "https://github.com/samnjoro30",
    liveDemo: "https://www.bazelink.co.ke",
    images: [bazelinkImg1, bazelinkImg2, bazelinkImg3],
    achievements: ["40% downtime reduction", "30% performance boost"]
  },
  {
    title: "Pharma System",
    description: "CLI application for pharmaceutical order management",
    technologies: ["C", "CLI", "File I/O"],
    github: "https://github.com/samnjoro30/pharma-system.git",
    images: [pharmaImg1, pharmaImg2],
    achievements: ["Optimized inventory management", "Reduced order errors by 25%"]
  },
  // Add other projects with multiple images...
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Some of my recent work</p>
        </div>
        
        <div className="projects-wrapper">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered && project.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % project.images.length
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image-container">
        <img 
          src={project.images[currentImageIndex]} 
          alt={project.title} 
          className="project-image" 
        />
        {project.images.length > 1 && (
          <div className="image-indicators">
            {project.images.map((_, index) => (
              <span 
                key={index}
                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        {project.achievements && (
          <div className="project-achievements">
            <span className="achievement-label">Achievements:</span>
            {project.achievements.map((achievement, i) => (
              <span key={i} className="achievement-tag">
                <span className="achievement-bullet">✓</span> {achievement}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="project-links">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub repository"
        >
          <FaGithub className="project-icon" />
        </a>
        {project.liveDemo && (
          <a 
            href={project.liveDemo} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Live demo"
          >
            <FaExternalLinkAlt className="project-icon" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;