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
    routes.services.auditsAndAssessments.cyberSecurityAudit.root,
    await getLocale()
  );
}

export default async function CyberSecurityAuditPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={
          routes.services.auditsAndAssessments.cyberSecurityAudit.root.image
        }
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Skuteczniejsze strategie cyberbezpieczeństwa dla trwałej odporności firmy'
            : 'Enhanced cyber security strategies for long-term business sustainability and resilience'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Nasze audyty pomagają odpowiednio wcześnie rozpoznać słabe punkty i wdrożyć zalecenia chroniące firmę przed cyberzagrożeniami.'
            : 'Fortify and shield your business from cyber threats by proactively identifying weaknesses and implementing strategic recommendations with our comprehensive audit services.'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Nasi certyfikowani audytorzy sprawdzą, czy mechanizmy ochrony działają skutecznie.'
              : 'Our certified auditors will diligently ensure your safeguards are robustly in place.'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Oceniamy zagrożenia, podatności i ryzyko, sprawdzamy mechanizmy kontrolne i przygotowujemy konkretne rekomendacje.'
              : 'Comprehensive threat, vulnerability, and risk assessment, meticulous control validation, and providing detailed, actionable recommendations for enhanced security.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="relative mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3">
          <div className="mx-auto h-fit shrink-0 lg:sticky lg:top-28 lg:max-w-sm">
            <Heading level={3}>
              {pl ? 'Audyt cyberbezpieczeństwa' : 'Cyber Security Audit'}
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
              ? 'Organizacja buduje reputację latami, a incydent cybernetyczny może ją zniszczyć w kilka minut.'
              : 'It takes many years for an organisation to build a reputation, but a cyber-incident can destroy it in minutes.'
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
      ? 'Wspólnie ustalamy zakres, cele, metodykę i harmonogram audytu, uwzględniając identyfikację zasobów oraz ocenę zagrożeń i podatności.'
      : 'We will work with you to define the scope, objectives, methodology, and schedule of the audit, including the asset identification, threat and vulnerability assessment.'
  },
  {
    title: pl ? 'Określanie priorytetów' : 'Prioritising ',
    description: pl
      ? 'Identyfikujemy i oceniamy ryzyko cybernetyczne. Skupiamy zasoby na obszarach, w których ryzyko jest największe.'
      : 'We will identify and assess potential cyber risks and areas of concern. Prioritising the focus on higher-risk areas to allocate resources effectively.'
  },
  {
    title: pl ? 'Badanie audytowe' : 'Fieldwork',
    description: pl
      ? 'Szczegółowo sprawdzamy infrastrukturę, systemy i procesy. Oceniamy skuteczność mechanizmów kontrolnych i rozmawiamy z pracownikami, aby potwierdzić ustalenia.'
      : 'We perform detailed testing and examination of infrastructure, systems, and processes. Evaluating the effectiveness of controls and processes, and interviewing employees to support findings.'
  },
  {
    title: pl ? 'Analiza danych' : 'Data Analysis',
    description: pl
      ? 'Analizujemy zebrane dane, aby znaleźć wzorce, nieprawidłowości lub trendy wskazujące na ryzyko.'
      : 'We analyse the data collected during the fieldwork stage to identify patterns, anomalies, or trends that may indicate risk.'
  },
  {
    title: pl ? 'Ustalenia i rekomendacje' : 'Findings and Recommendations',
    description: pl
      ? 'Dokumentujemy ryzyka, słabe punkty mechanizmów ochrony i obszary do poprawy. Proponujemy konkretne działania naprawcze.'
      : 'We document all findings, including instances of risk, weaknesses in controls, and areas for improvement. Providing recommendations for corrective actions.'
  },
  {
    title: pl ? 'Weryfikacja działań' : 'Follow-up',
    description: pl
      ? 'Monitorujemy wdrażanie zaleceń. Sprawdzamy, czy problemy zostały skutecznie rozwiązane i czy działania poprawiły bezpieczeństwo.'
      : 'Our follow-up service monitors your progress in implementing the recommended corrective actions. We verify that issues are addressed effectively and that cyber improvements are being made.'
  }
];
