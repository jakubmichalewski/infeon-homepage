import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import { getLocale } from '@/i18n/server';
import LinkWthCoverImageList from '@components/features/LinkWithCoverImageList/LinkWthCoverImageList';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import Section from '@components/ui/Section';
import { getCaseStudiesListData } from '@data/caseStudiesList.data';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(routes.caseStudies.root, await getLocale());
}
export default async function CaseStudiesPage() {
  const locale = await getLocale();
  return (
    <>
      <Section className="relative my-12 md:my-20">
        <div className="mx-auto max-w-screen-lg text-center">
          <Heading level={1}>
            {locale === 'pl'
              ? 'Zobacz, co klienci zyskali dzięki naszemu doświadczeniu i podejściu'
              : 'Learn how other clients have benefited from our expertise and approach'}
          </Heading>
          <p className="mx-auto mt-6 max-w-screen-md">
            {locale === 'pl'
              ? 'Tradycyjne wdrożenia Business Intelligence często kończą się niepowodzeniem. Praca etapami, począwszy od MVP, ułatwia współpracę między zainteresowanymi stronami.'
              : 'A traditional Business Intelligence approach has a high failure rate. An iterative approach, building from an MVP, allows for more collaboration across stakeholders.'}
          </p>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto grid max-w-screen-xl overflow-clip rounded-lg shadow-2xl shadow-slate-900/20 md:grid-cols-2">
          <div>
            <Image
              src={routes.caseStudies.culligan.image}
              alt={
                locale === 'pl'
                  ? 'Menedżer korzystający z oprogramowania stworzonego w React'
                  : 'Business manager using software developed in React'
              }
              width={1024}
              height={1024}
              className="h-full object-cover"
            />
          </div>
          <div className="mx-auto self-center p-10 sm:p-14">
            <Heading level={2}>
              {locale === 'pl'
                ? 'Hurtownia danych i raportowanie w Power BI dla Culligan'
                : 'Data Warehouse and Power BI Reporting solutions for Culligan'}
            </Heading>
            <p className="mt-4">
              {locale === 'pl'
                ? 'We współpracy z Culligan wdrożyliśmy zaawansowane rozwiązanie do raportowania, które zbiera i przetwarza dane z wielu źródeł. Dane trafiają do czytelnego, funkcjonalnego raportu Power BI dopasowanego do wymagań klienta.'
                : "Our team worked closely with Culligan to deliver complex reporting solution that gathers and transforms data from multiple sources. Data then is displayed in stylised and functional Power BI report that fulfill Client's requirements."}
            </p>
            <div className="mt-12 w-fit">
              <Button
                href={routes.caseStudies.culligan.href}
                variant="bordered"
              >
                {locale === 'pl' ? 'Dowiedz się więcej' : 'Learn more'}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="mt-16 lg:mt-24">
        <div className="mx-auto mt-12 max-w-screen-xl md:mt-16">
          <Heading level={3}>
            {locale === 'pl'
              ? 'Najnowsze projekty naszych klientów'
              : 'Recent success stories of our Clients'}
          </Heading>
          <div className="mt-10">
            <LinkWthCoverImageList
              data={getCaseStudiesListData(locale).slice(1)}
              columns={3}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
