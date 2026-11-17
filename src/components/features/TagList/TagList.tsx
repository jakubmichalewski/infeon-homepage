import { FC } from 'react';

type Props = {
  data: string[];
};

const TagList: FC<Props> = (props) => {
  return (
    <ul className="-m-1 flex flex-wrap font-bold">
      {props.data.map((item, index) => (
        <li
          key={index}
          className="m-1 rounded border-b-2 border-brand-200 bg-brand-50 px-3 py-2"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
