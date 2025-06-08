// Email service using EmailJS for contact form
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, DEVELOPMENT_MODE } from '../config/emailConfig';

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

/**
 * Send contact form email using EmailJS
 * @param {Object} formData - Form data containing name, email, subject, message
 * @returns {Promise} - EmailJS send promise
 */
export const sendContactEmail = async (formData) => {
  try {
    // Check if EmailJS is properly configured
    if (EMAILJS_CONFIG.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY' || 
        DEVELOPMENT_MODE) {
      console.warn('EmailJS not configured yet. Using fallback method.');
      return {
        success: false,
        message: 'EmailJS configuration needed',
        needsSetup: true
      };
    }

    // Prepare email template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: EMAILJS_CONFIG.toEmail,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
      // Additional metadata
      timestamp: new Date().toLocaleString(),
      user_agent: navigator.userAgent,
      page_url: window.location.href
    };

    // Send email via EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return {
      success: true,
      message: 'Email sent successfully!',
      response
    };

  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again.',
      error
    };
  }
};

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate form data
 * @param {Object} formData - Form data to validate
 * @returns {Object} - Validation result with isValid and errors
 */
export const validateFormData = (formData) => {
  const errors = {};
  
  // Name validation
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }
  
  // Email validation
  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Subject validation
  if (!formData.subject || formData.subject.trim().length < 5) {
    errors.subject = 'Subject must be at least 5 characters long';
  }
  
  // Message validation
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Alternative: Fallback email methods for when EmailJS is not configured
export const sendEmailFallback = (formData) => {
  // Method 1: Mailto link (opens user's email client)
  const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Subject: ${formData.subject}\n\n` +
    `Message:\n${formData.message}\n\n` +
    `---\n` +
    `Sent from portfolio website at ${new Date().toLocaleString()}`
  );
  
  const mailtoLink = `mailto:harsh.s.gor@gmail.com?subject=${subject}&body=${body}`;
  window.open(mailtoLink);
  
  return {
    success: true,
    message: 'Opening your email client...',
    method: 'mailto'
  };
};
