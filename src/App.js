import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ParticleSystem from './components/ParticleSystem';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import CyberGrid from './components/CyberGrid';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const darkThemePath = '/style.css';
    const lightThemePath = '/style-light.css';

    document.getElementById('dark-theme-style')?.remove();
    document.getElementById('light-theme-style')?.remove();

    const link = document.createElement('link');
    link.rel = 'stylesheet';

    if (darkMode) {
      link.id = 'dark-theme-style';
      link.href = darkThemePath;
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.setAttribute('data-theme', 'dark');
    } else {
      link.id = 'light-theme-style';
      link.href = lightThemePath;
      document.documentElement.setAttribute('data-theme', 'light');
      document.body.setAttribute('data-theme', 'light');
    }
    document.head.appendChild(link);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');

  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`} data-theme={darkMode ? 'dark' : 'light'}>
      <CustomCursor />
      <ScrollProgress />
      <CyberGrid />
      <ParticleSystem />
      
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <Home />
      <Education />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;
