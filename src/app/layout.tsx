import Script from 'next/script';
import React, { ReactNode } from 'react';

import '@styles/globals.css';
import { LocaleProvider } from '@/i18n/LocaleProvider';
import { getLocale } from '@/i18n/server';
import CookiesConsent from '@components/features/CookiesConsent/CookiesConsent';
import Providers from '@providers/providers';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href={'https://use.typekit.net/bge2wkk.css'} />
        <Script id="google-tag-manager">{`(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-T66ZXJJ')`}</Script>
      </head>
      <body
        className="font-sans text-base/normal text-slate-800"
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T66ZXJJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <LocaleProvider locale={locale}>
          {children}
          <Providers>
            <CookiesConsent />
          </Providers>
        </LocaleProvider>
      </body>
    </html>
  );
}
