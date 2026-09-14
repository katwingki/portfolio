import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { timeline } from '../../data/timeline';
import { NAVY } from '../../theme';

// A short, clickable milestone strip under the Hero tagline - a quick preview
// of the career journey. Each milestone scrolls to wherever that part of the
// story actually lives on the page (About or Experience). Not exhaustive;
// see Experience for the full job history.
function HeroTimeline() {
  return (
    // Relative wrapper + a right-edge gradient hint that only shows on xs,
    // where the strip is narrower than its content and scrolls horizontally -
    // otherwise there's no visual cue that milestones 2021/2022 exist off-screen.
    <Box sx={{ position: 'relative', maxWidth: '100%' }}>
      <Box
        className="hero-fade-in"
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: { xs: 1.5, sm: 4 },
          mt: 3,
          px: 2,
          py: 1,
          maxWidth: '100%',
          overflowX: 'auto',
          animationDelay: '0.3s',
        }}
      >
        {timeline.map((milestone, index) => (
          <Fragment key={milestone.year}>
            {index > 0 && (
              <Box
                sx={{
                  width: { xs: 16, sm: 40 },
                  height: '1px',
                  bgcolor: 'rgba(255,255,255,0.3)',
                  alignSelf: 'center',
                  flexShrink: 0,
                }}
              />
            )}
            <Box
              component="a"
              href={`#${milestone.targetId}`}
              sx={{
                flexShrink: 0,
                minWidth: { xs: 90, sm: 108 },
                textAlign: 'center',
                textDecoration: 'none',
                color: 'inherit',
                '&:hover .milestone-label': { textDecoration: 'underline' },
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: 'white',
                  mx: 'auto',
                  mb: 0.75,
                }}
              />
              <Typography variant="subtitle2" fontWeight={700}>
                {milestone.year}
              </Typography>
              <Typography variant="caption" className="milestone-label" sx={{ display: 'block', opacity: 0.85 }}>
                {milestone.label}
              </Typography>
              <Typography variant="caption" sx={{ display: 'block', opacity: 0.6 }}>
                {milestone.sublabel}
              </Typography>
            </Box>
          </Fragment>
        ))}
      </Box>
      <Box
        aria-hidden
        sx={{
          display: { xs: 'block', sm: 'none' },
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: 32,
          pointerEvents: 'none',
          background: `linear-gradient(to right, transparent, ${NAVY})`,
        }}
      />
    </Box>
  );
}

export default HeroTimeline;
