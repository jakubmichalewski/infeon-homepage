import clsx from 'clsx';
import { FC, SVGAttributes } from 'react';

const Triangle: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className={clsx('pointer-events-none', props.className)}
      >
        <path d="M0,0H200V200Z" />
      </svg>
    </>
  );
};

export default Triangle;
