import { describe, it, expect } from 'vitest';
import { buildPersonSchema } from '@/lib/schema';
import { SITE } from '@/config/site';

describe('buildPersonSchema', () => {
  const schema = buildPersonSchema(SITE);

  it('declares the Schema.org Person type', () => {
    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('Person');
  });

  it('includes identity fields from the site config', () => {
    expect(schema.name).toBe(SITE.name);
    expect(schema.url).toBe(SITE.url);
    expect(schema.email).toBe(SITE.email);
    expect(schema.jobTitle).toBe(SITE.role);
  });

  it('includes both social profiles in sameAs', () => {
    expect(schema.sameAs).toEqual([SITE.github, SITE.linkedin]);
  });

  it('declares a PostalAddress block', () => {
    expect(schema.address).toMatchObject({
      '@type': 'PostalAddress',
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      addressCountry: SITE.countryCode,
    });
  });
});
