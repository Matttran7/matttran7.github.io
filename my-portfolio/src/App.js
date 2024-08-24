import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Timeline from './Components/Timeline';

const fonts = [
  'Arial, sans-serif',
  'Times New Roman, serif',
  'Georgia, serif',
  'Brush Script MT, cursive',
  'Copperplate, fantasy',
  'Palatino, serif',
  'Trebuchet MS, sans-serif',
  'Garamond, serif',
  'Rockwell, serif',
  'Futura, sans-serif'
];
function App() {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const [flip, setFlip] = useState(false);
  const [text1Font, setText1Font] = useState(fonts[0]);
  const [text2Font, setText2Font] = useState(fonts[1]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const flipTimeoutRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  const handleFlip = () => {
    setFlip(true);
    setIsTransitioning(true);
    
    if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    
    flipTimeoutRef.current = setTimeout(() => {
      pauseTimeoutRef.current = setTimeout(() => {
        setCurrentFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
        setText1Font(fonts[(currentFontIndex + 1) % fonts.length]);
        setText2Font(fonts[(currentFontIndex + 2) % fonts.length]);
        setFlip(false);
        setIsTransitioning(false);
      }, 500); // 1s
    }, 500);  // 500ms
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleFlip();
    }, 4000);

    return () => {
      clearInterval(timer);
      if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [currentFontIndex]);

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <img
            src="https://i.postimg.cc/9w5bNBsg/image.jpg"
            alt="Description of the image"
            className="logo"
          />
          <div className="text">
            <div id='hi-text'>Hi</div>
            <div className="name-container">
              <div id='im-text'>I'm&nbsp;</div>
              <div className="name-flip">
                <div
                  id='name-text'
                  className={isTransitioning ? 'transitioning' : ''}
                  style={{
                    fontFamily: text1Font,
                    transform: flip ? 'scaleY(0)' : 'none'
                  }}
                  onClick={handleFlip}
                >
                  Matthew Tran
                </div>
                <div
                  id='name-text2'
                  className={isTransitioning ? 'transitioning' : ''}
                  style={{
                    fontFamily: text2Font,
                    transform: flip ? 'none' : 'scaleY(0)'
                  }}
                  onClick={handleFlip}
                >
                  Matthew Tran
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className='Timeline-body'>
        <Timeline/>
      </div>
    </div>
  );
}

export default App;