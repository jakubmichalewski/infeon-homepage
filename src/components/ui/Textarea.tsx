'use client';

import clsx from 'clsx';
import {
  forwardRef,
  ForwardRefRenderFunction,
  TextareaHTMLAttributes
} from 'react';

import ErrorMessage from '@components/ui/ErrorMessage';
import Label from '@components/ui/Label';

type Props = {
  label?: string;
  errorMessage?: string;
};
const TextArea: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  Props & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ className, label, errorMessage, ...props }, ref) => {
  return (
    <>
      <Label
        htmlFor={props.name}
        isError={Boolean(errorMessage)}
        isRequired={props.required}
      >
        {label}
      </Label>
      <textarea
        {...props}
        id={props.name}
        ref={ref}
        className={clsx(
          'w-full rounded border px-3 even:mt-2 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-200',
          errorMessage ? 'border-red-400' : 'border-slate-300',
          className
        )}
      />
      <ErrorMessage className="mt-2">{errorMessage}</ErrorMessage>
    </>
  );
};

export default forwardRef(TextArea);
