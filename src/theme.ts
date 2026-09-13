import { createTheme } from '@mui/material/styles';

// Brand carried over from the old site: dark navy hero/footer, soft blue accent cards.
export const NAVY = '#0e1830';
export const ACCENT = '#4f6bed';
export const CARD_BLUE = '#eef2ff';

const theme = createTheme({
  palette: {
    primary: { main: NAVY },
    secondary: { main: ACCENT },
    background: { default: '#ffffff', paper: '#ffffff' },
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
