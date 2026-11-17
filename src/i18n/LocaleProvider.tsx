'use client';

import { createContext, ReactNode, useContext } from 'react';

import { defaultLocale, Locale } from './config';

const LocaleContext = createContext<Locale>(defaultLocale);

export function LocaleProvider({
  children,
  locale
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
