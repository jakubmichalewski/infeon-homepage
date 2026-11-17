import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

const Section: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <section
      {...props}
      className={clsx('px-6 lg:px-8', props.className)}
      style={props.style}
    >
      {props.children}
    </section>
  );
};

export default Section;
