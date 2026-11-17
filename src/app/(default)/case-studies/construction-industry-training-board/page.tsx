import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import { getLocale } from '@/i18n/server';
import CompanyInfo from '@components/features/CompanyInfo/CompanyInfo';
import TechStackList from '@components/features/TechStackList/TechStackList';
import BulletList from '@components/ui/BulletList';
import Heading from '@components/ui/Heading';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(routes.caseStudies.citb, await getLocale());
}

export default async function ConstructionIndustryTrainingBoardCaseStudyPage() {
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
            src={routes.caseStudies.citb.image}
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
              <p>{copy.background}</p>

              <p className="mt-4">{copy.strategy}</p>

              <Heading level={2} className="mt-12">
                {copy.solutionHeading}
              </Heading>

              <p className="mt-4">{copy.solution}</p>

              <Heading level={3} className="mt-12">
                {copy.scopeHeading}
              </Heading>

              <div className="mt-6">
                <BulletList data={copy.projectScope} />
              </div>

              <p className="mt-12">{copy.implementation}</p>

              <p className="mt-4">{copy.governance}</p>

              <Heading level={3} className="mt-12">
                {copy.frameworksHeading}
              </Heading>

              <div className="mt-6">
                <TechStackList data={techStack} />
              </div>

              <p className="mt-12">{copy.migration}</p>

              <p className="mt-4">{copy.results}</p>
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
  'Directing the Change & Technology function through a programme of transformation, and outsourcing of functions to a new shared services partner',
  'Managing the shared services partner in their delivery of change, technology, and IT service management operations, for 2 years post implementation',
  'Designing an IT Service Management target operating model and an IT strategy and roadmap in line with CITB’s strategic objectives',
  'Leading programme governance operations to ensure an effective framework for decision making, communication, implementation and monitoring across the entire transformation programme'
];

const techStack = [
  {
    name: 'ITIL 4',
    route: routes.services.strategicConsultancy.changeLeadership.root.href
  },
  {
    name: 'COBIT 5',
    route: routes.services.strategicConsultancy.changeLeadership.root.href
  },
  {
    name: 'CISM',
    route: routes.services.strategicConsultancy.changeLeadership.root.href
  },
  {
    name: 'MSP',
    route: routes.services.strategicConsultancy.changeLeadership.root.href
  }
];

const companyInfo = {
  name: 'The Construction Industry Training Board (CITB)',
  description:
    'The Construction Industry Training Board (CITB) is a skills strategic body, focused on identifying and delivering skills to the construction sector with maximum efficiency.',
  highlights: [
    { label: 'Company size', value: '500+' },
    { label: 'Industry', value: 'Construction Industry' },
    { label: 'Project duration', value: '24 months' }
  ]
};

