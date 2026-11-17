'use client';

import { AnimatePresence, motion, Variants } from 'framer-motion';
import { FC } from 'react';

import { useLocale } from '@/i18n/LocaleProvider';
import Button from '@components/ui/Button';
import { routes } from '@routes/routes';


type Props = {
  data: {
    name: string;
    description: string;
    highlights: {
      label: string;
      value: string;
    }[];
  };
};

const CompanyInfo: FC<Props> = (props) => {
  const locale = useLocale();
  const companyInfo: Variants = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delayChildren: 0.2,
        ease: 'easeOut'
      }
    }
  };

  const companyInfoList: Variants = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={companyInfo}
        initial="hidden"
        whileInView="show"
        className="relative"
      >
        <>
          <h2 className="font-sans text-lg font-bold">{props.data.name}</h2>
          <p className="mt-2 space-y-3 text-sm text-slate-600">
            {props.data.description}
          </p>
          <motion.ul
            variants={companyInfoList}
            className="mt-10 space-y-4 font-sans"
          >
            {props.data.highlights.map((item, index) => (
              <li key={index}>
                <p className="text-xs tracking-wide uppercase">{item.label}</p>
                <p className="mt-2 text-xl text-brand-700">{item.value}</p>
              </li>
            ))}
          </motion.ul>
          <div className="mt-10 w-fit">
            <Button href={routes.contact.root.href}>
              {locale === 'pl'
                ? 'Opowiedz nam o swoim projekcie'
                : 'Tell us your story'}
            </Button>
          </div>
        </>
      </motion.div>
    </AnimatePresence>
  );
};

export default CompanyInfo;
