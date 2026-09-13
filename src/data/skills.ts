export interface SkillGroup {
  category: string;
  skills: string[];
}

// Sourced from ~/main/kl-resume/KL-Skills.md, consolidated from 12 categories
// down to 8 for a more scannable grid.
export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C#'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Angular', 'Redux', 'React Query', 'RxJS', 'HTML', 'CSS', 'Material UI', 'Vite'],
  },
  {
    category: 'Backend & APIs',
    skills: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'Flask',
      'Pydantic',
      'ASP.NET Web API',
      'REST APIs',
      'Microservices',
      'WebSockets',
      'OAuth',
      'JWT',
    ],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'Microsoft SQL Server', 'MongoDB', 'Amazon DynamoDB'],
  },
  {
    category: 'AI & LLM Engineering',
    skills: [
      'LangChain',
      'LangGraph',
      'Retrieval-Augmented Generation (RAG)',
      'AI Agents',
      'Tool Calling',
      'Prompt Evaluation',
      'Model Integration',
      'A2UI',
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS',
      'Amazon ECS',
      'Amazon VPC',
      'Amazon CloudWatch',
      'DigitalOcean',
      'Railway',
      'Cloudflare',
      'Docker',
      'GitHub Actions',
      'Jenkins',
      'Terraform',
      'CI/CD',
    ],
  },
  {
    category: 'Testing & Quality',
    skills: ['Jest', 'Cypress', 'Playwright', 'pytest', 'Unit Testing', 'Integration Testing', 'End-to-End Testing'],
  },
  {
    category: 'Architecture & Leadership',
    skills: [
      'System Design',
      'Scalability',
      'Performance Optimization',
      'Distributed Systems',
      'Caching',
      'Message Queues',
      'Technical Roadmaps',
      'Project Leadership',
      'Stakeholder Management',
      'Team Mentoring',
      'Code Reviews',
      'Agile / Scrum',
    ],
  },
];
