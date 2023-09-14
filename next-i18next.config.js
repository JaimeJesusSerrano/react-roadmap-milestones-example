const defaultLocale = /** @type {"en-US" | "es-ES"} */ ("en-US")
const locales = /** @type {(typeof defaultLocale)[]} */ (["en-US", "es-ES"])

module.exports = {
  i18n: {
    defaultLocale: defaultLocale,
    locales: locales,
  },
}
