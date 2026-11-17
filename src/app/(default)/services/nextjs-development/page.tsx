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
    routes.services.development.webDevelopment.nextJsDevelopment,
    await getLocale()
  );
}

export default async function PowerBiReportsPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={
          routes.services.development.webDevelopment.nextJsDevelopment.image
        }
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl
              ? 'Poproś o wycenę projektu Next.js'
              : 'Get NextJs Project Estimation'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Wykorzystaj Next.js, nowoczesny framework oparty na React, w swoim projekcie.'
            : 'Utilize NextJs, the cutting-edge React framework, for your project.'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Next.js łączy możliwości serwerów Node.js z interaktywnością frontendu. Renderowanie po stronie serwera poprawia wydajność i ułatwia optymalizację SEO.'
            : 'NextJs delivers the strength of Node servers, blending the interactivity of a front-end framework with server-side rendering for enhanced performance and SEO optimization.'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Oferujemy kompleksowe wsparcie przy projektach w Next.js'
              : 'We are offering complementary development services for projects with NextJs framework'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Next.js pozwala tworzyć wydajne rozwiązania nawet dla wymagających projektów. Sprawdza się w aplikacjach internetowych, w których liczy się wydajność, skalowalność i SEO.'
              : 'With the NextJs framework, we can successfully handle highly demanding projects, providing solutions that are both efficient and high-performing. For web projects requiring top-notch performance, scalability, and SEO optimization, NextJs stands out as the perfect choice.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center">
            <Heading level={3}>
              {pl
                ? 'Nasze usługi w zakresie Next.js'
                : 'Our NextJs development services'}
            </Heading>
          </div>
          <div className="mt-12">
            <NumberedHighlightsList data={getHighlightsList(pl)} columns={4} />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <Heading level={3}>
            {pl
              ? 'Jak współpracujemy przy projektach Next.js'
              : 'Our NextJs development cooperation approach'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Służymy wiedzą i wsparciem na każdym etapie projektu React, od planowania i projektowania po wdrożenie i utrzymanie.'
              : 'Throughout the project lifecycle, from planning and design, through to development, maintenance and support. We are here to provide our expertise and services for your React project.'}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-screen-lg">
          <ItemsWithIconList data={getOurApproachList(pl)} columns={3} />
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
      ? 'Pierwsza działająca wersja produktu (MVP)'
      : 'Minimum Viable Product (MVP)',
    description: pl
      ? 'Oferujemy skuteczne rozwiązania, dzięki którym szybko wejdziesz na rynek przy rozsądnych kosztach.'
      : 'We provide efficient and cost-effective solutions designed to enable you to enter the market as swiftly as possible.',
    href: routes.services.development.minimumViableProduct.root.href
  },
  {
    title: pl ? 'Strony firmowe' : 'Corporate websites',
    description: pl
      ? 'Wzmocnij swoją obecność w internecie dzięki szybkiej nowej stronie lub zmodernizuj dotychczasową zgodnie z aktualnymi standardami.'
      : 'Boost your online presence with a high-performing new website, or upgrade your existing one to meet current standards.'
  },
  {
    title: pl ? 'Aplikacje internetowe' : 'Web applications',
    description: pl
      ? 'Tworzymy rozwiązania usprawniające procesy w Twojej firmie lub umożliwiające świadczenie usług w modelu SaaS.'
      : 'Creating custom solutions to improve business processes within your organization, or to provide your services in a Software as a Service (SaaS) model.'
  },
  {
    title: pl ? 'Sklepy internetowe' : 'eCommerce websites',
    description: pl
      ? 'Tworzymy rozwiązania e-commerce dopasowane do specyfiki Twoich produktów lub usług.'
      : 'We develop custom eCommerce solutions specifically designed to meet the unique requirements of your distinct product or service.'
  }
];

const getOurApproachList = (pl: boolean) => [
  {
    title: pl
      ? 'Nowy projekt od początku do końca'
      : 'New project from start to finish',
    description: pl
      ? 'Sprawnie zrealizujemy Twój projekt Next.js zgodnie z aktualnymi standardami branżowymi.'
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
      ? 'Nasi programiści Next.js dołączą do Twojego zespołu, aby przyspieszyć i usprawnić rozwój aplikacji.'
      : 'Get our NextJs developers into your team to boost your app development speed and efficiency.',
    icon: 'developers-team'
  }
];
