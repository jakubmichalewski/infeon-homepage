import { ReactNode } from 'react';

import { Locale } from '@/i18n/config';
import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Footer from '@components/features/Footer/Footer';
import Header from '@components/features/Header/Header';
import { Route } from '@interfaces/route';
import { routes } from '@routes/routes';

function localizeNav(item: Route, locale: Locale): Route {
  return {
    ...localizeRoute(item, locale),
    routes: item.routes?.map((child) => localizeNav(child, locale))
  };
}

export default async function DefaultLayout({
  children
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  return (
    <div className="grid min-h-screen grid-rows-[1fr_auto] overflow-clip">
      <Header nav={nav.map((item) => localizeNav(item, locale))} />
      <main className="h-full pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
}

const nav = [
  {
    ...routes.services.root,
    routes: [
      {
        ...routes.services.businessIntelligence.root,
        routes: [
          routes.services.businessIntelligence.dataWarehouse.root,
          routes.services.businessIntelligence.dataTransformation.root,
          routes.services.businessIntelligence.powerBiReports.root
        ]
      },
      {
        ...routes.services.strategicConsultancy.root,
        routes: [
          routes.services.strategicConsultancy.changeLeadership.root,
          routes.services.strategicConsultancy.cyberSecurity.root,
          routes.services.strategicConsultancy.technologyStrategy.root
        ]
      },
      {
        ...routes.services.auditsAndAssessments.root,
        routes: [
          routes.services.auditsAndAssessments.complianceAudit.root,
          routes.services.auditsAndAssessments.cyberSecurityAudit.root,
          routes.services.auditsAndAssessments.itsmAssessment.root,
          routes.services.auditsAndAssessments.technologyMaturity.root
        ]
      },
      {
        ...routes.services.design.root,
        routes: [
          routes.services.design.uxReview.root,
          routes.services.design.uxDesign.root,
          routes.services.design.uiDesign.root
        ]
      },
      {
        ...routes.services.development.root,
        routes: [
          routes.services.development.minimumViableProduct.root,
          routes.services.development.webDevelopment.root,
          routes.services.development.mobileDevelopment.root,
          routes.services.development.lowCodeDevelopment.root,
          routes.services.development.databaseDevelopment.root
        ]
      },
      {
        ...routes.services.cloud.root,
        routes: [
          routes.services.cloud.cloudNativeDevelopment.root,
          routes.services.cloud.devOps.root,
          routes.services.cloud.infrastructure.root
        ]
      }
    ]
  },
  routes.caseStudies.root,
  routes.daxFormatter.root,
  routes.secretShare.root,
  routes.aboutUs.root
];
