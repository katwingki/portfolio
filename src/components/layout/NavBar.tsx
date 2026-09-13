import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { navItems, NAV_HEIGHT } from '../../config/nav';

function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ height: NAV_HEIGHT, justifyContent: 'center', bgcolor: 'primary.main' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          component="a"
          href="#home"
          variant="h6"
          sx={{ color: 'white', textDecoration: 'none', fontWeight: 700 }}
        >
          Kathryn Lam
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <List sx={{ width: 220 }} onClick={() => setDrawerOpen(false)}>
                {navItems.map((item) => (
                  <ListItemButton key={item.id} component="a" href={`#${item.id}`}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box component="nav" sx={{ display: 'flex', gap: 1 }}>
            {navItems.map((item) => (
              <Button key={item.id} href={`#${item.id}`} sx={{ color: 'white' }}>
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
