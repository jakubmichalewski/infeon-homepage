import { headers } from 'next/headers';

import { defaultLocale, isLocale, localeHeader } from './config';

export async function getLocale() {
  const locale = (await headers()).get(localeHeader);
  return isLocale(locale) ? locale : defaultLocale;
}
