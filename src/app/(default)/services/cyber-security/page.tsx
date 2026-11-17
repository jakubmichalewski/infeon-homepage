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
    routes.services.strategicConsultancy.cyberSecurity.root,
    await getLocale()
  );
}

export default async function CyberSecurityPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={routes.services.strategicConsultancy.cyberSecurity.root.image}
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl ? 'Umów spotkanie' : 'Schedule a meeting'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Chroń firmę i klientów przed cyberatakami'
            : 'Protect your business and customers against cyber-attacks and cybercriminals'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Opracowujemy i wdrażamy kompleksowy program cyberbezpieczeństwa, który ogranicza ryzyko dla Twojej organizacji.'
            : 'We can significantly reduce your cyber risk, by developing and delivering a comprehensive cyber security programme'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Nasi certyfikowani specjaliści pomogą Ci zadbać o bezpieczeństwo'
              : 'Our certified security professionals can give you peace of mind'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Opracowujemy strategie bezpieczeństwa, oceniamy ryzyko, weryfikujemy zgodność oraz projektujemy architekturę i mechanizmy ochrony.'
              : 'Strategic security development, risk assessment, compliance validation, and architecture and control design.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="relative mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3">
          <div className="mx-auto h-fit shrink-0 lg:sticky lg:top-28 lg:max-w-sm">
            <Heading level={3}>
              {pl ? 'Cyberbezpieczeństwo' : 'Cyber Security'}
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
              ? 'Cyberbezpieczeństwo wymaga zaangażowania całej organizacji. Potrzebne są jasne zasady nadzoru, procesy, kultura bezpieczeństwa i odpowiednie technologie.'
              : 'Cyber security is far more than IT. You must put in place the right governance supporting processes, culture, and enabling technology.'
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
    title: pl ? 'Strategia cyberbezpieczeństwa' : 'Cyber security strategy',
    description: pl
      ? 'Wspólnie opracowujemy program bezpieczeństwa dostosowany do strategii i celów organizacji. Dbamy o jego spójność z działaniami firmy i mierzalne korzyści.'
      : 'We work with you to develop a security programme that aligns to your strategy, goals and objectives. We will ensure strategic alignment with the rest of the organisation. With a focus on, value delivery.'
  },
  {
    title: pl ? 'Opracowanie planu działań' : 'Roadmap development',
    description: pl
      ? 'Określimy zadania, projekty i etapy, które pozwolą zrealizować strategię bezpieczeństwa i ograniczyć ryzyko cybernetyczne.'
      : 'We will develop the key steps required to achieve your security strategy. This will consist of the various tasks, projects and milestones to implement the  capabilities that contribute to a reduction of cyber risk.'
  },
  {
    title: pl ? 'Nadzór nad bezpieczeństwem' : 'Security governance',
    description: pl
      ? 'Dobieramy model nadzoru, który pasuje do sposobu zarządzania Twoją firmą i umożliwia monitorowanie priorytetowych inicjatyw cyberbezpieczeństwa.'
      : 'We can apply a governance model that fits with your wider governance approach. To oversee priority cyber security initiatives and maximise success.'
  },
  {
    title: pl ? 'Ocena i analiza ryzyka' : 'Risk assessment and analysis',
    description: pl
      ? 'Stosujemy sprawdzone metody zarządzania ryzykiem. Ustalamy jego dopuszczalny poziom, identyfikujemy zagrożenia i dobieramy sposób postępowania.'
      : 'We apply best-practice risk management, to establish your risk appetite, identify risk, define appropriate risk treatment decisions, bring risks to an acceptable level.'
  },
  {
    title: pl ? 'Zgodność i audyt' : 'Compliance and audit',
    description: pl
      ? 'Sprawdzamy zgodność z wymaganiami oraz skuteczność zabezpieczeń. Oferujemy zarówno przeglądy, jak i formalne audyty.'
      : 'We can enact activities that determine if you are compliant, and that appropriate safeguards are in place and working properly. From informal assessment and review, to highly structured audits. '
  },
  {
    title: pl ? 'Architektura bezpieczeństwa' : 'Architecture',
    description: pl
      ? 'Projektujemy wielowarstwową architekturę bezpieczeństwa, opartą na spójnych zasadach, aby chronić zasoby i reputację firmy.'
      : 'We can design your security architecture to protect your assets and reputation, by applying consistent guidelines and principles across multiple levels.'
  }
];
