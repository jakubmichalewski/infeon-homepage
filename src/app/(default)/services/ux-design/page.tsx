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

export default async function UxDesignPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.design.uxDesign.root.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Poproś o wycenę projektu' : 'Get Project Estimation'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Projektowanie doświadczeń użytkowników stron i aplikacji mobilnych'
            : 'Exceptional User Interface Design for Your Website and Mobile Application'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Zadowolenie użytkowników ma kluczowe znaczenie dla sukcesu strony lub aplikacji. Nasi projektanci pomogą stworzyć produkt, z którego wygodnie się korzysta.'
            : 'Satisfied users are fundamental to the business success of your website and application. Our team of designers is dedicated to helping you develop a superior user experience.'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Ściśle współpracujemy z klientami, aby osiągnąć lepszy efekt.'
              : 'We work closely with customers to achieve better results.'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Znasz swój produkt lub usługę. Pomożemy Ci wykorzystać tę wiedzę do zaprojektowania rozwiązań wygodnych dla Twoich klientów.'
              : 'You possess the essential knowledge of your product or service, and we are here to assist you in transforming that into an incredible user experience for your end customer.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto grid max-w-screen-xl sm:grid-cols-2 sm:gap-12">
          <div className="mx-auto self-center py-10 lg:max-w-lg">
            <Heading level={3}>
              {pl
                ? 'Projektowanie UX dla e-commerce'
                : 'UX Design for eCommerce'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Pomożemy zwiększyć sprzedaż i liczbę powracających klientów, usuwając przeszkody na ścieżce zakupowej.'
                : `A fantastic offer alone isn't sufficient. We're committed to helping you increase sales and secure more repeat customers by eliminating the challenges your clients might encounter during the purchasing process.`}
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
              src={'/images/content/ux-design-content-01.jpg'}
              alt={
                pl
                  ? 'Prototypy UX dla e-commerce'
                  : 'UX prototypes for eCommerce'
              }
              width={1200}
              height={800}
              className="h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto grid max-w-screen-xl sm:grid-cols-2 sm:gap-12">
          <div className="order-1 mx-auto self-center py-10 lg:max-w-lg">
            <Heading level={3}>
              {pl
                ? 'Aplikacje wygodne w obsłudze'
                : 'Apps with great user experience'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Użytkownicy chętniej wracają do aplikacji, w których łatwo się odnaleźć. Wspólnie zaprojektujemy produkt, z którego będą chcieli korzystać.'
                : `Looking to develop an app that delights your users? User-friendly apps have a higher chance of retaining their users. Avoid letting your users feel lost in your apps. Let's collaborate to craft a wonderful experience for them.`}
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
              src={'/images/content/ux-design-content-02.jpg'}
              alt={pl ? 'Prototypy UX dla aplikacji' : 'UX prototypes for apps'}
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
