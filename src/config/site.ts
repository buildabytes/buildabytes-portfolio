/**
 * Single source of truth for site-wide identity.
 * Used by metadata, JSON-LD schema, and components.
 */
export const SITE = {
  name: 'Divya Flick',
  role: 'Software Engineer at Microsoft',
  tagline:
    "Full-stack engineer by trade, teaching myself to build with AI on the side. I build creative tools at Microsoft and write about the journey at buildabytes.",
  url: 'https://divyaflick.com',
  email: 'hello@divyaflick.com',
  emailAlt: 'hello@buildabytes.net',
  github: 'https://github.com/buildabytes',
  linkedin: 'https://www.linkedin.com/in/divyajose',
  location: 'Atlanta, Georgia',
  locality: 'Atlanta',
  region: 'GA',
  countryCode: 'US',
  description:
    "Personal site of Divya Flick — software engineer at Microsoft, teaching herself to build with AI. Notes on the full-stack-to-AI engineer path, written at buildabytes.",
} as const;

export type Site = typeof SITE;