import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Wrapper } from './wrapper'

export const metadata: Metadata = {
  title: 'Invoice Generator'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}
