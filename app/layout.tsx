import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'devlog — AI-powered dev session manager',
  description: 'Write structured journal entries to Obsidian automatically after every Claude Code session',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}