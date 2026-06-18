/**
 * Single source of truth for site-wide identity.
 * Used by metadata, JSON-LD schema, and components.
 */
export const SITE = {
  name: 'Divya Flick',
  role: 'Software Engineer II at Microsoft',
  tagline:
    'I design and engineer interface systems — Relay/GraphQL data layers, AI editing surfaces, and component architectures shipped across Microsoft 365.',
  url: 'https://buildabytes.net',
  email: 'hello@buildabytes.net',
  emailAlt: 'divyaflick@gmail.com',
  github: 'https://github.com/buildabytes',
  linkedin: 'https://www.linkedin.com/in/divyajose',
  location: 'Atlanta, Georgia',
  locality: 'Atlanta',
  region: 'GA',
  countryCode: 'US',
  description:
    'Personal site of Divya Flick — Software Engineer II at Microsoft, building AI-powered creative tools. Frontend craft, performance, accessibility, and a deliberate path into AI engineering.',
} as const;

export type Site = typeof SITE;
