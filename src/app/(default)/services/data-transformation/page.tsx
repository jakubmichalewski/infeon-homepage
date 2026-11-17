import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
import NumberedHighlightsList from '@components/features/NumberedHighlightsList/NumberedHighlightsList';
import QuoteWithAvatar from '@components/features/QuoteWithAvatar/QuoteWithAvatar';
import SelfServiceAssessments from '@components/features/SelfServiceAssessments/SelfServiceAssessments';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import LinkWithChevron from '@components/ui/LinkWithChevron';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    routes.services.businessIntelligence.dataTransformation.root,
    await getLocale()
  );
}

export default async function DataTransformationPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={
          routes.services.businessIntelligence.dataTransformation.root.image
        }
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Łącz, oczyszczaj, przekształcaj i ładuj dane, aby wykorzystać ich potencjał'
            : 'Integrate, cleanse, transform, and load your data to unlock its potential'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Kompleksowe rozwiązania, które łączą dane z wielu źródeł w jednym miejscu.'
            : 'Full solutions, from multiple sources, into a single centralised view'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Wdrażamy rozwiązania do przekształcania danych'
              : 'Our team deliver effective Data Transformation solutions'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Starannie planujemy i realizujemy projekty transformacji danych, współpracując z klientami na każdym etapie, aby spełnić ich wymagania.'
              : `Careful planning, collaboration, and execution are essential to deliver successful Data Transformation projects that meet clients' needs and exceed their expectations.`}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="relative mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3">
          <div className="mx-auto h-fit shrink-0 lg:sticky lg:top-28 lg:max-w-sm">
            <Heading level={3}>
              {pl ? 'Szybsze uzyskiwanie wniosków' : 'Faster Time-to-Insight'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Nasze rozwiązania pozwalają szybko pobierać, przetwarzać i analizować duże ilości danych. Dzięki temu osoby podejmujące decyzje mogą sprawniej reagować na zmiany.'
                : 'Our Data Transformation approach will allow you to ingest, process and analyse large data volumes rapidly, accelerating time-to-insights for decision-makers. This allows your business to respond to a changing landscape.'}
            </p>

            <div className="mt-12">
              <LinkWithChevron {...localizeRoute(routes.contact.root, locale)}>
                {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
              </LinkWithChevron>
            </div>
          </div>

          <div className="rounded-lg bg-brand-50 p-10 sm:p-14 lg:col-span-2">
            <NumberedHighlightsList data={getEtlList(pl)} columns={2} />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <QuoteWithAvatar
          quote={
            pl
              ? 'W naszych projektach dbamy o jakość danych i wydajność przetwarzania.'
              : 'Data quality and performance is our goal we proudly achieve in our projects.'
          }
          author={'Jakub Michalewski'}
          align={'right'}
          color={'brand'}
          image={
            <Image
              src={'/images/team/jakub-michalewski.png'}
              width={710}
              height={1024}
              alt={'Jakub Michalewski'}
            />
          }
        />
      </Section>

      <Section className="mt-16 lg:mt-24">
        <SelfServiceAssessments />
      </Section>
    </>
  );
}

const getEtlList = (pl: boolean) => [
  {
    title: pl
      ? 'Rozpoznanie źródeł i profilowanie danych'
      : 'Data Discovery and Profiling',
    description: pl
      ? 'Badamy dane źródłowe, aby poznać ich strukturę, jakość i złożoność. Analizujemy wzorce, nieprawidłowości, ograniczenia i możliwości.'
      : 'We conduct data discovery and profiling activities to understand the structure, quality, and complexity of the sources data. We analyse patterns, anomalies, challenges, and opportunities.'
  },
  {
    title: pl ? 'Architektura' : 'Architecture',
    description: pl
      ? 'Projektujemy architekturę transformacji danych dopasowaną do wymagań i celów organizacji. Określamy przebieg pobierania, przekształcania i ładowania danych.'
      : 'Our architecture service will design an Data Transformation architecture that meets the requirements and objectives of your organisation. We define the overall workflow, from data extraction, transformation, and loading processes.'
  },
  {
    title: pl ? 'Tworzenie rozwiązań' : 'Development',
    description: pl
      ? 'Tworzymy procesy w Azure, które pobierają dane ze źródeł, przekształcają je według reguł biznesowych i ładują do struktury przeznaczonej do analizy.'
      : 'We develop Data Transformation processes in Azure, to extract data from source systems, transform it according to business rules and requirements, and load it into the target structure for analytics.'
  },
  {
    title: pl ? 'Bezpieczeństwo' : 'Security',
    description: pl
      ? 'Dobieramy i wdrażamy mechanizmy ochrony zasobów informacyjnych, a następnie na bieżąco oceniamy ryzyko.'
      : 'We ensure your data is always secure. Identifying, and implementing the controls necessary to protect your information assets, and continuously assessing risk to maintain that protection.'
  },
  {
    title: pl ? 'Bieżące wsparcie' : 'Ongoing Support',
    description: pl
      ? 'Oferujemy standardową pomoc lub wsparcie i utrzymanie dostosowane do Twoich potrzeb. Stosujemy sprawdzone praktyki ITSM.'
      : 'We provide standard support services, or tailored support and maintenance solutions that fit with your needs. Utilising best-practice ITSM practices to provide a truly effective service.'
  },
  {
    title: pl ? 'Ciągłe doskonalenie' : 'Continuous Improvement',
    description: pl
      ? 'W razie potrzeby wspólnie monitorujemy i rozwijamy platformę danych, aby odpowiadała na zmieniające się cele i wspierała strategię firmy.'
      : 'Where required we will work with you to continuously monitor and improve your data platform to meet changing objectives and align to your business strategy.'
  }
];
