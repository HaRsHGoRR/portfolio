import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const loadingTexts = [
  'Initializing Systems...',
  'Loading Neural Networks...',
  'Connecting to Matrix...',
  'Compiling Code...',
  'Almost Ready...'
];

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="cyber-logo">
          <h1 className="logo-text">
            <span className="glitch" data-text="HARSH">HARSH</span>
            <span className="glitch" data-text="GOR">GOR</span>
          </h1>
          <div className="logo-subtitle">Software Developer</div>
        </div>
        
        <div className="loading-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
            <div className="progress-glow"></div>
          </div>
          <div className="progress-text">{progress}%</div>
        </div>
        
        <div className="loading-text">
          {loadingTexts[currentText]}
        </div>
        
        <div className="loading-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="loading-particle"></div>
          ))}
        </div>
      </div>
      
      <div className="loading-grid">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="grid-cell"></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
