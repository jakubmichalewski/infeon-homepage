import Image from 'next/image';
import React from 'react';

import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Button from '@components/ui/Button';
import Heading from '@components/ui/Heading';
import { routes } from '@routes/routes';

export default async function MinimumViableProduct() {
  const locale = await getLocale();
  const pl = locale === 'pl';

  return (
    <div className="@container">
      <div className="mx-auto grid max-w-screen-xl place-items-center rounded-lg border border-slate-200 px-8 transition hover:border-transparent hover:shadow-2xl hover:shadow-slate-900/10 @2xl:grid-cols-2 @2xl:px-12 @2xl:py-0 @3xl:grid-cols-3 @3xl:gap-10">
        <div className="w-full py-6 @2xl:order-last @2xl:py-0">
          <Image
            src={'/images/animated/startup.gif'}
            width={512}
            height={512}
            alt={pl ? 'Startup' : 'Startup Company'}
            className="mx-auto aspect-square max-h-60 w-fit"
            unoptimized
          />
        </div>
        <div className="pb-12 text-center @2xl:pt-12 @2xl:text-left @3xl:col-span-2">
          <Heading level={3}>
            {pl
              ? 'Wprowadź swój pomysł na rynek przed konkurencją'
              : 'Launch your ideas to success before your competitors'}
          </Heading>
          <p className="mt-4">
            {pl
              ? 'Pomożemy Ci szybko wejść na rynek przy niewielkim nakładzie. Przetestujesz nowe produkty lub usługi i zyskasz szansę na zdobycie klientów przed konkurencją.'
              : 'We enable you to quickly enter the market at a minimal cost. This allows you to test new products or services and secure market share ahead of your competitors.'}
          </p>

          <div className="mx-auto mt-8 @md:w-fit @xl:mt-12 @2xl:mx-0">
            <Button
              {...localizeRoute(routes.contact.root, locale)}
              className="text-white"
            >
              {pl
                ? 'Opowiedz nam o swoich pomysłach'
                : `Tell us about your ideas`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
