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
      title: "Machine Learning Researcher",
      company: "University of Portland",
      description: "Developed adaptive AI behavior models using .NET (C#) and the CognitiveABM framework. Improved runtime efficiency by 50% and enabled scalable experimentation via multi-node Hadoop (HDFS) integration. Presented research at the Undergraduate Research Symposium and Founder's Day.",
      date: "Jun 2023 - May 2024",
      icons: [faHashtag, faPython, faDatabase],
      type: "work"
    },
    {
      title: "AR HoloLens Developer",
      company: "Tektronix (University of Portland Capstone)",
      description: "Built an AR waveform prediction tool using Unity/C# and TensorFlow (RNN, LSTM). Backed by a MySQL database of 2.5M+ records for model assessment and data quality validation. Showcased at the University of Portland Shiley Showcase.",
      date: "Fall 2023",
      icons: [faPython, faDatabase],
      type: "project"
    },
    {
      title: "Software Engineer",
      company: "Framatome",
      description: "Led full-stack development of a nuclear dose report traceability platform using Vue, .NET (C#), EF Core, RabbitMQ, and MS SQL with containerized Docker deployments. Designed automated pipelines for safety-critical report classification, reducing manual review by 85% and improving accuracy by 10%. Boosted model reliability 30–50% through controlled preprocessing on datasets of 20K–60K records. Integrated Azure DevOps CI/CD with AI services via Model Context Protocol (MCP).",
      date: "Sep 2024 - Present",
      icons: [faHashtag, faPython, faDatabase],
      type: "work"
    },
    {
      title: "Multiplayer Unity Game",
      company: "Personal Project",
      description: "Designing join and reconnect workflows for session continuity across client disconnects and late joins. Applied defensive programming to prevent unauthorized client-side state manipulation by validating all critical updates against host-controlled state.",
      date: "Aug 2025 - Present",
      icons: [faHashtag],
      type: "project"
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