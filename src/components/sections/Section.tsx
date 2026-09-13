import { PropsWithChildren } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { NAV_HEIGHT } from '../../config/nav';

interface SectionProps extends PropsWithChildren {
  id: string;
  title?: string;
  bgcolor?: BoxProps['bgcolor'];
  textColor?: string;
}

// Shared section wrapper: consistent spacing, scroll offset for the fixed
// nav bar, and an optional heading. Section content (About/Experience/Skills/
// Projects/Contact) is filled in during later phases.
function Section({ id, title, bgcolor = 'background.default', textColor, children }: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        scrollMarginTop: `${NAV_HEIGHT}px`,
        bgcolor,
        color: textColor,
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="md">
        {title && (
          <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            {title}
          </Typography>
        )}
        {children}
      </Container>
    </Box>
  );
}

export default Section;
