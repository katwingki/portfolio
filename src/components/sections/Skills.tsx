import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Section from './Section';
import { skillGroups } from '../../data/skills';

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: 2,
        }}
      >
        {skillGroups.map((group) => (
          <Paper key={group.category} variant="outlined" sx={{ p: 2.5 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1.5 }}>
              {group.category}
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {group.skills.map((skill) => (
                <Chip key={skill} label={skill} size="small" />
              ))}
            </Stack>
          </Paper>
        ))}
      </Box>
    </Section>
  );
}

export default Skills;
