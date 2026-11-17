'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion, Variants } from 'framer-motion';
import { FC } from 'react';

type Props = {
  data: {
    name: string;
    position: string;
    bio: string;
    gender: string;
  }[];
};

const TeamSpecialists: FC<Props> = (props) => {
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
      transition: { duration: 0.4, delayChildren: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <motion.ul
      variants={listContainer}
      initial="hidden"
      whileInView="show"
      className="grid gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-14"
    >
      {props.data.map((item, index) => (
        <motion.li
          variants={listItem}
          key={index}
          className="group flex space-x-6"
        >
          <div>
            <ArrowRightIcon className="h-6 w-6 text-brand-700" />
          </div>
          <div>
            <h2 className="text-lg font-bold">{item.name}</h2>
            <h3 className="mt-0.5 text-sm font-bold">{item.position}</h3>
            <p className="mt-4 w-full text-slate-600">{item.bio}</p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default TeamSpecialists;
