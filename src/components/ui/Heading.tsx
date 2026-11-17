import clsx from 'clsx';
import { createElement, HTMLAttributes } from 'react';

type Props = {
  level: number;
};
export default function Heading({
  level,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement> & Props) {
  const tag = `h${level}`;

  const levels: Record<number, string> = {
    1: 'text-3xl/normal sm:text-4xl/normal xl:text-5xl/normal font-medium',
    2: 'text-2xl/normal sm:text-3xl/normal font-medium',
    3: 'text-xl/normal sm:text-2xl/normal font-medium',
    4: 'text-base/normal font-medium'
  };

  if (level < 1 || level > 6) {
    console.warn('Invalid heading level provided:', level);
    return null;
  }

  return createElement(tag, {
    className: clsx(className, 'font-sans', levels[level]),
    ...props
  });
}
