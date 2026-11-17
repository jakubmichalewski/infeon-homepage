import Image from 'next/image';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import { routes } from '@routes/routes';

export default async function SelfServiceAssessments() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <div className="@container">
      <div className="mx-auto grid max-w-screen-xl place-items-center rounded-lg border border-slate-200 px-12 transition hover:border-transparent hover:shadow-2xl hover:shadow-slate-900/10 @2xl:grid-cols-2 @2xl:py-0 @3xl:grid-cols-3 @3xl:gap-10">
        <div className="w-full py-6 @2xl:order-last @2xl:py-0">
          <Image
            src={'/images/animated/light-bulb.gif'}
            width={512}
            height={512}
            alt={
              pl
                ? 'Kwestionariusz samooceny'
                : 'Self-service assessment questionnaire'
            }
            className="mx-auto aspect-square max-h-60 w-fit"
            unoptimized
          />
        </div>
        <div className="pb-12 text-center @2xl:pt-12 @2xl:text-left @3xl:col-span-2">
          <Heading level={3}>
            {pl
              ? 'Chcesz zwiększyć konkurencyjność swojej firmy?'
              : 'Looking to gain competitive advantage for your company?'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Wypełnij kwestionariusz samooceny oparty na powszechnie stosowanych standardach. Otrzymasz zalecenia dopasowane do potrzeb swojej firmy.'
              : `Complete self-service assessment tool, based on widely adopted best-practice standards. Discover and learn about our tailored recommendations for your company.`}
          </p>

          <div className="mx-auto mt-8 @md:w-fit @xl:mt-12 @2xl:mx-0">
            <Button
              href={routes.external.assessments.root.href}
              title={
                localizeRoute(routes.external.assessments.root, locale).title
              }
              className="text-white"
            >
              {pl ? 'Zobacz kwestionariusze' : `Check assessments`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
