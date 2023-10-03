import LeftMenu from '@/components/painel/leftMenu'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard Barber Shop',
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <section className="min-h-screen bg-white">
          <div className="flex flex-1">
            <LeftMenu />
            {children}
          </div>
        </section>
      </body>
    </html>
  )
}
