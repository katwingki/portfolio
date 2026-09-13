import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Section from './Section';
import { aboutParagraphs } from '../../data/about';

function About() {
  return (
    <Section id="about" title="About">
      <Stack spacing={2}>
        {aboutParagraphs.map((paragraph) => (
          <Typography key={paragraph.slice(0, 24)} variant="body1" color="text.secondary">
            {paragraph}
          </Typography>
        ))}
      </Stack>
    </Section>
  );
}

export default About;
