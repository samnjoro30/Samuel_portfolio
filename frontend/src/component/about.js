import React from 'react';
import '../styles/about.css';
import techImage from '../assets/about.jpeg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-wrapper">
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm <strong>Samuel Njoroge Kibandi</strong>, a passionate and versatile <strong>Information Technologist</strong> based in Nairobi, Kenya.
                I co-founded <strong>Bazelink</strong>, where I've led the development of robust, scalable systems across e-commerce,
                insurance, and banking industries.
              </p>
              <p>
                Beyond software development, I specialize in areas such as <strong>Data Analysis</strong> (using tools like Pandas, Matplotlib, and Jupyter),
                <strong> Cybersecurity</strong>, and <strong>Cloud Infrastructure</strong> (GCP, Firebase). I enjoy blending development, IT operations,
                and analytical thinking to solve real-world challenges with technology.
              </p>
              <p>
                With a strong foundation in networking, system optimization, and DevOps practices, I approach every project with a full-stack mindset —
                from user interface to backend logic and deployment pipelines.
              </p>
            </div>

            <div className="skills-highlight">
              <div className="skill-tag">Full-Stack Dev</div>
              <div className="skill-tag">Data Analysis</div>
              <div className="skill-tag">Cybersecurity</div>
              <div className="skill-tag">Cloud Infrastructure</div>
              <div className="skill-tag">DevOps</div>
              <div className="skill-tag">System Architecture</div>
            </div>
          </div>

          <div className="about-image">
            <img src={techImage} alt="Samuel Njoroge Kibandi" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;