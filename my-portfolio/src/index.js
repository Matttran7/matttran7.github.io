import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import ResumeDisplay from './Pages/Resume/ResumeDisplay';
import ResearchSymposium from './Pages/Research/ResearchSymposium';
import FoundersDay from './Pages/Research/FoundersDay';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/resume" element={<ResumeDisplay />} /> 
      <Route path="/research/symposium" element={<ResearchSymposium />} />
      <Route path="/research/founders-day" element={<FoundersDay />} />
    </Routes>
  </Router>
);


reportWebVitals();
