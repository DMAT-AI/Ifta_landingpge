import  { useState } from 'react';
import './Navbar.css'; // Import your CSS file

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
        <div className="container-fluid">
          <div className="brand" onClick={() => setIsNavOpen(false)}>
            <a href="/">IFTA.</a>
          </div>
          <button className="burger" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`nav-links ${isNavOpen ? 'show' : ''}`}>
            <ul>
              <li>
                <a href="#about-section" onClick={() => setIsNavOpen(false)}>
                  1. About Section
                </a>
              </li>
              <li>
                <a href="#key-features" onClick={() => setIsNavOpen(false)}>
                  2. Key Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={() => setIsNavOpen(false)}>
                  3. How it Works
                </a>
              </li>
              <li>
                <a
                  href="https://share.formbold.com/oyOXW"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsNavOpen(false)}
                >
                  4. Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="bg-white text-2xl"></hr>
    </div>
  );
}

export default Navbar;

