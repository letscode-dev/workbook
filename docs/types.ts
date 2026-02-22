export interface IGetNavReturn {
  text: string;
  link: string;
  theme: string;
}

export type TSidebarTopicsItem = [path: string, title: string];

export interface ISidebarTopics {
  title: string;
  children: TSidebarTopicsItem[];
}

export interface IHeaderMenuNav {
  text: string;
  children: IGetNavReturn[];
}
