'use client';

import NextLink from 'next/link';
import { ComponentProps } from 'react';

import { useLocale } from './LocaleProvider';
import { isLocale, localizePath } from './config';

export default function Link({
  href,
  ...props
}: ComponentProps<typeof NextLink>) {
  const locale = useLocale();
  const localize = (path: string) => {
    const firstSegment = path.split(/[/?#]/)[1];
    return isLocale(firstSegment) ? path : localizePath(path, locale);
  };

  const localizedHref =
    typeof href === 'string'
      ? localize(href)
      : href.pathname
        ? { ...href, pathname: localize(href.pathname) }
        : href;

  return <NextLink href={localizedHref} {...props} />;
}
