import { Metadata } from 'next';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
import ItemsWithIconList from '@components/features/ItemsWithIconList/ItemsWithIconList';
import MinimumViableProduct from '@components/features/MinimumViableProduct/MinimumViableProduct';
import NumberedHighlightsList from '@components/features/NumberedHighlightsList/NumberedHighlightsList';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    routes.services.development.databaseDevelopment.root,
    await getLocale()
  );
}

export default async function DatabaseDevelopmentPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.development.databaseDevelopment.root.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Poproś o wycenę projektu' : 'Get project estimation'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Bazy danych dopasowane do stron, aplikacji i analityki biznesowej'
            : 'Bespoke database solutions for websites, apps and business intelligence'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Potrzebujesz wydajnego modelu danych lub tworzysz rozwiązanie do analityki biznesowej? Zaprojektujemy bazę danych dopasowaną do Twoich potrzeb.'
            : 'Your business require efficient and performative database modeling? you are building a business intelligence solution? We develop bespoke database solutions tailored exactly for your needs.'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Zwiększ wydajność swojej bazy danych'
              : 'Boost Your Database Performance Ahead of the Curve'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Wydajne bazy danych są niezbędne w rozwiązaniach przetwarzających duże ilości informacji. Tworzymy bazy SQL i NoSQL dostosowane do specyfiki projektu.'
              : 'Efficient databases are crucial for the success of any solution dealing with vast amounts of data. We are experts in both SQL and No-SQL development, tailored to suit any kind of project.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center">
            <Heading level={3}>
              {pl
                ? 'Nasze usługi w zakresie baz danych'
                : 'Our database development services'}
            </Heading>
          </div>
          <div className="mt-12">
            <NumberedHighlightsList data={getHighlightsList(pl)} columns={3} />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <MinimumViableProduct />
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <Heading level={3}>
            {pl
              ? 'Jak współpracujemy przy projektach baz danych'
              : 'Our database development cooperation approach'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Wspieramy Twój projekt na każdym etapie, od planowania i projektowania po wdrożenie, utrzymanie i dalszy rozwój.'
              : 'Our expertise and services are available for every phase of your database development project, covering planning, design, development, as well as maintenance and support.'}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-screen-xl">
          <ItemsWithIconList data={getOurApproachList(pl)} columns={3} />
        </div>
      </Section>
    </>
  );
}

const getHighlightsList = (pl: boolean) => [
  {
    title: pl ? 'Tworzenie baz danych SQL' : 'SQL Database Development',
    description: pl
      ? 'Usprawnij działalność dzięki relacyjnym bazom danych zapewniającym uporządkowane informacje, zapytania SQL i spójność danych. Sprawdzają się w zarządzaniu zapasami i analizie danych klientów.'
      : 'Enhance business operations with our relational database services: structured data, SQL queries, and consistent integrity. Great for inventory and customer data analysis.'
  },
  {
    title: pl ? 'Tworzenie baz danych NoSQL' : 'No-SQL Database Development',
    description: pl
      ? 'Wykorzystaj elastyczne modele, szybkie skalowanie i sprawne przetwarzanie. Bazy NoSQL sprawdzają się przy dużych zbiorach danych nieustrukturyzowanych i w aplikacjach działających w czasie rzeczywistym.'
      : 'Boost data handling with our No-SQL services: flexible models, rapid scaling, efficient processing. Ideal for large-scale, unstructured data and real-time apps.'
  },
  {
    title: pl ? 'Analityka biznesowa' : 'Business Intelligence',
    description: pl
      ? 'Usprawnij analitykę biznesową dzięki bazom danych umożliwiającym szczegółową analizę i uzyskiwanie wniosków w czasie rzeczywistym.'
      : 'Optimize your Business Intelligence with our database services, perfect for detailed, real-time business intelligence and comprehensive data insights.',
    href: routes.services.development.minimumViableProduct.root.href
  }
];

const getOurApproachList = (pl: boolean) => [
  {
    title: pl
      ? 'Nowy projekt od początku do końca'
      : 'New project from start to finish',
    description: pl
      ? 'Sprawnie zrealizujemy Twój nowy projekt zgodnie z aktualnymi standardami branżowymi.'
      : 'We will code your new NextJs project efficiently with the latest industry standards.',
    icon: 'new-project'
  },
  {
    title: pl
      ? 'Rozwój istniejącego rozwiązania'
      : 'Existing solution development',
    description: pl
      ? 'DevOps, refaktoryzacja kodu, poprawa bezpieczeństwa, aktualizacje i rozwój nowych funkcji.'
      : 'DevOps, code refactoring, security improvements, updates, and new feature development',
    icon: 'existing-project'
  },
  {
    title: pl
      ? 'Wsparcie dedykowanych programistów'
      : 'Dedicated Developer Expertise',
    description: pl
      ? 'Nasi specjaliści od baz danych dołączą do Twojego zespołu, aby przyspieszyć i usprawnić rozwój aplikacji.'
      : 'Get our database developers into your team to boost your app development speed and efficiency.',
    icon: 'developers-team'
  }
];
