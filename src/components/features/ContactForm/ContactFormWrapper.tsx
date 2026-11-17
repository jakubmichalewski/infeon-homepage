'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { useLocale } from '@/i18n/LocaleProvider';
import { localeHeader, localizePath } from '@/i18n/config';
import ContactForm, {
  ContactFormPayload
} from '@components/features/ContactForm/ContactForm';
import ErrorMessage from '@components/ui/ErrorMessage';
import { routes } from '@routes/routes';

export default function ContactFormWrapper() {
  const locale = useLocale();
  const router = useRouter();
  const [submissionFailed, setSubmissionFailed] = useState(false);

  const handleForm = async (
    gReCaptchaToken: string,
    payload: ContactFormPayload
  ) => {
    setSubmissionFailed(false);
    try {
      const response = await fetch('/api/send-form', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          [localeHeader]: locale
        },
        body: JSON.stringify({ ...payload, gRecaptchaToken: gReCaptchaToken })
      });

      if (!response.ok) {
        setSubmissionFailed(true);
        return;
      }

      router.push(localizePath(routes.thankYou.root.href, locale));
    } catch (err) {
      console.error(err);
      setSubmissionFailed(true);
    }
  };

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LeWifMhAAAAADSjLXidpVkizhATxexg_lcYuoJI"
      language={locale}
      scriptProps={{
        async: true,
        defer: false,
        nonce: undefined
      }}
    >
      <ContactForm callback={handleForm} />
      {submissionFailed && (
        <ErrorMessage className="mt-4" role="alert">
          {locale === 'pl'
            ? 'Nie udało się wysłać wiadomości. Spróbuj ponownie.'
            : 'We couldn’t send your message. Please try again.'}
        </ErrorMessage>
      )}
    </GoogleReCaptchaProvider>
  );
}
