import { Metadata } from 'next';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
import ItemsWithIconList from '@components/features/ItemsWithIconList/ItemsWithIconList';
import MinimumViableProduct from '@components/features/MinimumViableProduct/MinimumViableProduct';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    routes.services.development.webDevelopment.root,
    await getLocale()
  );
}

export default async function ReactDevelopmentPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.development.webDevelopment.root.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl
              ? 'Opowiedz nam o swoim projekcie'
              : 'Tell us about your project'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Tworzenie interaktywnych i wydajnych rozwiązań internetowych'
            : 'Development of interactive and high-performance web projects'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Tworzymy aplikacje internetowe, strony i sklepy online w nowoczesnych technologiach. Pomagamy wdrażać pomysły i rozwijać firmę.'
            : 'We create web applications, websites, and e-commerce solutions using the latest web technologies, turning your ideas into reality and supporting your business growth.'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Tworzenie dopracowanych rozwiązań internetowych'
              : 'Creating streamlined and sophisticated web projects'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Korzystamy z różnych technologii frontendowych i backendowych, aby dobrać rozwiązanie do wymagań każdego projektu.'
              : 'We focus on offering a broad range of frontend and backend technologies, ensuring we can choose the ideal option for each specific project. No matter the type of project, we are committed to selecting technology that perfectly aligns with its needs.'}
          </p>
        </div>
      </Section>

      <Section className="mt-24">
        <div className="mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3 lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <Heading level={3}>
              {pl
                ? 'Szukasz zespołu do stworzenia projektu internetowego dla Twojej firmy?'
                : 'Seeking professional development of exceptional web projects for your business?'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Pomożemy Ci przekształcić pomysł na stronę lub aplikację internetową w działający produkt.'
                : 'Our web development services are designed to transform your website and web application concepts into reality.'}
            </p>
          </div>

          <div className="lg:col-span-2">
            <ItemsWithIconList
              columns={2}
              data={webDevelopmentList.map((route) =>
                localizeRoute(route, locale)
              )}
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

const webDevelopmentList = [
  routes.services.development.webDevelopment.reactDevelopment,
  routes.services.development.webDevelopment.nextJsDevelopment,
  routes.services.development.webDevelopment.angularDevelopment,
  routes.services.development.webDevelopment.vueDevelopment,
  routes.services.development.webDevelopment.cSharpDevelopment,
  routes.services.development.webDevelopment.goDevelopment
];
