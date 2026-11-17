import { ArticleSection } from '@interfaces/articleSection';

export type CaseStudy = {
  slug: string;
  info: {
    name: string;
    description: string[];
    techStack: { name: string; image: string; link: string }[];
  };
  article: { sections: ArticleSection[] };
};
