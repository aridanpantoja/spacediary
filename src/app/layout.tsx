import type { Metadata } from 'next'
import { Open_Sans as OpenSans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { cn } from '@/lib/utils'
import { SparklesCore } from '@/components/ui/sparkles'
import { Footer } from '@/components/footer'

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
        className={cn(
          'relative flex min-h-screen flex-col antialiased',
          openSans.className,
        )}
      >
        <Navbar />
        <main className="w-full flex-grow">{children}</main>
        <Footer />
        <div className="absolute top-0 -z-10 h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(91,33,182,0.4),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 -z-20 h-full w-full opacity-60">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={10}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />
        </div>
      </body>
    </html>
  )
}
