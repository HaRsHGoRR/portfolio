import React, { useState, useEffect } from 'react';

const Header = ({ toggleTheme, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = ['home', 'education', 'services', 'projects', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <a href="#home" className="logo" onClick={() => handleNavClick('home')}>
          <span className="logo-text">Harsh</span>
          <span className="logo-accent">Gor</span>
        </a>
        
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => handleNavClick('home')}
          >
            <span>Home</span>
          </a>
          <a 
            href="#education" 
            className={activeSection === 'education' ? 'active' : ''}
            onClick={() => handleNavClick('education')}
          >
            <span>Education</span>
          </a>
          <a 
            href="#services" 
            className={activeSection === 'services' ? 'active' : ''}
            onClick={() => handleNavClick('services')}
          >
            <span>Services</span>
          </a>
          <a 
            href="#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => handleNavClick('projects')}
          >
            <span>Projects</span>
          </a>
          <a 
            href="#testimonials" 
            className={activeSection === 'testimonials' ? 'active' : ''}
            onClick={() => handleNavClick('testimonials')}
          >
            <span>Testimonials</span>
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => handleNavClick('contact')}
          >
            <span>Contact</span>
          </a>
        </nav>
        
        <div className="header-actions">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`}></i>
          </button>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
