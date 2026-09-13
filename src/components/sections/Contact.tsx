import Typography from '@mui/material/Typography';
import Section from './Section';

// Working contact form lands in Phase 5 (@emailjs/browser).
function Contact() {
  return (
    <Section id="contact" title="Contact" bgcolor="primary.main" textColor="white">
      <Typography variant="body1" textAlign="center" sx={{ opacity: 0.85 }}>
        Contact form coming in Phase 5.
      </Typography>
    </Section>
  );
}

export default Contact;
