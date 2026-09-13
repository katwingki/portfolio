import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NAV_HEIGHT } from '../../config/nav';

function Hero() {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        scrollMarginTop: `${NAV_HEIGHT}px`,
        minHeight: '100vh',
        pt: `${NAV_HEIGHT}px`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        bgcolor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h2" component="h1" fontWeight={700} className="hero-fade-in">
        Kathryn Lam
      </Typography>
      <Typography
        variant="h5"
        component="p"
        className="hero-fade-in-dim"
        sx={{ maxWidth: 640, animationDelay: '0.15s' }}
      >
        Full-stack Software Engineer &amp; Technical Lead
      </Typography>
    </Box>
  );
}

export default Hero;
