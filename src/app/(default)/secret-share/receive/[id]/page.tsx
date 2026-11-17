import { getLocale } from '@/i18n/server';
import SecretShareReceiveForm from '@components/features/SecretShare/SecretShareReceiveForm';
import BulletList from '@components/ui/BulletList';
import Heading from '@components/ui/Heading';
import Section from '@components/ui/Section';

export async function generateMetadata() {
  const polish = (await getLocale()) === 'pl';

  return {
    title: polish
      ? 'Odbierz poufną wiadomość / Infeon Tech'
      : 'Receive a secret / Infeon Tech',
    robots: { index: false, follow: false }
  };
}

export default async function SecretShareReceivePage() {
  const polish = (await getLocale()) === 'pl';

  return (
    <Section className="h-full bg-brand-50 py-20" id="contactForm">
      <div className="mx-auto my-auto grid h-full max-w-screen-lg items-center gap-12 lg:grid-cols-2">
        <div>
          <article>
            <Heading level={1} className="text-brand-700">
              {polish ? 'Odbierz poufną wiadomość' : 'Receive a secret'}
            </Heading>

            <p className="mt-6">
              {polish
                ? 'Szybko i bezpiecznie udostępniaj hasła oraz inne poufne informacje osobom, które ich potrzebują.'
                : 'Quickly and securely share passwords and other confidential information with people who need it.'}
            </p>

            <BulletList
              data={[
                polish
                  ? 'Wpisz klucz otrzymany od nadawcy, aby odczytać wiadomość'
                  : 'Enter the sender’s key to open the message'
              ]}
              className="mt-6 font-medium"
            />
          </article>
        </div>
        <div className="lg:px-10">
          <SecretShareReceiveForm />
        </div>
      </div>
    </Section>
  );
}
