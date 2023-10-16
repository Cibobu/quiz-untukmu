import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Microsite Untukmu',
  description: 'Microsite untukmu is a website base for check your inteligent. Microsite untukmu is under Untukmu pte Ltd',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="dark:dark text-foreground bg-background">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
