'use client'
import { isMetamaskInstalled } from '@/contracts/utils/isMetamaskInstalled'
import { ReactNode, useEffect, useState } from 'react'
import Web3 from 'web3'

type Props = {
  children: ReactNode
}

export function Web3Provider({ children }: Props) {
  const [web3, setWeb3] = useState<Web3 | null>(null)

  useEffect(() => {
    async function setupWeb3() {
      if (isMetamaskInstalled) {
        const newWeb3 = new Web3(window.ethereum)
        try {
          await window.ethereum.enable()
          setWeb3(newWeb3)
        } catch (error) {
          console.error(error)
        }
      }
      if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
        setWeb3(new Web3(window.web3.currentProvider))
        return undefined
      }
      console.log('No Web3 provider detected')
    }

    setupWeb3()
  }, [])

  return <>{children}</>
}
