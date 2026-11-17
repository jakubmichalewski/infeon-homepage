import { ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';

import Link from '@/i18n/Link';
import useClickOutside from '@hooks/useClickOutside';
import useIsMobile from '@hooks/useIsMobile';
import useStringHelpers from '@hooks/useStringHelpers';
import { ArticleSection } from '@interfaces/articleSection';

type Props = {
  sections: ArticleSection[];
  activeSection: number;
  setActiveSection: (active: number) => void;
};

const ArticleToC: FC<Props> = (props) => {
  const [indicator, setIndicator] = useState<{ y: number; height: number }>();
  const [isSticky, setIsSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { getAnchor } = useStringHelpers();

  const isMobile = useIsMobile(1024);

  const anchorsRef = useRef<HTMLElement[]>([]);
  const panelRef = useRef<HTMLElement>(null);

  const handleNavClick = () => {
    setIsNavOpen(false);
  };

  useClickOutside(panelRef, () => setIsNavOpen(false));

  useEffect(() => {
    setIsNavOpen(false);
  }, [isMobile]);

  useEffect(() => {
    const activeItem = anchorsRef.current[props.activeSection];

    const handler = setTimeout(() => {
      if (activeItem && !isMobile) {
        setIndicator({
          y: activeItem.offsetTop,
          height: activeItem.offsetHeight
        });
      }
    }, 250);

    return () => {
      clearTimeout(handler);
    };
  }, [isMobile, props.activeSection]);

  useEffect(() => {
    const element = panelRef.current;

    const handleSticky: IntersectionObserverCallback = (elements) => {
      elements.forEach((element) => {
        if (!element.isIntersecting) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleSticky, {
      rootMargin: '-65px 0px 100% 0px',
      threshold: 1
    });

    element !== null && observer.observe(element);

    return () => {
      element !== null && observer.unobserve(element);
    };
  }, []);

  return (
    <aside
      className={clsx(
        'sticky top-16 z-40 w-full text-sm lg:top-36 lg:order-last lg:w-72',
        { 'bg-white shadow lg:shadow-none': isNavOpen }
      )}
      ref={panelRef}
    >
      <button
        onClick={() => setIsNavOpen((prev) => !prev)}
        className={clsx(
          'z-10 flex w-full items-center p-3 transition md:p-5 lg:hidden lg:shadow-none',
          isSticky
            ? 'rounded-b-lg bg-brand-950 text-white'
            : 'rounded-lg bg-brand-50'
        )}
      >
        <span className="w-full pr-4 text-left text-sm font-semibold">
          {props.sections[props.activeSection].heading.content}
        </span>
        <ChevronDownIcon className="h-5 w-5 shrink-0" />
      </button>

      {(isNavOpen || !isMobile) && (
        <nav className="relative flex w-full items-center rounded-b-lg bg-white p-5 lg:bg-transparent lg:p-0">
          {indicator && (
            <motion.div
              initial={{
                y: indicator?.y,
                height: indicator?.height
              }}
              animate={{
                y: indicator?.y,
                height: indicator?.height
              }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 -left-1 hidden w-2 rounded-full bg-brand-500 lg:block"
            />
          )}
          <div className="space-y-5 lg:border-l lg:border-l-slate-200 lg:pl-8">
            {props.sections.map((item, index) => (
              <Link
                href={getAnchor(item.heading.content)}
                key={index}
                title={getAnchor(item.heading.content, false)}
                onClick={handleNavClick}
                ref={(el) => {
                  if (el) {
                    anchorsRef.current[index] = el;
                  }
                }}
                className={clsx('block', {
                  'font-semibold text-brand-700': props.activeSection === index // use strict equality
                })}
                scroll={false}
              >
                {item.heading.content}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </aside>
  );
};

export default ArticleToC;
