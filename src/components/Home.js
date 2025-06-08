import React, { useEffect, useState } from 'react';
import './style.css';

const roles = [
  'Full Stack Developer',
  'React Specialist',
  'Node.js Expert',
  'UI/UX Designer',
  'Software Engineer'
];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, I'm <span>Harsh Gor</span></h1>
        <h3>
          I'm a <span>{roles[currentRole]}</span><span className="typing-cursor">|</span>
        </h3>
        <p>
          Versatile and passionate Developer with 3+ years of experience in creating robust, 
          scalable web applications using modern technologies. Proficient in technologies like React, Node.js, Spring Boot, and Android with a strong grasp of both frontend and backend systems. I transform complex problems into elegant, user-friendly solutions 
          that drive business growth and enhance user experience.
        </p>
        
        <div className="home-buttons">
          <a href="#contact" className="btn btn-primary">
            <i className='bx bx-phone'></i>
            Hire Me
          </a>
          <a href="#projects" className="btn btn-secondary">
            <i className='bx bx-briefcase'></i>
            My Work
          </a>
        </div>
        
        <div className="social-media">
          <a href="https://www.linkedin.com/in/harsh--gor/" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="https://github.com/HaRsHGoRR" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-github'></i>
          </a>
          <a href="https://instagram.com/harsh._.gor" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-instagram'></i>
          </a>
          <a href="https://x.com/HaRsHGoRR" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-twitter'></i>
          </a>
        </div>
      </div>
      
      <div className="home-image">
        <img src="/file.jpg" alt="Harsh Gor" className="profile-img" />
      </div>
    </section>
  );
};

export default Home;
