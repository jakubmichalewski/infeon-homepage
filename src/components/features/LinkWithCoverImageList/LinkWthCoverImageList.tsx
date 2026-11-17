'use client';

import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

import Link from '@/i18n/Link';
import Heading from '@components/ui/Heading';

type Props = {
  data: {
    title: string;
    description?: string;
    href: string;
    image: string;
  }[];
  columns?: number;
};

const LinkWthCoverImageList: FC<Props> = (props) => {
  const listContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const listItem: Variants = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delayChildren: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.ul
      variants={listContainer}
      initial="hidden"
      whileInView="show"
      className={clsx('grid gap-8 lg:gap-16', {
        'sm:grid-cols-2': props.columns == 2,
        'sm:grid-cols-2 md:grid-cols-3': props.columns == 3,
        'sm:grid-cols-2 lg:grid-cols-4': props.columns == 4
      })}
    >
      {props.data.map((item, index) => (
        <motion.li variants={listItem} key={index}>
          <Link
            passHref
            href={item.href}
            title={item.title}
            className="relative block h-full overflow-hidden lg:transition-transform lg:hover:z-10 lg:hover:scale-105"
          >
            <div className="flex h-full flex-col">
              <Image
                src={item.image}
                className="aspect-[2/1] rounded-lg object-cover"
                alt={item.title}
                width={800}
                height={600}
              />
              <div className="mt-5 flex flex-1 flex-col">
                <Heading level={4}>{item.title}</Heading>

                {item.description && (
                  <p className="mt-2 text-sm">{item.description}</p>
                )}
              </div>
            </div>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default LinkWthCoverImageList;
