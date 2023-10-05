import type { Metadata } from 'next'
import { Plus_Jakarta_Sans as Plus } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const PlusJakartaSans = Plus({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Barber Shop',
  description: 'Barbearias',
}

export default function Category({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={PlusJakartaSans.className}>
        <Providers>
          <div className="">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
