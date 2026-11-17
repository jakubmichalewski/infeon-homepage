'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { MouseEvent } from 'react';

import { useLocale } from './LocaleProvider';
import { localeCookie, locales, localizePath, Locale } from './config';

const languageNames = { en: 'English', pl: 'Polski' };

export default function LanguageSwitcher({
  className
}: {
  className?: string;
}) {
  const locale = useLocale();
  const pathname = usePathname();

  function switchLanguage(
    event: MouseEvent<HTMLAnchorElement>,
    language: Locale
  ) {
    const { protocol, search, hash } = window.location;
    event.currentTarget.search = search;
    event.currentTarget.hash = hash;

    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
      return;

    const secure = protocol === 'https:' ? '; Secure' : '';
    document.cookie = `${localeCookie}=${language}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
  }

  return (
    <nav
      aria-label={locale === 'pl' ? 'Język strony' : 'Site language'}
      className={clsx(
        'border-brand-100 bg-brand-50 inline-flex shrink-0 gap-1 rounded-lg border p-1 text-xs font-semibold',
        className
      )}
    >
      {locales.map((language) => (
        <a
          key={language}
          href={localizePath(pathname, language)}
          hrefLang={language}
          lang={language}
          aria-label={languageNames[language]}
          aria-current={locale === language ? 'true' : undefined}
          onClick={(event) => switchLanguage(event, language)}
          className={clsx(
            'rounded-md px-2 py-1.5 transition-colors max-[360px]:px-1.5',
            locale === language
              ? 'bg-brand-600 text-white'
              : 'text-brand-900 hover:bg-brand-100'
          )}
        >
          {language.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
