import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gautham Tours and Travels - Premium Cab Services',
  description: 'Experience premium chauffeur-driven cab services across Maharashtra and beyond. Outstation trips, local travel, airport transfers, and complete trip planning.',
  keywords: 'cab service, taxi, outstation trips, Mumbai travel, Maharashtra tours, airport transfer, car rental',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}