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
    routes.services.cloud.infrastructure.root,
    await getLocale()
  );
}

export default async function InfrastructurePage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.cloud.infrastructure.root.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Poproś o wycenę projektu' : 'Get project estimation'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Rozwiązania w zakresie infrastruktury chmurowej'
            : 'IT Cloud Infrastructure Solutions'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Wydajna infrastruktura chmurowa wspiera działalność nowoczesnej firmy. Projektujemy rozwiązania dopasowane do Twoich potrzeb, od migracji do chmury po rozbudowę lub budowę nowej infrastruktury.'
            : `Efficient cloud infrastructure is crucial for modern businesses. Whether you're migrating to the cloud, expanding your existing infrastructure, or building a new solution, we offer bespoke IT cloud infrastructure solutions precisely tailored to your requirements.`}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Przygotuj infrastrukturę na rozwój firmy'
              : 'Stay Ahead of the Curve'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Projektujemy, wdrażamy i utrzymujemy skalowalną, elastyczną i niezawodną infrastrukturę chmurową dla kluczowych procesów Twojej firmy.'
              : 'At our core, we excel in designing, implementing, and managing cloud infrastructure, ensuring scalability, flexibility, and reliability for your business-critical operations.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center">
            <Heading level={3}>
              {pl
                ? 'Nasze usługi w zakresie infrastruktury chmurowej'
                : 'Our IT Cloud Infrastructure Services'}
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
      ? 'Migracja i wdrażanie w chmurze'
      : 'Cloud Migration and Deployment',
    description: pl
      ? 'Sprawnie przenosimy infrastrukturę IT do chmury i wdrażamy nowe zasoby, ograniczając przestoje.'
      : 'Efficiently migrate your IT infrastructure to the cloud and deploy new resources with our cloud migration and deployment solutions, minimizing downtime and maximising efficiency.'
  },
  {
    title: pl
      ? 'Projektowanie i wdrażanie infrastruktury'
      : 'Infrastructure Design and Implementation',
    description: pl
      ? 'Projektujemy i wdrażamy skalowalną, odporną na awarie infrastrukturę chmurową, dopasowaną do Twoich potrzeb pod względem wydajności i kosztów.'
      : 'Design and implement scalable and resilient cloud infrastructure architectures tailored to your specific needs, ensuring optimal performance and cost-effectiveness.'
  },
  {
    title: pl
      ? 'Bezpieczeństwo i zgodność w chmurze'
      : 'Cloud Security and Compliance',
    description: pl
      ? 'Wdrażamy zabezpieczenia i dbamy o zgodność ze standardami oraz przepisami branżowymi, aby chronić dane i aplikacje w Twojej chmurze.'
      : 'Implement robust security measures and ensure compliance with industry regulations and standards in your cloud environment, safeguarding your data and applications.',
    href: routes.services.development.minimumViableProduct.root.href
  }
];
