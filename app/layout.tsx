import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Ottech | Automation, MVPs, and AI Integrations',
  description:
    'Ottech helps startups and teams launch automation systems, MVP products, and practical AI integrations.',
  openGraph: {
    title: 'Ottech | Automation, MVPs, and AI Integrations',
    description:
      'Engineering partner for fast teams building automation systems, MVPs, and AI-powered products.',
    type: 'website',
    url: 'https://ottech.kz',
    siteName: 'Ottech',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Analytics placeholder: add vendor script/init here in a future iteration. */}
        {children}
      </body>
    </html>
  );
}
