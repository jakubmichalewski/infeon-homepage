import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
import ItemsWithIconList from '@components/features/ItemsWithIconList/ItemsWithIconList';
import MinimumViableProduct from '@components/features/MinimumViableProduct/MinimumViableProduct';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import LinkWithChevron from '@components/ui/LinkWithChevron';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    routes.services.development.webDevelopment.goDevelopment,
    await getLocale()
  );
}

export default async function GoDevelopmentPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.development.webDevelopment.goDevelopment.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Poproś o wycenę projektu Go' : 'Get Go Project Estimation'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Wykorzystaj Go, jeden z najwydajniejszych języków programowania, w swoim kolejnym projekcie.'
            : 'Employ Go, one of the best performing language for your next project.'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Szybkość i elastyczność Go pozwalają tworzyć wydajne rozwiązania dopasowane do potrzeb Twojej firmy.'
            : 'The speed and flexibility of Go ensure top-notch performance for your projects, providing a no-compromise solution that fully meets your business needs.'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Rozwiązania w Go, które odpowiadają na konkretne potrzeby Twojej firmy.'
              : 'Custom-tailored Go solutions designed to effectively meet the specific needs of your business.'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Wspieramy projekty w Go niezależnie od ich skali, oferując usługi dopasowane do wymagań.'
              : 'Regardless of the size of your project, if Go is your technology of choice, we offer a variety of complementary services to cater to the needs of your project.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto grid max-w-screen-xl sm:grid-cols-2 sm:gap-12">
          <div className="mx-auto self-center py-10 lg:max-w-lg">
            <Heading level={3}>
              {pl
                ? 'Tworzymy interfejsy API w Go dla projektów o wysokich wymaganiach wydajnościowych'
                : 'We build powerful API solutions with Go to meet high performance demands of any projects'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Wysoka wydajność Go pozwala nam dostarczać niezawodne rozwiązania backendowe do projektów o różnej skali i złożoności.'
                : 'Go is a highly performant language, allowing us to provide efficient and robust backend solutions tailored to projects of any scale and complexity.'}
            </p>
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
              src={'/images/content/golang-development-content-01.jpg'}
              alt={
                pl
                  ? 'Programista tworzący wydajne rozwiązanie backendowe w Go'
                  : 'Skilled Go developer creating efficient backend application in Go Lang'
              }
              width={1024}
              height={1024}
              className="h-full rounded-lg object-cover"
            />
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
              ? 'Jak współpracujemy przy projektach Go'
              : 'Our Go development cooperation approach'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Wspieramy Twój projekt Go od planowania i projektowania po wdrożenie, utrzymanie i dalszy rozwój.'
              : 'We offer our expertise and services for your Go project at every stage of the project lifecycle, from planning and design to development, and from maintenance to support.'}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-screen-xl">
          <ItemsWithIconList data={getOurApproachList(pl)} columns={3} />
        </div>
      </Section>
    </>
  );
}

const getOurApproachList = (pl: boolean) => [
  {
    title: pl
      ? 'Nowy projekt od początku do końca'
      : 'New project from start to finish',
    description: pl
      ? 'Sprawnie zrealizujemy Twój projekt Go zgodnie z aktualnymi standardami branżowymi.'
      : 'We will code your new Go project efficiently with the latest industry standards. ',
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
      ? 'Nasi programiści Go dołączą do Twojego zespołu, aby przyspieszyć i usprawnić rozwój aplikacji.'
      : 'Get our Go developers into your team to boost your app development speed and efficiency.',
    icon: 'developers-team'
  }
];
