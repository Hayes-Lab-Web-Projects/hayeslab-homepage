// src/components/Header.tsx
import React from 'react';

import { Link } from 'react-router-dom'; // Make sure this import exists!
import '../App.css'; 

const Header: React.FC = () => {
  return (
    <header className="header" role="banner">
      <div className="header-left">
        {/* Container for logo and text to keep them together */}
        <Link to="/" className="site-logo-container" aria-label="Hayes Lab Home">
          {/* Add the SANA logo image here */}
          <img
            src="/assets/sana-logo-white.png"
            alt="Hayes Lab Logo"
            className="sana-logo"
          />
          <span className="site-logo-text" aria-hidden="true">Hayes Lab</span>
        </Link>
      </div>
      <nav className="header-nav" role="navigation" aria-label="Main navigation">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/tools" className="nav-link">Tools</Link>
        {/* <Link to="/publications" className="nav-link">Publications</Link> */}
        <a 
          href="https://scholar.google.com/citations?user=3z4VbdIAAAAJ&hl=en" 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-link"
          aria-label="Publications (opens in new tab)"
        >
          Publications
        </a>
        <a href="mailto:whayes@uci.edu" className="nav-link" aria-label="Contact Us via email">Contact Us</a>
        <a href="/login" className="nav-link">Login/Register</a>
      </nav>
    </header>
  );
};

export default Header;