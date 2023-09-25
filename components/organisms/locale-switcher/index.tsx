'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'

export default function LocaleSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathname, { locale: e.target.value })
  }

  return (
    <select value={locale} onChange={handleChange}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  )
}
