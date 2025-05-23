import React, { useState, useEffect } from 'react';
import profileImg from '../assets/sam.jpeg';
import CV from '../assets/Samuel_Njoroge.pdf';
import '../styles/header.css';

const Header = () => {
    // Typewriter effect state
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [showPreview, setShowPreview] = useState(false);
    
    const messages = [
        "Passionate about solving real-world problems using secure, scalable, and modern technologies.",
        "Cofounder of Bazelink.",
        "Full-stack developer with expertise in multiple technologies.",
        "Creating digital solutions that make an impact."
    ];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % messages.length;
            const fullText = messages[i];
            
            setText(isDeleting 
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );
            
            setTypingSpeed(isDeleting ? 30 : 150);
            
            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, messages, typingSpeed]);

    const handleDownload = () => {
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'Samuel_Njoroge.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowPreview(false);
    };


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <h2 className="logo">Portfolio</h2>
                    </div>
                    <ul className="navbar-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="navbar-right">
                           <button 
                                className="btn btn-cv"
                                onClick={() => setShowPreview(true)}
                            >
                                Download CV
                            </button>
                    </div>
                </div>
            </nav>
            {showPreview && (
                <div className="cv-preview-modal">
                    <div className="cv-preview-content">
                        <h3>Preview CV Before Download</h3>
                        <div className="preview-actions">
                            <button 
                                className="btn btn-primary"
                                onClick={handleDownload}
                            >
                                Download Now
                            </button>
                            <button 
                                className="btn btn-outline"
                                onClick={() => setShowPreview(false)}
                            >
                                Cancel
                            </button>
                        </div>
                        <div className="pdf-preview-container">
                            <iframe 
                                src={CV} 
                                title="CV Preview"
                                className="pdf-preview"
                            />
                        </div>
                    </div>
                </div>
            )}
            
            <header className="header-section">
                <div className="header-content">
                    {/* Profile Image with enhanced styling */}
                    <div className="header-image-wrapper">
                        <img src={profileImg} alt="Samuel Kibandi" className="header-image" />
                        <div className="image-overlay"></div>
                    </div>

                    {/* Text Content */}
                    <div className="header-text">
                        <h2>Hello, I'm</h2>
                        <h1>Samuel Njoroge Kibandi</h1>
                        <h3 className="typing-text">And I'm a <span className="highlight">Full-Stack Developer</span></h3>
                        <p className="typewriter">
                            <span>{text}</span>
                            <span className="cursor">|</span>
                        </p>

                        {/* Call-to-Actions */}
                        <div className="header-buttons">
                            <a href="mailto:samnjorokibandi@gmail.com" className="btn btn-primary">Hire Me</a>
                            <a href="#contact" className="btn btn-outline">Contact Me</a>
                        </div>

                        {/* Social Links */}
                        <div className="social-links">
                            <a href="https://github.com/samnjoro30" target="_blank" rel="noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://linkedin.com/in/samuel-njoroge-kibandi" target="_blank" rel="noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="header-stats">
                    <div><strong>2+</strong><br />Years of Experience</div>
                    <div><strong>10+</strong><br />Projects Completed</div>
                    <div><strong>10+</strong><br />Tech Stacks Mastered</div>
                </div>
            </header>
        </>
    );
};

export default Header;