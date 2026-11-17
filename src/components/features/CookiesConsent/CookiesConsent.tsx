'use client';

import { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import { useLocale } from '@/i18n/LocaleProvider';
import Button from '@components/ui/Button';

export default function CookieConsent() {
  const polish = useLocale() === 'pl';
  const [cookie, setCookie] = useCookies(['endpoint-cookie-consent']);
  const [consent, setConsent] = useState(true);

  useEffect(() => {
    setConsent(cookie?.['endpoint-cookie-consent']?.consent);
  }, [cookie]);

  const handleConsent = useCallback(() => {
    setCookie('endpoint-cookie-consent', JSON.stringify({ consent: true }), {
      path: '/',
      sameSite: true,
      maxAge: 31556926
    });
  }, [setCookie]);

  if (!consent) {
    return (
      <div className="border-brand-100 fixed inset-x-3 bottom-3 z-50 flex items-center justify-between gap-3 rounded-xl border bg-white p-3 shadow-xl sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-96">
        <p className="text-sm leading-snug">
          {polish
            ? 'Ta strona korzysta z plików cookie.'
            : 'This website uses cookies.'}
        </p>
        <div className="shrink-0">
          <Button onClick={handleConsent}>
            {polish ? 'Rozumiem' : 'I understand'}
          </Button>
        </div>
      </div>
    );
  } else return null;
}
