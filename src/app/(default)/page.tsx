import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
import LinkWthCoverImageList from '@components/features/LinkWithCoverImageList/LinkWthCoverImageList';
import MinimumViableProduct from '@components/features/MinimumViableProduct/MinimumViableProduct';
import NumberedHighlightsList from '@components/features/NumberedHighlightsList/NumberedHighlightsList';
import SelfServiceAssessments from '@components/features/SelfServiceAssessments/SelfServiceAssessments';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import LinkWithChevron from '@components/ui/LinkWithChevron';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata() {
  return buildMetadata(routes.home.root, await getLocale());
}

export default async function Home() {
  const locale = await getLocale();
  const polish = locale === 'pl';
  const services = [
    routes.services.businessIntelligence.dataWarehouse.root,
    routes.services.businessIntelligence.powerBiReports.root,
    routes.services.strategicConsultancy.technologyStrategy.root,
    routes.services.development.webDevelopment.root,
    routes.services.development.minimumViableProduct.root
  ].map((route) => localizeRoute(route, locale));

  return (
    <>
      <Hero
        image={routes.home.root.image}
        contentAlignment="left"
        cta={
          <Button href={routes.caseStudies.root.href} variant="accent">
            {polish ? 'Najnowsze realizacje' : 'Latest case studies'}
          </Button>
        }
      >
        <h1 className="max-w-[17ch] text-[2.65rem] leading-[1.02] font-bold tracking-[-0.05em] text-white max-[360px]:text-[2.2rem] sm:text-[clamp(2.65rem,5.5vw,5rem)]">
          {polish ? 'Rozwijaj firmę' : 'Grow your business'}{' '}
          <span className="text-accent-300 mt-1 block">
            {polish
              ? 'dzięki danym i\u00a0automatyzacji'
              : 'with data and\u00a0automation'}
          </span>
        </h1>
        <p className="text-brand-50 mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
          {polish
            ? 'Infeon Tech to firma technologiczna z Polski. Pomagamy firmom lepiej wykorzystywać dane, automatyzować procesy i planować rozwój technologiczny.'
            : 'Infeon Tech is a technology company based in Poland. We help businesses make better use of their data, automate processes, and plan their technology investments.'}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {polish
              ? 'Usługi IT dopasowane do potrzeb Twojej firmy'
              : 'IT services tailored to your business'}
          </Heading>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="relative mx-auto grid max-w-screen-xl gap-12 max-lg:max-w-screen-sm lg:grid-cols-3 lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <Heading level={3}>
              {polish ? 'W czym pomagamy' : 'What we do'}
            </Heading>
            <p className="mt-4">
              {polish
                ? 'Od hurtowni danych i raportów Power BI po tworzenie aplikacji i doradztwo. Dobieramy rozwiązania do Twoich celów i pomagamy wdrożyć je w codziennej pracy.'
                : 'From data warehouses and Power BI reports to application development and consulting, we help you choose and implement technology that supports your goals.'}
            </p>
            <div className="mt-8">
              <LinkWithChevron href={routes.services.root.href}>
                {polish ? 'Zobacz nasze usługi' : 'Explore our services'}
              </LinkWithChevron>
            </div>
          </div>
          <div className="lg:col-span-2">
            <LinkWthCoverImageList columns={2} data={services} />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto grid max-w-screen-xl gap-12 lg:grid-cols-2">
          <div>
            <MinimumViableProduct />
          </div>
          <div>
            <SelfServiceAssessments />
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center">
            <Heading level={3}>
              {polish
                ? 'Co zyskujesz dzięki współpracy z Infeon Tech'
                : 'Why work with Infeon Tech'}
            </Heading>
          </div>
          <div className="mt-12">
            <NumberedHighlightsList
              data={polish ? benefits.pl : benefits.en}
              columns={4}
            />
          </div>
        </div>
      </Section>
    </>
  );
}

const benefits = {
  en: [
    {
      title: 'Technical expertise',
      description:
        'We bring together experience in IT, software development, and design to solve complex problems.'
    },
    {
      title: 'Quality delivery',
      description:
        'We pay close attention to design and engineering, so the tools we deliver are dependable and easy to use.'
    },
    {
      title: 'Long-term maintainability',
      description:
        'We design and build solutions your team can maintain and adapt as your needs change.'
    },
    {
      title: 'Costs under control',
      description:
        'We plan around your budget and focus the work on what will deliver the most value.'
    }
  ],
  pl: [
    {
      title: 'Wiedza techniczna',
      description:
        'Łączymy doświadczenie w IT, programowaniu i projektowaniu, aby rozwiązywać złożone problemy.'
    },
    {
      title: 'Jakość wykonania',
      description:
        'Dbamy o projekt i wykonanie, aby dostarczane narzędzia były niezawodne i łatwe w obsłudze.'
    },
    {
      title: 'Łatwe utrzymanie',
      description:
        'Projektujemy i wdrażamy rozwiązania, które Twój zespół może samodzielnie utrzymywać i rozwijać.'
    },
    {
      title: 'Koszty pod kontrolą',
      description:
        'Planujemy prace zgodnie z budżetem i skupiamy się na tym, co przyniesie największą wartość.'
    }
  ]
};
