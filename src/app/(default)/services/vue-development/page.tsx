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
    routes.services.development.webDevelopment.vueDevelopment,
    await getLocale()
  );
}

export default async function VueDevelopmentPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.development.webDevelopment.vueDevelopment.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Poproś o wycenę projektu Vue' : 'Get Vue Project Estimation'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Chcesz stworzyć interaktywną aplikację internetową w Vue?'
            : 'Are you looking to build a highly interactive Vue web application solution?'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Wykorzystaj możliwości i elastyczność Vue, aby stworzyć szybką, responsywną aplikację.'
            : `Utilize the Vue framework's power and flexibility to enhance your next
            project, ensuring dynamic and responsive user experiences.`}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Korzystamy z nowoczesnych technologii, aby tworzyć wysokiej jakości rozwiązania w Vue.'
              : 'We utilize cutting-edge technologies to deliver the highest quality Vue development service to our clients'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Wspieramy projekty Vue na każdym etapie, od planowania i projektowania po wdrożenie, utrzymanie i dalszy rozwój.'
              : 'From the initial stages of planning and design, through the development process, to ongoing maintenance and support, we offer our expertise and services for your Vue project at every step of its lifecycle.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center">
            <Heading level={3}>
              {pl
                ? 'Nasze usługi w zakresie Vue'
                : 'Our services for Vue projects'}
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
              ? 'Jak współpracujemy przy projektach Vue'
              : 'Our Vue development cooperation approach'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Służymy wiedzą i wsparciem na każdym etapie projektu Vue, od planowania i projektowania po wdrożenie i utrzymanie.'
              : 'Throughout the project lifecycle, from planning and design, through to development, maintenance and support. We are here to provide our expertise and services for your Vue project.'}
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
                ? 'Stwórz z nami aplikację internetową w Vue'
                : 'You can create with us exceptional web projects in Vue'}
            </Heading>
            <p className="mt-4 text-white">
              {pl
                ? 'Elastyczność Vue pozwala realizować różne typy projektów. Wybierz rozwiązanie, które najlepiej odpowiada potrzebom Twojej firmy.'
                : 'The high adaptability of Vue allows us to accommodate various project types. Opt for the one that most closely matches your business needs.'}
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
    </>
  );
}

const getHighlightsList = (pl: boolean) => [
  {
    title: pl ? 'Tworzenie aplikacji w Vue' : 'Vue development',
    description: pl
      ? 'Tworzymy interaktywne i wydajne aplikacje w Vue zgodnie z aktualnymi standardami branżowymi, aby zapewnić Twoim klientom wygodę użytkowania.'
      : `Creating interactive, highly performant Vue applications, utilizing advanced latest industry standards, to significantly enhance your clients' overall experience.`
  },
  {
    title: pl ? 'UI/UX dla aplikacji Vue' : 'UI/UX for Vue apps',
    description: pl
      ? 'Tworzymy przyjazne aplikacje, dbając o responsywność, projektowanie UX, prototypowanie, warstwę wizualną i wydajność.'
      : 'We create user-friendly applications that address responsive design, clear UX principles, prototyping, visual design, and performance considerations'
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
      ? 'Sprawnie zrealizujemy Twój projekt Vue zgodnie z aktualnymi standardami branżowymi.'
      : 'We will code your new Vue project efficiently with the latest industry standards. ',
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
      ? 'Nasi programiści Vue dołączą do Twojego zespołu, aby przyspieszyć i usprawnić rozwój aplikacji.'
      : 'Get our Vue developers into your team to boost your app development speed and efficiency.',
    icon: 'developers-team'
  }
];
