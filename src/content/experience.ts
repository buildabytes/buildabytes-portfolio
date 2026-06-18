import type { Job } from '@/types/content';

export const EXPERIENCE = [
  {
    range: '2024—',
    role: 'Software Engineer II',
    company: 'Microsoft',
    place: 'Atlanta, GA',
    tags: ['TypeScript', 'React', 'GraphQL', 'Azure', 'AI/ML'],
  },
  {
    range: '2022—24',
    role: 'Software Engineer II',
    company: 'Microsoft',
    place: 'Atlanta, GA',
    tags: ['JavaScript', 'TypeScript', 'React', 'Azure DevOps'],
  },
  {
    range: '2019—21',
    role: 'Senior Software Engineer',
    company: 'Savvas Learning',
    place: 'Boston, MA',
    tags: ['Angular', 'Java', 'Spring Boot', 'AWS'],
  },
  {
    range: '2016—19',
    role: 'Associate Software Developer',
    company: 'Pearson',
    place: 'Boston, MA',
    tags: ['JavaScript', 'Angular', 'REST APIs', 'Agile'],
  },
  {
    range: '2016',
    role: 'Software Developer',
    company: 'Cisco',
    place: 'Boxborough, MA',
    tags: ['Java', 'JavaScript', 'WebRTC'],
  },
  {
    range: '2015—16',
    role: 'Software Developer',
    company: 'NetDocuments',
    place: 'Lehi, UT',
    tags: ['JavaScript', 'C#', '.NET'],
  },
] as const satisfies ReadonlyArray<Job>;
