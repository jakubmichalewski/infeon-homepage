import { Metadata } from 'next';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Hero from '@components/features/Hero/Hero';
import ItemsWithIconList from '@components/features/ItemsWithIconList/ItemsWithIconList';
import MinimumViableProduct from '@components/features/MinimumViableProduct/MinimumViableProduct';
import NumberedHighlightsList from '@components/features/NumberedHighlightsList/NumberedHighlightsList';
import BulletList from '@components/ui/BulletList';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import LinkWithChevron from '@components/ui/LinkWithChevron';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    routes.services.development.webDevelopment.cSharpDevelopment,
    await getLocale()
  );
}

export default async function CSharpDevelopmentPage() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <>
      <Hero
        image={
          routes.services.development.webDevelopment.cSharpDevelopment.image
        }
        cta={
          <Button variant="accent" {...localizeRoute(routes.contact.root, locale)}>
            {pl
              ? 'Poproś o wycenę projektu .NET'
              : 'Get .Net Project Estimation'}
          </Button>
        }
      >
        <Heading level={1} className="text-white">
          {pl
            ? 'Czy .NET odgrywa kluczową rolę w Twoim projekcie?'
            : 'Does your project heavily rely on .Net programming?'}
        </Heading>
        <p className="mx-auto mt-6 max-w-screen-sm text-white">
          {pl
            ? 'Tworzymy wydajne i skalowalne rozwiązania w C#, dopasowane do konkretnych wymagań projektu.'
            : `We build efficient and powerful C# solutions, meticulously tailored to
            meet your project's specific requirements, ensuring high performance
            and scalability.`}
        </p>
      </Hero>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level={2} className="text-brand-700">
            {pl
              ? 'Skuteczne rozwiązania dopasowane do potrzeb Twojej firmy.'
              : 'Effective solutions custom-designed to meet your business requirements.'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Wspieramy projekty w C# i .NET niezależnie od ich skali, oferując usługi dopasowane do wymagań.'
              : `Whether you're working on a small or large project, if C# and .Net
              are your chosen technologies, we provide a range of
              complementary services to support your project's needs.`}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center">
            <Heading level={3}>
              {pl
                ? 'Nasze usługi w zakresie .NET'
                : 'Our .Net development services'}
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
              ? 'Jak współpracujemy przy projektach C#'
              : 'Our C# development cooperation approach'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Służymy wiedzą i wsparciem na każdym etapie projektu .NET, od planowania i projektowania po wdrożenie, utrzymanie i dalszy rozwój.'
              : 'We offer our expertise and services at every stage of your .Net project, encompassing the planning and design phase, development, and extending into maintenance and support. Our commitment is to be there for you throughout the entire project lifecycle.'}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-screen-xl">
          <ItemsWithIconList data={getOurApproachList(pl)} columns={3} />
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto w-full max-w-screen-xl items-center justify-center gap-12 divide-brand-800 rounded-lg bg-brand-950 px-10 max-md:divide-y sm:px-14 md:flex md:gap-20">
          <div className="max-w-screen-sm py-10 sm:py-14">
            <Heading level={3} className="text-brand-200">
              {pl
                ? 'Zobacz, jakie rozwiązania możemy stworzyć dla Twojej firmy'
                : 'Check the projects we could create for your business'}
            </Heading>
            <p className="mt-4 text-white">
              {pl
                ? 'Wszechstronność C# pozwala realizować wiele typów projektów. Wybierz rozwiązanie dopasowane do swoich potrzeb.'
                : 'C# is highly versatile, enabling us to cater to a diverse array of project types. Select the option that best suits your business needs.'}
            </p>

            <div className="mt-12">
              <LinkWithChevron
                {...localizeRoute(routes.contact.root, locale)}
                onDark
              >
                {pl
                  ? 'Opowiedz nam o swoim projekcie'
                  : 'Tell us about your project'}
              </LinkWithChevron>
            </div>
          </div>
          <div className="smg:py-14 shrink-0 py-10 text-sm">
            <p className="font-sans font-medium text-white">
              {pl ? 'Przykładowe projekty' : 'Project examples'}
            </p>
            <BulletList
              className="mt-4"
              data={[
                pl
                  ? 'Wydajne interfejsy API w REST lub GraphQL'
                  : 'Efficient REST or GraphQL API',
                pl
                  ? 'Rozbudowane strony w architekturze MVC'
                  : 'Contentful MVC Websites',
                pl
                  ? 'Aplikacje bezserwerowe na platformie Azure'
                  : 'Serverless applications for Azure',
                pl
                  ? 'Rozwiązania analityki biznesowej'
                  : 'Solutions for Business Intelligence'
              ]}
            />
          </div>
        </div>
      </Section>
    </>
  );
}

const getHighlightsList = (pl: boolean) => [
  {
    title: pl ? 'Tworzenie interfejsów API' : 'API Development',
    description: pl
      ? 'Tworzymy wydajne interfejsy API dopasowane do wymagań projektu, zarówno w REST, jak i GraphQL.'
      : "We develop powerful API solutions tailored to your project's needs. Whether your project requires REST or GraphQL, we are committed to delivering high-quality results."
  },
  {
    title: pl
      ? 'Tworzenie stron w architekturze MVC'
      : 'MVC Websites Development',
    description: pl
      ? 'Czy Twoja strona ma rygorystyczne wymagania, na przykład dotyczące rezygnacji z JavaScriptu? Stworzymy wydajne rozwiązanie MVC dostosowane do Twojego projektu.'
      : `Does your website project have strict requirements, such as no JavaScript? Don't worry — we can deliver a powerful and efficient MVC solution that matches your project's specific needs.`
  },
  {
    title: pl
      ? 'Tworzenie rozwiązań Azure Functions'
      : 'Azure Functions Development',
    description: pl
      ? 'Potrzebujesz aplikacji bezserwerowej do udostępniania danych lub wykonywania innych zadań? Stworzymy ją w oparciu o Azure Functions.'
      : 'Looking for serverless applications to serve data or perform other tasks? We offer serverless development for Azure functions for your project.'
  }
];

const getOurApproachList = (pl: boolean) => [
  {
    title: pl
      ? 'Nowy projekt od początku do końca'
      : 'New project from start to finish',
    description: pl
      ? 'Sprawnie zrealizujemy Twój projekt .NET zgodnie z aktualnymi standardami branżowymi.'
      : 'We will code your new .Net project efficiently with the latest industry standards. ',
    icon: 'new-project'
  },
  {
    title: pl
      ? 'Rozwój istniejącego rozwiązania'
      : 'Existing solution development',
    description: pl
      ? 'DevOps, refaktoryzacja kodu, poprawa bezpieczeństwa, aktualizacje i rozwój nowych funkcji.'
      : 'DevOps, code refactoring, security improvements, updates, and new feature development',
    icon: 'existing-project'
  },
  {
    title: pl
      ? 'Wsparcie dedykowanych programistów'
      : 'Dedicated Developer Expertise',
    description: pl
      ? 'Nasi programiści .NET dołączą do Twojego zespołu, aby przyspieszyć i usprawnić rozwój aplikacji.'
      : 'Get our .Net developers into your team to boost your app development speed and efficiency.',
    icon: 'developers-team'
  }
];
