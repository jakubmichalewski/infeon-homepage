import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
import MinimumViableProduct from '@components/features/MinimumViableProduct/MinimumViableProduct';
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
    routes.services.strategicConsultancy.technologyStrategy.root,
    await getLocale()
  );
}

export default async function TechnologyStrategyPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={
          routes.services.strategicConsultancy.technologyStrategy.root.image
        }
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Opracuj strategię technologiczną wspólnie z doświadczonym zespołem'
            : 'Co-creation of your Technology Strategy with our highly skilled and experienced team'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Pomagamy opracować strategię technologiczną. Oceniamy, jak IT wspiera obecne cele biznesowe, i wskazujemy, co warto usprawnić.'
            : 'We work with you to develop a Technology Strategy by assessing and optimising your IT function’s current enablement of your business objectives and goals'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Usługi dopasowane do potrzeb Twojej firmy'
              : 'Service tailored for your business needs'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Poznaj nasze usługi z zakresu strategii technologicznej i sprawdź, jak możemy wesprzeć rozwój Twojej firmy.'
              : 'Check each of our technology strategy services to see how we can help your business grow.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="relative mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3">
          <div className="mx-auto h-fit shrink-0 lg:sticky lg:top-28 lg:max-w-sm">
            <Heading level={3}>
              {pl
                ? 'Strategia informatyczna'
                : 'Information technology strategy'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Planujemy inwestycje technologiczne i praktyki, które wspierają cele biznesowe, zwiększają zwrot z inwestycji, ograniczają ryzyko i wspierają konkurencyjność.'
                : 'Plans that enable and inform your business goals, through technology investment and the practices necessary to increase ROI, reduce risk, and gain competitive advantage.'}
            </p>

            <div className="mt-12">
              <LinkWithChevron {...localizeRoute(routes.contact.root, locale)}>
                {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
              </LinkWithChevron>
            </div>
          </div>

          <div className="rounded-lg bg-brand-50 p-10 sm:p-14 lg:col-span-2">
            <NumberedHighlightsList
              data={getTechnologyStrategyList(pl)}
              columns={2}
            />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <QuoteWithAvatar
          quote={
            pl
              ? 'Nasi klienci dostrzegli dzięki strategii technologicznej nowe rynki i możliwości.'
              : 'Our clients find that technology strategy has opened their eyes to new markets and opportunities.'
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
        <div className="relative mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3">
          <div className="mx-auto h-fit shrink-0 lg:sticky lg:top-28 lg:order-1 lg:max-w-sm">
            <Heading level={3}>
              {pl ? 'Transformacja cyfrowa' : 'Digital Transformation'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Wdrażamy zmiany z myślą o klientach, by zwiększać ich zaangażowanie i usprawniać działanie firmy. Wspieramy cały proces od badań po projektowanie i wdrożenie.'
                : 'Customer-centric digital transformation, that adds value, improves engagement, and increases efficiency. From research and insights to design and delivery.'}
            </p>

            <div className="mt-12">
              <LinkWithChevron {...localizeRoute(routes.contact.root, locale)}>
                {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
              </LinkWithChevron>
            </div>
          </div>

          <div className="rounded-lg bg-brand-50 p-10 sm:p-14 lg:col-span-2">
            <NumberedHighlightsList
              data={getDigitalTransformationList(pl)}
              columns={2}
            />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <SelfServiceAssessments />
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="relative mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3">
          <div className="mx-auto h-fit shrink-0 lg:sticky lg:top-28 lg:max-w-sm">
            <Heading level={3}>
              {pl ? 'Strategia ITSM' : 'ITSM Strategy'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Usprawnij działanie IT poprzez wdrożenie bezpiecznych zasad zarządzania usługami IT, zgodnych ze standardami branżowymi.'
                : 'Get the most from your IT function and IT services by designing and implementing secure, best-practice, industry-standard approaches to IT service management.'}
            </p>

            <div className="mt-12">
              <LinkWithChevron {...localizeRoute(routes.contact.root, locale)}>
                {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
              </LinkWithChevron>
            </div>
          </div>

          <div className="rounded-lg bg-brand-50 p-10 sm:p-14 lg:col-span-2">
            <div className="mt-12">
              <NumberedHighlightsList data={getItsmStrategy(pl)} columns={2} />
            </div>
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <MinimumViableProduct />
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="relative mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3">
          <div className="mx-auto h-fit shrink-0 lg:sticky lg:top-28 lg:order-1 lg:max-w-sm">
            <Heading level={3}>
              {pl ? 'Strategia danych' : 'Data strategy'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Wykorzystaj strategię danych, aby szybciej podejmować trafne decyzje, ograniczać ryzyko, usprawniać działania i poprawiać doświadczenia klientów.'
                : 'Make better, faster, decisions, reduce risk, optimise operations, and improve customer experience, through the insights gained from the design and implementation of a Data Strategy.'}
            </p>

            <div className="mt-12">
              <LinkWithChevron {...localizeRoute(routes.contact.root, locale)}>
                {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
              </LinkWithChevron>
            </div>
          </div>

          <div className="rounded-lg bg-brand-50 p-10 sm:p-14 lg:col-span-2">
            <NumberedHighlightsList data={getDataStrategy(pl)} columns={2} />
          </div>
        </div>
      </Section>
    </>
  );
}

const getTechnologyStrategyList = (pl: boolean) => [
  {
    title: pl ? 'Ocena obecnego stanu' : 'Current-state assessment',
    description: pl
      ? 'Poznajemy usługi, infrastrukturę i aplikacje, a następnie oceniamy, na ile skutecznie wspierają potrzeby i cele strategiczne organizacji.'
      : 'We gain a detailed understanding of services, infrastructure, and applications, and provide a maturity measurement of their effectiveness in supporting your organisation’s needs and strategic objectives.'
  },
  {
    title: pl ? 'Określenie stanu docelowego' : 'Future-state definition',
    description: pl
      ? 'Wspólnie opracowujemy docelowy model działania w oparciu o sprawdzone praktyki i określamy, jak ma wspierać Twoje cele strategiczne.'
      : 'We work with you, and employ our expertise in best-practice and innovation to establish a target operating model and how this would deliver your strategic objectives.'
  },
  {
    title: pl ? 'Analiza luk' : 'Gap-analysis',
    description: pl
      ? 'Określamy różnice między obecnym a docelowym stanem oraz wskazujemy działania potrzebne do osiągnięcia wymaganego poziomu dojrzałości.'
      : 'We use our extensive experience to determine the gap between your current-state and desired future-state, and identify the areas of focus and activity to increase your maturity to the levels necessary.'
  },
  {
    title: pl ? 'Opracowanie planu działań' : 'Roadmap development',
    description: pl
      ? 'Wspólnie opracowujemy plan priorytetowych inicjatyw. Ustalamy etapy, realistyczny harmonogram i oczekiwane wyniki biznesowe po każdym etapie.'
      : 'Together we develop a prioritised phased plan of key initiatives required to achieve the future-state, over a period that works for you, describing the business outcomes that you should expect at the delivery of each phase.'
  }
];

const getDigitalTransformationList = (pl: boolean) => [
  {
    title: pl ? 'Analiza' : 'Analyse',
    description: pl
      ? 'Poznajemy Twoją firmę, klientów i środowisko technologiczne, aby wskazać obszary, w których transformacja cyfrowa przyniesie największe korzyści.'
      : 'We work with you to gain a deep understanding of your business, your customers, and your technology estate, to identify opportunities for digital transformation that will deliver the greatest value to your organisation.'
  },
  {
    title: pl ? 'Weryfikacja' : 'Validate',
    description: pl
      ? 'Korzystamy z doświadczenia w badaniach potrzeb klientów, projektowaniu UX/UI i prototypowaniu, aby zaprojektować i przetestować koncepcje oraz sprawdzić, czy dają oczekiwane rezultaty.'
      : 'We use our expertise and experience in customer-centric initiatives, UX/UI, and prototyping, to design, build and test concepts to ensure they will ultimately deliver the outcomes you expect'
  },
  {
    title: pl ? 'Wdrożenie' : 'Create',
    description: pl
      ? 'Rozwijamy najbardziej obiecujące koncepcje w rozwiązania dla Ciebie i Twoich klientów, wykorzystując doświadczenie w zarządzaniu programami i zmianą.'
      : 'We progress on those concepts that are most viable, to build solutions that will truly deliver the transformation you and your customers require, by applying our extensive programme and change management experience to ensure success.'
  }
];

const getItsmStrategy = (pl: boolean) => [
  {
    title: pl ? 'Ocena' : 'Assessment',
    description: pl
      ? 'Przeprowadzamy audyt praktyk zarządzania usługami IT według standardów ITIL, oceniamy poziom dojrzałości i przygotowujemy rekomendacje.'
      : 'We use our experience in IT service management, and as professional auditors, to undertake an audit and assessment of your organisation’s current practices against ITIL standards, establishing a capability maturity position and developing recommendations.'
  },
  {
    title: pl ? 'Projektowanie' : 'Design',
    description: pl
      ? 'Wspólnie określamy docelowy model ITSM i szczegółowe praktyki, które pozwolą świadczyć użytkownikom stabilne usługi wysokiej jakości.'
      : 'We work with you to establish an ITSM target operating model and a set of detailed practices that will enable the IT function to deliver sustainable and quality services to your users.'
  },
  {
    title: pl ? 'Planowanie' : 'Planning',
    description: pl
      ? 'Wspólnie opracowujemy szczegółowy harmonogram wdrożenia modelu i praktyk, który pozwoli osiągnąć wymagany poziom dojrzałości usług IT.'
      : 'Together we will develop a detailed plan to implement the model and the practices to achieve the required maturity level in IT service management, over a period that works for you.'
  },
  {
    title: pl ? 'Wdrożenie' : 'Delivery',
    description: pl
      ? 'Wykorzystujemy doświadczenie w ITSM, operacjach IT i zarządzaniu zmianą, aby wdrożyć model i praktyki. Ustalamy także wskaźniki do pomiaru skuteczności i dalszego doskonalenia.'
      : 'Using our expertise and experience in ITSM, IT operations management, and change management, we will ensure the successful implementation and adoption of the model and practices, and put in place the metrics required to measure their effectiveness and continuously improve.'
  }
];

const getDataStrategy = (pl: boolean) => [
  {
    title: pl ? 'Jakość danych' : 'Data quality',
    description: pl
      ? 'Wspólnie oceniamy dane według ustalonych kryteriów, takich jak kompletność i poprawność, wykorzystując naszą wiedzę i Twoją znajomość danych.'
      : 'Using our data expertise and your data asset knowledge, we will evaluate your data and measure it against defined quality criteria such as completeness and validity.'
  },
  {
    title: pl ? 'Nadzór nad danymi' : 'Data stewardship',
    description: pl
      ? 'Ustalamy zasady nadzoru i odpowiedzialność za zarządzanie zasobami danych oraz ich utrzymanie, aby trwale poprawić ich jakość.'
      : 'We will focus on the governance, accountability and responsibility of owning, managing and maintaining data assets to provide a sustainable solution to your data quality needs.'
  },
  {
    title: pl ? 'Ochrona i zgodność' : 'Protection and compliance',
    description: pl
      ? 'Dobieramy mechanizmy ochrony danych i dbamy o zgodność z wymaganiami prawnymi, regulacyjnymi i umownymi.'
      : 'As data compliance and information security experts we will establish appropriate controls to ensure your assets are protected, and you remain compliant against all legal, regulatory and contractual needs.'
  },
  {
    title: pl ? 'Zarządzanie danymi' : 'Data management',
    description: pl
      ? 'Opracowujemy procesy dla całego cyklu życia danych, obejmujące między innymi integrację, architekturę, modelowanie i przechowywanie danych oraz okresy ich retencji.'
      : 'We will encompass the processes and practices for effectively managing data throughout its lifecycle. This involves activities like data integration, data architecture, data modelling, data storage, data retention, and data lifecycle management.'
  }
];
