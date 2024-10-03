import React, { useEffect, useRef, useState } from 'react';
import Popup from './popup/Popup';
import useIsMobile from '../hooks/useIsMobile';
import './Timeline.css';
import { faJava, faPython, faAndroid, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faHashtag } from '@fortawesome/free-solid-svg-icons';
function Timeline() {
  const isMobile = useIsMobile();
  const itemsRef = useRef([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [popupPage, setPopupPage] = useState(1);

  useEffect(() => {
    const items = itemsRef.current;
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    function callbackFunc() {
      items.forEach(item => {
        if (isElementInViewport(item)) {
          item.classList.add('in-view');
        }
      });
    }
    window.addEventListener('load', callbackFunc);
    window.addEventListener('resize', callbackFunc);
    window.addEventListener('scroll', callbackFunc);
    return () => {
      window.removeEventListener('load', callbackFunc);
      window.removeEventListener('resize', callbackFunc);
      window.removeEventListener('scroll', callbackFunc);
    };
  }, []);

  // [ TITLE , COMPANY , DESCRIPTION, DATE, IMAGE, ICONS]
  const EventList = [
    ["Computer Science Grader", "University of Portland", "Graded and tutored for 'Analysis of Algorithms' & 'Intro to Computer Science'", "August 2022", null, [faJava]],
    ["Shogi (Game)", null, "Developer for a mobile game 'Shogi'", "Fall 2022", null, [faAndroid, faJava]],
    ["Machine Learning Researcher", "University of Portland", "Developed an AI system for constructing agents that emulate natural animal behavior", "Fall 2023", `${process.env.PUBLIC_URL}/images/mlresearch.png`, [faHashtag, faPython, faDatabase]],
    ["AR HoloLens", "Tektronix", "Developed an augmented reality data visualization tool to display electromagnetic waves", "Fall 2023", null, [faPython, faDatabase]],
    ["Project Finder", null, null, "Present", null, [faReact, faNodeJs, faDatabase]],
    ["Software Engineer I", "Framatome", "null", "Present", `${process.env.PUBLIC_URL}/images/framatome.jpg`, [faHashtag, faPython]],
  ];

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setPopupPage(1);
  };

  const handlePopupClose = () => {
    setSelectedEvent(null);
  };

  const handleNextPage = () => {
    setPopupPage(2);
  };

  const handlePrevPage = () => {
    setPopupPage(1);
  };

  return (
    <div className="timeline">
      <ul>
        {isMobile && (
          <div className="ClickMe">
            click to expand
          </div>
        )}
        {EventList.map((event, index) => (
          <li key={index} ref={el => itemsRef.current[index] = el || ""} onClick={() => handleCardClick(event)}>
            <div className="content">
              <h2 className='Title-card'>{event[0]}</h2>
            </div>
          </li>
        ))}
        <div style={{ clear: 'both' }}></div>
      </ul>
      {selectedEvent && (
        <Popup
          event={selectedEvent}
          onClose={handlePopupClose}
          page={popupPage}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
        />
      )}
    </div>
  );
}

export default Timeline;