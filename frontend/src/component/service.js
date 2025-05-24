import React from 'react';
import { 
  FaCode, 
  FaServer, 
  FaMobileAlt, 
  FaDatabase, 
  FaShieldAlt, 
  FaCloud,
  FaChartLine,
  FaCogs,
  FaPalette
} from 'react-icons/fa';
import '../styles/service.css';

const services = [
  {
    icon: <FaCode className="service-icon" />,
    title: "Frontend Development",
    description: "Modern, responsive web applications using React, Next.js, and modern JavaScript frameworks with TypeScript support.",
    highlights: ["SPA/PWA Development", "UI Component Libraries", "Performance Optimization"]
  },
  {
    icon: <FaServer className="service-icon" />,
    title: "Backend Development",
    description: "Scalable server-side solutions with Node.js, Express, Django, and FastAPI with RESTful or GraphQL APIs.",
    highlights: ["Microservices Architecture", "API Development", "Authentication Systems"]
  },
  {
    icon: <FaMobileAlt className="service-icon" />,
    title: "Mobile-First Design",
    description: "Responsive designs that work perfectly across all device sizes with progressive enhancement strategies.",
    highlights: ["Responsive Frameworks", "Cross-browser Testing", "Touch Optimization"]
  },
  {
    icon: <FaDatabase className="service-icon" />,
    title: "Database Solutions",
    description: "Efficient data storage solutions with MongoDB, PostgreSQL, and Firebase with proper indexing and optimization.",
    highlights: ["Database Design", "Query Optimization", "Data Migration"]
  },
  {
    icon: <FaShieldAlt className="service-icon" />,
    title: "Security Implementation",
    description: "Secure applications with JWT/OAuth, encryption, and regular security audits following OWASP guidelines.",
    highlights: ["Data Encryption", "Security Headers"]
  },
  {
    icon: <FaCloud className="service-icon" />,
    title: "Cloud Deployment",
    description: "Reliable hosting solutions using GCP, AWS, and Docker containers with CI/CD pipelines.",
    highlights: ["Containerization", "Serverless Architecture", "Auto-scaling"]
  },
  {
    icon: <FaChartLine className="service-icon" />,
    title: "Data Analysis",
    description: "Data processing and visualization with Python, Pandas, and business intelligence tools.",
    highlights: ["ETL Pipelines", "Dashboard Creation", "Predictive Modeling"]
  },
  {
    icon: <FaCogs className="service-icon" />,
    title: "DevOps Solutions",
    description: "Infrastructure as code and deployment automation with monitoring and logging solutions.",
    highlights: ["CI/CD Pipelines", "Infrastructure Automation", "Monitoring Setup"]
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Services</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Solutions I can build for you</p>
        </div>
        
        <div className="services-wrapper">
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                className="service-card" 
                key={index}
                style={{ "--delay": index }}
              >
                <div className="service-icon-container">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-highlights">
                  {service.highlights && service.highlights.map((highlight, i) => (
                    <span key={i} className="highlight-tag">
                      <span className="highlight-marker">•</span> {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;