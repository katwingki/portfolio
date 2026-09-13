import Typography from '@mui/material/Typography';
import Section from './Section';

// Bio content lands in Phase 3, sourced from kl-resume.
function About() {
  return (
    <Section id="about" title="About">
      <Typography variant="body1" color="text.secondary" textAlign="center">
        Bio coming in Phase 3.
      </Typography>
    </Section>
  );
}

export default About;
