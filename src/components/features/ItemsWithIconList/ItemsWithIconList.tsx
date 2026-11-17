import clsx from 'clsx';
import React from 'react';

import Heading from '@components/ui/Heading';
import Icons from '@components/ui/Icons';
import LinkWithChevron from '@components/ui/LinkWithChevron';

type Props = {
  data: {
    title: string;
    description?: string;
    href?: string;
    icon?: string;
  }[];
  columns?: number;
};

export default function ItemsWithIconList(props: Props) {
  return (
    <ul
      className={clsx('grid gap-8 lg:gap-16', {
        'sm:grid-cols-2': props.columns == 2,
        'sm:grid-cols-2 md:grid-cols-3': props.columns == 3,
        'sm:grid-cols-2 lg:grid-cols-4': props.columns == 4
      })}
    >
      {props.data.map((item) => (
        <li key={item.title}>
          {item.icon && (
            <div className="flex h-16 w-16 items-center justify-center rounded bg-brand-50 shadow-lg shadow-brand-100">
              <Icons
                icon={item.icon}
                className="m-auto h-8 w-8 text-brand-700"
              ></Icons>
            </div>
          )}

          <Heading level={4} className="mt-8">
            {item.title}
          </Heading>

          {item.description && (
            <p className="mt-4 text-sm/normal">{item.description}</p>
          )}

          {item.href && (
            <div className="mt-4">
              <LinkWithChevron href={item.href} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
