import { Metadata } from 'next';

import Link from '@/i18n/Link';
import { getLocale } from '@/i18n/server';
import BulletList from '@components/ui/BulletList';
import Section from '@components/ui/Section';
import Triangle from '@components/ui/Triangle';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

import { legacyTerms } from './copy';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(routes.termsOfUse.root, await getLocale());
}
export default async function TermsAndConditionsPage() {
  const locale = await getLocale();
  const copy = legacyTerms[locale];

  return (
    <Section className="mx-auto max-w-screen-sm py-12 md:py-16 lg:max-w-screen-md">
      <Triangle className="absolute top-0 right-0 -z-20 h-auto w-4/5 transform fill-current stroke-current text-slate-50" />
      <article>
        <h1 className="mx-auto w-full text-3xl font-bold">{copy.title}</h1>
        <p className="mt-6 rounded-lg bg-slate-100 p-4 text-sm text-slate-800">
          {copy.archiveNotice}
        </p>
        {copy.sections.map(({ title, body }) => (
          <section key={title}>
            <h2 className="my-5 text-xl font-bold">{title}</h2>
            {body.map((block, index) => {
              switch (block.kind) {
                case 'subheading':
                  return (
                    <h3 className="mt-5 font-bold" key={index}>
                      {block.text}
                    </h3>
                  );
                case 'list':
                  return <BulletList data={block.items} key={index} />;
                case 'privacyLink':
                  return (
                    <p className="my-5 text-sm text-slate-600" key={index}>
                      {block.text}{' '}
                      <Link
                        href={routes.privacyPolicy.root.href}
                        className="underline hover:text-brand-700"
                      >
                        {locale === 'pl'
                          ? 'Polityka prywatności'
                          : 'Privacy policy'}
                      </Link>
                    </p>
                  );
                case 'paragraph':
                  return (
                    <p className="my-5 text-sm text-slate-600" key={index}>
                      {block.text}
                    </p>
                  );
              }
            })}
          </section>
        ))}
        <address className="mt-8 text-sm not-italic">
          <strong>Endpoint Tech LTD</strong>
          <br /> Thynne Cottage Thynnes Lane Mattishall,
          <br /> Dereham NR20 3JU,{' '}
          {locale === 'pl' ? 'Wielka Brytania' : 'United Kingdom'}
          <br /> office@endpoint-tech.co.uk
        </address>
      </article>
    </Section>
  );
}
