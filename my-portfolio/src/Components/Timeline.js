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
    ["Computer Science Grader", "University of Portland", "As a Computer Science Grader at the University of Portland from August 2022 to December 2023, I evaluated students' work in the Analysis of Algorithms and Intro to Computer Science courses. I assessed around 15 algorithm assignments and 30 Java projects each week, providing in-depth feedback and guidance on code quality and optimization. I also offered tutoring support to help students grasp complex programming concepts such as object-oriented programming, data structures, and algorithms.", "August 2022", null, [faJava]],

    ["Shogi", null, "In Fall 2022, I led the development of an Android-based mobile game, Shogi, as part of my Object-Oriented Design course. Using Android Studio and Java, our team adopted Agile methodologies to manage the project through Atlassian Trello and test-driven development via JUnit. I spearheaded back-end development, implementing key features like piece movement, capture, deployment, promotion, and game initialization. As the team lead, I was responsible for task delegation and maintaining code quality through continuous testing and reviews.", "Fall 2022", null, [faAndroid, faJava]],

    ["Machine Learning Researcher", "University of Portland", "At the University of Portland, I worked as a Machine Learning Researcher from June 2023 to June 2024. I developed an advanced AI system to simulate natural animal behavior by building cognitive agents that emulated brain functions using deep learning and neural networks in C# and .NET. I optimized the system’s performance by improving agent exploration by 33% using fitness functions and enhancing the monitoring process through matplotlib. My work included integrating a multi-node cluster with Hadoop's distributed file system to allow for large-scale data analysis and test replication, which resulted in a 50% performance increase. I also enhanced documentation practices, reducing the onboarding time for new hires by 33%, and I managed two new team members by leading weekly scrum meetings, planning new features, and guiding the project using Agile methodologies.", "Fall 2023", `${process.env.PUBLIC_URL}/images/mlresearch.png`, [faHashtag, faPython, faDatabase]],

    ["AR HoloLens", "Tektronix", "As part of my senior capstone project with Tektronix in Fall 2023, I collaborated with a team to create an augmented reality data visualization tool for electromagnetic waveforms using the HoloLens. This involved using C# and Unity for rendering the data in AR. I integrated Python with TensorFlow, JAX, and Keras to predict AM electromagnetic waveforms, employing RNN, SVR, and LSTM models. I managed over 2.5 million data points using MySQL to assess data quality and evaluate model performance. Throughout the project, we employed Agile methodologies, participating in weekly scrums to continuously refine the project based on client feedback.", "Fall 2023", null, [faPython, faDatabase]],

    ["Project Finder", null, "I am currently developing a full-stack web application called Project Finder, which is designed to help users showcase their projects and encourage collaboration. The application uses React for the front end and Node.js for the back end. I migrated the database infrastructure from AWS RDS PostgreSQL to Azure SQL, ensuring scalability and improved performance. The project follows Agile practices using Jira for task management, Figma for design, and Flowchart for planning, all within a Kanban workflow.", "Present", null, [faReact, faNodeJs, faDatabase]],

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