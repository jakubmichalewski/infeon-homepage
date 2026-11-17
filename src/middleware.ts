import { NextRequest, NextResponse } from 'next/server';

import {
  browserLocale,
  isLocale,
  localeCookie,
  localeHeader,
  localizePath,
  withoutLocale
} from '@/i18n/config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathLocale = pathname.split('/')[1];
  const url = request.nextUrl.clone();

  if (isLocale(pathLocale)) {
    url.pathname = withoutLocale(pathname);
    const headers = new Headers(request.headers);
    headers.set(localeHeader, pathLocale);
    return NextResponse.rewrite(url, { request: { headers } });
  }

  const preference = request.cookies.get(localeCookie)?.value;
  const locale = isLocale(preference)
    ? preference
    : browserLocale(request.headers.get('accept-language'));
  url.pathname = localizePath(pathname, locale);

  const response = NextResponse.redirect(url);
  response.headers.set('Vary', 'Accept-Language, Cookie');
  response.headers.set('Cache-Control', 'private, no-store');
  return response;
}

export const config = {
  matcher: ['/((?!api(?:/|$)|_next(?:/|$)|images(?:/|$)|.*\\.[^/]+$).*)']
};
