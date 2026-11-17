import { Metadata } from 'next';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
import ItemsWithIconList from '@components/features/ItemsWithIconList/ItemsWithIconList';
import NumberedHighlightsList from '@components/features/NumberedHighlightsList/NumberedHighlightsList';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import LinkWithChevron from '@components/ui/LinkWithChevron';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(routes.services.design.uxReview.root, await getLocale());
}

export default async function UxReviewPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.design.uxReview.root.image}
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
            ? 'Znajdź obszary wymagające poprawy i ułatw użytkownikom korzystanie z aplikacji.'
            : 'Identify areas for improvement and enhance the user experience of your app.'}
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
              ? 'Poznaj doświadczenia klientów i usprawnij swój projekt'
              : `Enhance the success of your project by gaining insights into your
              customers' experiences`}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Rozwijaj produkt na podstawie zachowań użytkowników, aby ułatwić im zakup produktów lub skorzystanie z usług.'
              : 'No project is flawless; rather, they are those that continually adapt to user behavior, enhancing their experience and motivating them to purchase your products or utilize your services.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="relative mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3">
          <div className="mx-auto h-fit shrink-0 lg:sticky lg:top-28 lg:max-w-sm">
            <Heading level={3}>
              {pl ? 'Jak przeprowadzamy audyt UX' : 'Our UX Evaluation Process'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Badamy i testujemy działające produkty, a następnie proponujemy zmiany. Korzystamy ze sprawdzonego procesu, aby zidentyfikować obszary, w których użytkownicy napotykają najwięcej trudności.'
                : `We utilize a proven process to investigate, test, and recommend
                improvements for our clients' existing projects. This method
                allows us to identify and target the weakest areas, ensuring
                essential enhancements in user experience.`}
            </p>

            <div className="mt-12">
              <LinkWithChevron {...localizeRoute(routes.contact.root, locale)}>
                {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
              </LinkWithChevron>
            </div>
          </div>

          <div className="rounded-lg bg-brand-50 p-10 sm:p-14 lg:col-span-2">
            <NumberedHighlightsList data={getReviewSteps(pl)} columns={2} />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <Heading level={3}>
            {pl
              ? 'Najważniejsze korzyści z audytu UX'
              : 'Principal Advantages of UX Review Services'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Użytkownicy chętniej kupują i wracają, jeśli z aplikacji lub strony można łatwo korzystać i jest ona dostępna.'
              : 'Users who find your app or website user-friendly and accessible are more inclined to make a purchase and come back for future transactions.'}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-screen-xl">
          <ItemsWithIconList data={getKeyBenefits(pl)} columns={3} />
        </div>
      </Section>
    </>
  );
}

const getReviewSteps = (pl: boolean) => [
  {
    title: pl ? 'Analiza danych' : 'Utilizing analytics data',
    description: pl
      ? 'Analizujemy dostępne dane, aby zidentyfikować słabe punkty projektu, zbadać ich przyczyny i znaleźć rozwiązania.'
      : `We'll analyze your analytics data to identify weak areas in your project, investigate their causes, and determine effective solutions.`
  },
  {
    title: pl ? 'Identyfikacja problemów' : 'Identifying problems',
    description: pl
      ? 'Po wskazaniu problematycznych obszarów szukamy ich przyczyn. W wybranych miejscach wykorzystujemy narzędzia takie jak Hotjar, aby lepiej zrozumieć zachowania użytkowników.'
      : `After pinpointing the problem areas, we will focus on uncovering their causes. By employing tools like Hotjar in targeted sections, we aim to gather deeper insights and devise appropriate solutions.`
  },
  {
    title: pl ? 'Projektowanie usprawnień' : 'Designing improvements',
    description: pl
      ? 'Na podstawie zebranych danych projektujemy rozwiązania konkretnych problemów.'
      : 'Utilizing all the gathered information, we design solutions to address the specific challenges in your project.',
    href: routes.services.design.uxDesign.root.href
  },
  {
    title: pl ? 'Wdrażanie rozwiązań' : 'Developing solutions',
    description: pl
      ? 'Możemy wdrożyć zmiany, które rekomendujemy po audycie UX.'
      : 'We provide software development services to implement the UX design solutions we recommend following a UX review.',
    href: routes.services.development.root.href
  }
];

const getKeyBenefits = (pl: boolean) => [
  {
    title: pl ? 'Wyższy współczynnik konwersji' : 'Higher conversion rates',
    description: pl
      ? 'Łatwiejsza w obsłudze strona może znacząco zwiększyć odsetek odwiedzających, którzy dokonują zakupu.'
      : 'A user-friendly website with superior user experience can greatly enhance your conversion rates.',
    icon: 'cyber-security'
  },
  {
    title: pl ? 'Mniej porzuconych zakupów' : 'Less website abandonment',
    description: pl
      ? 'Usunięcie przeszkód w finalizacji transakcji ogranicza liczbę porzuconych zakupów.'
      : 'Eliminating barriers that hinder your clients from completing transactions will lower the abandonment rate in your purchase pathways.',
    icon: 'cyber-security'
  },
  {
    title: pl ? 'Więcej powracających użytkowników' : 'More returning users',
    description: pl
      ? 'Zadowoleni użytkownicy chętniej wracają do sklepu lub aplikacji, co sprzyja zwiększeniu przychodów.'
      : 'Satisfied users are more likely to shop with you again or use your app frequently, leading to increased revenue.',
    icon: 'cyber-security'
  }
];
