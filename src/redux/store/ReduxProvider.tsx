'use client'

import { rootStore } from './store'
import { Provider } from 'react-redux'

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={rootStore}>{children}</Provider>
}
