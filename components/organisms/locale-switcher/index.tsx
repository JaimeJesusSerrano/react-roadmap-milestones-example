'use client'

import { usePathname, useRouter, useParams } from 'next/navigation'

export default function LocaleSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()

  const lang = params?.lang

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newUrl = pathname.replace(`/${lang}/`, `/${e.target.value}/`)
    router.push(newUrl)
  }

  return (
    <select value={lang} onChange={handleChange}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  )
}
