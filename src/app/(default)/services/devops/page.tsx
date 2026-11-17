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
  return buildMetadata(routes.services.cloud.devOps.root, await getLocale());
}

export default async function DevOpsPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.cloud.devOps.root.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Poproś o wycenę projektu' : 'Get project estimation'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Rozwiązania DevOps usprawniające cały cykl życia aplikacji'
            : 'DevOps Solutions for Seamless Application Lifecycle Management'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Sprawne praktyki DevOps mają znaczenie w nowoczesnych projektach. Dopasujemy je do Twoich potrzeb, niezależnie od tego, czy uruchamiasz stronę, aplikację, czy rozbudowane oprogramowanie.'
            : `Efficient DevOps practices are vital for modern applications. Whether you're launching a website, app, or complex software solution, we offer bespoke DevOps solutions precisely tailored to your requirements.`}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Sprawne tworzenie i wdrażanie oprogramowania'
              : 'Streamlined Development and Deployment'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Wdrażamy praktyki DevOps, które usprawniają tworzenie, testowanie i wdrażanie aplikacji oraz poprawiają niezawodność.'
              : 'At our core, we excel in DevOps methodologies, ensuring your applications are developed, tested, and deployed seamlessly, maximising efficiency and reliability.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-lg">
          <div className="text-center">
            <Heading level={3}>
              {pl ? 'Nasze usługi DevOps' : 'Our DevOps Services'}
            </Heading>
          </div>
          <div className="mt-12">
            <NumberedHighlightsList data={getHighlightsList(pl)} columns={3} />
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
              ? 'Jak współpracujemy przy projektach DevOps'
              : 'Our Collaborative Approach to DevOps'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Wspieramy Cię od planowania po utrzymanie. Konfigurujemy potoki CI/CD, wdrażamy infrastrukturę jako kod i zarządzamy kontenerami.'
              : `From planning to maintenance, we offer comprehensive support for your DevOps initiatives. Whether it's setting up CI/CD pipelines, implementing IaC, or managing containers, we've got you covered.`}
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
              ? 'DevOps jest podstawą każdego rozwiązania programistycznego, które tworzymy dla naszych klientów.'
              : 'DevOps is at the heart of every software solution we build for our clients.'
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
    title: pl
      ? 'Ciągła integracja i wdrażanie'
      : 'Continuous Integration and Deployment',
    description: pl
      ? 'Zautomatyzuj tworzenie i wdrażanie oprogramowania dzięki rozwiązaniom do ciągłej integracji i wdrażania, które umożliwiają szybkie i niezawodne wydania.'
      : 'Automate your development and deployment pipelines with our continuous integration and deployment solutions, enabling rapid and reliable releases.'
  },
  {
    title: pl
      ? 'Wdrażanie infrastruktury jako kodu (IaC)'
      : 'Infrastructure as Code (IaC) Implementation',
    description: pl
      ? 'Zautomatyzuj uruchamianie infrastruktury i zarządzanie nią, aby zachować spójność i skalowalność w różnych środowiskach.'
      : 'Harness the power of Infrastructure as Code to automate infrastructure provisioning and management, ensuring consistency and scalability across environments.'
  },
  {
    title: pl
      ? 'Konteneryzacja i orkiestracja'
      : 'Containerisation and Orchestration',
    description: pl
      ? 'Wykorzystaj narzędzia takie jak Docker i Kubernetes, aby usprawnić wdrażanie aplikacji i zarządzanie nimi w różnych środowiskach.'
      : 'Utilise containerisation and orchestration technologies like Docker and Kubernetes to streamline application deployment and management in any environment.',
    href: routes.services.development.minimumViableProduct.root.href
  }
];

const getOurApproachList = (pl: boolean) => [
  {
    title: pl
      ? 'Prowadzenie projektu od początku do końca'
      : 'Start-to-Finish Project Management',
    description: pl
      ? 'Kompleksowo prowadzimy projekt DevOps i wprowadzamy te praktyki do całego cyklu tworzenia oprogramowania.'
      : 'Efficient management of your DevOps project, ensuring seamless integration of DevOps practices into your development lifecycle.',
    icon: 'new-project'
  },
  {
    title: pl
      ? 'Usprawnianie istniejących procesów'
      : 'Enhancement of Existing Processes',
    description: pl
      ? 'Usprawniamy obecne procesy DevOps, optymalizujemy kod, poprawiamy bezpieczeństwo, wdrażamy aktualizacje i tworzymy nowe funkcje.'
      : 'From code optimization to security enhancements, our team handles process improvements, updates, and new feature development for your existing DevOps workflows.',
    icon: 'existing-project'
  },
  {
    title: pl
      ? 'Wsparcie dedykowanych specjalistów DevOps'
      : 'Access to Dedicated DevOps Expertise',
    description: pl
      ? 'Nasi inżynierowie DevOps dołączą do Twojego zespołu, aby usprawnić rozwój i pomóc ukończyć projekt zgodnie z harmonogramem i budżetem.'
      : 'Integrate our skilled DevOps engineers into your team to accelerate development speed and efficiency, ensuring your projects are delivered on time and within budget.',
    icon: 'developers-team'
  }
];
