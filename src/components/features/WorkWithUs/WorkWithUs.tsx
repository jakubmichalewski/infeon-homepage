import type { Locale } from '@/i18n/config';
import Button from '@components/ui/Button';
import Section from '@components/ui/Section';
import { routes } from '@routes/routes';

export default function WorkWithUs({ locale }: { locale: Locale }) {
  return (
    <Section className="my-12 border-y py-8 lg:my-16">
      <h2 className="text-center text-3xl font-bold">
        {locale === 'pl'
          ? 'Zrób kolejny krok w rozwoju firmy'
          : 'Bring your business to the next level'}
      </h2>
      <p className="mt-2 text-center leading-normal text-slate-400">
        {locale === 'pl'
          ? 'Pomożemy Ci rozwijać firmę dzięki nowoczesnym technologiom'
          : 'Let us help your business grow with cutting edge technologies'}
      </p>
      <div className="mx-auto mt-8 max-w-max">
        <Button href={routes.contact.root.href}>
          {locale === 'pl' ? 'Współpracuj z nami' : 'Work with us'}
        </Button>
      </div>
    </Section>
  );
}
