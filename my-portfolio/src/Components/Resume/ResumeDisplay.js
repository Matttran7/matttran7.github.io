// ResumeDisplay.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import styles from './ResumeDisplay.module.css';

const ResumeDisplay = () => {
  return (
    <div className={styles.resumeContainer}>
      <Link to="/" className={styles.backButton}>
        Back
      </Link>
      <img
        src={require('./MTran_Resume.png')}
        alt="Resume"
        className={styles.resumeImage} 
      />
      <a href={require('./MTran_Resume.pdf')} download className={styles.downloadButton}>
        Download
      </a>
    </div>
  );
};

export default ResumeDisplay;
