import { TFunction } from 'i18next'
import { useTranslation } from 'react-i18next'
import { useTranslation as useTranslationNextJS } from 'next-i18next'

type tValuFunction = (key: string | undefined, params?: Record<string, any>) => string
const cache: Map<TFunction, tValuFunction> = new Map()

export const createSafeT = (t: TFunction): tValuFunction => {
  if (cache.has(t)) {
    return cache.get(t) as tValuFunction
  }
  const value: tValuFunction = ((key: string | undefined, params?: Record<string, any>): string => {
    if (!key) {
      return ''
    }
    const limits = key.split(' ')

    if (limits.length === 2) {
      return t(limits[0], { ...params, limit: limits[1] })
    }
    return t(key, params)
  })

  cache.set(t, value)
  return value
}

type safeTF = { t: (key: string | undefined, params?: Record<string, any>) => string }

// TODO memoize
export const useTranslations = (namespaces: string[]): safeTF => {
  const { t } = useTranslation(namespaces)

  return { t: createSafeT(t) as tValuFunction }
}
export const useTranslationsNextJS = (namespaces: string[]): safeTF => {
  const { t } = useTranslationNextJS(namespaces)

  return { t: createSafeT(t) as tValuFunction }
}
