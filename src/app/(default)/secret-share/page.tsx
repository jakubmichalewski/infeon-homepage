import { Suspense } from 'react';

import { getLocale } from '@/i18n/server';
import SecretShareSendForm from '@components/features/SecretShare/SecretShareSendForm';
import BulletList from '@components/ui/BulletList';
import Heading from '@components/ui/Heading';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata() {
  return buildMetadata(routes.secretShare.root, await getLocale());
}

export default async function SecretSharePage() {
  const locale = await getLocale();
  const polish = locale === 'pl';

  return (
    <Section className="h-full bg-brand-50 py-20" id="contactForm">
      <div className="mx-auto my-auto grid h-full max-w-screen-lg items-center gap-12 lg:grid-cols-2">
        <div>
          <article>
            <Heading level={1} className="text-brand-700">
              {polish ? 'Wyślij poufną wiadomość' : 'Send a secret'}
            </Heading>

            <p className="mt-6">
              {polish
                ? 'Szybko i bezpiecznie udostępniaj hasła oraz inne poufne informacje osobom, które ich potrzebują.'
                : 'Quickly and securely share passwords and other confidential information with people who need it.'}
            </p>

            <BulletList
              data={bulletList[locale]}
              className="mt-6 font-medium"
            />
          </article>
        </div>
        <div className="lg:px-10">
          <Suspense>
            <SecretShareSendForm />
          </Suspense>
        </div>
      </div>
    </Section>
  );
}

const bulletList = {
  en: [
    'Enter a secret message and the recipient’s email address',
    'Choose how long the message should be available',
    'We’ll email the recipient a unique link',
    'Share the key separately using a messaging app'
  ],
  pl: [
    'Wpisz poufną wiadomość i adres e-mail odbiorcy',
    'Wybierz, jak długo wiadomość ma być dostępna',
    'Wyślemy odbiorcy e-mail z unikalnym linkiem',
    'Przekaż klucz osobno za pomocą komunikatora'
  ]
};
