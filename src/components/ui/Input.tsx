'use client';

import clsx from 'clsx';
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react';

import ErrorMessage from '@components/ui/ErrorMessage';
import Label from '@components/ui/Label';

type Props = {
  label?: string;
  errorMessage?: string;
};
const Input: ForwardRefRenderFunction<
  HTMLInputElement,
  Props & InputHTMLAttributes<HTMLInputElement>
> = ({ className, label, errorMessage, ...props }, ref) => {
  return (
    <>
      <Label
        htmlFor={props.name}
        isError={Boolean(errorMessage)}
        isRequired={props.required}
        className={clsx({ 'opacity-60': props.disabled })}
      >
        {label}
      </Label>
      <input
        {...props}
        id={props.name}
        ref={ref}
        className={clsx(
          'h-12 w-full rounded border px-3 even:mt-2 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-200 disabled:opacity-60',
          errorMessage ? 'border-red-400' : 'border-slate-300',
          className
        )}
      />
      <ErrorMessage className="mt-2">{errorMessage}</ErrorMessage>
    </>
  );
};

export default forwardRef(Input);
