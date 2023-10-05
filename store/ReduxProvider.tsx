'use client'

import { Provider } from 'react-redux'
import store from '@/store'

interface Props {
  children: React.ReactNode
}

export default function ReduxProvider({ children }: Props): JSX.Element {
  return <Provider store={store}>{children}</Provider>
}
