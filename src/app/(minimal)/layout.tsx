import React, { ReactNode } from 'react';

import '@styles/globals.css';

import LanguageSwitcher from '@/i18n/LanguageSwitcher';
import Link from '@/i18n/Link';
import Footer from '@components/features/Footer/Footer';
import Logo from '@components/ui/Logo';

export default function MinimalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] overflow-clip">
      <header className="border-brand-100 absolute inset-x-0 top-0 z-50 border-b bg-white px-6 lg:px-8">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between md:h-20">
          <Link href="/" className="inline-flex shrink-0 items-center">
            <Logo />
          </Link>
          <LanguageSwitcher />
        </div>
      </header>
      <main className="min-h-screen pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
}
