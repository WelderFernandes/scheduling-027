import Header from '@/components/painel/header'
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
    <section className="m-auto h-auto min-h-screen w-full max-w-[425px] bg-[#F1F1F1]">
      <div className="flex min-h-screen flex-col overflow-y-auto text-black">
        <header className="mx-auto w-full justify-between  text-black">
          <Header />
        </header>
        <main className="p-8">{children}</main>
      </div>
      {/* <div className="flex text-black">
          <h1>Right Menu</h1>
        </div> */}
    </section>
  )
}
