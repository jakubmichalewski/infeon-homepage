export const locales = ['en', 'pl'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';
export const localeCookie = 'infeon-locale';
export const localeHeader = 'x-infeon-locale';

export function isLocale(value: string | undefined | null): value is Locale {
  return value === 'en' || value === 'pl';
}

export function withoutLocale(path: string): string {
  const result = path.replace(/^\/(?:en|pl)(?=\/|[?#]|$)/, '');
  if (result === '' || result.startsWith('?') || result.startsWith('#')) {
    return `/${result}`;
  }
  return result;
}

export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;

  const unprefixedPath = withoutLocale(path);
  return `/${locale}${unprefixedPath.replace(/^\/(?=[?#]|$)/, '')}`;
}

export function browserLocale(acceptLanguage: string | null): Locale {
  const preferences = (acceptLanguage ?? '').split(',').map((preference) => {
    const [tag, weight] = preference.trim().toLowerCase().split(';');
    return {
      language: tag.split('-')[0],
      quality:
        weight === undefined ? 1 : Number(weight.trim().replace(/^q=/, ''))
    };
  });
  const preferred = preferences
    .filter(
      ({ language, quality }) =>
        isLocale(language) && quality > 0 && quality <= 1
    )
    .sort((a, b) => b.quality - a.quality)[0]?.language;

  return isLocale(preferred) ? preferred : defaultLocale;
}
