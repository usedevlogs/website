import type { Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>devlog — AI-powered dev session manager</title>
        <meta name="description" content="Write structured journal entries to Obsidian automatically after every Claude Code session" />
      </head>
      <body>{children}</body>
    </html>
  )
}