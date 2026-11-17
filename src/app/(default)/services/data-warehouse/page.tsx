import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
import NumberedHighlightsList from '@components/features/NumberedHighlightsList/NumberedHighlightsList';
import QuoteWithAvatar from '@components/features/QuoteWithAvatar/QuoteWithAvatar';
import SelfServiceAssessments from '@components/features/SelfServiceAssessments/SelfServiceAssessments';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import LinkWithChevron from '@components/ui/LinkWithChevron';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    routes.services.businessIntelligence.dataWarehouse.root,
    await getLocale()
  );
}

export default async function DataWarehousePage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.businessIntelligence.dataWarehouse.root.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Wspieraj rozwój firmy dzięki nowoczesnym rozwiązaniom do raportowania'
            : 'Empower Your Business with a Innovative Reporting Solutions'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Wykorzystaj zasoby danych dzięki hurtowni, która łączy wiele źródeł i umożliwia zaawansowaną analizę. Podejmuj decyzje na podstawie danych i planuj rozwój firmy.'
            : `Maximise your organisation's data assets with our comprehensive data warehouse solutions, offering seamless integration and advanced analytics for informed decision-making and strategic growth.`}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl ? 'Wiedza i jakość' : 'Expertise and Excellence'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Zbudujemy hurtownię dopasowaną do Twoich potrzeb, aby wspierać decyzje oparte na danych.'
              : 'Our skilled team will deliver tailored data warehouse solutions, ensuring project success and enabling data-driven decision-making.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="relative mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3">
          <div className="mx-auto h-fit shrink-0 lg:sticky lg:top-28 lg:max-w-sm">
            <Heading level={3}>
              {pl
                ? 'Szybsze analizy wspierają rozwój firmy'
                : 'Unlock Insights, Drive Growth'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Łączymy dane z różnych źródeł w jednej hurtowni, aby przyspieszyć analizę, ułatwić reagowanie na zmiany na rynku i wspierać rozwój firmy.'
                : 'Harness actionable insights and drive growth with our data warehouse solutions. By consolidating diverse data sources into a centralised repository, we expedite time-to-insight, empowering agile responses to market changes and fostering sustained growth.'}
            </p>

            <div className="mt-12">
              <LinkWithChevron {...localizeRoute(routes.contact.root, locale)}>
                {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
              </LinkWithChevron>
            </div>
          </div>

          <div className="rounded-lg bg-brand-50 p-10 sm:p-14 lg:col-span-2">
            <NumberedHighlightsList
              data={getDataWarehouseList(pl)}
              columns={2}
            />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <QuoteWithAvatar
          quote={
            pl
              ? 'Zdobyliśmy doświadczenie, pracując zarówno z małymi i średnimi firmami, jak i dużymi przedsiębiorstwami.'
              : `We've built up our expertise working with clients from the SME and Enterprise sectors.`
          }
          author={'Jakub Michalewski'}
          align={'right'}
          color={'brand'}
          image={
            <Image
              src={'/images/team/jakub-michalewski.png'}
              width={710}
              height={1024}
              alt={'Jakub Michalewski'}
            />
          }
        />
      </Section>

      <Section className="mt-16 lg:mt-24">
        <SelfServiceAssessments />
      </Section>
    </>
  );
}

const getDataWarehouseList = (pl: boolean) => [
  {
    title: pl
      ? 'Modelowanie i projektowanie danych'
      : 'Data Modeling and Design',
    description: pl
      ? 'Projektujemy i wdrażamy skalowalne modele danych dopasowane do Twoich wymagań, dbając o wydajność i elastyczność.'
      : 'Design and implement a scalable data model tailored to your business requirements, ensuring optimal performance and flexibility.'
  },
  {
    title: pl ? 'Integracja danych' : 'Data Integration',
    description: pl
      ? 'Łączymy dane z różnych źródeł w hurtowni i dbamy o ich spójność oraz poprawność.'
      : 'Seamlessly integrate data from diverse sources into your data warehouse, ensuring data consistency and accuracy.'
  },
  {
    title: pl ? 'Analityka i raportowanie' : 'Analytics and Reporting',
    description: pl
      ? 'Udostępniamy zaawansowane narzędzia analityczne i raporty, aby osoby podejmujące decyzje mogły korzystać z danych i wyciągać wnioski.'
      : 'Empower decision-makers with advanced analytics and reporting capabilities, enabling data-driven insights and informed decision-making.'
  },
  {
    title: pl ? 'Optymalizacja wydajności' : 'Performance Optimization',
    description: pl
      ? 'Optymalizujemy hurtownię danych, aby przyspieszyć pobieranie i analizę informacji.'
      : 'Fine-tune your data warehouse for optimal performance, ensuring rapid data retrieval and analysis.'
  },
  {
    title: pl ? 'Bezpieczeństwo i zgodność' : 'Security and Compliance',
    description: pl
      ? 'Wdrażamy skuteczne zabezpieczenia, które chronią dane i pomagają spełnić wymagania regulacyjne.'
      : 'Implement robust security measures to safeguard your data assets and ensure compliance with regulatory requirements.'
  },
  {
    title: pl
      ? 'Bieżące wsparcie i utrzymanie'
      : 'Ongoing Support and Maintenance',
    description: pl
      ? 'Zapewniamy stałe wsparcie i utrzymanie, aby hurtownia danych działała wydajnie i niezawodnie.'
      : 'Benefit from ongoing support and maintenance services, ensuring the continued performance and reliability of your data warehouse solution.'
  },
  {
    title: pl ? 'Skalowalność i rozwój' : 'Scalability and Growth',
    description: pl
      ? 'Rozbudowujemy hurtownię wraz z rozwojem firmy, aby odpowiadała na zmieniające się potrzeby i cele.'
      : 'Scale your data warehouse solution as your business grows, ensuring it continues to meet your evolving needs and objectives.'
  }
];
