'use client';

import { useEffect } from 'react';

import { useLocale } from '@/i18n/LocaleProvider';
import SystemMessage from '@components/features/SystemMessage/SystemMessage';
import Button from '@components/ui/Button';

export default function Error({
  error
}: {
  error: Error & {
    digest?: string;
  };
}) {
  const polish = useLocale() === 'pl';
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <SystemMessage
      title={polish ? 'Coś poszło nie tak' : 'Something went wrong'}
      description={
        polish
          ? 'Jeśli błąd się powtórzy, skontaktuj się z nami.'
          : 'If the error persists, please contact us.'
      }
    >
      <Button href="/">
        {polish ? 'Wróć na stronę główną' : 'Go to homepage'}
      </Button>
    </SystemMessage>
  );
}
