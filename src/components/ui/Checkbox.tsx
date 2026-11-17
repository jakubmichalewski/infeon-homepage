'use client';

import clsx from 'clsx';
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactNode
} from 'react';

import ErrorMessage from './ErrorMessage';

type Props = {
  label?: ReactNode;
  errorMessage?: string;
};
const Input: ForwardRefRenderFunction<
  HTMLInputElement,
  Props & InputHTMLAttributes<HTMLInputElement>
> = ({ className, label, errorMessage, ...props }, ref) => {
  return (
    <>
      <div className="flex space-x-3">
        <input
          {...props}
          id={props.name}
          ref={ref}
          type="checkbox"
          className={clsx(
            'h-6 w-6 flex-shrink-0 rounded border px-3 even:mt-2 checked:text-brand-600 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-200',
            errorMessage ? 'border-red-400' : 'border-slate-300',
            className
          )}
        />

        <p className="mt-0.5 text-sm">{label}</p>
      </div>
      <ErrorMessage className="mt-2">{errorMessage}</ErrorMessage>
    </>
  );
};

export default forwardRef(Input);
