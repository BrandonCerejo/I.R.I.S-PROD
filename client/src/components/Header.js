import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const topscrollFunction = () => {
    console.log("Scrolling to top...");
    document.documentElement.scrollTop = 0; 
    document.body.scrollTop = 0;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    topscrollFunction();
  }, [location]);

  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarSupportedContent');

    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };

  return (
    <header className={`fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <nav className={`navbar navbar-expand-lg navbar-dark px-0 mx-0 ${scrolled ? 'navbar-dark-scrolled' : ''}`}>
        <div className="container py-0 px-0 align-content-center mx-5">
          <Link className="navbar-brand" to="/">
            <img src="/logo.png" alt="Logo" className="logo-img" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg data-wf-icon="Menu24Icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M19 7H5V6H19V7ZM19 12H5V11H19V12ZM19 17H5V16H19V17Z" fill="currentColor"></path>
            </svg>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 py-3 justify-content-end">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  to="/"
                  onClick={handleNavLinkClick}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
                  to="/events"
                  onClick={handleNavLinkClick}
                >
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  to="/about"
                  onClick={handleNavLinkClick}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  to="/contact"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  to="/gallery"
                  onClick={handleNavLinkClick}
                >
                  Club Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
                  to="/blog"
                  onClick={handleNavLinkClick}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;