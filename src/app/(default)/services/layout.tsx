import Image from 'next/image';
import React, { ReactNode } from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import ItemsWithIconList from '@components/features/ItemsWithIconList/ItemsWithIconList';
import LinkWthCoverImageList from '@components/features/LinkWithCoverImageList/LinkWthCoverImageList';
import Heading from '@components/ui/Heading';
import LinkWithChevron from '@components/ui/LinkWithChevron';
import Section from '@components/ui/Section';
import { getCaseStudiesListData } from '@data/caseStudiesList.data';
import { routes } from '@routes/routes';

export default async function ServicesLayout({
  children
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      {children}

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Będziemy zaufanym partnerem w Twoim kolejnym projekcie'
              : 'We are trusted partner for your next project'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Służymy wiedzą i wsparciem na każdym etapie projektu, od planowania i projektowania po wdrożenie, utrzymanie i dalszy rozwój.'
              : `From the initial stages of planning and design, all the way through
              development, maintenance, and support, we offer our expertise and
              services at every step of your project's lifecycle.`}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto grid max-w-screen-xl gap-12 sm:grid-cols-3 lg:grid-cols-2">
          <div className="max-sm:order-1 sm:col-span-2 sm:py-10 lg:col-span-1">
            <Heading level={3}>
              {pl
                ? 'Tworzymy i utrzymujemy wysokiej jakości rozwiązania zgodnie z wartościami, którymi się kierujemy.'
                : 'We develop and maintain high-quality solutions that reflect our core values.'}
            </Heading>

            <div className="mt-8">
              <ItemsWithIconList columns={2} data={getOurValuesList(pl)} />
            </div>

            <div className="mt-12">
              <LinkWithChevron {...localizeRoute(routes.contact.root, locale)}>
                {pl
                  ? 'Opowiedz nam o swoim projekcie'
                  : 'Tell us about your project'}
              </LinkWithChevron>
            </div>
          </div>
          <div>
            <Image
              src={'/images/banner/trusted-partner-banner.jpg'}
              alt={
                pl
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

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-xl sm:text-center">
          <Heading level={3}>
            {pl
              ? 'Zobacz najnowsze realizacje'
              : 'Check our latest case studies'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Dowiedz się, jak wykorzystaliśmy React w projektach dla naszych klientów.'
              : 'Learn how we used React in past projects to build our clients success.'}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-screen-xl">
          <LinkWthCoverImageList
            data={getCaseStudiesListData(locale).slice(0, 3)}
            columns={3}
          />
        </div>
      </Section>
    </>
  );
}

const getOurValuesList = (pl: boolean) => [
  {
    title: pl ? 'Wiedza i elastyczność' : 'Expertise and Flexibility',
    description: pl
      ? 'Dzięki naszej wiedzy i doświadczeniu otrzymasz skuteczne rozwiązania dopasowane do potrzeb swojej firmy.'
      : 'Benefit from our knowledge and experience, resulting in effective bespoke solutions that precisely align with your business needs.',
    icon: 'flexibility'
  },
  {
    title: pl ? 'Wydajność' : 'Performance',
    description: pl
      ? 'Stosujemy sprawdzone praktyki, aby zapewnić wymaganą wydajność rozwiązań i chronić zasoby Twojej firmy.'
      : `We apply widely adopted best practices to ensure your solutions perform to the levels you require, and your assets are protected.`,
    icon: 'performance'
  },
  {
    title: pl ? 'Jakość' : 'Quality',
    description: pl
      ? 'Dbamy o wysoką jakość i dostarczamy rozwiązania odpowiadające na konkretne potrzeby Twojej firmy.'
      : 'Our commitment to quality means we only deliver solutions that exactly meet your needs and represent our dedication to excellence.',
    icon: 'quality'
  },
  {
    title: pl ? 'Konkurencyjne ceny' : 'Competitive Pricing',
    description: pl
      ? 'Oferujemy wysokiej jakości usługi i produkty w cenach dopasowanych do firm o różnej wielkości i budżecie.'
      : 'We offer cost-effective, high-quality, services and products that cater to businesses of all sizes and budgets.',
    icon: 'competitive-pricing'
  }
];
