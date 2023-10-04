import Header from '@/components/painel/header'
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
    <section className={inter.className}>
      <div className="flex flex-1 justify-between bg-white">
        <LeftMenu />
        <div className="flex flex-1 flex-col text-black">
          <header className="mx-auto w-full justify-between  text-black">
            <Header />
          </header>
          {children}
        </div>
        <div className="flex text-black">
          <h1>Right Menu</h1>
        </div>
      </div>
    </section>
  )
}
