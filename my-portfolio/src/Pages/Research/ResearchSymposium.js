import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Resume/ResumeDisplay.module.css';

function ResearchSymposium() {
  return (
    <div className={styles.resumeContainer}>
      <Link to="/" className={styles.backButton}>
        Back
      </Link>
      <h2 style={{ textAlign: 'center', margin: '0.5rem 0 0' }}>Undergraduate Research Symposium</h2>
      <p style={{ textAlign: 'center', margin: '0.25rem 0 1rem', color: '#555', fontSize: '0.9rem' }}>
        University of Portland — Machine Learning Research Presentation
      </p>
      <img
        src={require('./Cognitive_Agents_Research_Poster_Undergrad_Symposium.png')}
        alt="Undergraduate Research Symposium Poster"
        className={styles.resumeImage}
      />
    </div>
  );
}

export default ResearchSymposium;