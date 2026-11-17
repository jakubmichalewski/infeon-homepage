'use client';

import clsx from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { PropsWithChildren, ReactNode } from 'react';

import Section from '@components/ui/Section';

type Props = {
  image: string;
  imageAlignment?: 'left' | 'center' | 'right';
  contentAlignment?: 'left' | 'center';
  cta?: ReactNode;
};

export default function Hero(props: PropsWithChildren<Props>) {
  const { scrollY } = useScroll();
  const alignLeft = props.contentAlignment === 'left';

  const animateImage = useTransform(scrollY, [0, -1], [0, 0.1], {
    clamp: false
  });

  const animateContent = useTransform(scrollY, [0, -1], [0, -0.1], {
    clamp: false
  });

  const imageAlignments: Record<'left' | 'center' | 'right', string> = {
    left: 'object-left',
    center: 'object-center',
    right: 'object-right'
  };

  return (
    <Section className="bg-brand-950 relative flex min-h-[500px] items-center overflow-hidden lg:min-h-[580px] xl:min-h-[680px]">
      <motion.header
        style={{ translateY: animateContent }}
        className="relative z-10 mx-auto w-full max-w-screen-xl min-w-0 py-20"
      >
        <div
          className={clsx(
            alignLeft
              ? 'max-w-2xl'
              : 'mx-auto max-w-screen-md text-center xl:max-w-screen-lg'
          )}
        >
          {props.children}
        </div>
        {props.cta && (
          <nav className={clsx('mt-9 w-fit', !alignLeft && 'mx-auto')}>
            {props.cta}
          </nav>
        )}
      </motion.header>

      <motion.div
        style={{ translateY: animateImage }}
        className="absolute top-0 left-0 h-[110%] w-full object-cover"
      >
        <Image
          src={props.image}
          alt=""
          width={1440}
          height={720}
          sizes="100vw"
          className={clsx(
            'h-full w-full object-cover',
            props.imageAlignment && imageAlignments[props.imageAlignment]
          )}
          priority
        />
        <div
          className={clsx(
            'absolute inset-0',
            alignLeft
              ? 'from-brand-950/75 to-brand-950 sm:from-brand-950 sm:via-brand-950/85 sm:to-brand-950/25 bg-linear-to-b sm:bg-linear-to-r'
              : 'bg-brand-950/65'
          )}
        />
      </motion.div>
    </Section>
  );
}
