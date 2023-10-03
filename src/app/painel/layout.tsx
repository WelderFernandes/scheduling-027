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
        <div className="flex min-h-screen justify-between">
          <LeftMenu />
          {children}
          <div className="bg-blue-gray-500 text-black">
            <h1>Right Menu</h1>
          </div>
        </div>
      </body>
    </html>
  )
}
