'use client';

import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';
import { FC } from 'react';

import Heading from '@components/ui/Heading';
import LinkWithChevron from '@components/ui/LinkWithChevron';

type Props = {
  data: {
    title: string;
    description: string;
    href?: string;
  }[];
  columns?: number;
};

const NumberedHighlightsList: FC<Props> = (props) => {
  const listContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const listItem: Variants = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, delayChildren: 0.4, ease: 'easeOut' }
    }
  };

  const listItemNumber: Variants = {
    hidden: { opacity: 0, scale: 4 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.2 } }
  };

  const listItemLine: Variants = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };

  return (
    <motion.ul
      variants={listContainer}
      initial="hidden"
      whileInView="show"
      className={clsx('grid gap-8 lg:gap-16', {
        'sm:grid-cols-2': props.columns == 2,
        'sm:grid-cols-2 md:grid-cols-3': props.columns == 3,
        'sm:grid-cols-2 xl:grid-cols-4': props.columns == 4
      })}
    >
      {props.data.map((item, index) => (
        <motion.li className="flex" key={index} variants={listItem}>
          <div className="flex shrink flex-col items-center">
            <motion.div
              variants={listItemNumber}
              className="font-sans font-medium text-brand-700"
            >
              {(index + 1).toLocaleString('en-GB', {
                minimumIntegerDigits: 2,
                useGrouping: false
              })}
            </motion.div>
            <motion.div
              variants={listItemLine}
              className="mt-2 h-6 w-0.5 rounded-full bg-brand-500"
            />
          </div>
          <div className="ml-4 grow">
            <Heading level={4}>{item.title}</Heading>

            <p key={index} className="mt-2 text-sm/normal">
              {item.description}
            </p>
            {item.href && (
              <div className="mt-4">
                <LinkWithChevron
                  href={item.href}
                  title={item.title}
                ></LinkWithChevron>
              </div>
            )}
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NumberedHighlightsList;
