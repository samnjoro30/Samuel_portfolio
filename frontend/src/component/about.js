import React from 'react';
import '../styles/about.css';
import techImage from '../assets/about.jpeg'; // You can replace this with any image you like

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-wrapper">
          {/* Left Content */}
          <div className="about-text">
            <p>
              I’m <strong>Samuel Njoroge Kibandi</strong>, a passionate and versatile <strong>Information Technologist</strong> based in Nairobi, Kenya.
              I co-founded <strong>Bazelink</strong>, where I’ve led the development of robust, scalable systems across e-commerce,
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

          {/* Right Tech Image */}
          <div className="about-image">
            <img src={techImage} alt="Technology illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
