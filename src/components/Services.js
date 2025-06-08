import React from 'react';
import './style.css';

const Services = () => {
  const servicesData = [
    {
      icon: 'bx-code-alt',
      title: 'Full Stack Development',
      description: 'Complete web application development using modern technologies like React, Node.js, and MongoDB. From concept to deployment with scalable architecture.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      color: 'cyan'
    },
    {
      icon: 'bx-mobile-alt',
      title: 'Responsive Web Design',
      description: 'Creating pixel-perfect, mobile-first responsive websites that work seamlessly across all devices and browsers with optimal user experience.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind'],
      color: 'pink'
    },
    {
      icon: 'bx-palette',
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces with focus on user experience, accessibility, and modern design principles.',
      technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Sketch'],
      color: 'purple'
    },
    {
      icon: 'bx-server',
      title: 'Backend Development',
      description: 'Robust backend systems with RESTful APIs, database design, authentication, and cloud deployment for scalable applications.',
      technologies: ['Node.js', 'Python', 'Express', 'FastAPI', 'AWS'],
      color: 'green'
    },
    {
      icon: 'bx-data',
      title: 'Database Management',
      description: 'Efficient database design, optimization, and management for both SQL and NoSQL databases with performance tuning.',
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
      color: 'orange'
    },
    {
      icon: 'bx-cog',
      title: 'Performance Optimization',
      description: 'Website speed optimization, code splitting, lazy loading, and performance monitoring to ensure lightning-fast user experiences.',
      technologies: ['Webpack', 'Vite', 'Lighthouse', 'GTMetrix', 'Analytics'],
      color: 'blue'
    }
  ];

  return (
    <section className="services" id="services">
      <h2 className="text-gradient-primary">My Services</h2>
      <p className="services-subtitle">
        Delivering cutting-edge solutions with modern technologies and best practices
      </p>
      
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className={`services-box service-${service.color}`}>
            <div className="service-icon">
              <i className={`bx ${service.icon}`}></i>
            </div>
            
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            
            <div className="service-technologies">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                {service.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="service-cta">
              <a href="#contact" className="service-btn">
                Get Started <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Process Section */}      <div className="process-section">
        <h3 className="text-gradient-primary">My Development Process</h3>
        <div className="process-grid">
          <div className="process-step">
            <div className="step-number">01</div>
            <h4>Discovery & Planning</h4>
            <p>Understanding requirements, target audience, and project goals</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">02</div>
            <h4>Design & Prototype</h4>
            <p>Creating wireframes, mockups, and interactive prototypes</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">03</div>
            <h4>Development</h4>
            <p>Clean, efficient code implementation with best practices</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">04</div>
            <h4>Testing & Deployment</h4>
            <p>Thorough testing, optimization, and seamless deployment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
