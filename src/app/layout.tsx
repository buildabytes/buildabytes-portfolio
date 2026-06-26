import { SkipLink } from '@/components/layout/SkipLink';
import { SITE } from '@/config/site';
import { buildPersonSchema } from '@/lib/schema';
import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Archivo, IBM_Plex_Mono } from 'next/font/google';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-archivo',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'Divya Flick',
    'Divya Jose',
    'Software Engineer',
    'Frontend Engineer',
    'React Engineer',
    'AI Engineer',
    'Microsoft',
    'buildabytes',
    'Atlanta',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: SITE.url },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0b0e' },
    { media: '(prefers-color-scheme: light)', color: '#fafaf7' },
  ],
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
};

const personSchema = buildPersonSchema(SITE);

/**
 * Inline script that runs BEFORE React hydrates. It reads the user's
 * saved theme (or falls back to their OS preference) and sets
 * <html data-theme="..."> synchronously, so the first paint already
 * shows the correct theme. No flash, no hydration mismatch.
 */
const noFlashScript = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    var preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    var theme = saved === 'light' || saved === 'dark' ? saved : preferred;
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <head>
        <script
          // No-flash theme script. Must run before paint.
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: noFlashScript }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SkipLink />
        {children}
      </body>
    </html>
  );
}