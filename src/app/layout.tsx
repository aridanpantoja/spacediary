import type { Metadata } from 'next'
import { Open_Sans as OpenSans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { cn } from '@/lib/utils'

const openSans = OpenSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body
        className={cn('relative min-h-screen antialiased', openSans.className)}
      >
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
