import React from 'react';
import './Header.css';

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="responsive-header">
      <nav className="nav-container">        
        <ul className="nav-links">
          <li>
            <button 
              className="nav-link"
              onClick={() => scrollToSection('experiences')}
            >
              Experiences
            </button>
          </li>
          <li>
            <button 
              className="nav-link"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;