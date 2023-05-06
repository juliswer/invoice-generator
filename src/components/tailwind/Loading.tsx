import { type ReactNode } from 'react'

type Props = {
  isLoading: boolean
  children: ReactNode
}

export function Loading({ children, isLoading }: Props) {
  if (isLoading) {
    return (
      <button className="btn loading" type="button">
        {children}
      </button>
    )
  }
  return null
}
