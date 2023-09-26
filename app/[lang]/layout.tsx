import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import ReduxProvider from '@/store/ReduxProvider'
import LanguageInitializer from '../LanguageInitializer'
import { getTranslations } from '../translations'
import './../globals.css'

const inter = Roboto({ subsets: ['latin'], weight: '300' })

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
  const translations = await getTranslations(params.lang)

  return (
    <html className="h-screen" lang={params.lang}>
      <body className={`${inter.className} h-full w-full`}>
        <ReduxProvider>
          <LanguageInitializer translations={translations}>{children}</LanguageInitializer>
        </ReduxProvider>
      </body>
    </html>
  )
}
