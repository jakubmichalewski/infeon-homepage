import clsx from 'clsx';
import { LabelHTMLAttributes } from 'react';

type Props = {
  isError?: boolean;
  isRequired?: boolean;
};
export default function Label({
  isError,
  isRequired,
  className,
  ...props
}: Props & LabelHTMLAttributes<HTMLLabelElement>) {
  if (!props.children) return null;

  return (
    <label
      {...props}
      className={clsx('block text-sm font-bold', className, {
        'text-red-500': isError
      })}
    >
      {props.children} {isRequired && '*'}
    </label>
  );
}
