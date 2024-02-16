import english from './en.json'
import spanish from './es.json'

export const showDefaultLang = false;
export const defaultLang = 'es';

export const getI18n = ({ currentLocale = "es" }: { currentLocale?: string | undefined }) => {
  if (currentLocale === 'es') {
    return spanish
  }

  return english
}

export function useTranslatedPath(lang) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}