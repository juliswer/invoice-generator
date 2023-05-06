'use client'
import { Toaster } from './Toaster'
import './globals.css'
import { ReduxProvider } from '@/redux/store/ReduxProvider'
import './tailwind.css'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export function Wrapper({ children }: Props) {
  return (
    <>
<ReduxProvider>
      {children}
      <Toaster />
    </ReduxProvider>
</>
  )
}
