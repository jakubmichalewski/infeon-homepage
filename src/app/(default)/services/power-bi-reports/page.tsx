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
    routes.services.businessIntelligence.powerBiReports.root,
    await getLocale()
  );
}

export default async function PowerBiPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.businessIntelligence.powerBiReports.root.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Wyciągaj wnioski z danych dzięki raportom Power BI'
            : 'Empower Your Insights with Power BI Reports'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Przekształcamy surowe dane w użyteczne wnioski. Przejrzyste wizualizacje i zaawansowane analizy w Power BI pomagają podejmować trafne decyzje i rozwijać firmę.'
            : 'Unlock data potential with our Power BI reports, transforming raw data into actionable insights. With intuitive visualisation and advanced analytics, we drive informed decision-making and foster organisational growth.'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Doświadczeni specjaliści do Twojej dyspozycji'
              : 'Expertise at Your Service'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Wspólnie planujemy i tworzymy raporty Power BI dopasowane do Twoich potrzeb, aby ułatwiać korzystanie z danych w całej organizacji.'
              : 'Our highly skilled team will craft tailored Power BI reports, ensuring project success and amplifying data-driven insights across your organisation through meticulous planning and collaborative execution.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="relative mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3">
          <div className="mx-auto h-fit shrink-0 lg:sticky lg:top-28 lg:max-w-sm">
            <Heading level={3}>
              {pl ? 'Od danych do decyzji' : 'Unlock Insights, Drive Decisions'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Integracja danych i dynamiczne wizualizacje przyspieszają analizę i pomagają rozwijać firmę.'
                : 'Streamlined data integration and dynamic visualisation to accelerate your time-to-insight, fostering sustained growth.'}
            </p>

            <div className="mt-12">
              <LinkWithChevron {...localizeRoute(routes.contact.root, locale)}>
                {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
              </LinkWithChevron>
            </div>
          </div>

          <div className="rounded-lg bg-brand-50 p-10 sm:p-14 lg:col-span-2">
            <NumberedHighlightsList data={getPowerBiList(pl)} columns={2} />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <QuoteWithAvatar
          quote={
            pl
              ? 'Wiemy, jak ważna jest czytelna prezentacja danych w raportach.'
              : `We understand the importance of good data presentation in our reporting solutions`
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

const getPowerBiList = (pl: boolean) => [
  {
    title: pl ? 'Tworzenie pulpitów nawigacyjnych' : 'Dashboard Development',
    description: pl
      ? 'Tworzymy interaktywne pulpity, na których od razu widać najważniejsze wskaźniki.'
      : 'Create dynamic and interactive dashboards that provide at-a-glance insights into your key performance metrics.'
  },
  {
    title: pl
      ? 'Modelowanie i transformacja danych'
      : 'Data Modeling and Transformation',
    description: pl
      ? 'Tworzymy modele i wydajne procesy przekształcania danych, dbając o ich poprawność i spójność.'
      : 'Develop robust data models and implement efficient data transformation processes to ensure accuracy and consistency.'
  },
  {
    title: pl ? 'Tworzenie raportów' : 'Report Generation',
    description: pl
      ? 'Przygotowujemy raporty i prezentacje, które pokazują złożone dane w przejrzysty sposób.'
      : 'Generate insightful reports and presentations that communicate complex data in a clear and compelling manner.'
  },
  {
    title: pl ? 'Szkolenia i wsparcie' : 'Training and Support',
    description: pl
      ? 'Szkolimy zespół i zapewniamy bieżące wsparcie, aby w pełni wykorzystać raporty Power BI.'
      : 'Provide comprehensive training and ongoing support to empower your team to maximise the benefits of Power BI reports.'
  },
  {
    title: pl
      ? 'Integracja z istniejącymi systemami'
      : 'Integration with Existing Systems',
    description: pl
      ? 'Łączymy raporty Power BI z używanymi systemami i procesami, aby ułatwić codzienną pracę i zwiększyć wydajność.'
      : 'Seamlessly integrate Power BI reports with your existing systems and workflows to streamline operations and enhance efficiency.'
  },
  {
    title: pl ? 'Ciągłe doskonalenie' : 'Continuous Improvement',
    description: pl
      ? 'Wspólnie doskonalimy raporty Power BI, aby odpowiadały na zmieniające się potrzeby i cele.'
      : 'Collaborate with our experts to continuously optimise your Power BI reports solution, ensuring it evolves to meet your changing needs and objectives.'
  }
];
