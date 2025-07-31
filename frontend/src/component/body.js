import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaDatabase, FaShieldAlt, FaChartLine, FaCloudSunRain } from 'react-icons/fa';
import '../styles/body.css';

// Import multiple images for each project (example - you'll need actual images)
import bazelinkImg1 from '../assets/baze1.png';
import bazelinkImg2 from '../assets/about.jpeg';
//import bazelinkImg3 from '../assets/sam.jpeg';
import pharmaImg1 from '../assets/about.jpeg';
//import pharmaImg2 from '../assets/about.jpeg';
//banking and insurancec
import bankingImg1 from '../assets/Ebank1.png';
import insuranceImg1 from '../assets/Insurance1.png';
//events images
import eventImg1 from '../assets/Event1.png';
import event1 from '../assets/Event2.png';
import event2 from '../assets/Event3.png'
import event3 from '../assets/Event4.png'
import event4 from '../assets/Event5.png'
import event5 from '../assets/Event6.png'
import event6 from '../assets/Event7.png'
import event7 from '../assets/Event8.png'
import gunImg1 from '../assets/gun2.png';
//weather
import weather from '../assets/weather1.png';
import weather2 from '../assets/weather2.png';
//gun track
import gun1 from '../assets/Gun1.png';
import gun2 from '../assets/gun3.png';
import gun3 from '../assets/Gun4.png';
//fair
import Fair from '../assets/fair2.png';
import Fair1 from '../assets/fair3.png';
import Fair2 from '../assets/fair4.png';
import Fair3 from '../assets/fair5.png';
import Fair4 from '../assets/fair6.png';
import Fair5 from '../assets/fair7.png';
import Fair6 from '../assets/fair8.png';

const projects = [
  {
    title: "Bazelink E-commerce",
    description: "Full-featured online marketplace with payment integration and admin dashboard",
    //technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe API"],
    // github: "https://github.com/samnjoro30/bazelink",
    liveDemo: "https://www.bazelink.co.ke",
    images: [bazelinkImg1, bazelinkImg2],
    achievements: ["A four-team members collaboration","40% downtime reduction", "30% performance boost", "Integrated payment gateway"],
    icon: <FaCode className="project-icon-featured" />
  },
  // {
  //   title: "Pharma Management System",
  //   description: "CLI application for pharmaceutical inventory and order management",
  //   technologies: ["C", "File I/O", "Data Structures"],
  //   github: "https://github.com/samnjoro30/pharma-system",
  //   images: [pharmaImg1],
  //   achievements: ["Reduced order errors by 25%", "Automated inventory tracking"],
  //   icon: <FaDatabase className="project-icon-featured" />
  // },
  {
    title: "Smart Farm",
    description: "Smart agriculture system powered my ML and AI",
    technologies:["FastAPI", "Next.js", "Postgre DB", "Tailwind css", "Daisy.ui",],
    github: "",
    images: [],
    achievements: ["In development", "Full authentication backend complete"]
  },
  {
    title: "E-Banking System",
    description: "Secure online banking platform with transaction history and user management",
    technologies: ["React+vite", "Next.js", "Node.js", "MySQL", "MongoDb cloud", "JWT Auth", "Github Actions"],
    github: "https://github.com/samnjoro30/E-Banking-Tech",
    liveDemo: "https://e-banking-tech-61d82.web.app",
    images: [bankingImg1],
    achievements: ["PCI-DSS compliance", "Fraud detection system", "Working towards using ec2 instance inn AWS"],
    icon: <FaShieldAlt className="project-icon-featured" />
  },
  {
    title: "Insurance Tech Platform",
    description: "AI-powered insurance recommendation and management system",
    technologies: ["Python", "FastAPI", "React+vite", "Typescript", "Node.js"],
    github: "https://github.com/samnjoro30/Insurance-tech",
    liveDemo: "https://insurance-tech-xi.vercel.app/",
    images: [insuranceImg1],
    achievements: ["In development"],
    icon: <FaChartLine className="project-icon-featured" />
  },
  {
    title: "Event Management System",
    description: "Ticket booking and event management platform with QR validation",
    technologies: ["Django", "MySQL", "Postgre(supabase)", "HTML", "Css", "Javascript", "Cloudinary"],
    github: "https://github.com/samnjoro30/Event_management",
    liveDemo: "https://event-management-chry.onrender.com",
    images: [eventImg1, event2, event1, event3, event4, event5, event6, event7],
    achievements: ["20% faster check-ins", "Real-time attendance tracking"],
    icon: <FaMobile className="project-icon-featured" />
  },
  {
    title: "Firearm Tracking System",
    description: "Web application for firearm registration and monitoring",
    technologies: ["Flask", "SQLite", "Python", "Bootstrap"],
    github: "https://github.com/samnjoro30/firearm_management",
    images: [gunImg1, gun1, gun2, gun3],
    achievements: ["Digital firearm registry", "License expiration alerts"],
    icon: <FaShieldAlt className="project-icon-featured" />
  },
  {
    title: "Weather web system",
    description: "A real-time weather forecasting web app with dynamic data visualization",
    technologies: ["Next.js", 'Typescript', "tailwind css", "laravel"],
    github: "https://github.com/samnjoro30/weather_app.git",
    images: [weather2, weather],
    achievements: ["Real-Time API Integration: Fetched and displayed live weather data from OpenWeatherMap", ""],
    icon: <FaCloudSunRain className="project-icon-featured" />
  }, 
  {
    title: "Fairscore",
    description: "A dynamic web application designed to bridge scoring fairness gaps in evaluations (academic/sports/assessments) using transparent, technology-driven methods",
    technologies: ["Html", "css", "Javascript", "php"],
    github: "https://github.com/samnjoro30/FairScore.git",
    images: [Fair, Fair1, Fair2, Fair3, Fair4, Fair5, Fair6],
    achievements: ["Achieved 95%+ accessibility score (WCAG) with semantic HTML/CSS", "Real-time scoring analytics"],
    icon: <FaChartLine className="project-icon-featured" />
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">A showcase of my development work</p>
          
          <div className="project-filters">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
              onClick={() => setFilter('react')}
            >
              React.js
            </button>
            <button
              className={ `filter-btn ${filter === 'Next.js' ? 'active' : ''}`}
              onClick={ () => setFilter('next.js')}
            >
              Next.js
            </button>
            <button 
              className={`filter-btn ${filter === 'python' ? 'active' : ''}`}
              onClick={() => setFilter('python')}
            >
              Python
            </button>
            <button
               className={`filter-btn ${filter === 'Node.js' ? 'active' : ''}`}
               onClick={() => setFilter('Node.js')}
            >
              Node.js
            </button>
            <button 
              className={`filter-btn ${filter === 'database' ? 'active' : ''}`}
              onClick={() => setFilter('database')}
            >
              Databases
            </button>
          </div>
        </div>
        
        <div className="projects-wrapper">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                order={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, order }) => {
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
      style={{ "--order": order }}
    >
      <div className="project-image-container">
        <img 
          src={project.images[currentImageIndex]} 
          alt={project.title} 
          className="project-image" 
        />
        {project.images.length > 7 && (
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
        <div className="project-icon-container">
          {project.icon}
        </div>
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
            <span className="achievement-label">Key Achievements:</span>
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
          className="project-link"
        >
          <FaGithub className="project-icon" />
          <span>Code</span>
        </a>
        {project.liveDemo && (
          <a 
            href={project.liveDemo} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Live demo"
            className="project-link"
          >
            <FaExternalLinkAlt className="project-icon" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;