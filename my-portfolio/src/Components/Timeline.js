import React, { useEffect, useRef, useState } from 'react';
import './Timeline.css';
import { faJava, faPython, faAndroid, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Timeline() {
  const itemsRef = useRef([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const events = [
    {
      title: "Computer Science Grader",
      company: "University of Portland",
      description: "Evaluated students' work in Analysis of Algorithms and Intro to Computer Science courses. Assessed ~15 algorithm assignments and 30 Java projects weekly, providing in-depth feedback and tutoring support for complex programming concepts.",
      date: "Aug 2022 - Dec 2023",
      icons: [faJava],
      type: "work"
    },
    {
      title: "Shogi Mobile Game",
      company: "Academic Project",
      description: "Led development of an Android-based Shogi game using Agile methodologies. Implemented core game mechanics including piece movement, capture, and promotion systems. Managed team through Trello and maintained code quality with JUnit testing.",
      date: "Fall 2022",
      icons: [faAndroid, faJava],
      type: "project"
    },
    {
      title: "Machine Learning Researcher",
      company: "University of Portland",
      description: "Developed AI system simulating natural animal behavior using deep learning. Improved agent exploration by 33% and achieved 50% performance increase through Hadoop cluster integration. Reduced onboarding time by 33% through enhanced documentation.",
      date: "Jun 2023 - Jun 2024",
      icons: [faHashtag, faPython, faDatabase],
      type: "work"
    },
    {
      title: "AR HoloLens Developer",
      company: "Tektronix",
      description: "Created AR data visualization tool for electromagnetic waveforms. Integrated ML models (RNN, SVR, LSTM) to predict AM waveforms from 2.5M+ data points. Used Unity, C#, and Python with TensorFlow for implementation.",
      date: "Fall 2023",
      icons: [faPython, faDatabase],
      type: "project"
    },
    {
      title: "Project Finder",
      company: "Personal Project",
      description: "Developing full-stack web application for project showcase and collaboration. Migrated database from AWS RDS to Azure SQL for improved scalability. Following Agile practices with Jira, Figma, and Kanban workflow.",
      date: "Present",
      icons: [faReact, faNodeJs, faDatabase],
      type: "project"
    },
    {
      title: "Software Engineer I",
      company: "Framatome",
      description: "Working as a Software Engineer in enterprise software development, applying modern development practices and collaborating with cross-functional teams.",
      date: "Present",
      icons: [faHashtag, faPython],
      type: "work"
    }
  ];

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="timeline" id="experiences">
      {isMobile && (
        <div className="mobile-hint">Tap to expand</div>
      )}
      
      <div className="timeline-container">
        {events.map((event, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            onClick={() => handleCardClick(index)}
          >
            <div className={`timeline-card ${event.type} ${expandedIndex === index ? 'expanded' : ''}`}>
              <div className="card-header">
                <h3 className="card-title">{event.title}</h3>
                <div className="card-meta">
                  <span className="company">{event.company}</span>
                  <span className="date">{event.date}</span>
                </div>
              </div>
              
              <div className={`card-content ${expandedIndex === index ? 'show' : ''}`}>
                <p className="description">{event.description}</p>
                
                <div className="card-footer">
                  <div className="tech-icons">
                    {event.icons.map((icon, iconIndex) => (
                      <FontAwesomeIcon key={iconIndex} icon={icon} className="tech-icon" />
                    ))}
                  </div>
                  <span className={`type-badge ${event.type}`}>
                    {event.type === 'work' ? 'Work Experience' : 'Project'}
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        ))}
        
        <div className="timeline-line"></div>
      </div>
    </div>
  );
}

export default Timeline;