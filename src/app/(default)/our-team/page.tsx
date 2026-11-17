import { Metadata } from 'next';

import { getLocale } from '@/i18n/server';
import TeamLeaders from '@components/features/TeamLeaders/TeamLeaders';
import TeamSpecialists from '@components/features/TeamSpecialists/TeamSpecialists';
import WorkWithUs from '@components/features/WorkWithUs/WorkWithUs';
import Logo from '@components/ui/Logo';
import Section from '@components/ui/Section';
import Triangle from '@components/ui/Triangle';
import { getOurTeamData } from '@data/ourTeam.data';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(routes.ourTeam.root, await getLocale());
}

export default async function OurTeamPage() {
  const locale = await getLocale();
  const ourTeamData = getOurTeamData(locale);
  return (
    <>
      <Section className="bg-brand-950 relative py-12 md:py-16">
        <header className="mx-auto max-w-screen-sm text-center lg:max-w-screen-md">
          <Logo isIcon className="mx-auto mb-5" />
          <h1 className="mx-auto w-full text-3xl font-bold text-white">
            {locale === 'pl'
              ? 'Nasze doświadczenie pomaga Ci w pełni wykorzystać technologię'
              : 'Our experience and expertise helping you get the most from technology'}
          </h1>
        </header>
        <div className="mx-auto mt-8 max-w-screen-sm lg:max-w-screen-xl">
          <TeamLeaders data={ourTeamData.leaders} />
        </div>
      </Section>

      <Section className="relative py-12 md:py-16">
        <header className="mx-auto max-w-screen-sm text-center lg:max-w-screen-md">
          <h1 className="text-xl font-bold md:text-2xl lg:text-3xl lg:leading-snug">
            {locale === 'pl'
              ? 'Stawiamy na ludzi'
              : 'We are people-focused organisation'}
          </h1>
          <p className="mt-5 w-full text-slate-600">
            {locale === 'pl'
              ? 'Nasz zespół tworzy kulturę firmy i stoi za jej sukcesem. Łączymy wysokie kompetencje z gotowością do codziennej nauki.'
              : 'Our people are at the centre of our culture, and what makes us successful. Our team members are highly skilled, and motivated to learn every day.'}
          </p>
        </header>
        <div className="mx-auto mt-12 md:mt-16 lg:max-w-screen-xl">
          <TeamSpecialists data={ourTeamData.specialists} />
        </div>

        <Triangle className="text-brand-50 absolute top-0 right-0 -z-20 h-auto w-4/5 transform fill-current stroke-current" />
      </Section>
      <WorkWithUs locale={locale} />
    </>
  );
}
