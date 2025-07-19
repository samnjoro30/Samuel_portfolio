import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaPaperPlane } from 'react-icons/fa';
import profileImg from '../assets/sam1.jpeg';
import CV from '../assets/Samuel_Njoroge_Kibandi_Resume_Update_6_2025.pdf';
import '../styles/header.css';

const Header = () => {
    // Typewriter effect state
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [showPreview, setShowPreview] = useState(false);
    
    const messages = [
        "Passionate about solving real-world problems using secure, scalable technologies",
        "Co-founder of Bazelink - connecting businesses with customers",
        "Full-stack developer specializing in modern web applications",
        "Creating digital solutions that drive business growth"
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
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, messages, typingSpeed]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'Samuel_Njoroge_Kibandi_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowPreview(false);
    };

    return (
        <>
            {/* Animated Navbar */}
            <motion.nav 
                className="navbar"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
            >
                <div className="container">
                    <div className="navbar-container">
                        <motion.div 
                            className="navbar-left"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h2 className="logo">SK</h2>
                        </motion.div>
                        
                        <ul className="navbar-links">
                            {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                                <motion.li 
                                    key={item}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a href={`#${item.toLowerCase()}`}>{item}</a>
                                </motion.li>
                            ))}
                        </ul>
                        
                        <motion.div 
                            className="navbar-right"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button 
                                className="btn btn-cv"
                                onClick={() => setShowPreview(true)}
                            >
                                <FaDownload /> Download CV
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>

            {/* CV Preview Modal */}
            {showPreview && (
                <motion.div 
                    className="cv-preview-modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div 
                        className="cv-preview-content"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                    >
                        <h3>Preview My Resume</h3>
                        <div className="preview-actions">
                            <motion.button 
                                className="btn btn-primary"
                                onClick={handleDownload}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaDownload /> Download Now
                            </motion.button>
                            <motion.button 
                                className="btn btn-outline"
                                onClick={() => setShowPreview(false)}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Close Preview
                            </motion.button>
                        </div>
                        <div className="pdf-preview-container">
                            <iframe 
                                src={CV} 
                                title="CV Preview"
                                className="pdf-preview"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
            
            {/* Hero Section */}
            <header className="header-section">
                <div className="bg-shapes">
                    <div className="shape-1"></div>
                    <div className="shape-2"></div>
                </div>
                
                <div className="container">
                    <motion.div 
                        className="header-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Profile Image */}
                        <motion.div 
                            className="header-image-wrapper"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            whileHover={{ y: -10 }}
                            whileTap={{ scale: 1.05 }}
                        >
                            <img src={profileImg} alt="Samuel Kibandi" className="header-image" />
                            <div className="image-overlay"></div>
                            <div className="image-border"></div>
                        </motion.div>

                        {/* Text Content */}
                        <motion.div 
                            className="header-text"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                Hello, I'm
                            </motion.h2>
                            
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                Samuel Njoroge Kibandi
                            </motion.h1>
                            
                            <motion.h3 
                                className="typing-text"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                And I'm a <span className="highlight">Full-Stack Developer |  Cloud & DevOps  Enthusiast</span>
                            </motion.h3>
                            
                            <motion.p 
                                className="typewriter"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <span>{text}</span>
                                <span className="cursor">|</span>
                            </motion.p>

                            {/* Call-to-Actions */}
                            <motion.div 
                                className="header-buttons"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.9 }}
                            >
                                <motion.a 
                                    href="mailto:samnjorokibandi@gmail.com" 
                                    className="btn btn-primary"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaPaperPlane /> Hire Me
                                </motion.a>
                                <motion.a 
                                    href="#contact" 
                                    className="btn btn-outline"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact Me
                                </motion.a>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div 
                                className="social-links"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.0 }}
                            >
                                <motion.a 
                                    href="https://github.com/samnjoro30" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaGithub />
                                </motion.a>
                                <motion.a 
                                    href="https://linkedin.com/in/samuel-njoroge-kibandi" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaLinkedin />
                                </motion.a>
                                <motion.a 
                                    href="#" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaTwitter />
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div 
                        className="header-stats"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.1 }}
                    >
                        <div>
                            <strong>1+</strong>
                            <span>Years of Experience</span>
                        </div>
                        <div>
                            <strong>10+</strong>
                            <span>Projects Completed</span>
                        </div>
                        <div>
                            <strong>10+</strong>
                            <span>Tech Stacks Mastered</span>
                        </div>
                        <div>
                            <strong>98%</strong>
                            <span>Project Success Rate</span>
                        </div>
                    </motion.div>
                </div>
            </header>
        </>
    );
};

export default Header;