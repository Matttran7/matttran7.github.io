import React from 'react';
import './App.css';
import Timeline from './Components/Timeline';


function App() {

  return (
    <div className="App">
        <div className="container">
          <img src="https://i.postimg.cc/9w5bNBsg/image.jpg" alt="Description of the image" className="logo"></img>
          <div className="text">
            <div id='hi-text'>Hi </div>
            <div id='im-text'>I'm&nbsp;</div>
            <div id='name-text'>Matthew Tran</div>
          </div>
      </div>

      <div className='Timeline-body'>
        <Timeline/>
      </div>
    </div>
  );
}

export default App;
