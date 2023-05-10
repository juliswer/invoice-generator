import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Wrapper } from './wrapper'
import { Navbar } from '@/components/navbar/Navbar'

export const metadata: Metadata = {
  title: 'Invoice Tool'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="p-2">
          <Navbar />
        </div>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}
