import React from 'react';
import './App.css';
import logo from './logo.svg'; 

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <div className="text">
          <div id='hi-text'>Hi </div>
          <div id='im-text'>I'm&nbsp;</div>
          <div id='name-text'>Matthew Tran</div>
        </div>
      </div>
    </div>
  );
}

export default App;
