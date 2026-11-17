import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
import MinimumViableProduct from '@components/features/MinimumViableProduct/MinimumViableProduct';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import LinkWithChevron from '@components/ui/LinkWithChevron';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(routes.services.design.uxDesign.root, await getLocale());
}

export default async function UiDesignPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.design.uiDesign.root.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Poproś o wycenę projektu' : 'Get Project Estimation'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Przejrzyste i łatwe w obsłudze interfejsy stron i aplikacji'
            : 'Creating easy to use and clean interfaces for websites and apps'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Chcesz odświeżyć istniejący projekt lub zadbać o wygląd nowego produktu? Nasi projektanci pomogą Ci osiągnąć cele UX i stworzyć przejrzyste, estetyczne interfejsy.'
            : 'Looking to give your existing project breath of fresh air or want your new project to look sleek? Our designers will help you achieve your UX goals with clean and beautiful interfaces for your websites and apps.'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Projektujemy estetyczne i funkcjonalne strony oraz aplikacje mobilne'
              : 'We are advocates for beautiful and functional web and mobile designs'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Przejrzysty, przyjazny interfejs pomaga dopracować projekt. Zwracamy uwagę na szczegóły, które mają znaczenie dla użytkowników.'
              : 'A visually appealing and user-friendly interface is the icing on the cake for your project. We hold the view that small, often overlooked details can have a significant impact.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto grid max-w-screen-xl sm:grid-cols-3 sm:gap-12">
          <div className="mx-auto self-center py-10 lg:max-w-lg">
            <Heading level={3}>
              {pl
                ? 'Potrzebujesz strony firmowej?'
                : 'Corporate website? No problem!'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Projektujemy profesjonalne interfejsy stron firmowych, które łączą estetykę z wygodą obsługi i dbają o wizerunek Twojej firmy w internecie.'
                : 'Crafting sleek, professional UI designs for corporate websites that are both visually appealing and functionally seamless, ensuring a premium online presence for your business.'}
            </p>
            <div className="mt-12">
              <LinkWithChevron {...localizeRoute(routes.contact.root, locale)}>
                {pl
                  ? 'Opowiedz nam o swoim projekcie'
                  : 'Tell us about your project'}
              </LinkWithChevron>
            </div>
          </div>
          <div className="lg:col-span-2">
            <Image
              src={'/images/content/ui-design-content-01.jpg'}
              alt={
                pl
                  ? 'Strona firmowa zaprojektowana i stworzona przez Infeon Tech'
                  : 'Corporate website designed and developed by Infeon Tech'
              }
              width={1200}
              height={800}
              className="h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto grid max-w-screen-xl sm:grid-cols-3 sm:gap-12">
          <div className="order-1 mx-auto self-center py-10 lg:max-w-lg">
            <Heading level={3}>
              {pl ? 'Tworzysz aplikację mobilną?' : 'Mobile app? Lets go!'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Projektujemy intuicyjne interfejsy aplikacji mobilnych, które łączą estetykę z wygodą użytkowania.'
                : 'Designing intuitive and engaging mobile app interfaces that combine style with functionality, ensuring a seamless and enjoyable user experience for all mobile users.'}
            </p>
            <div className="mt-12">
              <LinkWithChevron {...localizeRoute(routes.contact.root, locale)}>
                {pl
                  ? 'Opowiedz nam o swoim projekcie'
                  : 'Tell us about your project'}
              </LinkWithChevron>
            </div>
          </div>
          <div className="lg:col-span-2">
            <Image
              src={'/images/content/ui-design-content-02.jpg'}
              alt={
                pl
                  ? 'Projekt aplikacji mobilnej przygotowany przez Infeon Tech'
                  : 'Mobile application design created by Infeon Tech'
              }
              width={1200}
              height={800}
              className="h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto grid max-w-screen-xl sm:grid-cols-3 sm:gap-12">
          <div className="mx-auto self-center py-10 lg:max-w-lg">
            <Heading level={3}>
              {pl
                ? 'Planujesz nowoczesną aplikację internetową?'
                : 'Web app of the future? We got you!'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Specjalizujemy się w projektowaniu interfejsów rozbudowanych aplikacji internetowych, łącząc nowoczesne rozwiązania z wygodą użytkowania.'
                : 'Specializing in advanced web app interfaces, our team delivers state-of-the-art UI designs that blend innovation with user-friendly features, ensuring a modern, exceptional online experience for every user.'}
            </p>
            <div className="mt-12">
              <LinkWithChevron {...localizeRoute(routes.contact.root, locale)}>
                {pl
                  ? 'Opowiedz nam o swoim projekcie'
                  : 'Tell us about your project'}
              </LinkWithChevron>
            </div>
          </div>
          <div className="lg:col-span-2">
            <Image
              src={'/images/content/ui-design-content-03.jpg'}
              alt={
                pl
                  ? 'Aplikacja internetowa zaprojektowana i stworzona przez Infeon Tech'
                  : 'Web application designed and developed by Infeon Tech'
              }
              width={1200}
              height={800}
              className="h-full rounded-lg object-cover"
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
