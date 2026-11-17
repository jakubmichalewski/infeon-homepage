import clsx from 'clsx';
import React from 'react';

import Link from '@/i18n/Link';

export default function HeaderNavLists(props: {
  items: {
    title: string;
    routes?: { title: string; href: string }[];
  }[];
  isActive: (path: string) => boolean;
}) {
  return (
    <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-8 max-[1120px]:mt-2 max-[1120px]:pb-8 md:grid-cols-3">
      {props.items?.map((group) => (
        <li key={group.title} className="text-white">
          <p className="text-brand-200 text-xs font-semibold sm:text-sm">
            {group.title}
          </p>
          <ul className="mx-auto mt-3 max-w-screen-lg space-y-2 leading-snug">
            {group.routes?.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  title={item.title}
                  className={clsx('hover:text-accent-300 text-xs sm:text-sm', {
                    'text-accent-300 font-bold': props.isActive(item.href)
                  })}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
