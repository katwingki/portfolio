import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { socialLinks } from '../../config/social';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 3,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton
          component="a"
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          sx={{ color: 'white' }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          sx={{ color: 'white' }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href={`mailto:${socialLinks.email}`}
          aria-label="Email"
          sx={{ color: 'white' }}
        >
          <EmailIcon />
        </IconButton>
      </Box>
      <Typography variant="body2">
        © {new Date().getFullYear()} Kathryn Lam. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
