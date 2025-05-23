import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/body.css';

// Project data from your CV
const projects = [
  {
    title: "Bazelink E-commerce Platform",
    description: "Co-founded and developed a growing e-commerce platform that attracted 100+ users in its first 3 months. Implemented frontend with React.js and backend with Node.js/Express.js.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/samnjoro30",
    achievements: [
      "Reduced downtime by 40% through server monitoring",
      "Improved backend performance by 30% with optimized queries",
      "Integrated Daraja API for mobile payments"
    ]
  },
  {
    title: "Pharmaceutical Ordering System",
    description: "CLI-based application for managing pharmaceutical orders with inventory tracking and reporting features.",
    technologies: ["C", "CLI"],
    github: "https://github.com/samnjoro30/pharma-system.git"
  },
  {
    title: "Gun Tracking System",
    description: "Web application for firearm monitoring with secure authentication and reporting capabilities.",
    technologies: ["Python", "Flask", "SQLite", "HTML/CSS"],
    github: "https://github.com/samnjoro30/firearm_management.git"
  },
  {
    title: "Banking System",
    description: "Full-featured banking application with user accounts, transactions, and admin dashboard.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/samnjoro30/E-Banking-Tech.git"
  },
  {
    title: "Insurance System",
    description: "AI-powered insurance platform with policy management and claims processing.",
    technologies: ["React", "TypeScript", "FastAPI", "Node.js"],
    github: "https://github.com/samnjoro30/Insurance-tech.git"
  },
  {
    title: "Event Management System",
    description: "Platform for event ticketing with organizer tools and attendee management.",
    technologies: ["Django", "MySQL", "HTML/CSS"],
    github: "https://github.com/samnjoro30/Event_management.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of my notable works</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {project.achievements && (
                  <div className="project-achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> View on GitHub
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;