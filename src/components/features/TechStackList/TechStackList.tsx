import { FC } from 'react';

type Props = {
  data: { name: string; route: string }[];
};

const TechStackList: FC<Props> = (props) => {
  return (
    <ul className="grid grid-cols-2 gap-1 md:grid-cols-3">
      {props.data.map((item, index) => (
        <li
          key={index}
          className="rounded bg-brand-50 transition duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-brand-700 hover:shadow-xl"
        >
          <div className="relative flex h-full transform items-center justify-center px-3 py-8">
            <p className="absolute left-2 top-2 block text-xs text-slate-400">
              {(index + 1).toLocaleString('en-GB', {
                minimumIntegerDigits: 2,
                useGrouping: false
              })}
            </p>
            <h4 className="text-center font-sans text-sm font-medium">
              {item.name}
            </h4>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TechStackList;
