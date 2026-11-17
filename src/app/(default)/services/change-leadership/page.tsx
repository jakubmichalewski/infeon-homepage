import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
import NumberedHighlightsList from '@components/features/NumberedHighlightsList/NumberedHighlightsList';
import QuoteWithAvatar from '@components/features/QuoteWithAvatar/QuoteWithAvatar';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import LinkWithChevron from '@components/ui/LinkWithChevron';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    routes.services.strategicConsultancy.changeLeadership.root,
    await getLocale()
  );
}

export default async function ChangeLeadershipPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.strategicConsultancy.changeLeadership.root.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Przeprowadź organizację przez ważną zmianę z naszym wsparciem'
            : 'Lead your organisation through significant transformation with our guidance'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Wspólnie usprawniamy działanie firmy i wspieramy jej rozwój, wprowadzając zmiany z jasnym celem, elastycznie i z uwzględnieniem potrzeb pracowników.'
            : 'We work with you to deliver growth and improvement by executing and embedding a visionary, agile, and people-centric approach to change'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Pomagamy skutecznie kierować zmianą w organizacji'
              : 'We are experts in effective change leadership'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Od wsparcia w wybranym obszarze po kompleksowe wdrożenie i doskonalenie.'
              : 'From specific support to complete end-to-end implementation and improvement'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="relative mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3">
          <div className="mx-auto h-fit shrink-0 lg:sticky lg:top-28 lg:max-w-sm">
            <Heading level={3}>
              {pl ? 'Kierowanie zmianą' : 'Change Leadership'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Kierowanie zmianą polega na realizacji strategii poprzez angażowanie ludzi i sprawne reagowanie w okresach wzrostu, zakłóceń oraz niepewności.'
                : 'Change Leadership is the ability to deliver strategy by influencing and inspiring action in others, and responding with vision and agility during periods of growth, disruption or uncertainty.'}
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
              ? 'Nasi klienci mieli różne doświadczenia z dużymi zmianami organizacyjnymi. Pomagamy im osiągać lepsze wyniki i rozwijać kulturę organizacji.'
              : 'Many clients experienced varied success in major transformations. Our expertise ensures improved outcomes and culture.'
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
    </>
  );
}

const getTechnologyStrategyList = (pl: boolean) => [
  {
    title: pl
      ? 'Określenie kierunku i uzgodnienie celów'
      : 'Definition and alignment',
    description: pl
      ? 'Pomagamy określić i zakomunikować wizję oraz uzgodnić kierunek z kierownictwem i osobami odpowiedzialnymi za zmianę.'
      : 'We work with you to help define, shape, and communicate the vision, and build leadership alignment and a guiding coalition around the need for change.'
  },
  {
    title: pl ? 'Ramy wdrożenia' : 'Framework for execution',
    description: pl
      ? 'Opracowujemy i wdrażamy metodykę dopasowaną do zmian w Twojej firmie, aby można było wprowadzać je w uporządkowany sposób.'
      : 'We can develop and execute an appropriate change framework to help shape the change itself. Adopting the right framework is key in the implementation of systematic change.'
  },
  {
    title: pl ? 'Monitorowanie i zaangażowanie' : 'Monitoring and engagement',
    description: pl
      ? 'Obserwujemy postępy i rezultaty, uwzględniamy opinie pracowników i interesariuszy oraz w razie potrzeby dostosowujemy plan.'
      : 'We work with you to employ an outcome-orientated approach that monitors (and adjusts to) the progress of change and the impact and feedback of your people and stakeholders.'
  },
  {
    title: pl ? 'Komunikacja i wsparcie' : 'Communication and support',
    description: pl
      ? 'Każdy potrzebuje innego czasu, aby przyjąć zmianę. Pomagamy zaplanować komunikację, która wspiera pracowników w tym procesie.'
      : 'It is important to remember that people accept and adapt to change in their own time. Our communications approach is designed to help people on that journey.'
  }
];
