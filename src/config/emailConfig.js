// EmailJS Configuration - Update these values after setting up EmailJS
// See EMAIL_SETUP_GUIDE.md for detailed instructions

export const EMAILJS_CONFIG = {
  // Replace with your actual EmailJS service ID
  serviceId: 'service_sn8pgto',
  
  // Replace with your actual EmailJS template ID  
  templateId: 'template_zavm33q',
  
  // Replace with your actual EmailJS public key
  publicKey: 'MJIwQb8u-2T14u82t',
  
  // Your email address (already configured correctly)
  toEmail: 'harsh.s.gor@gmail.com'
};

// Development mode - set to false in production
export const DEVELOPMENT_MODE = false;

// Email template preview (for reference when creating EmailJS template)
export const EMAIL_TEMPLATE_EXAMPLE = `
🎨 CYBERPUNK-THEMED HTML EMAIL TEMPLATE

Features:
- Dark gradient background matching portfolio theme
- Cyberpunk blue (#00f5ff) accent colors  
- Professional contact card layout
- Reply button for easy responses
- Complete sender information display
- Responsive design for all email clients

Template Variables Used:
- {{from_name}} - Sender's name
- {{from_email}} - Sender's email  
- {{subject}} - Message subject
- {{message}} - Message content
- {{timestamp}} - Send time
- {{reply_to}} - Reply email
- {{page_url}} - Source website

See EMAIL_SETUP_GUIDE.md for complete HTML template code.
`;
