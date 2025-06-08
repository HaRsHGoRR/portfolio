import React, { useEffect, useState } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 100);
    };

    const throttledScrollHandler = () => {
      requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener('scroll', throttledScrollHandler);
    updateScrollProgress(); // Initial call

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress-bar"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
      
      {/* Scroll to Top Button */}
      <button
        className={`scroll-top-btn ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"      >
        <i className="bx bx-up-arrow-alt"></i>
      </button>
    </>
  );
};

export default ScrollProgress;