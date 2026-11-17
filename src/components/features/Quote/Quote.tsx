import clsx from 'clsx';
import { BlockquoteHTMLAttributes, ReactNode } from 'react';

type Props = {
  quote: string;
  author: string;
  company?: string;
  cta?: ReactNode;
};

export default function Quote({
  quote,
  author,
  company,
  cta,
  className,
  ...props
}: BlockquoteHTMLAttributes<HTMLQuoteElement> & Props) {
  return (
    <blockquote {...props} className={clsx('mx-auto flex gap-4', className)}>
      <div className="shrink-0 font-sans text-5xl">&quot;</div>
      <div>
        <p className="font-sans text-xl font-medium md:text-2xl md:leading-snug xl:text-3xl xl:leading-snug">
          {quote}
        </p>

        <footer className="mt-8 flex divide-x divide-slate-200 text-sm">
          <div className="flex h-10 items-center">
            <p>
              {author}
              {company && `, ${company}`}
            </p>
          </div>

          {cta && <div>{cta}</div>}
        </footer>
      </div>
    </blockquote>
  );
}
