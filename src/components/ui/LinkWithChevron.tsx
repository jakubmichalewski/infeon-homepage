'use client';

import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import type { LinkProps } from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';

import Link from '@/i18n/Link';
import { useLocale } from '@/i18n/LocaleProvider';

export default function LinkWithChevron({
  children,
  className,
  onDark = false,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & { onDark?: boolean }) {
  const polish = useLocale() === 'pl';

  return (
    <Link
      {...props}
      className={clsx(
        'group flex items-center gap-2 text-sm',
        onDark
          ? 'text-brand-200 hover:text-white'
          : 'text-brand-700 hover:text-brand-900',
        className
      )}
    >
      <span className="font-bold underline underline-offset-2">
        {children ?? (polish ? 'Dowiedz się więcej' : 'Learn more')}
      </span>
      <ChevronDoubleRightIcon className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-2" />
    </Link>
  );
}
