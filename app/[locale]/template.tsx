import React from 'react'

import HeaderBar from '@/components/molecules/header-bar'

interface Props {
  children: React.ReactNode
}

export default function Template({ children }: Props) {
  return (
    <>
      <HeaderBar />
      <main className="h-[calc(100vh-2.5rem)] w-full">{children}</main>
    </>
  )
}
