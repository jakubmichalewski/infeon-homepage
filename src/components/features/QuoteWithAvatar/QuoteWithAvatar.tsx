import clsx from 'clsx';
import React, { cloneElement, isValidElement, ReactElement } from 'react';

import Quote from '@components/features/Quote/Quote';

type Props = {
  quote: string;
  author: string;
  color: 'brand' | 'dark';
  align: 'left' | 'right';
  image: ReactElement;
};

function QuoteWithAvatar(props: Props) {
  return (
    <div className="mx-auto max-w-screen-xl pt-12">
      <div
        className={clsx(
          'w-full rounded-lg max-md:relative md:flex',
          props.align === 'left' && 'md:flex-row-reverse',
          props.color === 'brand' ? 'bg-brand-700' : 'bg-brand-950'
        )}
      >
        <div className="p-10 md:w-2/3 md:px-16 md:py-20">
          <Quote
            quote={props.quote}
            author={props.author}
            className="text-white"
          />
        </div>
        <div className="md:relative md:w-1/3">
          <div className="absolute right-6 bottom-0 justify-center md:inset-x-0 md:w-full">
            {isValidElement<{ className?: string }>(props.image)
              ? cloneElement(props.image, {
                  className: clsx(
                    props.image.props.className,
                    'w-fit object-contain max-md:h-28 md:w-72',
                    {
                      'ml-10 lg:ml-auto': props.align === 'left',
                      'md:-ml-10': props.align === 'right'
                    }
                  )
                })
              : props.image}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteWithAvatar;
