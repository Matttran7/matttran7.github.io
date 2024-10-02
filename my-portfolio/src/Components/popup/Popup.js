import React from 'react';
import './Popup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Popup({ event, onClose, page, onNextPage, onPrevPage }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-inner">
          <div className="page-content">
            <h2 className='Title-card'>{event[0]}</h2>
            {page === 1 ? (
              <>
                {event[2] && <p className='description-card'>{event[2]}</p>}
                <div className="popup-footer">
                  {event[5] && event[5].length > 0 && (
                    <div className="language-icons">
                      {event[5].map((icon, index) => (
                        <FontAwesomeIcon key={index} icon={icon} className="icon" />
                      ))}
                    </div>
                  )}
                  <div className="info-container">
                    {event[1] && <p className='company-card'>{event[1]}</p>}
                    {event[3] && <p className='date-card'>{event[3]}</p>}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="image-container">
                  {event[4] && <img src={event[4]} alt={"Error Loading Image..."} className="popup-image" />}
                </div>
              </>
            )}
          </div>
        </div>
        {page === 1 && event[2] && (
          <button className="nav-button next" onClick={onNextPage}>
            <span className="arrow right"></span>
          </button>
        )}
        {page === 2 && (
          <button className="nav-button prev" onClick={onPrevPage}>
            <span className="arrow left"></span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Popup;