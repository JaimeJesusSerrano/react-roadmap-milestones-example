'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { set } from '@/store/reducers/translations'

interface Props {
  children: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  translations: any
}

export default function LanguageInitializer({ children, translations }: Props): JSX.Element {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(set(translations))
  }, [dispatch, translations])

  if (!translations) {
    return <></>
  }

  return <>{children}</>
}