const caseStudyCopy = {
  en: {
    title:
      'Digital transformation through change leadership and technology strategy',
    background:
      'In 2017, CITB conducted one of its largest ever industry consultation exercises, and learned what UK construction wanted from a modern training body. The feedback from this exercise, and the consensus process of the same year, demonstrated that the industry wanted to see significant reform. It wanted CITB to become a more streamlined organisation that provided better value for levy payers, delivering quantifiable industry benefits.',
    strategy:
      '"Vision 2020" became a CITB strategy that redefined the business model that the organisation operated within. This strategy had an objective to increase the impact of CITB’s levy funding; and it aimed to achieve this by becoming a leaner, simpler, and more responsive organisation. Focusing on industry priorities, removing distraction, and reducing overheads to maximise funds. Industry interventions would be driven by an evidenced based approach. Capturing data from multiple sources to enable actionable insights to be developed.',
    solutionHeading: 'Our solution',
    solution:
      "We've worked with CITB, following the development of this strategy, between 2019 and 2022, as part of a programme to transform their operations. This included an essential focus on; the IT service management function, the customer’s digital experience, information security, and a data and information strategy to enable CITB to become an insight-driven organisation.",
    scopeHeading: 'This involved',
    implementation:
      'The output delivered for CITB included the full implementation of a new enabling partner, responsible for the delivery of services across multiple supporting functions, such as: IT Service Management, HR, Procurement, Payroll. The enabling partner was also responsible for service delivery for several industry-facing functions, such a Levy and Grant processing. There was a significant divestment of CITB locations, and a migration to a new Head Office.',
    governance:
      'A programme management and governance approach were reimplemented, alongside the enabling partner, to improve the maturity levels for complex change, and support ongoing continuous improvement.',
    frameworksHeading: 'Frameworks and Standards',
    migration:
      'There was a migration to a new digital estate, including extensive migration to cloud services. A new ITIL accredited service function was established, to provide CITB with robust IT operations, and a cyber and information security program was put in place to protect the organisation’s assets and ensure business continuity.',
    results:
      'The benefit of this transformation programme was an alignment and delivery of CITB strategy and reform. This redefined the business model that the organisation operated within, to meet its long-term objectives and to better support industry.',
    projectScope,
    companyInfo
  },
  pl: {
    title:
      'Transformacja cyfrowa dzięki zarządzaniu zmianą i strategii technologicznej',
    background:
      'W 2017 roku CITB przeprowadziło jedne z największych konsultacji branżowych w swojej historii, aby dowiedzieć się, czego brytyjski sektor budowlany oczekuje od nowoczesnej instytucji szkoleniowej. Wyniki konsultacji i uzgodnień z tego samego roku pokazały, że branża oczekuje gruntownej reformy. CITB miało działać sprawniej, zapewniać większą wartość podmiotom odprowadzającym składki i przynosić branży wymierne korzyści.',
    strategy:
      'Strategia „Vision 2020” zmieniła model działania CITB. Jej celem było zwiększenie skuteczności finansowania ze składek dzięki uproszczeniu organizacji i szybszemu reagowaniu na potrzeby branży. CITB skupiło się na priorytetach sektora, ograniczeniu działań pobocznych i wykorzystaniu większej części środków dzięki obniżeniu kosztów ogólnych. Działania miały opierać się na dowodach, a dane z wielu źródeł miały umożliwiać podejmowanie decyzji.',
    solutionHeading: 'Nasze rozwiązanie',
    solution:
      'Po opracowaniu strategii współpracowaliśmy z CITB w latach 2019–2022 w ramach programu transformacji działalności. Skupiliśmy się na zarządzaniu usługami IT, cyfrowej obsłudze klientów oraz bezpieczeństwie informacji. W ramach strategii danych i informacji pomogliśmy CITB oprzeć decyzje na analizie danych.',
    scopeHeading: 'Zakres projektu',
    implementation:
      'CITB wdrożyło współpracę z nowym partnerem odpowiedzialnym za obsługę kilku obszarów, w tym zarządzanie usługami IT, kadry, zakupy i płace. Partner przejął także obsługę części procesów branżowych, w tym rozliczanie składek oraz obsługę dotacji. CITB ograniczyło liczbę lokalizacji i przeniosło centralę.',
    governance:
      'Wspólnie z nowym partnerem wdrożono ponownie zasady zarządzania programami i nadzoru. Ułatwiło to prowadzenie złożonych zmian i ciągłe doskonalenie działań.',
    frameworksHeading: 'Ramy i standardy',
    migration:
      'CITB przeniosło się do nowego środowiska cyfrowego, w dużym stopniu opartego na usługach chmurowych. Aby zapewnić stabilność operacji IT, utworzono funkcję obsługi usług z akredytacją ITIL. Wdrożono też program cyberbezpieczeństwa i bezpieczeństwa informacji, by chronić zasoby organizacji i zapewnić ciągłość działania.',
    results:
      'Program transformacji pozwolił zrealizować założenia strategii i reformy CITB. Nowy model działania wspiera długoterminowe cele organizacji i pozwala skuteczniej odpowiadać na potrzeby branży.',
    projectScope: [
      'Kierowaliśmy obszarem zmian i technologii w trakcie transformacji oraz przekazania części funkcji nowemu partnerowi świadczącemu usługi wspólne.',
      'Przez dwa lata po wdrożeniu nadzorowaliśmy pracę partnera w obszarze zarządzania zmianą, technologii i usług IT.',
      'Opracowaliśmy docelowy model zarządzania usługami IT, strategię IT i harmonogram działań zgodny z celami CITB.',
      'Kierowaliśmy nadzorem nad programem i ustaliliśmy zasady podejmowania decyzji, komunikacji, wdrażania i monitorowania transformacji.'
    ],
    companyInfo: {
      name: companyInfo.name,
      description:
        'The Construction Industry Training Board (CITB) określa potrzeby sektora budowlanego w zakresie kwalifikacji i wspiera ich rozwój.',
      highlights: [
        {
          label: 'Wielkość organizacji',
          value: companyInfo.highlights[0].value
        },
        {
          label: 'Branża',
          value: 'Budownictwo'
        },
        {
          label: 'Czas trwania projektu',
          value: '24 miesiące'
        }
      ]
    }
  }
};
