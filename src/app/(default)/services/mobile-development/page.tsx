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
    routes.services.development.mobileDevelopment.root,
    await getLocale()
  );
}

export default async function MobileDevelopmentPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.development.mobileDevelopment.root.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl
              ? 'Poproś o wycenę aplikacji mobilnej'
              : 'Get mobile app estimation'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Aplikacje mobilne na zamówienie, od pomysłu do działającego produktu'
            : 'Custom mobile applications developed from initial concept to fully functional product'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Coraz powszechniejsze korzystanie z urządzeń mobilnych otwiera nowe możliwości dla Twoich pomysłów biznesowych.'
            : 'The world is increasingly embracing mobile technology, opening up vast new opportunities and potential for your business ideas and ventures.'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Sprawne tworzenie aplikacji mobilnych'
              : 'Effective development for mobile application.'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Tworzymy aplikacje mobilne w technologiach, które pozwalają równolegle rozwijać je na kilku platformach.'
              : 'We offer efficient mobile development using technologies that enable the simultaneous development of your application across multiple platforms.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center">
            <Heading level={3}>
              {pl
                ? 'Nasze usługi w zakresie aplikacji mobilnych'
                : 'Our mobile development services'}
            </Heading>
          </div>
          <div className="mt-12">
            <NumberedHighlightsList data={getHighlightsList(pl)} columns={3} />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <Heading level={3}>
            {pl
              ? 'Jak współpracujemy przy projektach mobilnych'
              : 'Our mobile development cooperation approach'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Służymy wiedzą i wsparciem na każdym etapie projektu aplikacji, od planowania i projektowania po wdrożenie, utrzymanie i dalszy rozwój.'
              : `Our services encompass every phase of your mobile app project's
              lifecycle, including planning, design, development, maintenance, and
              support, offering our expertise at each stage.`}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-screen-xl">
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
    title: pl ? 'Tworzenie aplikacji we Flutterze' : 'Flutter development',
    description: pl
      ? 'Korzystamy z Fluttera, wieloplatformowego frameworka, który pozwala ograniczyć koszty i równolegle tworzyć aplikacje dla iOS oraz Androida.'
      : 'We provide development services using Flutter, a versatile multiplatform framework that enables cost reduction and simultaneous project building for both iOS and Android platforms.'
  },
  {
    title: pl ? 'UI/UX dla aplikacji mobilnych' : 'UI/UX for mobile apps',
    description: pl
      ? 'Tworzymy przyjazne aplikacje mobilne, dbając o responsywność, projektowanie UX, prototypowanie, warstwę wizualną i wydajność.'
      : 'We create user-friendly mobile applications that address responsive design, clear UX principles, prototyping, visual design, and performance considerations',
    href: routes.services.design.uiDesign.root.href
  },
  {
    title: pl
      ? 'Pierwsza działająca wersja produktu (MVP)'
      : 'Minimum Viable Product (MVP)',
    description: pl
      ? 'Oferujemy skuteczne rozwiązania, dzięki którym szybko wejdziesz na rynek przy rozsądnych kosztach.'
      : 'We provide efficient and cost-effective solutions designed to enable you to enter the market as swiftly as possible.',
    href: routes.services.development.minimumViableProduct.root.href
  }
];

const getOurApproachList = (pl: boolean) => [
  {
    title: pl
      ? 'Nowy projekt od początku do końca'
      : 'New project from start to finish',
    description: pl
      ? 'Sprawnie stworzymy Twoją aplikację mobilną zgodnie z aktualnymi standardami branżowymi.'
      : 'We will code your new mobile app project efficiently with the latest industry standards.',
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
      ? 'Nasi programiści aplikacji mobilnych dołączą do Twojego zespołu, aby przyspieszyć i usprawnić rozwój produktu.'
      : 'Get our mobile app developers into your team to boost your app development speed and efficiency.',
    icon: 'developers-team'
  }
];
