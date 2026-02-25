export interface IGetNavReturn {
  text: string;
  link: string;
  theme: TThemeTopics;
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

export interface IBuildTopics {
  path: string;
  title: string;
  topics: ISidebarTopics[];
  theme: TThemeTopics;
}

export type TThemeTopics =
  | "default"
  | "react"
  | "node"
  | "js"
  | "vue"
  | "html"
  | "primary"
  | "secondary"
  | "accent"
  | "actual"
  | "tech"
  | "theory"
  | null;
