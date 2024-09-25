import React from 'react';
import './App.css';
import Timeline from './Components/Timeline';
import HexagonGrid from './Components/Hexgons/HexagonGrid';
import MiddleHeader from './Components/MiddleHeader/MiddleHeader';
import useIsMobile from './hooks/useIsMobile';

function App() {
  const isMobile = useIsMobile(); 

  return (
    <div className="App">
        <div className="container">
          {!isMobile && <HexagonGrid />}
          <img src="https://i.postimg.cc/9w5bNBsg/image.jpg" alt="Description of the image" className="logo"></img>
          <div className="text">
            <div id='hi-text'>Hi </div>
            <div id='im-text'>I'm&nbsp;</div>
            <div id='name-text'>Matthew Tran</div>
          </div>
      </div>
      <MiddleHeader />
      <div className='Timeline-body'>
        <Timeline/>
      </div>
    </div>
  );
}

export default App;
