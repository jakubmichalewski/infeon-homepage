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
    routes.services.development.minimumViableProduct.root,
    await getLocale()
  );
}

export default async function MinimumViableProductPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.development.minimumViableProduct.root.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Poproś o wycenę MVP' : 'Get MVP Estimation'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Szybko przekształć pomysł biznesowy w pierwszą działającą wersję produktu'
            : 'Swift transformation of your business concept into a minimum viable product'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Pomożemy Ci szybko i przy rozsądnych kosztach sprawdzić pomysł na rynku. Pierwsza działająca wersja produktu (MVP) pozwoli skrócić czas i ograniczyć koszty prac.'
            : `We enable you to swiftly and cost-effectively enter the market with your business idea, using a minimum viable product as a strategic solution to avoid lengthy and costly development processes.`}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Skorzystaj z usług dla rozwijających się firm'
              : 'Employ variety of services for your startup business'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Wspieramy każdy etap tworzenia MVP, od planowania, zarządzania i projektowania po programowanie, testy oraz wdrożenie.'
              : 'We provide comprehensive services at every stage of minimum viable product development, encompassing planning, management, design, development, testing, and the final release phase.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="">
          <div className="text-center">
            <Heading level={3}>
              {pl
                ? 'Jak tworzymy pierwszą działającą wersję produktu'
                : 'Our minimum viable product development process'}
            </Heading>
          </div>
          <div className="mx-auto mt-12 max-w-screen-xl">
            <NumberedHighlightsList data={getProcessList(pl)} columns={4} />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <QuoteWithAvatar
          quote={
            pl
              ? 'Rozwijamy nasze usługi tworzenia oprogramowania i wspieramy młodych przedsiębiorców z innowacyjnymi pomysłami.'
              : 'We are moving forward with our software development offering, supporting young and inventive entrepreneurs'
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

      <Section className="mt-24">
        <div className="mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3 lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <Heading level={3}>
              {pl
                ? 'Poznaj nasze usługi i technologie, z których korzystamy'
                : 'Explore our range of development services and the technologies we utilize.'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Zobacz, jak możemy wesprzeć Twój projekt i jakie technologie pomogą osiągnąć jego cele.'
                : 'Discover how we can contribute to your project and learn about the advanced technologies we employ to effectively achieve your objectives.'}
            </p>
          </div>

          <div className="lg:col-span-2">
            <ItemsWithIconList
              columns={2}
              data={developmentList.map((route) =>
                localizeRoute(route, locale)
              )}
            />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <MinimumViableProduct />
      </Section>
    </>
  );
}

const getProcessList = (pl: boolean) => [
  {
    title: pl ? 'Wymagania i planowanie' : 'Requirements and planing',
    description: pl
      ? 'Wspólnie omawiamy Twój pomysł i proponujemy plan oraz technologie dopasowane do celów projektu.'
      : 'In this phase, we collaborate closely with you, gaining an understanding of your idea and suggesting a plan and technologies tailored to achieve your project objectives.'
  },
  {
    title: pl ? 'Wizualizacja i projektowanie' : 'Visualisation and design',
    description: pl
      ? 'Przekładamy pomysły na szczegółowe projekty, aby pokazać, jak produkt będzie wyglądał i działał.'
      : `At this stage, we transform concepts into comprehensive visuals, offering you a preview of the final product's functionality and aesthetic appeal.`
  },
  {
    title: pl ? 'Programowanie' : 'Development',
    description: pl
      ? 'Na podstawie wybranych technologii i projektów tworzymy działające rozwiązanie zgodne z aktualnymi standardami i dobrymi praktykami.'
      : 'Utilizing the chosen technologies and designs, we will craft a dynamic project, fully functional and adhering to the latest standards and best practices.'
  },
  {
    title: pl ? 'Testowanie i wdrożenie' : 'Testing & release',
    description: pl
      ? 'Przed wdrożeniem produkcyjnym dokładnie testujemy projekt, aby upewnić się, że wszystko działa zgodnie z planem.'
      : 'Prior to deploying your project in a production environment, we will conduct extensive testing to ensure all aspects are functioning as planned.'
  }
];

const developmentList = [
  routes.services.development.webDevelopment.root,
  routes.services.development.mobileDevelopment.root,
  routes.services.development.databaseDevelopment.root,
  routes.services.development.lowCodeDevelopment.root
];
