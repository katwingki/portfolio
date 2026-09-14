import { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Section from './Section';
import { education, experience } from '../../data/experience';

// Most recent role starts expanded so the section isn't a wall of collapsed
// headers on first load; everything else opens on click.
const INITIALLY_EXPANDED = new Set([0]);

function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [expanded, setExpanded] = useState<Set<number>>(INITIALLY_EXPANDED);

  const toggle = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <Section id="experience" title="Experience" bgcolor="#f7f8fc">
      <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 1 }}>
        Click a role to see the details.
      </Typography>

      <Timeline position={isMobile ? 'right' : 'alternate'} sx={{ px: { xs: 0, md: 2 } }}>
        {experience.map((job, index) => {
          const isOpen = expanded.has(index);
          return (
            <TimelineItem key={`${job.company}-${job.title}-${job.dates}`}>
              <TimelineSeparator>
                <TimelineDot color={index === 0 ? 'secondary' : 'grey'} />
                {index < experience.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: 1.5 }}>
                <Paper variant="outlined" sx={{ overflow: 'hidden' }}>
                  <ButtonBase
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      p: 2,
                      gap: 1,
                    }}
                  >
                    <Box>
                      <Typography variant="h6" component="h3" sx={{ fontSize: '1.05rem' }}>
                        {job.title} · {job.company}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {job.dates} · {job.location}
                      </Typography>
                    </Box>
                    <ExpandMoreIcon
                      sx={{
                        flexShrink: 0,
                        mt: 0.5,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        color: 'text.secondary',
                      }}
                    />
                  </ButtonBase>
                  <Collapse in={isOpen}>
                    <Box
                      component="ul"
                      sx={{ m: 0, px: 2, pb: 2, display: 'flex', flexDirection: 'column', gap: 0.75 }}
                    >
                      {job.bullets.map((bullet) => (
                        <Typography key={bullet.slice(0, 32)} component="li" variant="body2" color="text.secondary">
                          {bullet}
                        </Typography>
                      ))}
                    </Box>
                  </Collapse>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>

      <Paper variant="outlined" sx={{ p: 3, mt: 2 }}>
        <Typography variant="h6" component="h3" sx={{ mb: 1.5 }}>
          Education
        </Typography>
        <Stack spacing={0.5}>
          {education.map((entry) => (
            <Typography key={entry.school} variant="body2" color="text.secondary">
              <strong>{entry.school}</strong> — {entry.credential}
            </Typography>
          ))}
        </Stack>
      </Paper>
    </Section>
  );
}

export default Experience;
