export interface Milestone {
  year: string;
  label: string;
  sublabel: string;
  /** Section id this milestone links to - wherever that part of the story lives on the page. */
  targetId: string;
}

// A short, curated arc for the Hero strip - not exhaustive (see Experience for
// the full job history). Sourced from kl-resume.
export const timeline: Milestone[] = [
  { year: '2008', label: 'Entrepreneur', sublabel: 'Buffalo Vitamin Outlet', targetId: 'about' },
  { year: '2020', label: 'Grace Hopper Program', sublabel: 'Fullstack Academy', targetId: 'experience' },
  { year: '2021', label: 'Software Engineer', sublabel: 'Cigna', targetId: 'experience' },
  { year: '2022', label: 'Senior Advisor', sublabel: 'Cigna, present', targetId: 'experience' },
];
