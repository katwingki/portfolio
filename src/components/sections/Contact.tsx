import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Section from './Section';
import { socialLinks } from '../../config/social';

function Contact() {
  return (
    <Section id="contact" title="Contact" bgcolor="primary.main" textColor="white">
      <Stack spacing={3} alignItems="center">
        <Typography variant="body1" textAlign="center" sx={{ opacity: 0.85, maxWidth: 480 }}>
          Have a role, a project, or just want to say hi? My inbox is open.
        </Typography>
        <Button
          variant="outlined"
          size="large"
          startIcon={<EmailIcon />}
          href={`mailto:${socialLinks.email}`}
          sx={{
            color: 'white',
            borderColor: 'white',
            borderRadius: 999,
            px: 4,
            '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
          }}
        >
          Email Me
        </Button>
        <Stack direction="row" spacing={1}>
          <Button
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon />}
            sx={{ color: 'white', opacity: 0.85 }}
          >
            GitHub
          </Button>
          <Button
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LinkedInIcon />}
            sx={{ color: 'white', opacity: 0.85 }}
          >
            LinkedIn
          </Button>
        </Stack>
      </Stack>
    </Section>
  );
}

export default Contact;
