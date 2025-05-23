import React from 'react'
import profileImg from '../assets/sam.jpeg'
import '../styles/header.css';

const Header = () => {
    

    return(
        <header className="header-section">
            <div className="header-content">

                {/* Profile Image */}
                <div className="header-image-wrapper">
                    <img src={profileImg} alt="Samuel Kibandi" className="header-image" /> 
                </div>

                {/* Text Content */}
                <div className="header-text">
                    <h2>Hello, I'm</h2>
                    <h1>Samuel Njoroge Kibandi</h1>
                    <h3>And I'm a Full-Stack Developer</h3>
                    <p>
                        Passionate about solving real-world problems using secure, scalable, and modern technologies.
                        Cofounder of Bazelink.
                    </p>

                    {/* Call-to-Actions */}
                    <div className="header-buttons">
                        <a href="mailto:samnjorokibandi@gmail.com" className="btn btn-primary">Hire Me</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>

                    {/* Social Links */}
                    <div className="social-links">
                        <a href="https://github.com/samnjoro30" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://linkedin.com/in/samuel-njoroge-kibandi" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="header-stats">
                <div><strong>2+</strong><br />Years of Experience</div>
                <div><strong>10+</strong><br />Projects Completed</div>
                <div><strong>2+</strong><br />Tech Stacks Mastered</div>
            </div>
        </header>



    );
};

export default Header;