import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import { getLocale } from '@/i18n/server';
import CompanyInfo from '@components/features/CompanyInfo/CompanyInfo';
import Quote from '@components/features/Quote/Quote';
import TechStackList from '@components/features/TechStackList/TechStackList';
import Heading from '@components/ui/Heading';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(routes.caseStudies.culligan, await getLocale());
}
export default async function CulliganCaseStudyPage() {
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
            src={routes.caseStudies.culligan.image}
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

              <p className="mt-4">{copy.request}</p>

              <p className="mt-4">{copy.proposal}</p>

              <p className="mt-4">{copy.expansion}</p>

              <Heading level={2} className="mt-12">
                {copy.resultsHeading}
              </Heading>

              <p className="mt-4">{copy.solution}</p>

              <Heading level={3} className="mt-12">
                {copy.technologyHeading}
              </Heading>

              <div className="mt-6">
                <TechStackList data={techStack} />
              </div>

              <p className="mt-12">{copy.dataIntegration}</p>

              <p className="mt-4">{copy.automation}</p>

              <Section className="relative my-12 md:my-20">
                <Quote
                  quote={copy.quote}
                  author={'Rob Innes'}
                  company={'Culligan Water'}
                />
              </Section>

              <p className="mt-12">{copy.reporting}</p>

              <p className="mt-4">{copy.security}</p>
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

const techStack = [
  {
    name: 'Azure Synapse',
    route: routes.services.businessIntelligence.root.href
  },
  {
    name: 'Azure Logic Apps',
    route: routes.services.businessIntelligence.root.href
  },
  {
    name: 'Azure Blob Storage',
    route: routes.services.businessIntelligence.root.href
  },
  {
    name: 'Azure Data Share',
    route: routes.services.businessIntelligence.root.href
  },
  {
    name: 'PowerBI Service',
    route: routes.services.businessIntelligence.root.href
  }
];

const companyInfo = {
  name: 'Culligan Water',
  description:
    'Our client is a large global enterprise within the drinking water industry. The company grows by acquiring smaller businesses and expanding its distribution to new territories.',
  highlights: [
    { label: 'Company size', value: '4500+' },
    { label: 'Industry', value: 'FMCG' },
    { label: 'Project duration', value: '12 months' }
  ]
};

const caseStudyCopy = {
  en: {
    title: 'Business Intelligence provides the insights needed to guide',
    background:
      'The client had a fragmented reporting solution, individually created for each business, in the best case, a country level. A variety of different systems and lack of internal team technical skills resulted in unmaintainable, not scalable and not robust solutions. In addition to the problems above, the client also utilised reporting tools for the ETL process, which were very cost ineffective and much slower than industry standard alternatives.',
    request:
      "Due to increased demand, the client approached us to discuss enhancements in one of his reports as the internal team couldn't do it within the time frame required by the Board.",
    proposal:
      'After a detailed analysis, we proposed to rebuild the entire UK region, which the client accepted. We explained what benefits the data warehouse will bring them.',
    expansion:
      "We've also been asked to do the EMEA region as the next step of the enterprise data warehouse and group reporting solution.",
    resultsHeading: 'The results',
    solution:
      "Our client hosts all their infrastructure and applications within Azure, and it was a natural choice to utilise Microsofts' Azure Cloud services to build desired reporting solution.",
    technologyHeading: 'Tech Stack',
    dataIntegration:
      'The client has structured and semi-structured data that should be extracted and transformed into the business domain. We used Azure Synapse as a set of tools for this task, allowing us to scale on demand and process data from different sources.',
    automation:
      'We also used Azure Logic Apps as a 3rd party WebHooks handler to handle changes automatically instead of pulling on demand whenever possible.',
    reporting:
      'As a final result, we prepared multiple ready-build reports and data marts for self-service. We provided training so all company users can build their own custom reports if required.',
    security:
      'Data is secured by row-level security so all users within the company can see only relevant data.',
    quote:
      'Jakub and the team at Endpoint have done a fantastic job on building a data warehouse and developing a BI tool for our business. The implementation of this solution has delivered significant value to our business. We are now able to drive commercial decision making far more rapidly, with far greater levels of insight, leading to better business outcomes.',
    companyInfo
  },
  pl: {
    title:
      'Business Intelligence dostarcza danych potrzebnych do podejmowania decyzji',
    background:
      'Klient korzystał z rozproszonych rozwiązań raportowych, tworzonych osobno dla poszczególnych spółek lub, w najlepszym przypadku, dla całego kraju. Różnorodność systemów i braki kompetencji technicznych w zespole utrudniały utrzymanie i skalowanie rozwiązań oraz obniżały ich niezawodność. Do procesów ETL klient używał ponadto narzędzi raportowych, które były droższe i znacznie wolniejsze od typowych rozwiązań branżowych.',
    request:
      'Wraz ze wzrostem zapotrzebowania na raporty klient zwrócił się do nas w sprawie rozbudowy jednego z nich. Jego zespół nie mógł wykonać tej pracy w terminie wyznaczonym przez zarząd.',
    proposal:
      'Po szczegółowej analizie zaproponowaliśmy przebudowę raportowania dla całej Wielkiej Brytanii i przedstawiliśmy korzyści z wdrożenia hurtowni danych. Klient zaakceptował propozycję.',
    expansion:
      'Klient powierzył nam także prace dla regionu EMEA jako kolejny etap budowy firmowej hurtowni danych i raportowania dla całej grupy.',
    resultsHeading: 'Rezultaty',
    solution:
      'Klient utrzymywał całą infrastrukturę i aplikacje w Azure, dlatego do budowy rozwiązania raportowego wykorzystaliśmy usługi chmurowe Microsoft Azure.',
    technologyHeading: 'Wykorzystane technologie',
    dataIntegration:
      'Klient potrzebował wydobywać i przekształcać dane ustrukturyzowane i częściowo ustrukturyzowane na potrzeby biznesowe. Azure Synapse pozwolił nam przetwarzać dane z wielu źródeł i skalować obciążenie wraz ze wzrostem zapotrzebowania.',
    automation:
      'Wykorzystaliśmy też Azure Logic Apps do obsługi webhooków z usług zewnętrznych. Dzięki temu mogliśmy tam, gdzie było to możliwe, automatycznie reagować na zmiany zamiast pobierać dane na żądanie.',
    reporting:
      'Przygotowaliśmy gotowe raporty i tematyczne zbiory danych do samodzielnej analizy. Przeszkoliliśmy pracowników, aby w razie potrzeby mogli tworzyć własne raporty.',
    security:
      'Dostęp do danych kontrolują uprawnienia na poziomie wiersza, dzięki czemu pracownicy widzą wyłącznie dane, do których są uprawnieni.',
    quote:
      'Jakub i zespół Endpoint świetnie spisali się przy budowie hurtowni danych i opracowaniu narzędzia BI dla naszej firmy. Wdrożenie tego rozwiązania przyniosło nam znaczne korzyści. Teraz dużo szybciej podejmujemy decyzje handlowe i mamy do dyspozycji znacznie więcej informacji, co przekłada się na lepsze wyniki biznesowe.',
    companyInfo: {
      name: companyInfo.name,
      description:
        'Culligan Water to globalne przedsiębiorstwo z branży wody pitnej. Rozwija się poprzez przejmowanie mniejszych firm i poszerzanie dystrybucji na nowych rynkach.',
      highlights: [
        {
          label: 'Wielkość organizacji',
          value: companyInfo.highlights[0].value
        },
        {
          label: 'Branża',
          value: 'Dobra szybkozbywalne (FMCG)'
        },
        {
          label: 'Czas trwania projektu',
          value: '12 miesięcy'
        }
      ]
    }
  }
};
