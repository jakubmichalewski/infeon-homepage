import { locales, localizePath } from '@/i18n/config';
import { buildSitemap } from '@helpers/buildSitemap';
import { routes } from '@routes/routes';

export function GET(request: Request) {
  const data: Array<string> = [
    routes.home.root.href,
    routes.services.root.href,
    routes.caseStudies.root.href,
    routes.daxFormatter.root.href,
    routes.secretShare.root.href,
    routes.aboutUs.root.href,
    routes.contact.root.href,
    routes.ourTeam.root.href,
    routes.termsOfUse.root.href,
    routes.privacyPolicy.root.href,

    routes.services.strategicConsultancy.changeLeadership.root.href,
    routes.services.strategicConsultancy.cyberSecurity.root.href,
    routes.services.strategicConsultancy.technologyStrategy.root.href,

    routes.services.auditsAndAssessments.complianceAudit.root.href,
    routes.services.auditsAndAssessments.cyberSecurityAudit.root.href,
    routes.services.auditsAndAssessments.itsmAssessment.root.href,
    routes.services.auditsAndAssessments.technologyMaturity.root.href,

    routes.services.design.uxReview.root.href,
    routes.services.design.uxDesign.root.href,
    routes.services.design.uiDesign.root.href,

    routes.services.development.minimumViableProduct.root.href,
    routes.services.development.webDevelopment.root.href,
    routes.services.development.webDevelopment.angularDevelopment.href,
    routes.services.development.webDevelopment.reactDevelopment.href,
    routes.services.development.webDevelopment.nextJsDevelopment.href,
    routes.services.development.webDevelopment.vueDevelopment.href,
    routes.services.development.webDevelopment.cSharpDevelopment.href,
    routes.services.development.webDevelopment.goDevelopment.href,
    routes.services.development.mobileDevelopment.root.href,
    routes.services.development.lowCodeDevelopment.root.href,
    routes.services.development.databaseDevelopment.root.href,

    routes.services.businessIntelligence.dataWarehouse.root.href,
    routes.services.businessIntelligence.dataTransformation.root.href,
    routes.services.businessIntelligence.powerBiReports.root.href,

    routes.services.cloud.cloudNativeDevelopment.root.href,
    routes.services.cloud.devOps.root.href,
    routes.services.cloud.infrastructure.root.href,

    routes.caseStudies.citb.href,
    routes.caseStudies.culligan.href,
    routes.caseStudies.auriga.href,
    routes.caseStudies.cec.href
  ];
  const baseUrl = process.env.NEXT_PUBLIC_HOST || new URL(request.url).origin;
  const paths = data.flatMap((path) =>
    locales.map((locale) => localizePath(path, locale))
  );
  const body = buildSitemap(paths, baseUrl);

  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml'
    }
  });
}
