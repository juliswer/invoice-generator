import React from 'react'
import { Spinner } from '@components/common/Spinner'

type Props = {
  children: React.ReactNode
  isLoading: boolean
}

export function SpinnerContainer({ children, isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full min-w-full bg-white opacity-60">
        <Spinner />
      </div>
    )
  }

  return <>{children}</>
}
