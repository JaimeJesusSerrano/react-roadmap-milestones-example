import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import ReduxProvider from '@/store/ReduxProvider'

import LanguageInitializer from '../LanguageInitializer'
import { getTranslations } from '../translations'
import './../globals.css'

const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
})

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }]
}

export const metadata: Metadata = {
  title: 'React Roadmap Milestones Example',
  description: 'React Roadmap Milestones Example',
}

interface Props {
  children: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any
}

export default async function RootLayout({ children, params }: Props) {
  const resolvedParams = await params
  const translations = await getTranslations(resolvedParams.lang)

  return (
    <html className="h-screen" lang={resolvedParams.lang}>
      <body className={`${roboto.className} size-full`}>
        <ReduxProvider>
          <LanguageInitializer translations={translations}>{children}</LanguageInitializer>
        </ReduxProvider>
      </body>
    </html>
  )
}
