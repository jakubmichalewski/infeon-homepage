import Image from 'next/image';
import React, { ReactNode } from 'react';

import { getLocale } from '@/i18n/server';
import ItemsWithIconList from '@components/features/ItemsWithIconList/ItemsWithIconList';
import Heading from '@components/ui/Heading';
import LinkWithChevron from '@components/ui/LinkWithChevron';
import Section from '@components/ui/Section';
import { companyValues } from '@data/companyValues.data';
import { routes } from '@routes/routes';

export default async function CaseStudiesLayout({
  children
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  return (
    <>
      {children}

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
        <div className="mx-auto grid max-w-screen-xl gap-12 sm:grid-cols-3 lg:grid-cols-2">
          <div className="max-sm:order-1 sm:col-span-2 sm:py-10 lg:col-span-1">
            <Heading level={3}>
              {locale === 'pl'
                ? 'Tworzymy i utrzymujemy wysokiej jakości rozwiązania zgodne z naszymi wartościami.'
                : 'We develop and maintain high-quality solutions that reflect our core values.'}
            </Heading>

            <div className="mt-8">
              <ItemsWithIconList columns={2} data={companyValues[locale]} />
            </div>

            <div className="mt-12">
              <LinkWithChevron href={routes.contact.root.href}>
                {locale === 'pl'
                  ? 'Opowiedz nam o swoim projekcie'
                  : 'Tell us about your project'}
              </LinkWithChevron>
            </div>
          </div>
          <div>
            <Image
              src={'/images/banner/trusted-partner-banner.jpg'}
              alt={
                locale === 'pl'
                  ? 'Menedżer korzystający z oprogramowania stworzonego w React'
                  : 'Business manager using software developed in React'
              }
              width={1024}
              height={1024}
              quality={85}
              className="aspect-[3/2] h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
