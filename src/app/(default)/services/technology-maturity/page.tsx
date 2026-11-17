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
    routes.services.auditsAndAssessments.technologyMaturity.root,
    await getLocale()
  );
}

export default async function TechnologyMaturityPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={
          routes.services.auditsAndAssessments.technologyMaturity.root.image
        }
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Podejmuj decyzje na podstawie oceny dojrzałości technologicznej'
            : 'Make informed decisions about your technology maturity'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Ocena dojrzałości technologicznej wskazuje, na ile stabilne i skuteczne jest Twoje środowisko IT.'
            : 'A technology maturity assessment evaluates the stability and effectiveness of your estate.'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Nasi eksperci pomogą ocenić i usprawnić Twoje środowisko technologiczne'
              : 'Our experts can assess and improve your technology environment'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Ocena infrastruktury i dojrzałości oraz przegląd systemów i aplikacji.'
              : 'Assess infrastructure, review systems and applications, maturity assessment'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="relative mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3">
          <div className="mx-auto h-fit shrink-0 lg:sticky lg:top-28 lg:max-w-sm">
            <Heading level={3}>
              {pl ? 'Ocena technologii' : 'Technology Assessment'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Ocena dojrzałości i skuteczności obecnego środowiska wyznacza punkt wyjścia do usprawnień i pomaga dopasować technologię do potrzeb organizacji.'
                : 'Assessing the maturity and effectiveness of the current technology environment will provide an important baseline for improvement, which in turn will help align your technology to your organisation’s needs.'}
            </p>

            <div className="mt-12">
              <LinkWithChevron {...localizeRoute(routes.contact.root, locale)}>
                {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
              </LinkWithChevron>
            </div>
          </div>

          <div className="rounded-lg bg-brand-50 p-10 sm:p-14 lg:col-span-2">
            <NumberedHighlightsList
              data={getTechnologyMaturityList(pl)}
              columns={2}
            />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <QuoteWithAvatar
          quote={
            pl
              ? 'Aby wprowadzać usprawnienia, trzeba poznać punkt wyjścia i na bieżąco mierzyć postępy.'
              : 'To begin to improve, you must understand your starting point, and continuously measure progress. '
          }
          author={'Vincent Cassidy'}
          align={'left'}
          color={'dark'}
          image={
            <Image
              src={'/images/team/vincent-cassidy.png'}
              width={739}
              height={1024}
              alt={'Vincent Cassidy'}
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

const getTechnologyMaturityList = (pl: boolean) => [
  {
    title: pl ? 'Inwentaryzacja zasobów' : 'Inventory of Assets',
    description: pl
      ? 'Pomagamy sporządzić wykaz sprzętu, oprogramowania, aplikacji, baz danych, elementów sieci oraz innych zasobów i zależności IT.'
      : 'We can help create an inventory of technology assets, including hardware, software, applications, databases, network components, and other IT resources and dependencies.'
  },
  {
    title: pl ? 'Ocena procesów' : 'Assessment and Evaluation',
    description: pl
      ? 'Oceniamy technologie pod kątem wyznaczonych celów. Analizujemy funkcjonalność, użyteczność, integrację, dostępność wsparcia i wymagania dotyczące utrzymania.'
      : 'We assess your technology against established objectives. We analyse factors such as functionality, usability, integration, supportability, and maintenance requirements.'
  },
  {
    title: pl
      ? 'Określenie mocnych i słabych stron'
      : 'Identify Strengths and Weaknesses',
    description: pl
      ? 'Wskazujemy mocne strony rozwiązania, słabe punkty, wąskie gardła i obszary do poprawy.'
      : 'We identify strengths and areas of excellence within your technology, as well as weaknesses, bottlenecks, and areas for improvement.'
  },
  {
    title: pl ? 'Analiza luk' : 'Gap Analysis',
    description: pl
      ? 'Porównujemy obecne technologie z Twoimi celami i potrzebami. Określamy skalę różnic, poziom dojrzałości i wpływ na organizację.'
      : 'We conduct a gap analysis to compare your current technology against your objectives and needs. We determine the extent of the gap, your current maturity level, and the impact on your organisation.'
  },
  {
    title: pl ? 'Ocena ryzyka' : 'Risk Assessment',
    description: pl
      ? 'Oceniamy ryzyko związane z obecnymi technologiami, w tym dotyczące bezpieczeństwa, zgodności i przerw w świadczeniu usług.'
      : 'We evaluate the risks associated with  your existing technology, including risks related to security, compliance, and service disruptions.'
  },
  {
    title: pl ? 'Rekomendacje i plan działań' : 'Recommendations and Roadmap',
    description: pl
      ? 'Przygotowujemy konkretne zalecenia i plan wdrożenia. Ustalamy priorytety na podstawie przewidywanego wpływu i wykonalności zmian.'
      : 'We develop actionable recommendations for improvement, and a roadmap for delivery. Prioritising recommendations based on their potential impact and feasibility.'
  }
];
