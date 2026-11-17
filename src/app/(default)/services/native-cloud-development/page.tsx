import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
import ItemsWithIconList from '@components/features/ItemsWithIconList/ItemsWithIconList';
import MinimumViableProduct from '@components/features/MinimumViableProduct/MinimumViableProduct';
import NumberedHighlightsList from '@components/features/NumberedHighlightsList/NumberedHighlightsList';
import QuoteWithAvatar from '@components/features/QuoteWithAvatar/QuoteWithAvatar';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    routes.services.cloud.cloudNativeDevelopment.root,
    await getLocale()
  );
}

export default async function NativeCloudDevelopmentPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.cloud.cloudNativeDevelopment.root.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Poproś o wycenę projektu' : 'Get project estimation'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Tworzenie aplikacji w architekturze cloud native'
            : 'Cloud Development Solutions for Native Applications'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Twórz i uruchamiaj aplikacje w architekturze cloud native, aby w pełni wykorzystać możliwości chmury.'
            : `Incorporate Native cloud development as a modern approach to building and running applications that fully exploit the advantages of cloud computing.`}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Wykorzystaj architekturę cloud native do rozwoju aplikacji'
              : 'Stay Ahead of the Curve with optimal Native Cloud Development'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Projektujemy rozwiązania cloud native z wykorzystaniem mikrousług, kontenerów zarządzanych przez Kubernetes, usług bezserwerowych i zautomatyzowanych potoków CI/CD.'
              : 'We provide tailored cloud-native development solutions, including microservices architecture, containerization with Kubernetes, serverless computing, and automated CI/CD pipelines. Our expertise ensures that your business harnesses the full potential of cloud computing.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center">
            <Heading level={3}>
              {pl
                ? 'Nasze usługi w zakresie cloud native'
                : 'Our Native Cloud Development Services'}
            </Heading>
          </div>
          <div className="mt-12">
            <NumberedHighlightsList data={getHighlightsList(pl)} columns={4} />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <MinimumViableProduct />
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <Heading level={3}>
            {pl
              ? 'Jak współpracujemy przy projektach cloud native'
              : 'Our Collaborative Approach to Native Cloud Development'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Wspieramy projekt od pomysłu po utrzymanie. Pomagamy w planowaniu, projektowaniu, wdrażaniu i dalszym rozwoju.'
              : `From inception to maintenance, we offer comprehensive support for your project. Whether it's planning, design, development, or ongoing maintenance and support, we've got you covered.`}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-screen-lg">
          <ItemsWithIconList data={getOurApproachList(pl)} columns={3} />
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <QuoteWithAvatar
          quote={
            pl
              ? 'Wykorzystanie chmury pomaga obniżyć koszty utrzymania i skalować rozwiązania w miarę rozwoju firmy.'
              : `It's worth  taking advantage of cloud computing in your business to reduce running costs and enable scalability`
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
    </>
  );
}

const getHighlightsList = (pl: boolean) => [
  {
    title: pl ? 'Architektura mikrousług' : 'Microservices Architecture',
    description: pl
      ? 'Projektujemy i wdrażamy architekturę mikrousług dopasowaną do potrzeb Twojej firmy, aby aplikacje mogły rosnąć wraz z nią.'
      : 'Our team specializes in designing and implementing microservices architectures tailored to your unique business needs. This service ensures your applications and ready to grow with your business.'
  },
  {
    title: pl ? 'Kontenery i Kubernetes' : 'Containers & Kubernetes',
    description: pl
      ? 'Konteneryzujemy aplikacje za pomocą Dockera i zarządzamy kontenerami przez Kubernetes, aby aplikacje działały niezawodnie i wydajnie.'
      : 'We offer comprehensive containerization services using Docker and orchestrate your containers with Kubernetes. Making sure your applications are always running optimally.'
  },
  {
    title: pl ? 'Przetwarzanie bezserwerowe' : 'Serverless Computing',
    description: pl
      ? 'Korzystamy z AWS Lambda, Azure Functions i Google Cloud Functions, aby budować skalowalne aplikacje przy rozsądnych kosztach.'
      : 'Our serverless computing services leverage platforms like AWS Lambda, Azure Functions, and Google Cloud Functions. We help you build highly scalable and cost-effective applications.'
  },
  {
    title: 'CI/CD',
    description: pl
      ? 'Konfigurujemy zautomatyzowane potoki do integracji, testowania i wdrażania kodu, aby usprawnić pracę zespołu.'
      : 'Our CI/CD services use industry-leading tools to set up automated pipelines that integrate, test, and deploy your code seamlessly. We help your development process run smooth and efficient.'
  }
];

const getOurApproachList = (pl: boolean) => [
  {
    title: pl
      ? 'Prowadzenie projektu od początku do końca'
      : 'Start-to-Finish Project Management',
    description: pl
      ? 'Sprawnie zrealizujemy nowy projekt zgodnie z aktualnymi standardami branżowymi, dbając o wydajność i skalowalność.'
      : 'Efficient coding of your new project using the latest industry standards, ensuring optimal performance and scalability.',
    icon: 'new-project'
  },
  {
    title: pl
      ? 'Usprawnianie istniejących rozwiązań'
      : 'Enhancement of Existing Solutions',
    description: pl
      ? 'Wspieramy działania DevOps i poprawę bezpieczeństwa, refaktoryzujemy kod, wdrażamy aktualizacje oraz dodajemy nowe funkcje.'
      : 'From DevOps to security improvements, our team handles code refactoring, updates, and new feature development for your existing solutions.',
    icon: 'existing-project'
  },
  {
    title: pl
      ? 'Wsparcie dedykowanych programistów'
      : 'Access to Dedicated Developer Expertise',
    description: pl
      ? 'Nasi specjaliści od baz danych dołączą do Twojego zespołu, aby przyspieszyć i usprawnić rozwój aplikacji.'
      : 'Integrate our skilled database developers into your team to accelerate app development speed and efficiency, ensuring your project reaches its full potential.',
    icon: 'developers-team'
  }
];
