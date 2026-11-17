import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
import ItemsWithIconList from '@components/features/ItemsWithIconList/ItemsWithIconList';
import QuoteWithAvatar from '@components/features/QuoteWithAvatar/QuoteWithAvatar';
import Heading from '@components/ui/Heading';
import LinkWithChevron from '@components/ui/LinkWithChevron';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(routes.services.root, await getLocale());
}

export default async function ServicesPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero image={routes.services.root.image}>
        <Heading level={1} className="-mt-5 text-white">
          {pl
            ? 'Usługi, które pomagają rozwinąć pomysły i przyspieszyć wzrost firmy'
            : 'Services designed to elevate your project concepts and boost business growth'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Dopasuj technologię do strategii, usprawnij działalność i obsługę klientów oraz ogranicz koszty i ryzyko. Skorzystaj z naszego ponad dziesięcioletniego doświadczenia.'
            : 'Align technology to your strategy, improve operations, improve customer service, and reduce cost and risk. Take advantage of over 10 years of our experience.'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm sm:text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Oferujemy szeroki zakres usług technologicznych'
              : 'We offer multitude of technology services'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Specjalizujemy się w wielu sprawdzonych technologiach, dzięki czemu możemy dopasować rozwiązanie do celów biznesowych i wymagań Twojego projektu.'
              : 'To reach business goals of our clients we are specialised in many viable technologies. With this wide offer we can perfectly fit for your project requirements.'}
          </p>
        </div>
      </Section>

      {getServices(pl).map((item) => (
        <Section key={item.title} className="mt-20">
          <div className="mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3 lg:items-start lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <Heading level={3}>{item.title}</Heading>
              <p className="mt-4">{item.description}</p>

              <div className="mt-8">
                <LinkWithChevron
                  {...localizeRoute(routes.contact.root, locale)}
                  title={
                    pl
                      ? 'Opowiedz nam o swoim projekcie'
                      : 'Tell us about your project'
                  }
                >
                  {pl
                    ? 'Opowiedz nam o swoim projekcie'
                    : 'Tell us about your project'}
                </LinkWithChevron>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="aspect-[3/1]">
                <Image
                  src={item.image}
                  width={1440}
                  height={680}
                  alt={item.title}
                  className="h-full rounded-lg object-cover"
                />
              </div>
              <div className="mt-12">
                <ItemsWithIconList
                  columns={2}
                  data={item.list.map((route) => localizeRoute(route, locale))}
                />
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section className="mt-16 lg:mt-24">
        <QuoteWithAvatar
          quote={
            pl
              ? 'Analityka biznesowa dostarcza informacji potrzebnych do planowania i usprawniania działań marketingowych.'
              : 'Business Intelligence provides the insights needed to guide the marketing process and enhance marketing efforts.'
          }
          author={'Vincent Cassidy'}
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
    </>
  );
}

const businessIntelligenceList = [
  routes.services.businessIntelligence.dataWarehouse.root,
  routes.services.businessIntelligence.dataTransformation.root,
  routes.services.businessIntelligence.powerBiReports.root
];

const strategicConsultancyList = [
  routes.services.strategicConsultancy.changeLeadership.root,
  routes.services.strategicConsultancy.cyberSecurity.root,
  routes.services.strategicConsultancy.technologyStrategy.root
];

const auditsAndAssessmentsList = [
  routes.services.auditsAndAssessments.complianceAudit.root,
  routes.services.auditsAndAssessments.cyberSecurityAudit.root,
  routes.services.auditsAndAssessments.itsmAssessment.root,
  routes.services.auditsAndAssessments.technologyMaturity.root
];

const designList = [
  routes.services.design.uxReview.root,
  routes.services.design.uxDesign.root,
  routes.services.design.uiDesign.root
];

const developmentList = [
  routes.services.development.minimumViableProduct.root,
  routes.services.development.webDevelopment.root,
  routes.services.development.mobileDevelopment.root,
  routes.services.development.lowCodeDevelopment.root,
  routes.services.development.databaseDevelopment.root
];

const cloudList = [
  routes.services.cloud.cloudNativeDevelopment.root,
  routes.services.cloud.infrastructure.root,
  routes.services.cloud.devOps.root
];

const getServices = (pl: boolean) => [
  {
    title: pl ? 'Analityka biznesowa' : 'Business Intelligence Services',
    description: pl
      ? 'Narzędzia analityki biznesowej pomagają przedstawić duże ilości danych w przystępnej formie i wyciągać z nich użyteczne wnioski.'
      : 'Leveraging data to your advantage, and using business intelligence to present the huge volumes of data into an understandable form, will provide insights you can interpret and use.',
    image: '/images/banner/business-intelligence-banner.jpg',
    list: businessIntelligenceList
  },
  {
    title: pl ? 'Doradztwo strategiczne' : 'Strategic Consultancy Services',
    description: pl
      ? 'Doradzamy i wdrażamy rozwiązania, które zwiększają wartość inwestycji w technologię, usprawniają działalność, ograniczają ryzyko i pomagają osiągnąć trwałe wyniki.'
      : 'Advice, expertise and delivery to maximise the value of your technology investments, deliver innovation, improve operations, reduce risk, and achieve sustainable results.',
    image: '/images/banner/strategic-consultancy-banner.jpg',
    list: strategicConsultancyList
  },
  {
    title: pl ? 'Audyty i oceny' : 'Audits & Assessment Services',
    description: pl
      ? 'Poznaj mocne i słabe strony swojej firmy, aby usprawnić procesy, zwiększyć cyberbezpieczeństwo i wspierać innowacje.'
      : "Identify your business's strengths and weaknesses to enhance processes, bolster cybersecurity, and foster innovation.",
    image: '/images/banner/audits-and-assessment-services-banner.jpg',
    list: auditsAndAssessmentsList
  },
  {
    title: pl ? 'Usługi projektowe' : 'Design Services',
    description: pl
      ? 'Wspólnie projektujemy cyfrowe rozwiązania, które angażują klientów i użytkowników. Tworzymy dopracowane, kreatywne produkty, które pomagają wyróżnić się na rynku.'
      : 'Utilise our digital design services to co-create solutions that connect and inspire. We deliver extensive, creative, and unique solutions that engage customers and users, for competitive advantage.',
    image: '/images/banner/design-services-banner.jpg',
    list: designList
  },
  {
    title: pl ? 'Tworzenie oprogramowania' : 'Software Development Services',
    description: pl
      ? 'Tworzymy bezpieczne i skalowalne oprogramowanie, aplikacje internetowe i mobilne oraz integracje w wielu technologiach. Możemy poprowadzić cały projekt lub wesprzeć Twój zespół.'
      : 'Our team develops extensive, secure, and scalable software solutions, web applications, mobile apps, and integrations across multiple technologies, offering either full lifecycle management or supplementary support to your existing team.',
    image: '/images/banner/software-development-banner.jpg',
    list: developmentList
  },
  {
    title: pl ? 'Usługi chmurowe' : 'Cloud Services',
    description: pl
      ? 'Zarządzamy rozwojem, zasobami i wydajnością systemów, tak aby odpowiadały na bieżące potrzeby i były gotowe na przyszłe wymagania.'
      : 'Utilise our effective growth, capacity and performance management services to ensure your technology solutions meet today’s needs and can adapt to future demands.',
    image: '/images/banner/cloud-services-banner.jpg',
    list: cloudList
  }
];
