import { Metadata } from 'next';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
import MinimumViableProduct from '@components/features/MinimumViableProduct/MinimumViableProduct';
import NumberedHighlightsList from '@components/features/NumberedHighlightsList/NumberedHighlightsList';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    routes.services.development.lowCodeDevelopment.root,
    await getLocale()
  );
}

export default async function LowCodePage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.development.lowCodeDevelopment.root.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Poproś o wycenę projektu' : 'Get project estimation'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Estetyczne i funkcjonalne strony internetowe tworzone w technologiach low-code'
            : 'Stunning websites created through efficient low-code development'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Wybierz ekonomiczną alternatywę dla tworzenia stron od podstaw. Dzięki low-code szybko uruchomisz estetyczną i wydajną stronę firmową lub stronę kampanii.'
            : 'Take advantage of our cost-effective solution as an alternative to custom development. Our low-code development service enables you to create both attractive and efficient corporate websites, or swiftly launch a marketing landing page.'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Szybko przenieś swój pomysł do internetu dzięki low-code'
              : 'Quickly bring your ideas to the internet using low-code development'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Wkrótce uruchamiasz kampanię i potrzebujesz gotowej strony firmowej? Nasze usługi low-code powstały z myślą o takich projektach. Korzystamy ze sprawdzonych platform, takich jak Squarespace i Shopify.'
              : 'Launching a campaign soon and need a corporate website set up swiftly and effectively? Our low-code development service is designed for just that. We collaborate with leading platforms such as Squarespace and Shopify to deliver top-notch service.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center">
            <Heading level={3}>
              {pl
                ? 'Nasze usługi low-code'
                : 'Our low-code development services'}
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
    </>
  );
}

const getHighlightsList = (pl: boolean) => [
  {
    title: pl
      ? 'Strony firmowe i strony kampanii'
      : 'Corporate websites and landing pages',
    description: pl
      ? 'Sprawnie zamienimy Twój pomysł w elegancką stronę firmową lub stronę kampanii.'
      : `Efficient and stylish approach for fast corporate website or landing page creation. We'll swiftly turn your concept into reality.`
  },
  {
    title: pl ? 'Sklep internetowy' : 'Online Shop',
    description: pl
      ? 'Szybko rozpocznij sprzedaż dzięki Shopify. Stworzymy Twój sklep internetowy w technologii low-code na tej platformie.'
      : 'Enter the market rapidly with online store solutions from Shopify. We provide low-code development for your upcoming online shop using the Shopify platform.'
  },
  {
    title: pl ? 'Rozwiązania na zamówienie' : 'Bespoke development',
    description: pl
      ? 'Tworzymy rozwiązania dopasowane do konkretnych potrzeb Twojej firmy.'
      : 'Creating bespoke solutions precisely tailored to meet your specific needs.',
    href: routes.services.development.webDevelopment.root.href
  }
];
