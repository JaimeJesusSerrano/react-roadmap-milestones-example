import './../globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

const inter = Roboto({ subsets: ['latin'], weight: '300' })

// export function generateStaticParams() {
//   return [{ locale: 'en' }, { locale: 'es' }]
// }

export const metadata: Metadata = {
  title: 'React Roadmap Milestones Example',
  description: 'React Roadmap Milestones Example',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: any }) {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html className="h-screen" lang={locale}>
      <body className={`${inter.className} h-full w-full`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
