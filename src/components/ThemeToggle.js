import React, { useState } from 'react';

// Renamed props for clarity: `darkMode` (boolean) and `onToggleTheme` (function)
const ThemeToggle = ({ darkMode, onToggleTheme }) => { 
  // Removed internal isDark state, using darkMode prop instead
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (onToggleTheme) {
      onToggleTheme(); // Call the callback from App.js (via Header)
    }
    
    createRippleEffect();
    
    setTimeout(() => setIsAnimating(false), 600);
  };

  const createRippleEffect = () => {
    const ripple = document.createElement('div');
    ripple.className = 'theme-ripple';
    document.body.appendChild(ripple);
    
    setTimeout(() => {
      if (document.body.contains(ripple)) { // Check if ripple still exists before removing
        document.body.removeChild(ripple);
      }
    }, 600);
  };

  return (
    <button 
      className={`theme-toggle ${isAnimating ? 'animating' : ''}`}
      onClick={handleToggle}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} theme`} // Use darkMode prop
      disabled={isAnimating}
    >
      <div className="toggle-track">
        <div className={`toggle-thumb ${darkMode ? 'dark' : 'light'}`}> {/* Use darkMode prop */}
          <i className={`bx ${darkMode ? 'bx-moon' : 'bx-sun'}`}></i> {/* Use darkMode prop */}
        </div>
        <div className="toggle-icons">
          <i className="bx bx-sun light-icon"></i>
          <i className="bx bx-moon dark-icon"></i>
        </div>
      </div>
      <div className="toggle-glow"></div>
    </button>
  );
};

export default ThemeToggle;