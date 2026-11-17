import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

import { getLocale } from '@/i18n/server';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata() {
  return buildMetadata(routes.thankYou.root, await getLocale());
}

export default async function ThankYouPage() {
  const polish = (await getLocale()) === 'pl';

  return (
    <Section className="relative flex h-full items-center py-12 md:py-16">
      <div className="mx-auto max-w-lg text-center">
        <ChatBubbleLeftRightIcon className="mx-auto h-24 w-24 text-brand-700" />
        <Heading level={3} className="mt-10">
          {polish
            ? 'Twoja wiadomość została wysłana!'
            : 'Your message is on the way!'}
        </Heading>
        <p className="mt-4 text-slate-600">
          {polish
            ? 'Odpowiemy w ciągu dwóch godzin w godzinach pracy w dni robocze. W międzyczasie możesz zapoznać się z naszymi usługami.'
            : 'We’ll respond within two hours during business hours on working days. In the meantime, you can explore our services.'}
        </p>
        <div className="mx-auto mt-14 max-w-max">
          <Button variant="bordered" href={routes.services.root.href}>
            {polish ? 'Wróć do usług' : 'Back to services'}
          </Button>
        </div>
      </div>
    </Section>
  );
}
