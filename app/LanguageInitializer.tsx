'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Spinner from '@/components/atoms/spinner'
import { set } from '@/store/reducers/translations'

interface Props {
  children: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  translations: any
}

export default function LanguageInitializer({ children, translations }: Props) {
  const dispatch = useDispatch()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const translationsState = useSelector((state: any) => state.translations)

  useEffect(() => {
    dispatch(set(translations))
  }, [dispatch, translations])

  if (!translations || !translationsState) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner className="size-12" />
      </div>
    )
  }

  return <>{children}</>
}
