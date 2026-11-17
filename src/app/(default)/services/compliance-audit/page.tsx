import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
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
    routes.services.auditsAndAssessments.complianceAudit.root,
    await getLocale()
  );
}

export default async function ComplianceAuditPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.auditsAndAssessments.complianceAudit.root.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Rozpoznaj ryzyko związane ze zgodnością i reaguj na możliwe naruszenia'
            : 'Identify and address compliance risk and potential breaches'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Przeprowadzamy systematyczną kontrolę, aby rzetelnie ocenić zgodność z wymaganiami.'
            : 'Our professional services apply systematic inspection to provide high assurance of compliance.'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Nasi certyfikowani audytorzy pomogą Ci spełnić wymagania'
              : 'Our certified auditors will help you meet your obligations'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Sprawdzamy zgodność z przepisami, pomagamy zarządzać ryzykiem i usprawniać działania, aby chronić wiarygodność i reputację firmy.'
              : 'Legal and regulatory audit, manage risks, improve operations, and maintain your reputation and integrity.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="relative mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3">
          <div className="mx-auto h-fit shrink-0 lg:sticky lg:top-28 lg:max-w-sm">
            <Heading level={3}>
              {pl ? 'Audyt zgodności' : 'Compliance Audit'}
            </Heading>
            <p className="mt-4">
              {pl
                ? 'Wykorzystujemy technologie, procesy i mechanizmy ochrony, aby zabezpieczać systemy, sieci, oprogramowanie, urządzenia i dane przed cyberatakami.'
                : 'Our cyber security services apply technologies, processes, and controls to protect your systems, networks, programs, devices and data from cyber attacks.'}
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
              ? 'Audyty zgodności pomagają skuteczniej chronić poufne informacje, wzmacniać reputację i usprawniać działalność.'
              : 'Compliance audits strengthen capacity to protect sensitive information, enhance reputation, and streamline operations.'
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
        <SelfServiceAssessments />
      </Section>
    </>
  );
}

const getTechnologyStrategyList = (pl: boolean) => [
  {
    title: pl ? 'Planowanie' : 'Planning',
    description: pl
      ? 'Wspólnie ustalamy zakres, cele, metodykę i harmonogram audytu oraz przepisy, zasady i normy, które obejmie.'
      : 'We will work with you to define the scope, objectives, methodology, and schedule of the audit, including the specific laws, regulations, policies, and standards to be assessed.'
  },
  {
    title: pl ? 'Określanie priorytetów' : 'Prioritising ',
    description: pl
      ? 'Identyfikujemy i oceniamy potencjalne ryzyko związane ze zgodnością. Koncentrujemy się na obszarach o najwyższym ryzyku, aby efektywnie wykorzystać zasoby.'
      : 'We will identify and assess potential compliance risks and areas of concern. Prioritising the focus on higher-risk areas to allocate resources effectively.'
  },
  {
    title: pl ? 'Badanie audytowe' : 'Fieldwork',
    description: pl
      ? 'Szczegółowo sprawdzamy dokumentację, transakcje i procesy. Oceniamy skuteczność mechanizmów kontrolnych i rozmawiamy z pracownikami, aby potwierdzić ustalenia.'
      : 'We perform detailed testing and examination of records, transactions, and processes. Evaluating the effectiveness of controls and processes, and interviewing employees to support findings.'
  },
  {
    title: pl ? 'Analiza danych' : 'Data Analysis',
    description: pl
      ? 'Analizujemy zebrane dane, aby znaleźć wzorce, nieprawidłowości lub trendy, które mogą wskazywać na problemy ze zgodnością.'
      : 'We analyse the data collected during the fieldwork stage to identify patterns, anomalies, or trends that may indicate compliance issues.'
  },
  {
    title: pl ? 'Ustalenia i rekomendacje' : 'Findings and Recommendations',
    description: pl
      ? 'Dokumentujemy przypadki niezgodności, słabe punkty kontroli i obszary do poprawy. Proponujemy konkretne działania naprawcze.'
      : 'We document all findings, including instances of non-compliance, weaknesses in controls, and areas for improvement. Providing recommendations for corrective actions.'
  },
  {
    title: pl ? 'Weryfikacja działań' : 'Follow-up',
    description: pl
      ? 'Monitorujemy wdrażanie zaleceń. Sprawdzamy, czy problemy zostały skutecznie rozwiązane i czy działania poprawiły zgodność.'
      : 'Our follow-up service monitors your progress in implementing the recommended corrective actions. We verify that issues are addressed effectively and that compliance improvements are being made.'
  }
];
