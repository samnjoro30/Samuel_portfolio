import React from 'react';
import '../styles/skills.css';

const skills = [
  { title: "Programming Languages", items: "Python, Java, C, C++, JavaScript, PHP" },
  { title: "Web Development", items: "React.js, HTML5, CSS3, Django, Laravel, Bootstrap" },
  { title: "Backend & APIs", items: "Node.js, Express.js, Flask, FastAPI, JWT, REST" },
  { title: "Databases", items: "MongoDB, MySQL, SQLite" },
  { title: "DevOps & Tools", items: "Git, GitHub, Docker, Firebase, Render" },
  { title: "Cloud & Infrastructure", items: "Google Cloud Platform, Firebase Hosting" }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-wrapper">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
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
