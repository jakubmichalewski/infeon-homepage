import { Metadata } from 'next';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
import ItemsWithIconList from '@components/features/ItemsWithIconList/ItemsWithIconList';
import MinimumViableProduct from '@components/features/MinimumViableProduct/MinimumViableProduct';
import NumberedHighlightsList from '@components/features/NumberedHighlightsList/NumberedHighlightsList';
import BulletList from '@components/ui/BulletList';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import LinkWithChevron from '@components/ui/LinkWithChevron';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    routes.services.development.webDevelopment.reactDevelopment,
    await getLocale()
  );
}

export default async function ReactDevelopmentPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={
          routes.services.development.webDevelopment.reactDevelopment.image
        }
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl
              ? 'Poproś o wycenę projektu React'
              : 'Get React Project Estimation'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Chcesz stworzyć interaktywną aplikację w React?'
            : 'Are you looking to build a highly interactive React app?'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Wykorzystaj możliwości i elastyczność React w swoim kolejnym projekcie.'
            : 'Leverage the power and flexibility of the React framework for your next project.'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto grid max-w-screen-xl items-center gap-12 lg:grid-cols-2">
          <div className="lg:max-w-lg">
            <Heading level={2} className="text-brand-700">
              {pl
                ? 'Korzystamy z najnowszych technologii, aby świadczyć usługi na najwyższym poziomie.'
                : 'We are working with latest technologies to provide best possible service for our clients.'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Służymy wiedzą i wsparciem na każdym etapie projektu React, od planowania i projektowania po wdrożenie i utrzymanie.'
                : 'Throughout the project lifecycle, from planning and design, through to development, maintenance and support. We are here to provide our expertise and services for your React project.'}
            </p>

            <div className="mt-12">
              <LinkWithChevron {...localizeRoute(routes.contact.root, locale)}>
                {pl
                  ? 'Opowiedz nam o swoim projekcie'
                  : 'Tell us about your project'}
              </LinkWithChevron>
            </div>
          </div>

          <div className="rounded-lg bg-brand-50 p-10 sm:p-14">
            <Heading level={3}>
              {pl
                ? 'Nasze usługi w zakresie React'
                : 'Our React development services'}
            </Heading>
            <div className="mt-12">
              <NumberedHighlightsList data={getHighlightsList(pl)} />
            </div>
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <Heading level={3}>
            {pl
              ? 'Jak współpracujemy przy projektach React'
              : 'Our React development cooperation approach'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Służymy wiedzą i wsparciem na każdym etapie projektu React, od planowania i projektowania po wdrożenie i utrzymanie.'
              : 'Throughout the project lifecycle, from planning and design, through to development, maintenance and support. We are here to provide our expertise and services for your React project.'}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-screen-xl">
          <ItemsWithIconList data={getOurApproachList(pl)} columns={3} />
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto w-full max-w-screen-xl items-center justify-center gap-12 divide-brand-800 rounded-lg bg-brand-950 px-10 max-md:divide-y sm:px-14 md:flex md:gap-20">
          <div className="max-w-screen-sm py-10 sm:py-14">
            <Heading level={3} className="text-brand-200">
              {pl
                ? 'Stwórz z nami aplikację internetową w React'
                : 'You can create with us exceptional web projects in React'}
            </Heading>
            <p className="mt-4 text-white">
              {pl
                ? 'Elastyczność React pozwala realizować różne typy projektów. Wybierz rozwiązanie dopasowane do potrzeb swojej firmy.'
                : 'React is highly adaptable, allowing us to offer a wide range of project types. Choose the one that aligns best with your business needs.'}
            </p>

            <div className="mt-12">
              <LinkWithChevron
                {...localizeRoute(routes.contact.root, locale)}
                onDark
              >
                {pl
                  ? 'Opowiedz nam o swoim projekcie'
                  : 'Tell us about your project'}
              </LinkWithChevron>
            </div>
          </div>
          <div className="smg:py-14 shrink-0 py-10 text-sm">
            <p className="font-sans font-medium text-white">
              {pl ? 'Przykładowe projekty' : 'Project examples'}
            </p>
            <BulletList
              className="mt-4"
              data={[
                pl ? 'Aplikacje e-commerce' : 'eCommerce Applications',
                pl
                  ? 'Statyczne i dynamiczne strony internetowe'
                  : 'Static and Dynamic Websites',
                pl
                  ? 'Systemy zarządzania sprawami i CRM'
                  : 'Case Management and CRM',
                pl
                  ? 'Systemy zarządzania łańcuchem dostaw'
                  : 'Supply Chain Management',
                pl ? 'Portale do pracy zespołowej' : 'Collaborative Portals'
              ]}
            />
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
    title: pl ? 'Tworzenie aplikacji w React' : 'React development',
    description: pl
      ? 'Tworzymy interaktywne i wydajne aplikacje w React zgodnie z aktualnymi standardami, aby zapewnić Twoim klientom wygodę użytkowania.'
      : 'Creating interactive, performant React applications using latest industry standards to enhance your clients experience.'
  },
  {
    title: pl ? 'Tworzenie aplikacji w Next.js' : 'NextJs development',
    description: pl
      ? 'Korzystamy z Next.js, sprawdzonego w branży frameworka do wydajnego tworzenia aplikacji w React.'
      : 'We build upon the NextJs framework, which is the industry standard for efficient and effective React development.',
    href: routes.services.development.webDevelopment.nextJsDevelopment.href
  },
  {
    title: pl ? 'UI/UX dla aplikacji React' : 'UI/UX for React apps',
    description: pl
      ? 'Tworzymy przyjazne aplikacje, dbając o responsywność, projektowanie UX, prototypowanie, warstwę wizualną i wydajność.'
      : 'We create user-friendly applications that address responsive design, clear UX principles, prototyping, visual design, and performance considerations',
    href: routes.services.design.uiDesign.root.href
  }
];

const getOurApproachList = (pl: boolean) => [
  {
    title: pl
      ? 'Nowy projekt od początku do końca'
      : 'New project from start to finish',
    description: pl
      ? 'Sprawnie zrealizujemy Twój projekt React zgodnie z aktualnymi standardami branżowymi.'
      : 'We will code your new React project efficiently with the latest industry standards. ',
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
      ? 'Nasi programiści React dołączą do Twojego zespołu, aby przyspieszyć i usprawnić rozwój aplikacji.'
      : 'Get our React developers into your team to boost your app development speed and efficiency.',
    icon: 'developers-team'
  }
];
