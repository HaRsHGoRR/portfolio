import React, { useState, useEffect, useCallback } from 'react';
import './style.css';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory, payment integration, and admin dashboard.",
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    github: "https://github.com/HaRsHGoRR",
    live: "https://github.com/HaRsHGoRR",
    featured: true
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat application with AI integration using OpenAI API. Features smart responses and conversation management.",
    category: "frontend",
    technologies: ["React", "Socket.io", "OpenAI", "CSS3"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    github: "https://github.com/HaRsHGoRR",
    live: "https://github.com/HaRsHGoRR",
    featured: true
  },
  {
    id: 3,
    title: "Task Management API",
    description: "RESTful API for task management with authentication, CRUD operations, and team collaboration features.",
    category: "backend",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    github: "https://github.com/HaRsHGoRR",
    live: "https://github.com/HaRsHGoRR",
    featured: false
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with data visualization, forecasts, and location-based services.",
    category: "frontend",
    technologies: ["Vue.js", "D3.js", "Weather API", "SCSS"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
    github: "https://github.com/HaRsHGoRR",
    live: "https://github.com/HaRsHGoRR",
    featured: false
  },
  {
    id: 5,
    title: "Social Media Platform",
    description: "Full-stack social media platform with real-time messaging, post sharing, and user authentication.",
    category: "fullstack",
    technologies: ["React", "Node.js", "Socket.io", "AWS"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
    github: "https://github.com/HaRsHGoRR",
    live: "https://github.com/HaRsHGoRR",
    featured: true
  },
  {
    id: 6,
    title: "Data Analytics API",
    description: "High-performance API for data processing and analytics with machine learning capabilities.",
    category: "backend",
    technologies: ["Python", "FastAPI", "TensorFlow", "Redis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    github: "https://github.com/HaRsHGoRR",
    live: "https://github.com/HaRsHGoRR",
    featured: false
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' }
  ];  const filterProjects = useCallback(() => {
    let filtered = projects;
    
    if (activeFilter === 'featured') {
      filtered = projects.filter(project => project.featured);
    } else if (activeFilter !== 'all') {
      filtered = projects.filter(project => project.category === activeFilter);
    }
    
    setVisibleProjects(filtered);
  }, [activeFilter]);

  useEffect(() => {
    filterProjects();
  }, [filterProjects]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="heading">My <span>Projects</span></h2>
          <p className="section-description">
            Showcasing my latest work and creative solutions
          </p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => handleFilterChange(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="bx bxl-github"></i>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                {project.featured && (
                  <div className="featured-badge">
                    <i className="bx bx-star"></i>
                    Featured
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-stats">
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Technologies Used</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;