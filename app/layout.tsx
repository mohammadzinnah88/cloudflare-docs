import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  title: 'Synergistic Mechanisms in Anaerobic Digestion',
  description:
    'Schematic illustration of synergistic mechanisms in anaerobic digestion enhanced by eco-enzyme and nZVI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-color-mode="light"
      data-light-theme="light"
      data-dark-theme="dark"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
