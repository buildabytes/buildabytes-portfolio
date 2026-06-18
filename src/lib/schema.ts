import type { Site } from '@/config/site';

/**
 * Build the Schema.org Person JSON-LD blob.
 */
export function buildPersonSchema(site: Site): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    email: site.email,
    worksFor: { '@type': 'Organization', name: 'Microsoft' },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'The University of Texas at Arlington',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: site.countryCode,
    },
    knowsLanguage: ['English', 'Hindi', 'Marathi', 'Malayalam'],
    sameAs: [site.github, site.linkedin],
  };
}
