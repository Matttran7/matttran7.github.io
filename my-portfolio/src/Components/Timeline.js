import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { events } from '../Models/events';

function Timeline() {
  const itemsRef = useRef([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

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

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleResearchLinkClick = (e, path) => {
    e.stopPropagation(); // prevent card collapse on link click
    navigate(path);
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

                {event.researchLinks && (
                  <div className="research-links">
                    {event.researchLinks.map((link, i) => (
                      <button
                        key={i}
                        className="research-link-btn"
                        onClick={(e) => handleResearchLinkClick(e, link.path)}
                      >
                        {link.label} →
                      </button>
                    ))}
                  </div>
                )}

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