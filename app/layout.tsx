import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Ottech | Automation, MVPs, and AI Integrations',
  description:
    'Ottech replaces Excel, WhatsApp, and manual workflows with simple web systems. Automation, MVPs, and AI where it helps.',
  openGraph: {
    title: 'Ottech | Automation, MVPs, and AI Integrations',
    description:
      'We replace spreadsheets, group chats, and manual workflows with simple web systems. AI where it helps.',
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
