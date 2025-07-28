// Footer.js
import React from 'react';
import styles from './Footer.module.css'; 
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.emailText}>matthewatran7@gmail.com</div>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/mtran7" target="_blank" rel="noopener noreferrer">
            <img src={require('./LinkedInLogo.png')} alt="LinkedIn" className={styles.socialIcon} />
          </a>
          <a href="https://github.com/Matttran7" target="_blank" rel="noopener noreferrer">
            <img src={require('./GitHub_Invertocat_Light.png')} alt="GitHub" className={styles.socialIcon} />
          </a>
          <Link to="/resume">
            <img src={require('./docs.png')} alt="Resume" className={styles.socialIcon} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
