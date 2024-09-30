// App.js
import React from 'react';
import './App.css';
import Timeline from './Components/Timeline';
import MiddleHeader from './Components/MiddleHeader/MiddleHeader';
import ResponsiveHeader from './Components/ResponsiveHeader';

function App() {
  return (
    <div className="App">
      <ResponsiveHeader />
      <MiddleHeader />
      <div className='Timeline-body'>
        <Timeline/>
      </div>
    </div>
  );
}

export default App;