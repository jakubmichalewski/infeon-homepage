'use client';

import { motion, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

type Props = {
  data: {
    name: string;
    position: string;
    bio: string;
    image: string | StaticImageData;
  }[];
};

const TeamLeaders: FC<Props> = (props) => {
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
      className="grid gap-12 sm:grid-cols-2 sm:gap-16 lg:gap-4"
    >
      {props.data.map((item, index) => (
        <motion.li variants={listItem} key={index} className="text-center">
          <div className="relative mx-auto h-96 shrink-0 transform transition-transform duration-500 hover:scale-110 lg:h-[512px]">
            <Image
              src={item.image}
              alt={item.name}
              className="h-full w-full object-contain"
              fill
              quality={95}
              priority
            />
            <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-brand-950 to-transparent"></div>
          </div>
          <div className="relative z-10 mx-auto -mt-24 max-w-md">
            <h2 className="text-2xl font-bold text-white">{item.name}</h2>
            <h3 className="mt-1 text-accent-300">{item.position}</h3>
            <p className="mt-5 w-full text-brand-100/80">{item.bio}</p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default TeamLeaders;
