import Link from '@/i18n/Link';
import { localizeRoute } from '@/i18n/routes';
import { getLocale } from '@/i18n/server';
import Logo from '@components/ui/Logo';
import { routes } from '@routes/routes';

export default async function Footer() {
  const locale = await getLocale();
  const polish = locale === 'pl';
  const footerRoutes = [
    {
      href: routes.termsOfUse.root.href,
      title: polish ? 'Archiwalny regulamin' : 'Archived terms'
    },
    {
      href: routes.privacyPolicy.root.href,
      title: polish
        ? 'Archiwalna polityka prywatności'
        : 'Archived privacy policy'
    },
    localizeRoute(routes.contact.root, locale)
  ];

  return (
    <footer className="border-brand-100 bg-brand-50 text-brand-900 mt-20 border-t px-6 py-10 text-sm lg:px-8">
      <div className="mx-auto max-w-screen-xl">
        <div>
          <Link href="/" className="inline-flex items-center">
            <Logo />
          </Link>
          <p className="mt-2">{polish ? 'Polska' : 'Poland'}</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Infeon Tech.{' '}
            {polish ? 'Wszelkie prawa zastrzeżone.' : 'All rights reserved.'}
          </p>
          <nav
            aria-label={polish ? 'Stopka' : 'Footer'}
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {footerRoutes.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                title={item.title}
                className="hover:text-brand-700 font-semibold hover:underline"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
