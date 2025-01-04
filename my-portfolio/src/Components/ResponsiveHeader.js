import React, { useState, useEffect } from 'react';
import './ResponsiveHeader.css';

const ResponsiveHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container">

      <div className="content-wrapper">
        <img
          src={`${process.env.PUBLIC_URL}/images/matttran_poly.png`}
          alt="Matthew Tran"
          className="logo"
        />
        <div className="text">
          <div id='hi-text'>Hi</div>
          <div id='im-name-text'>
            <span id='im-text'>I'm&nbsp; </span>
            <span id='name-text'>Matthew Tran</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveHeader;