import React from 'react';
import '../styles/skills.css';

const skills = [
  { 
    title: "Programming Languages", 
    items: "Python, Java, C, C++, JavaScript, PHP, TypeScript",
    icon: "💻"
  },
  { 
    title: "Web Development", 
    items: "React.js, Next.js, HTML5, CSS3, Django, Laravel, Bootstrap, Tailwind CSS",
    icon: "🌐"
  },
  { 
    title: "Backend & APIs", 
    items: "Node.js ⚡, Express.js, Flask, FastAPI, JWT, REST, laravel",
    icon: "🔌"
  },
  { 
    title: "Databases", 
    items: "MongoDB, MySQL, PostgreSQL, SQLite, Firebase Firestore, supabase",
    icon: "🗄️"
  },
  { 
    title: "DevOps & Tools", 
    items: "Git, GitHub, Docker, CI/CD Pipelines, Render, Vercel",
    icon: "🛠️"
  },
  { 
    title: "Cloud & Infrastructure", 
    items: "Google Cloud Platform, Firebase Hosting, AWS (EC2, S3, lamda), cloudinary",
    icon: "☁️"
  },
  { 
    title: "Data Analysis & Visualization", 
    items: "Pandas, NumPy, Matplotlib, Seaborn, Jupyter, Tableau, Google colab, Jupiter Notebook, anacoda",
    icon: "📊"
  },
  { 
    title: "Microsoft Office Suite", 
    items: "Excel , Word, PowerPoint, Publisher, Access, Outlook",
    icon: "📝"
  },
  { 
    title: "Cybersecurity", 
    items: "Network Security, Software security setup ",
    icon: "🔒"
  },
  // { 
  //   title: "Operating Systems", 
  //   items: "Windows, Linux (Ubuntu, Kali), macOS, Android",
  //   icon: "🖥️"
  // },
  
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>
        
        <div className="skills-wrapper">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.title}</h4>
                <p>{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;