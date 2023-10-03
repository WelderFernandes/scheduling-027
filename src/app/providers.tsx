'use client'
import { ThemeProvider } from '@material-tailwind/react'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
