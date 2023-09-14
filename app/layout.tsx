import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const inter = Roboto({ subsets: ['latin'], weight: '300' })

export const metadata: Metadata = {
  title: 'React Roadmap Milestones Example',
  description: 'React Roadmap Milestones Example',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='h-screen' lang='en'>
      <body className={`${inter.className} h-full w-full`}>{children}</body>
    </html>
  )
}
