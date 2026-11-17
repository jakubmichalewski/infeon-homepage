import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export default function Label({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  if (!props.children) return null;

  return (
    <p className={clsx('text-sm text-red-500', className)} {...props}>
      {props.children}
    </p>
  );
}
