import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Section from './Section';
import { education, experience } from '../../data/experience';

function Experience() {
  return (
    <Section id="experience" title="Experience" bgcolor="#f7f8fc">
      <Stack spacing={3}>
        {experience.map((job) => (
          <Paper key={`${job.company}-${job.title}-${job.dates}`} variant="outlined" sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: 1,
                mb: 1,
              }}
            >
              <Typography variant="h6" component="h3">
                {job.title} · {job.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {job.dates}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
              {job.location}
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 3, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
              {job.bullets.map((bullet) => (
                <Typography key={bullet.slice(0, 32)} component="li" variant="body2" color="text.secondary">
                  {bullet}
                </Typography>
              ))}
            </Box>
          </Paper>
        ))}

        <Paper variant="outlined" sx={{ p: 3 }}>
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
      </Stack>
    </Section>
  );
}

export default Experience;
