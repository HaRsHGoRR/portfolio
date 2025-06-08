import React, { useState } from 'react';
import './style.css';
import './contact-form-new.css';

const Contact = () => {  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const contactInfo = [
    {
      icon: 'bx-phone',
      title: 'Phone',
      value: '+919979988464',
      link: 'tel:+919979988464'
    },
    {
      icon: 'bx-envelope',
      title: 'Email',
      value: 'harsh.s.gor@gmail.com',
      link: 'mailto:harsh.s.gor@gmail.com'
    },
    {
      icon: 'bx-map',
      title: 'Location',
      value: 'Gujarat, India',
      link: 'https://maps.google.com'
    },
    {
      icon: 'bx-time',
      title: 'Availability',
      value: 'Mon - Fri, 9AM - 6PM',
      link: null
    }
  ];

  const socialLinks = [
    { icon: 'bxl-linkedin', url: 'https://www.linkedin.com/in/harsh--gor/', label: 'LinkedIn' },
    { icon: 'bxl-github', url: 'http://github.com/HaRsHGoRR', label: 'GitHub' },
    { icon: 'bxl-twitter', url: 'https://x.com/HaRsHGoRR', label: 'Twitter' },
    { icon: 'bxl-instagram', url: 'https://www.instagram.com/harsh._.gor/', label: 'Instagram' }
  ];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear specific field error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    setFormErrors({});

    // Basic form validation
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmitStatus('validation_error');
      setIsSubmitting(false);
      return;
    }

    // Simulate a short loading time
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 1000);
  };


  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="heading">Get In <span>Touch</span></h2>
          <p className="section-description">
            Let's discuss your next project and bring your ideas to life
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Work Together</h3>
              <p>
                I'm always excited to take on new challenges and collaborate 
                on innovative projects. Whether you have a specific project in mind 
                or just want to explore possibilities, I'd love to hear from you.
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    <i className={`bx ${info.icon}`}></i>
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    <i className={`bx ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>              <div className="form-row">
                <div className="input-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={formErrors.name ? 'error' : ''}
                    required
                  />
                  <label htmlFor="name">Full Name</label>
                  <div className="input-highlight"></div>
                  {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                </div>

                <div className="input-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={formErrors.email ? 'error' : ''}
                    required
                  />
                  <label htmlFor="email">Email Address</label>
                  <div className="input-highlight"></div>
                  {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                </div>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={formErrors.subject ? 'error' : ''}
                  required
                />
                <label htmlFor="subject">Subject</label>
                <div className="input-highlight"></div>
                {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
              </div>

              <div className="input-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={formErrors.message ? 'error' : ''}
                  rows="6"
                  required
                ></textarea>
                <label htmlFor="message">Your Message</label>
                <div className="input-highlight"></div>
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              </div>

              <button 
                type="submit" 
                className={`btn submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loader"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="bx bx-send"></i>
                  </>
                )}
              </button>              {submitStatus && (
                <div className={`submit-status ${submitStatus}`}>
                  {submitStatus === 'success' && (
                    <>
                      <i className="bx bx-check-circle"></i>
                      Thank you for your message! I'll get back to you soon.
                    </>
                  )}
                  {submitStatus === 'validation_error' && (
                    <>
                      <i className="bx bx-error-circle"></i>
                      Please fix the errors above and try again.
                    </>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <div className="footer-content">
            <p>&copy; 2024 Harsh Gor. All rights reserved.</p>
            <p>Built with ❤️ using React & CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
