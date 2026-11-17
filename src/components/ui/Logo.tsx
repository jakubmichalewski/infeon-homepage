import clsx from 'clsx';
import Image from 'next/image';

type Props = {
  className?: string;
  isIcon?: boolean;
};

export default function Logo({ className, isIcon }: Props) {
  return (
    <span
      className={clsx(
        'flex w-fit shrink-0 items-center gap-2.5 max-[360px]:gap-2',
        className
      )}
      role="img"
      aria-label="Infeon Tech"
    >
      <Image
        src="/images/brand/infeon-mark.svg"
        height={36}
        width={36}
        alt=""
        className="size-9 shrink-0 max-[360px]:size-8"
        unoptimized
      />
      {!isIcon && (
        <span
          aria-hidden="true"
          className="text-brand-950 flex items-baseline gap-1.5 font-sans whitespace-nowrap max-[360px]:gap-1"
        >
          <span className="text-[1.375rem]/none font-bold tracking-[-0.055em] max-[360px]:text-[1.1875rem]/none">
            Infeon
          </span>
          <span className="text-brand-700 text-[0.6875rem]/none font-bold tracking-[0.1em] uppercase">
            Tech
          </span>
        </span>
      )}
    </span>
  );
}
