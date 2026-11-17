import { Metadata } from 'next';

import { defaultLocale, Locale, localizePath } from '@/i18n/config';
import { localizeRoute } from '@/i18n/routes';

export type Props = {
  href: string;
  title: string;
  description?: string;
  image?: string;
};
export default function buildMetadata(
  route: Props,
  locale: Locale = defaultLocale
): Metadata {
  const props = localizeRoute(route, locale);
  const siteName = 'Infeon Tech';
  const host = process.env.NEXT_PUBLIC_HOST;
  const title = `${props.title} / ${siteName}`;
  const image = props.image ?? '/images/brand/infeon-mark.png';
  const canonical = localizePath(props.href, locale);

  return {
    title,
    description: props.description,
    authors: [{ name: siteName }],
    openGraph: {
      title,
      description: props.description,
      images: image,
      url: canonical,
      siteName,
      locale: locale === 'pl' ? 'pl_PL' : 'en_GB',
      alternateLocale: locale === 'pl' ? 'en_GB' : 'pl_PL'
    },
    twitter: {
      title,
      images: image
    },
    ...(host ? { metadataBase: new URL(host) } : {}),
    alternates: {
      canonical,
      languages: {
        en: localizePath(props.href, 'en'),
        pl: localizePath(props.href, 'pl'),
        'x-default': props.href
      }
    }
  };
}
