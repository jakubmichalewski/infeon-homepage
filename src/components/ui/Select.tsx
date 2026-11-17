'use client';

import clsx from 'clsx';
import {
  forwardRef,
  ForwardRefRenderFunction,
  SelectHTMLAttributes
} from 'react';

import ErrorMessage from '@components/ui/ErrorMessage';
import Label from '@components/ui/Label';

type Props = {
  label?: string;
  errorMessage?: string;
  options: { label: string; value: string | number }[];
  isSelected?: boolean;
};
const Select: ForwardRefRenderFunction<
  HTMLSelectElement,
  Props & SelectHTMLAttributes<HTMLSelectElement>
> = ({ className, label, errorMessage, isSelected, ...props }, ref) => {
  return (
    <>
      <Label
        htmlFor={props.name}
        isError={Boolean(errorMessage)}
        isRequired={props.required}
      >
        {label}
      </Label>
      <select
        {...props}
        ref={ref}
        id={props.name}
        name={props.name}
        className={clsx(
          'h-12 w-full rounded border px-3 even:mt-2 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-200',
          errorMessage ? 'border-red-400' : 'border-slate-300',
          className
        )}
      >
        {!isSelected && <option value={''}>-- Select --</option>}
        {props.options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <ErrorMessage className="mt-2">{errorMessage}</ErrorMessage>
    </>
  );
};

export default forwardRef(Select);
