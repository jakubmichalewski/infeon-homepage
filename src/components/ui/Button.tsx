'use client';

import clsx from 'clsx';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEvent,
  PropsWithChildren,
  useEffect,
  useState
} from 'react';

import Link from '@/i18n/Link';
import Spinner from '@components/ui/Spinner';
import isPromise from '@helpers/isPromise';

type Props = LinkProps | ButtonProps;

type Variant = 'primary' | 'secondary' | 'bordered' | 'accent';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  isSubmitting?: boolean;
};

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
};

export default function Button(props: PropsWithChildren<Props>) {
  switch (true) {
    case 'href' in props:
      return <L {...(props as LinkProps)}>{props.children}</L>;
    default:
      return <B {...(props as ButtonProps)}>{props.children}</B>;
  }
}

const B = ({ isSubmitting, variant, ...props }: ButtonProps) => {
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    return () => {
      setPending(false);
    };
  }, []);

  function _onClick(evt: MouseEvent<HTMLButtonElement>) {
    if (props.onClick) {
      const value = props.onClick(evt);

      if (isPromise(value)) {
        setPending(true);

        Promise.allSettled([value]).finally(() => setPending(false));
      }
    }
  }

  return (
    <button
      {...props}
      onClick={_onClick}
      disabled={props.disabled || isPending || isSubmitting}
      className={clsx(buttonClasses, variants[variant ?? 'primary'])}
    >
      <span
        className={clsx({
          invisible: isPending || isSubmitting
        })}
      >
        {props.children}
      </span>

      {(isPending || isSubmitting) && (
        <Spinner className="absolute h-5 w-5 text-current" strokeWidth={2} />
      )}
    </button>
  );
};

function L({ variant, ...props }: LinkProps) {
  if (!props.href) return null;

  return (
    <Link
      {...props}
      className={clsx(buttonClasses, variants[variant ?? 'primary'])}
      href={props.href}
      passHref={true}
    >
      <span>{props.children}</span>
    </Link>
  );
}

const buttonClasses =
  'flex h-12 w-full items-center justify-center rounded-lg px-5 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 focus-visible:outline-brand-600',
  secondary:
    'bg-brand-950 text-white hover:bg-brand-800 focus-visible:outline-brand-600',
  bordered:
    'border border-brand-200 text-brand-700 hover:bg-brand-50 hover:text-brand-900 focus-visible:outline-brand-600',
  accent:
    'bg-accent-300 text-brand-950 hover:bg-accent-300/90 focus-visible:outline-accent-300'
};
