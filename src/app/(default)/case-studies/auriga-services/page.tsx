import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import { getLocale } from '@/i18n/server';
import CompanyInfo from '@components/features/CompanyInfo/CompanyInfo';
import BulletList from '@components/ui/BulletList';
import Heading from '@components/ui/Heading';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(routes.caseStudies.auriga, await getLocale());
}

export default async function AurigaCaseStudyPage() {
  const locale = await getLocale();
  const copy = caseStudyCopy[locale];
  return (
    <>
      <section className="mx-auto grid lg:grid-cols-2">
        <div className="mx-auto max-w-screen-md self-center p-6 py-14 md:p-14 lg:p-20">
          <p className="text-sm font-medium text-brand-700 uppercase">
            {locale === 'pl' ? 'Studium przypadku' : 'Case Study'}
          </p>
          <Heading level={1} className="mt-8">
            {copy.title}
          </Heading>
        </div>
        <div>
          <Image
            src={routes.caseStudies.auriga.image}
            alt=""
            width={1440}
            height={720}
            className="h-[640px] w-full rounded-bl-[20vw] object-cover"
          />
        </div>
      </section>

      <Section className="mt-16 lg:mt-24">
        <div className="relative mx-auto grid max-w-screen-xl gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mx-auto max-w-screen-sm">
              <p>{copy.overview}</p>

              <Heading level={3} className="mt-12">
                {copy.scopeHeading}
              </Heading>

              <div className="mt-6">
                <BulletList data={copy.projectScope} />
              </div>

              <Heading level={3} className="mt-12">
                {copy.workHeading}
              </Heading>

              <Heading level={4} className="mt-12">
                {copy.assessmentHeading}
              </Heading>

              <div className="mt-6">
                <BulletList data={copy.assessment} />
              </div>

              <Heading level={4} className="mt-12">
                {copy.requirementsHeading}
              </Heading>

              <div className="mt-6">
                <BulletList data={copy.requirements} />
              </div>

              <Heading level={4} className="mt-12">
                {copy.procurementHeading}
              </Heading>

              <div className="mt-6">
                <BulletList data={copy.procurement} />
              </div>

              <Heading level={4} className="mt-12">
                {copy.selectionHeading}
              </Heading>

              <div className="mt-6">
                <BulletList data={copy.selection} />
              </div>

              <Heading level={4} className="mt-12">
                {copy.businessCaseHeading}
              </Heading>

              <div className="mt-6">
                <BulletList data={copy.businessCase} />
              </div>

              <p className="mt-12">{copy.results}</p>
            </div>
          </div>
          <div>
            <div className="mx-auto max-w-screen-sm md:sticky md:top-36">
              <CompanyInfo data={copy.companyInfo} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
const projectScope = [
  'Assessing and establishing Auriga’s needs, and defining a partner and technology profile required to meet strategic objectives',
  'Leading the procurement of a technology partner to deliver the solution',
  'Leading the partner assessment, evaluation, and selection process'
];

const assessment = [
  'Detailed understanding of services, infrastructure, and applications',
  'Reviewing effectiveness in supporting Auriga’s current needs and strategic objectives',
  'Facilitated user consultation to establish stakeholder views',
  'Assessed process flows, and observed operations from Auriga Assessors',
  'Evaluated current architecture',
  ['Ability to scale and extend', 'Cost-effectiveness', 'Risk and resilience']
];

const requirements = [
  'Established the criteria required to meet Auriga’s needs'
];

const procurement = [
  'Established an initial long list of suppliers that met the partner profile, and supported solutions that aligned with the technology profile',
  'Undertook an initial evaluation session with suppliers to evaluate their suitability',
  'Defined a short list of suppliers, and provided a set of tender quality assessment criteria for response and evaluation',
  'Facilitated a series of supplier demonstrations'
];

const selection = [
  'Set scoring criteria for partner evaluation',
  'Led the evaluation and scoring activity',
  'Ensured a fair and consistent process for selection',
  'Provided clear recommendations on technology and partner appointment'
];

const businessCase = [
  'Developed a full business case',
  'Outlined, the objectives, the process of evaluation, proposed benefits, options appraisal, financial analysis, the timetable for implementation, and recommendations to progress'
];

const companyInfo = {
  name: 'Auriga Services',
  description:
    "Supporting people through life's challenges, UK’s leading provider of support solutions to help those in times of need.",
  highlights: [
    { label: 'Company size', value: '90+' },
    { label: 'Industry', value: 'Charity' },
    { label: 'Project duration', value: '5 months' }
  ]
};

const caseStudyCopy = {
  en: {
    title:
      'Technological evolution for a charity-operated public benefit entity',
    overview:
      'Our team worked with Auriga Services, a charity-owned public benefit entity, supporting customers in advice and applications across grants, money, debt, welfare and water and energy assistance. We led a project to replace their backend application assessment and processing technology to achieve a more streamlined, measurable, and effective application process.',
    scopeHeading: 'This involved',
    workHeading: 'Our work included',
    assessmentHeading:
      '“Current-state” assessment of the technology, process and data estate.',
    requirementsHeading: 'Defining the partner and technology profile',
    procurementHeading: 'Enabling Partner Procurement',
    selectionHeading: 'Scoring and selection',
    businessCaseHeading: 'Business case developed',
    results:
      'The output delivered for Auriga was ratified by the Board, and our team are now supporting the implementation of a new Microsoft Dynamics solution to streamline operations, alongside the overall design of a systems architecture to set a future state architecture and operating model.',
    projectScope,
    assessment,
    requirements,
    procurement,
    selection,
    businessCase,
    companyInfo
  },
  pl: {
    title: 'Modernizacja technologii organizacji pożytku publicznego',
    overview:
      'Nasz zespół współpracował z Auriga Services, organizacją pożytku publicznego prowadzoną przez fundację. Auriga pomaga klientom uzyskać informacje i składać wnioski dotyczące dotacji, finansów, długów, świadczeń oraz wsparcia w opłacaniu rachunków za wodę i energię. Kierowaliśmy projektem wymiany systemu zaplecza do oceny i obsługi wniosków, aby usprawnić ten proces, ułatwić pomiar wyników i poprawić skuteczność.',
    scopeHeading: 'Zakres projektu',
    workHeading: 'Co zrobiliśmy',
    assessmentHeading: 'Ocena stanu technologii, procesów i danych',
    requirementsHeading: 'Określenie wymagań wobec partnera i technologii',
    procurementHeading: 'Wsparcie w wyborze dostawcy',
    selectionHeading: 'Ocena ofert i wybór partnera',
    businessCaseHeading: 'Opracowanie uzasadnienia biznesowego',
    results:
      'Zarząd Auriga zatwierdził rezultaty projektu. Nasz zespół wspierał wdrożenie nowego rozwiązania Microsoft Dynamics, które usprawnia codzienną działalność, oraz projektowanie docelowej architektury systemów i modelu operacyjnego.',
    projectScope: [
      'Zbadaliśmy potrzeby Auriga i określiliśmy wymagania wobec partnera oraz technologii, aby wesprzeć realizację celów strategicznych.',
      'Pokierowaliśmy postępowaniem w sprawie wyboru partnera technologicznego odpowiedzialnego za dostarczenie rozwiązania.',
      'Poprowadziliśmy ocenę ofert i wybór partnera.'
    ],
    assessment: [
      'Szczegółowo przeanalizowaliśmy usługi, infrastrukturę i aplikacje.',
      'Sprawdziliśmy, jak skutecznie wspierają bieżące potrzeby i cele strategiczne Auriga.',
      'Przeprowadziliśmy konsultacje z użytkownikami, aby poznać opinie zainteresowanych stron.',
      'Przeanalizowaliśmy przebieg procesów i obserwowaliśmy pracę osób oceniających wnioski.',
      'Oceniliśmy obecną architekturę pod kątem:',
      [
        'Możliwości skalowania i rozbudowy',
        'Efektywności kosztowej',
        'Ryzyka i odporności'
      ]
    ],
    requirements: [
      'Określiliśmy kryteria, które pozwalały zweryfikować, czy oferta odpowiada na potrzeby Auriga.'
    ],
    procurement: [
      'Przygotowaliśmy wstępną listę dostawców spełniających wymagania wobec partnera i oferujących rozwiązania zgodne z wymaganiami technologicznymi.',
      'Przeprowadziliśmy spotkania wstępne z dostawcami, aby ocenić dopasowanie ich ofert.',
      'Sporządziliśmy krótką listę dostawców i określiliśmy jakościowe kryteria oceny ofert.',
      'Zorganizowaliśmy serię prezentacji rozwiązań oferowanych przez dostawców.'
    ],
    selection: [
      'Ustaliliśmy kryteria punktowej oceny partnerów.',
      'Poprowadziliśmy ocenę i punktację ofert.',
      'Zadbaliśmy o uczciwy i spójny proces wyboru.',
      'Przedstawiliśmy rekomendacje dotyczące technologii i wyboru partnera.'
    ],
    businessCase: [
      'Opracowaliśmy pełne uzasadnienie biznesowe.',
      'Opisaliśmy cele, przebieg oceny, spodziewane korzyści, porównanie opcji, analizę finansową, harmonogram wdrożenia i zalecenia dotyczące dalszych działań.'
    ],
    companyInfo: {
      name: companyInfo.name,
      description:
        'Auriga Services wspiera osoby w trudnej sytuacji życiowej. Jest jednym z najważniejszych dostawców tego typu wsparcia w Wielkiej Brytanii.',
      highlights: [
        {
          label: 'Wielkość organizacji',
          value: companyInfo.highlights[0].value
        },
        {
          label: 'Branża',
          value: 'Działalność charytatywna'
        },
        {
          label: 'Czas trwania projektu',
          value: '5 miesięcy'
        }
      ]
    }
  }
};
