'use client'

import React from 'react'

import { useTranslations } from 'next-intl'

import LocaleSwitcher from '@/components/organisms/locale-switcher'

export default function HeaderBar(): JSX.Element {
  const t = useTranslations('general')

  return (
    <div data-component="header-bar" className="flex h-10 justify-between bg-black p-2 font-bold text-gray-500">
      {t('title')}
      <LocaleSwitcher />
    </div>
  )
}
