import { Metadata } from 'next';
import React from 'react';

import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
import ItemsWithIconList from '@components/features/ItemsWithIconList/ItemsWithIconList';
import LinkWthCoverImageList from '@components/features/LinkWithCoverImageList/LinkWthCoverImageList';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import LinkWithChevron from '@components/ui/LinkWithChevron';
import Section from '@components/ui/Section';
import { getCaseStudiesListData } from '@data/caseStudiesList.data';
import { companyValues } from '@data/companyValues.data';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(routes.aboutUs.root, await getLocale());
}

export default async function AboutUsPage() {
  const locale = await getLocale();
  return (
    <>
      <Hero
        image={routes.aboutUs.root.image}
        cta={
          <Button variant="accent" href={routes.contact.root.href}>
            {locale === 'pl' ? 'Porozmawiajmy' : 'Let’s talk'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {locale === 'pl'
            ? 'Pomagamy klientom wprowadzać trwałe i znaczące usprawnienia technologiczne'
            : 'Our Purpose is to help clients make sustainable, and significant technology improvements'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {locale === 'pl'
            ? 'Infeon Tech to firma technologiczna działająca w Polsce. Łączymy doświadczenie z dbałością o jakość, aby wspierać Twoje projekty i bieżącą działalność. Jasno komunikujemy, co robimy, i dopasowujemy rozwiązania do Twoich potrzeb.'
            : 'Infeon Tech is a technology company based in Poland. We combine expertise with a commitment to quality to support your projects and day-to-day operations. We work transparently and tailor our solutions to your needs.'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {locale === 'pl'
              ? 'Zaufany partner w Twoim kolejnym projekcie'
              : 'We are trusted partner for your next project'}
          </Heading>
          <p className="mt-4">
            {locale === 'pl'
              ? 'Zapewniamy wsparcie na każdym etapie projektu, od planowania i projektowania po wdrożenie, utrzymanie i bieżącą pomoc. Możesz skorzystać z naszego doświadczenia także w projektach opartych na React.'
              : 'Throughout the project lifecycle, from planning and design, through to development, maintenance and support. We are here to provide our expertise and services for your React project.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto grid max-w-screen-xl sm:grid-cols-2 sm:gap-12">
          <div className="lg:max-w-lg">
            <Heading level={3}>
              {locale === 'pl'
                ? 'W Infeon Tech tworzymy i utrzymujemy rozwiązania zgodne z naszymi wartościami'
                : 'At Infeon Tech, we create and support quality solutions that embrace our values'}
            </Heading>
            <p className="mt-4">
              {locale === 'pl'
                ? 'Na każdym etapie, od planowania i projektowania po wdrożenie, utrzymanie i wsparcie, pomagamy Ci uzyskać większą wartość z rozwiązania i ograniczyć ryzyko.'
                : 'Throughout the solution lifecycle, from planning and design, through to development, maintenance and support. We are here to provide our expertise and services so that you maximise value and reduce your risks.'}
            </p>

            <div className="mt-12">
              <LinkWithChevron href={routes.contact.root.href}>
                {locale === 'pl'
                  ? 'Opowiedz nam o swoim projekcie'
                  : 'Tell us about your project'}
              </LinkWithChevron>
            </div>
          </div>
          <div className="max-md:mt-6">
            <ItemsWithIconList columns={2} data={companyValues[locale]} />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center">
            <Heading level={3}>
              {locale === 'pl'
                ? 'Zobacz nasze najnowsze studia przypadków'
                : 'Check our latest case studies'}
            </Heading>
            <p className="mt-4">
              {locale === 'pl'
                ? 'Zobacz, jak wykorzystaliśmy nasze doświadczenie w projektach i co dzięki temu osiągnęli klienci.'
                : 'Learn how we used our expertise in past projects to build our clients success.'}
            </p>
          </div>
          <div className="mt-8 md:mt-12">
            <LinkWthCoverImageList
              data={getCaseStudiesListData(locale).slice(0, 3)}
              columns={3}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
