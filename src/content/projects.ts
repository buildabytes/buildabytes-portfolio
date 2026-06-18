import type { Project } from '@/types/content';

export const PROJECTS = [
  {
    name: 'Job Hunt Assistant',
    kind: 'Agentic AI',
    blurb:
      'A multi-agent system that pulls federal job postings from USAJOBS, ranks them against a target resume, and drafts tailored application materials — orchestrated with CrewAI, powered by Gemini, with a Streamlit UI.',
    tags: ['Python', 'CrewAI', 'Gemini', 'Streamlit', 'USAJOBS API'],
    link: 'https://github.com/buildabytes/job-hunt-assistant',
  },
  {
    name: 'Multi-Agent Travel Planner',
    kind: 'Agentic AI',
    blurb:
      'Built on Google ADK with specialist sub-agents for flights, hotels, attractions, and weather, coordinated by a root planner that synthesizes a full itinerary from a single user prompt.',
    tags: ['Python', 'Google ADK', 'Gemini', 'Multi-Agent'],
  },
] as const satisfies ReadonlyArray<Project>;
