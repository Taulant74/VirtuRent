import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroBanner.css';

function HeroBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (section) => {
    // Implement navigation logic here
  };

  return (
    <header className={`hero-banner ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="logo">VirtuRent</div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <button className="nav-link" onClick={() => navigateTo('home')}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => navigateTo('about')}>About</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => navigateTo('contact')}>Contact</button>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="btn btn-outline-light">Login</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default HeroBanner;
