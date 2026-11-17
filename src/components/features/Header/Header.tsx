'use client';

import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import LanguageSwitcher from '@/i18n/LanguageSwitcher';
import Link from '@/i18n/Link';
import { useLocale } from '@/i18n/LocaleProvider';
import { withoutLocale } from '@/i18n/config';
import HeaderSubNav from '@components/features/Header/HeaderNavLists';
import Button from '@components/ui/Button';
import Logo from '@components/ui/Logo';
import useClickOutside from '@hooks/useClickOutside';
import useIsMobile from '@hooks/useIsMobile';
import { Route } from '@interfaces/route';
import { routes } from '@routes/routes';

type Props = {
  nav?: Route[];
  logoLink?: string;
};

const menuAnimation: Variants = {
  hidden: { opacity: 0, y: -4 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.15 } }
};

export default function Header({ nav, logoLink = '/' }: Props) {
  const pathname = withoutLocale(usePathname());
  const polish = useLocale() === 'pl';
  const contact = polish ? 'Porozmawiajmy' : 'Let’s talk';
  const navLabel = polish ? 'Menu główne' : 'Main navigation';
  const isMobile = useIsMobile(1120);
  const headerRef = useRef<HTMLElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number>();

  const isMainNavActive = (route: Route) =>
    !route.isExternal && pathname.split('/')[1] === route.href.split('/')[1];
  const isSubNavActive = (path: string) => pathname === path;

  useEffect(() => {
    setIsNavOpen(false);
    setOpenSubMenu(undefined);
  }, [isMobile, pathname]);

  useEffect(() => {
    if (!isMobile || !isNavOpen) return;

    document.body.classList.add('overflow-y-hidden');
    return () => document.body.classList.remove('overflow-y-hidden');
  }, [isMobile, isNavOpen]);

  useClickOutside(headerRef, () => setIsNavOpen(false));

  return (
    <header
      ref={headerRef}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setIsNavOpen(false);
          setOpenSubMenu(undefined);
        }
      }}
      className="border-brand-100 fixed inset-x-0 top-0 z-50 border-b bg-white px-6 lg:px-8"
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-2 sm:gap-3 md:h-20">
        <Link href={logoLink} className="inline-flex shrink-0 items-center">
          <Logo />
        </Link>

        {nav && (
          <nav
            aria-label={navLabel}
            className="mx-auto hidden h-full min-[1120px]:block"
          >
            <ul className="flex h-full items-center">
              {nav.map((item, index) => (
                <li
                  key={item.href}
                  onMouseEnter={() => setOpenSubMenu(index)}
                  onMouseLeave={() => setOpenSubMenu(undefined)}
                  onFocus={() => setOpenSubMenu(index)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setOpenSubMenu(undefined);
                    }
                  }}
                  className="group flex h-full items-center"
                >
                  <Link
                    href={item.href}
                    title={item.title}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    className={clsx(
                      'rounded-md px-2.5 py-2 text-sm font-medium whitespace-nowrap transition-colors',
                      isMainNavActive(item)
                        ? 'bg-brand-100 text-brand-800'
                        : 'group-hover:bg-brand-50 group-hover:text-brand-700 text-slate-700'
                    )}
                  >
                    {item.title}
                  </Link>

                  <AnimatePresence>
                    {item.routes && openSubMenu === index && (
                      <motion.div
                        variants={menuAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="bg-brand-950 absolute inset-x-0 top-full px-8 py-12 shadow-xl"
                      >
                        <div className="mx-auto max-w-screen-md">
                          <HeaderSubNav
                            items={item.routes}
                            isActive={isSubNavActive}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <Link
          href={routes.contact.root.href}
          className="bg-brand-50 text-brand-700 hover:bg-brand-100 ml-auto hidden shrink-0 rounded-md px-3 py-2 text-sm font-semibold transition-colors min-[1120px]:ml-0 sm:block"
        >
          {contact}
        </Link>

        <LanguageSwitcher className="ml-auto sm:ml-0" />

        {nav && (
          <button
            type="button"
            onClick={() => setIsNavOpen((open) => !open)}
            aria-expanded={isNavOpen}
            aria-label={
              polish
                ? isNavOpen
                  ? 'Zamknij menu'
                  : 'Otwórz menu'
                : isNavOpen
                  ? 'Close menu'
                  : 'Open menu'
            }
            className="text-brand-950 hover:bg-brand-50 flex size-10 shrink-0 items-center justify-center rounded-md min-[1120px]:hidden"
          >
            {isNavOpen ? (
              <XMarkIcon className="size-5" />
            ) : (
              <Bars3Icon className="size-5" />
            )}
          </button>
        )}
      </div>

      <AnimatePresence>
        {nav && isNavOpen && (
          <motion.nav
            aria-label={navLabel}
            variants={menuAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-brand-950 absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto px-6 pt-4 pb-8 text-white shadow-xl min-[1120px]:hidden sm:px-10 md:max-h-[calc(100dvh-5rem)]"
          >
            <ul className="mx-auto max-w-screen-md divide-y divide-white/15">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    title={item.title}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    className={clsx(
                      'flex min-h-14 items-center justify-between gap-4 py-2 text-base font-semibold',
                      isMainNavActive(item) && 'text-accent-300'
                    )}
                  >
                    {item.title}
                    {isMainNavActive(item) && (
                      <ChevronRightIcon className="size-5" />
                    )}
                  </Link>

                  {item.routes && (
                    <HeaderSubNav
                      items={item.routes}
                      isActive={isSubNavActive}
                    />
                  )}
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-6 max-w-screen-md">
              <Button href={routes.contact.root.href} variant="accent">
                {contact}
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
