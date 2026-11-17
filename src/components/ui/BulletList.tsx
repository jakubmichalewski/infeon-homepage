import clsx from 'clsx';
import { HTMLAttributes } from 'react';

type Props = {
  data: (string | string[])[];
};

export default function BulletList({
  className,
  ...props
}: HTMLAttributes<HTMLUListElement> & Props) {
  return (
    <ul className={clsx('grid gap-2', className)}>
      {props.data.map((item, itemIndex) => (
        <li key={itemIndex}>
          {typeof item == 'string' && (
            <div className="relative overflow-clip rounded-sm bg-brand-50 py-2 pl-4 pr-4">
              <div className="absolute left-0 top-0 h-full w-1 shrink-0 bg-brand-500" />
              <p>{item}</p>
            </div>
          )}

          {typeof item != 'string' && (
            <ul className="ml-4 grid gap-2">
              {item.map((subItem, subItemIndex) => (
                <li key={subItemIndex}>
                  <div className="relative overflow-clip rounded-sm bg-brand-50 py-2 pl-4 pr-4">
                    <div className="absolute left-0 top-0 h-full w-1 shrink-0 rounded bg-brand-200" />
                    <p>{subItem}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
