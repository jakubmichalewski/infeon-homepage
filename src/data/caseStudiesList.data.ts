
import type { Locale } from '@/i18n/config';
import { localizeRoute } from '@/i18n/routes';
import { routes } from '@routes/routes';

export const caseStudiesListData = [
  routes.caseStudies.culligan,
  routes.caseStudies.auriga,
  routes.caseStudies.cec,
  routes.caseStudies.citb
];

export function getCaseStudiesListData(locale: Locale) {
  return caseStudiesListData.map((study) => localizeRoute(study, locale));
}
