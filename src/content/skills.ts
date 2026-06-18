import type { SkillGroup } from '@/types/content';

export const SKILLS = [
  {
    group: 'Frontend',
    items: ['JavaScript', 'TypeScript', 'React', 'Angular', 'HTML5', 'CSS / Sass', 'E2E Testing'],
  },
  {
    group: 'Backend',
    items: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'GraphQL', 'Microservices'],
  },
  {
    group: 'AI & Agents',
    items: ['Python', 'CrewAI', 'Google ADK', 'LangGraph', 'Gemini', 'Multi-Agent Systems', 'LLM Tool Use'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Git', 'CI/CD'],
  },
] as const satisfies ReadonlyArray<SkillGroup>;
