import { PropsWithChildren } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { NAV_HEIGHT } from '../../config/nav';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

interface SectionProps extends PropsWithChildren {
  id: string;
  title?: string;
  bgcolor?: BoxProps['bgcolor'];
  textColor?: string;
}

// Shared section wrapper: consistent spacing, scroll offset for the fixed
// nav bar, a fade-up reveal on first scroll into view, and an optional
// heading. Section content (About/Experience/Skills/Contact) is filled in
// during later phases.
function Section({ id, title, bgcolor = 'background.default', textColor, children }: SectionProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <Box
      ref={ref}
      component="section"
      id={id}
      sx={{
        scrollMarginTop: `${NAV_HEIGHT}px`,
        bgcolor,
        color: textColor,
        py: { xs: 6, md: 10 },
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
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
