import React, { useState, useEffect } from 'react';
import './style.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);  const testimonials = [    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      company: "TechStart Inc.",
      content: "Harsh delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      project: "E-Commerce Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager",
      company: "Digital Solutions",
      content: "Working with Harsh was a game-changer for our project. His innovative approach and problem-solving skills helped us launch ahead of schedule.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      project: "Mobile App Development"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "CTO",
      company: "InnovateLab",
      content: "Harsh's full-stack development skills are impressive. He built a scalable solution that handles our growing user base effortlessly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      project: "SaaS Platform"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Startup Founder",
      company: "NextGen AI",
      content: "The API integration and backend architecture Harsh developed for us is robust and secure. Highly recommend his services!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      project: "AI Integration"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Marketing Director",
      company: "GrowthTech",
      content: "Harsh transformed our vision into reality with a beautiful, responsive website. The user experience is fantastic!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      project: "Corporate Website"
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i 
        key={i} 
        className={`bx ${i < rating ? 'bxs-star' : 'bx-star'}`}
      ></i>
    ));
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="heading">Client <span>Testimonials</span></h2>
          <p className="section-description">
            What my clients say about working with me
          </p>
        </div>

        <div className="testimonials-container">
          <div className="testimonial-main">
            <button className="testimonial-nav prev" onClick={prevTestimonial}>
              <i className="bx bx-chevron-left"></i>
            </button>

            <div className="testimonial-content">
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="client-info">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="client-image"
                    />
                    <div className="client-details">
                      <h3 className="client-name">{testimonials[currentTestimonial].name}</h3>
                      <p className="client-position">{testimonials[currentTestimonial].position}</p>
                      <p className="client-company">{testimonials[currentTestimonial].company}</p>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                </div>

                <div className="testimonial-body">
                  <div className="quote-icon">
                    <i className="bx bxs-quote-alt-left"></i>
                  </div>
                  <p className="testimonial-text">
                    {testimonials[currentTestimonial].content}
                  </p>
                  <div className="project-tag">
                    Project: {testimonials[currentTestimonial].project}
                  </div>
                </div>
              </div>
            </div>

            <button className="testimonial-nav next" onClick={nextTestimonial}>
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>

          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
              >
                <span></span>
              </button>
            ))}
          </div>

          <div className="testimonials-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfaction Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
