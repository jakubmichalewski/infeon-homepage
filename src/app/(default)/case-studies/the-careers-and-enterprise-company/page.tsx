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
  return buildMetadata(routes.caseStudies.cec, await getLocale());
}

export default async function TheCareersAndEnterpriseCompanyCaseStudyPage() {
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
            src={routes.caseStudies.cec.image}
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

              <p className="mt-4">{copy.needs}</p>

              <Heading level={2} className="mt-12">
                {copy.solutionHeading}
              </Heading>

              <p className="mt-4">{copy.solution}</p>
              <p className="mt-4">{copy.needs}</p>

              <Heading level={3} className="mt-12">
                {copy.scopeHeading}
              </Heading>

              <div className="mt-6">
                <BulletList data={copy.projectScope} />
              </div>

              <p className="mt-12">{copy.results}</p>

              <Heading level={3} className="mt-12">
                {copy.frameworksHeading}
              </Heading>

              <div className="mt-6">
                <TechStackList data={techStack} />
              </div>
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
  'An audit/assessment of CEC’s current practices against ITIL standards, Technology Code of Practice, and COBIT 5 security standards',
  'The development of a Capability Maturity Model, identifying current maturity levels against ITSM and proposed target levels for CEC',
  'The development of principal recommendations to achieve those proposed target maturity levels',
  'The development of a draft IT Service Management Strategy to sustain CEC over the next 3-5 years',
  'Support in Early Market Engagement',
  'A Final IT Service Management Strategy capturing updates from the Market Engagement exercise',
  'A document set of requirements for inclusion in a Service Management Provider Procurement'
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
    name: 'Technology Code of Practice',
    route: routes.services.strategicConsultancy.changeLeadership.root.href
  }
];

const companyInfo = {
  name: 'The Careers & Enterprise Company (CEC)',
  description:
    'The national body for careers education in England, supporting schools and colleges to deliver modern, 21st century careers education',
  highlights: [
    { label: 'Company size', value: '200+' },
    { label: 'Industry', value: 'Education Management' },
    { label: 'Project duration', value: '3 months' }
  ]
};

const caseStudyCopy = {
  en: {
    title:
      'Established processes and procedures to optimise the use of technology and the services built around it',
    background:
      'The Careers & Enterprise Company (CEC) was set up by government in 2015, as the national body for careers education in England, supporting schools and colleges to deliver modern, 21st century careers education.',
    needs:
      'In 2022, after a period of growth, CEC required a new approach to IT and IT Service Management. The organisation had clear objectives to improve efficiency, reduce cost, reduce risk, and provide a foundation for innovation.',
    solutionHeading: 'Our solution',
    solution:
      'In association with New Network, Endpoint worked with CEC to develop an IT Service Management strategy and associated documentation, in preparation for the re-provisioning of its existing ICT service management contract.',
    scopeHeading: 'Our brief included',
    results:
      'The output delivered for CEC included a complete strategy and roadmap to support their next stage of transformation.',
    frameworksHeading: 'Frameworks and Standards',
    projectScope,
    companyInfo
  },
  pl: {
    title:
      'Procesy i procedury usprawniające wykorzystanie technologii i usług IT',
    background:
      'Rząd powołał The Careers & Enterprise Company (CEC) w 2015 roku jako krajową instytucję odpowiedzialną za doradztwo zawodowe w Anglii. CEC wspiera szkoły i inne placówki edukacyjne w prowadzeniu nowoczesnego doradztwa zawodowego.',
    needs:
      'W 2022 roku, po okresie rozwoju, CEC potrzebowała nowego podejścia do informatyki i zarządzania usługami IT. Organizacja chciała poprawić efektywność, ograniczyć koszty i ryzyko oraz stworzyć warunki do wprowadzania innowacji.',
    solutionHeading: 'Nasze rozwiązanie',
    solution:
      'We współpracy z New Network firma Endpoint pomogła CEC opracować strategię zarządzania usługami IT i powiązaną dokumentację w ramach przygotowań do zawarcia nowej umowy na obsługę usług teleinformatycznych.',
    scopeHeading: 'Zakres zlecenia',
    results:
      'Dostarczyliśmy kompletną strategię i plan działań wspierające kolejny etap transformacji CEC.',
    frameworksHeading: 'Ramy i standardy',
    projectScope: [
      'Audyt praktyk stosowanych przez CEC w odniesieniu do standardów ITIL, Technology Code of Practice i standardów bezpieczeństwa COBIT 5.',
      'Opracowanie modelu dojrzałości, określającego obecny i proponowany docelowy poziom dojrzałości zarządzania usługami IT w CEC.',
      'Opracowanie głównych zaleceń potrzebnych do osiągnięcia docelowego poziomu dojrzałości.',
      'Przygotowanie projektu strategii zarządzania usługami IT na kolejne 3–5 lat.',
      'Wsparcie na etapie wstępnych konsultacji rynkowych.',
      'Przygotowanie ostatecznej strategii zarządzania usługami IT z uwzględnieniem wyników konsultacji rynkowych.',
      'Przygotowanie wymagań do postępowania w sprawie wyboru dostawcy usług.'
    ],
    companyInfo: {
      name: companyInfo.name,
      description:
        'Krajowa instytucja zajmująca się doradztwem zawodowym w Anglii, która wspiera placówki edukacyjne w prowadzeniu nowoczesnego doradztwa.',
      highlights: [
        {
          label: 'Wielkość organizacji',
          value: companyInfo.highlights[0].value
        },
        {
          label: 'Branża',
          value: 'Zarządzanie edukacją'
        },
        {
          label: 'Czas trwania projektu',
          value: '3 miesiące'
        }
      ]
    }
  }
};
