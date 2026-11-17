import clsx from 'clsx';
import { FC, SVGAttributes } from 'react';

const Spinner: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('fill-current stroke-current', props.className)}
      strokeWidth={props.strokeWidth}
    >
      <g fill="none">
        <g transform="translate(1 1)">
          <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
};

export default Spinner;
