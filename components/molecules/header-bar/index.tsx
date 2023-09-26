'use client'

import React from 'react'
import { useSelector } from 'react-redux'

import LocaleSwitcher from '@/components/organisms/locale-switcher'

export default function HeaderBar(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const translations = useSelector((state: any) => state.translations)

  return (
    <div data-component="header-bar" className="flex h-10 justify-between bg-black p-2 font-bold text-gray-500">
      {translations?.general?.title}
      <LocaleSwitcher />
    </div>
  )
}
