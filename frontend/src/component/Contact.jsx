import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub,
  FaGitlab,
  // FaTelegram,
  // FaTwitter
} from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import '../styles/contact.css';

const Contact = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }
  };

  const socialItem = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="contact-section" >
      {/* Animated background elements */}
      <div className="bg-shapes">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
      </div>
      
      <div className="container">
        {/* Header with refined animation */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-50px" }}
          className="section-header"
        >
          <h2 className="section-title">
            <span className="title-gradient">Let's Build</span> Something Amazing
          </h2>
          <p className="section-subtitle">
            Get in touch to discuss your project, ask questions, or explore collaboration opportunities.
          </p>
          <motion.div 
            className="section-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        {/* Contact cards with enhanced interaction */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="contact-cards"
        >
          <motion.div 
            variants={item}
            whileHover={{ y: -10 }}
            className="contact-card card-email"
          >
            <div className="card-icon">
              <div className="icon-pulse"></div>
              <FaEnvelope className="icon" />
            </div>
            <h3>Email Directly</h3>
            <a href="mailto:samnjorokibandi@gmail.com" className="contact-link">
              samnjorokibandi@gmail.com
              <span className="link-hover-effect"></span>
            </a>
            <p className="contact-note">Preferred method for detailed inquiries</p>
          </motion.div>
          
          <motion.div 
            variants={item}
            whileHover={{ y: -10 }}
            className="contact-card card-phone"
          >
            <div className="card-icon">
              <div className="icon-pulse"></div>
              <FaPhone className="icon" />
            </div>
            <h3>Call/SMS</h3>
            <a href="tel:+254791186675" className="contact-link">
              +254 791 186 675
              <span className="link-hover-effect"></span>
            </a>
            <p className="contact-note">Available for urgent matters</p>
          </motion.div>
          
          <motion.div 
            variants={item}
            whileHover={{ y: -10 }}
            className="contact-card card-location"
          >
            <div className="card-icon">
              <div className="icon-pulse"></div>
              <FaMapMarkerAlt className="icon" />
            </div>
            <h3>Based In</h3>
            <p className="contact-text">Nairobi, Kenya</p>
            <p className="contact-note">Open to remote work worldwide</p>
          </motion.div>
        </motion.div>

        {/* Enhanced social section with more platforms */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="social-section"
        >
          <h3 className="social-title">Connect On Professional Networks</h3>
          
          <motion.div 
            className="social-grid"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a 
              variants={socialItem}
              href="https://linkedin.com/in/samuel-njoroge-kibandi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="social-icon" />
              <span>LinkedIn</span>
            </motion.a>
            
            <motion.a 
              variants={socialItem}
              href="https://github.com/samnjoro30" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link github"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="social-icon" />
              <span>GitHub</span>
            </motion.a>
            
            {/* <motion.a 
              variants={socialItem}
              href="#"  // Add your Twitter URL
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link twitter"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter className="social-icon" />
              <span>GitLab</span>
            </motion.a> */}
            
            <motion.a 
              variants={socialItem}
              href="https://gitlab.com/samnjoro/"  // Add your Telegram URL
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link gitlab"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGitlab className="social-icon" />
              <span>Gitlab</span>
            </motion.a>
            
            <motion.a 
              variants={socialItem}
              href="https://www.upwork.com/freelancers/~01d2ea3072e22a589a?mp_source=share"  // Add your Upwork URL
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link upwork"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiUpwork className="social-icon" />
              <span>Upwork</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;