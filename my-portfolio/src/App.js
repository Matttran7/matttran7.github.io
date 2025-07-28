// App.js
import React from 'react';
import './App.css';
import Timeline from './Components/Timeline';
import MiddleHeader from './Components/MiddleHeader/MiddleHeader';
import Header from './Components/Header/Header';
import Intro from './Components/Intro';
import useIsMobile from './hooks/useIsMobile';
import Footer from './Components/Footer/Footer';

function App() {
  const isMobile = useIsMobile();
  
  return (
    <div className="App">
      <Header />
      <Intro />
      {!isMobile && (<MiddleHeader />)}
      <div className='Timeline-body'>
        <Timeline/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;