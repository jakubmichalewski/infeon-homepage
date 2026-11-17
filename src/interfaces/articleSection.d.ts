export type ArticleSection = {
  heading: {
    content: string;
    level: number;
  };
  paragraphs: string[] | Object<ArticleList>;
};

export type ArticleList = { list?: string[] };
