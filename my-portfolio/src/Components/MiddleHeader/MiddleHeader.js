import React from 'react';
import styles from './MiddleHeader.module.css';
import { Link } from 'react-router-dom'; 

const MiddleHeader = () => {

  return (
    <div className={styles.profileInfo}>
        <div className={styles.text}>
          <div className={styles.titleText}>Software Engineer</div>
          <Link to="/resume">
          <div className={styles.emailText}>My Resume 📝</div>
          </Link>
        </div>
    </div>
  );
};

export default MiddleHeader;
