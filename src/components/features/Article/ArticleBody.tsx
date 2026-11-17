import clsx from 'clsx';
import { createElement, FC, Fragment, useEffect, useMemo, useRef } from 'react';

import BulletList from '@components/ui/BulletList';
import useStringHelpers from '@hooks/useStringHelpers';
import { ArticleList, ArticleSection } from '@interfaces/articleSection';

type Props = {
  data: ArticleSection[];
  setActiveSection?: (active: number) => void;
};

const ArticleBody: FC<Props> = ({ setActiveSection, ...props }) => {
  const { getAnchor } = useStringHelpers();
  const sectionsRef = useRef<HTMLSpanElement[]>([]);

  const headingStyles = useMemo<Record<number, string>>(
    () => ({
      2: 'text-2xl md:text-2xl font-bold',
      3: 'text-lg font-semibold'
    }),
    []
  );

  useEffect(() => {
    const elements = sectionsRef.current;

    const handleObserved: IntersectionObserverCallback = (elements) => {
      const intersectingSections: number[] = [];

      elements.map((element) => {
        if (element.isIntersecting) {
          intersectingSections.push(
            props.data.findIndex(
              (section) =>
                getAnchor(section.heading.content, false) === element.target.id
            )
          );
        }

        if (setActiveSection && intersectingSections.length > 0) {
          setActiveSection(intersectingSections[0]);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserved, {
      rootMargin: '-128px 0px -70% 0px',
      threshold: 1
    });

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [getAnchor, props.data, setActiveSection]);

  return (
    <div className="space-y-8">
      {props.data.map((section, headingIndex) => (
        <div key={headingIndex} className="text-sm lg:text-base">
          <header>
            {createElement(
              `h${section.heading.level}`,
              {
                className: clsx(headingStyles[section.heading.level])
              },
              <span
                id={getAnchor(section.heading.content, false)}
                ref={(ref) => {
                  if (ref) {
                    sectionsRef.current[headingIndex] = ref;
                  }
                }}
                className="scroll-mt-36"
              >
                {section.heading.content}
              </span>
            )}
          </header>

          {(section.paragraphs as string[] | ArticleList[]).map(
            (paragraph, paragraphIndex) => (
              <Fragment key={paragraphIndex}>
                {typeof paragraph == 'string' && (
                  <p className="mt-4 text-slate-600">{paragraph}</p>
                )}

                {typeof paragraph == 'object' && paragraph.list && (
                  <div className="my-4">
                    <BulletList data={paragraph.list} />
                  </div>
                )}
              </Fragment>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticleBody;
