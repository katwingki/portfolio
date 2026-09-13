import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Phase 1 placeholder: proves the Vite + React + TS + MUI + GitHub Actions
// deploy pipeline end to end. Real layout/content land in later phases.
function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        bgcolor: '#0e1830',
        color: 'white',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h3" component="h1" fontWeight={700}>
        Kathryn Lam
      </Typography>
      <Typography variant="body1">
        Portfolio rebuild in progress - Phase 1: deployment pipeline online.
      </Typography>
    </Box>
  );
}

export default App;
