import React from 'react';
import styles from './MiddleHeader.module.css';
import useIsMobile from '../../hooks/useIsMobile';
import { Link } from 'react-router-dom'; // Import Link

const MiddleHeader = () => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.profileInfo}>
      {!isMobile && (
        <div className={styles.text}>
          <div className={styles.titleText}>Software Engineer</div>
          <div className={styles.emailText}>matthewatran7@gmail.com</div>
        </div>
      )}
      {isMobile && (
        <div className={styles.text}>
          <div className={styles.titleText}>matthewatran7@gmail.com</div>
        </div>
      )}
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
  );
};

export default MiddleHeader;
