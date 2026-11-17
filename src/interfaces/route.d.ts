export type Route = {
  href: string;
  title: string;
  isExternal?: boolean;
  routes?: Route[];
};
