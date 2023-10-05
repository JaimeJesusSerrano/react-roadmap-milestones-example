import 'server-only'

const translations = {
  en: () => import('./en/en.json').then(module => module.default),
  es: () => import('./es/es.json').then(module => module.default),
}

export const getTranslations = async (locale: 'en' | 'es') => translations[locale]()
