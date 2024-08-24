import React, { useEffect, useRef } from 'react';
import './Timeline.css';

function Timeline() {
  const itemsRef = useRef([]);

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

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('load', callbackFunc);
      window.removeEventListener('resize', callbackFunc);
      window.removeEventListener('scroll', callbackFunc);
    };
  }, []);
  var EventList = [
    ["Computer Science Grader","University of Portland","Graded and tutored for 'Analysis of Algorithms' & 'Intro to Computer Science'","August 2022"],
    ["Shogi",null,"Developer for a mobile game 'Shogi'","Fall 2022"],
    ["Machine Learning Researcher"," University of Portland","Developed an AI system for constructing agents that emulate natural animal behavior","Fall 2023"],
    ["Tektronix AR HoloLens","Tektronix","Developed an augmented reality data visualization tool to display electromagnetic waves","Fall 2023"],
    ["Project Finder",null,null,"Present"],
  ]
  var A_Comp = true;
  return (
    <div className="timeline">
      <ul>
        {EventList.map((event, index) => (
          <li key={index} ref={el => itemsRef.current[index] = el || ""}>
            <div className="content">
              <h2 className='Title-card'>{event[0]}</h2> {/* Title */}
            </div>
            <div className="time">
              {event[1] && <p className='company-card'>{event[1]}</p>}
              {event[3] && <p className='date-card'>{event[3]}</p>}
            </div>
          </li>
        ))}
        <div style={{ clear: 'both' }}></div>
      </ul>
    </div>
  );
}

export default Timeline;
