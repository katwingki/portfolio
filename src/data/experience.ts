export interface Job {
  company: string;
  title: string;
  dates: string;
  location: string;
  bullets: string[];
}

// Sourced from ~/main/kl-resume (Kathryn_Lam_Senior_Software_Engineer.md).
export const experience: Job[] = [
  {
    company: 'Cigna',
    title: 'Software Engineering Senior Advisor',
    dates: 'December 2022 - Present',
    location: 'Remote',
    bullets: [
      'Lead three cross-functional initiatives spanning workflow modernization, AI-enabled business tools, and dashboards/reporting; gather requirements, coordinate business and data partners, assign work, and contribute directly to implementation.',
      'Translate business problems into agentic platform features, including agent design, visualization, prompt refinement, tool-calling validation, and quality assurance for business users.',
      'Delivered a self-service reporting automation experience with editable, customizable reports, reducing turnaround from 7-10 business days and helping stakeholders reach insights faster.',
      'Serve as a technical bridge across frontend, backend, data, and business teams, driving alignment from discovery through delivery and stakeholder acceptance.',
    ],
  },
  {
    company: 'Cigna',
    title: 'Software Engineering Advisor',
    dates: 'June 2021 - December 2022',
    location: 'Remote',
    bullets: [
      'Modernized internal business applications and developed custom solutions from stakeholder requirements to improve workflow efficiency, data accuracy, and employee productivity.',
      'Partnered across teams to design, implement, and validate full-stack features for business operations.',
    ],
  },
  {
    company: 'Collegiate Gateway',
    title: 'Contract Full-stack Developer',
    dates: 'February 2021 - Present, per diem',
    location: 'New York, NY',
    bullets: [
      'Built and maintain a customized client-management platform from the ground up, supporting more than 300 user records and workflows tailored to the organization’s operations.',
      'Designed and implemented REST APIs and a React-Redux frontend, including automated reporting that improved work efficiency by 70%.',
    ],
  },
  {
    company: 'Fullstack Academy',
    title: 'Web Development Instructional Associate',
    dates: 'November 2020 - January 2026, part-time',
    location: 'Remote',
    bullets: [
      'Mentor and support 50+ students through JavaScript fundamentals, debugging, software architecture, and Agile project delivery.',
      'Lead project teams of 3-4 junior developers and coach students through planning, implementation, and technical problem solving.',
    ],
  },
];

export const education = [
  { school: 'Fullstack Academy', credential: 'Grace Hopper Program, Certificate in Fullstack Development' },
  { school: 'University at Buffalo', credential: 'Master of Science in Pharmaceutical Science' },
];
