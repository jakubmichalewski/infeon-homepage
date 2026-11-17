'use client';

import { AnimatePresence, motion, Variants } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

import Logo from '@components/ui/Logo';

type Props = {
  title: string;
  description: string;
};

const SystemMessage: FC<PropsWithChildren<Props>> = (props) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const items: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delayChildren: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="mx-auto grid h-full max-w-md place-content-center gap-12 p-10"
      >
        <motion.div variants={items} className="mx-auto">
          <Logo />
        </motion.div>
        <motion.div variants={items} className="text-center">
          <h1 className="text-xl font-bold">{props.title}</h1>
          <p className="mt-2 text-sm text-slate-600">{props.description}</p>

          {props.children && (
            <div className="mx-auto mt-5 max-w-max">{props.children}</div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SystemMessage;
