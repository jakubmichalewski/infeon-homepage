'use client';

import { FC, useState } from 'react';

import ArticleBody from '@components/features/Article/ArticleBody';
import ArticleToC from '@components/features/Article/ArticleToC';
import { ArticleSection } from '@interfaces/articleSection';

type Props = {
  data: ArticleSection[];
};

const Article: FC<Props> = (props) => {
  const [activeSection, setActiveSection] = useState<number>(0);

  return (
    <div className="mx-auto grid max-w-screen-md place-items-start gap-12 lg:max-w-screen-lg lg:auto-cols-auto lg:grid-flow-col lg:gap-20">
      <ArticleToC
        sections={props.data}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <ArticleBody data={props.data} setActiveSection={setActiveSection} />
    </div>
  );
};

export default Article;
