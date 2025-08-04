import React from 'react'

import HeaderBar from '@/components/molecules/header-bar'

interface Props {
  children: React.ReactNode
}

export default function Template({ children }: Props) {
  return (
    <>
      <HeaderBar />
      <main className="h-[calc(100vh-theme('height.10'))] w-full">{children}</main>
    </>
  )
}
