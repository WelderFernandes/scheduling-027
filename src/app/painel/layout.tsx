import Header from '@/components/painel/header'
import LeftMenu from '@/components/painel/leftMenu'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard Barber Shop',
}

export default function DashboardLayout({
  children,
}: {
  children?: ReactNode
}) {
  return (
    <section>
      <div className="flex flex-1 justify-between bg-white">
        <LeftMenu />
        <div className="flex max-h-screen flex-1 flex-col overflow-y-auto text-black">
          <header className="mx-auto w-full justify-between  text-black">
            <Header />
          </header>
          <main className="p-8">{children}</main>
        </div>
        {/* <div className="flex text-black">
          <h1>Right Menu</h1>
        </div> */}
      </div>
    </section>
  )
}
